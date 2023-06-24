import mongoose from '../src/config/mongoose';
import database from 'mongoose';
import {applyFixture, clearCollections, closeOpenHandles} from './utils';
import {afterAll} from '@jest/globals';

const database_url = 'mongodb://localhost:27017/weblender_test';

globalThis.setupFixtures = async (fixturesPath = []) => {
  console.log('Setting up fixtures...');
  if (database.connection.readyState !== database.STATES.connected) {
    console.log('Connecting to database...');
    await mongoose.connect(database_url);
  }

  console.log('Clearing collections...');

  await clearCollections();

  return applyFixture(fixturesPath);
};
if (afterAll) {
  afterAll(closeOpenHandles);
}
