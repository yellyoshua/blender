/* eslint-disable no-process-exit */
import 'dotenv/config';
import '../config/globals.js';
import vars from '../config/vars.js';
import mongoose from '../config/mongoose';
import models from '../modules/models';
import utils from '../utils';

const skip_seeders_for_production = [];

import path, {dirname} from 'path';
import {fileURLToPath, pathToFileURL} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

mongoose.connect(vars.databaseURL).
then(get_seeders_path).
then(read_seeders).
then(seed_data).
then(handle_success).
catch(handle_error);

function get_seeders_path () {
  return utils.walk(
    path.resolve(__dirname, 'seeders'),
    '*.js'
  );
}

function read_seeders (seeders_path = []) {
  const seeders_path_promises = seeders_path.map(async (seeder_path) => {
    const collection = path.basename(seeder_path, '.js');
    const seeder = await import(pathToFileURL(seeder_path));
    const records = seeder.default;

    return {collection, records};
  });

  return Promise.all(seeders_path_promises);
}

function seed_data (seeders = []) {
  const seeders_promises = seeders.map((seeder) => {
    const collection = seeder.collection;
    const records = seeder.records;

    if (vars.production && skip_seeders_for_production.includes(collection)) {
      return logger.warn(`Skipping seeding ${collection} for production`);
    }

    logger.info(`Seeding ${collection} with ${records.length} records`);

    const model = models[collection];
    if (!model) {
      return null;
    }

    return Promise.resolve(model.deleteMany({})).
    then(() => model.insertMany(records));
  });

  return Promise.all(seeders_promises);
}

function handle_error (err) {
  logger.error(err);
  process.exit(1);
}

function handle_success () {
  logger.info('Seeded database successfully');
  process.exit(0);
}
