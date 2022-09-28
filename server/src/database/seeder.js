/* eslint-disable no-process-exit */
import 'dotenv/config';
import '../config/globals.js';
import path from 'path';
import vars from '../config/vars.js';
import mongoose from '../config/mongoose';
import models from '../modules/models';
import utils from '../utils';

const skip_seeders_for_production = [
  'users'
];

mongoose.connect(vars.databaseURL).
then(read_seeders).
then(seed_data).
then(handle_success).
catch(handle_error);

function read_seeders () {
  const seeders_path = utils.folder_contents(path.resolve(__dirname, 'seeders'));
  const seeders_path_promises = seeders_path.map(async (seeder_path) => {
    const collection = path.basename(seeder_path, '.js');
    const seeder = await import(seeder_path);
    const records = seeder.default;

    return {collection, records};
  });

  return Promise.all(seeders_path_promises);
}

function seed_data (seeders = []) {
  const seeders_promises = seeders.map((seeder) => {
    const collection = seeder.collection;
    const records = seeder.records;

    if (vars.env.production && skip_seeders_for_production.includes(collection)) {
      return logger.warn(`Skipping seeding '${collection}' for production`);
    }

    logger.info(`Seeding '${collection}' with ${records.length} records`);

    const model = models[collection];
    if (!model) {
      return logger.warn(`Skipping seeding '${collection}' as model not found`);
    }

    return Promise.resolve(model.raw.deleteMany({})).
    then(() => model.raw.insertMany(records));
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
