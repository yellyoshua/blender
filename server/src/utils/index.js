import micromatch from 'micromatch';
import path from 'path';
import fs from 'fs';

export default {
  applyRoutes,
  walk,
  composeQuery
};

export class CustomError extends Error {
  constructor (message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
  }
}

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
