import micromatch from 'micromatch';
import path from 'path';
import fs from 'fs';

function composeQuery (query = {}) {
  const filter = {};
  const options = {};

  Object.keys(query).forEach((key) => {
    if (key.startsWith('___')) {
      options[key.replace('___', '')] = query[key];
    } else {
      filter[key] = query[key];
    }
  });

  return {filter, options};
}

function folder_contents (folder_path = '') {
  // eslint-disable-next-line no-sync
  const folder_content = fs.readdirSync(path.resolve(folder_path));
  const folder_paths = folder_content.map((seeder) => {
    return path.resolve(folder_path, seeder);
  });

  return folder_paths;
}

function walk (directory, pattern = '', filepaths = []) {
  // eslint-disable-next-line no-sync
  const files = fs.readdirSync(directory);
  for (const filename of files) {
    const filepath = path.join(directory, filename);
    // eslint-disable-next-line no-sync
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, pattern, filepaths);
    } else if (micromatch.isMatch(filename, pattern)) {
      filepaths.push(filepath);
    }
  }

  return filepaths;
}

function applyRoutes (routes = [], app = {}) {
  routes.forEach((route) => {
    const {method, path: route_path, handlers} = route;
    app[method](route_path, handlers);
  });
}

export default {
  applyRoutes,
  walk,
  folder_contents,
  composeQuery
};
