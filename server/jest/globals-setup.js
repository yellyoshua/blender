import mongoose from '../src/config/mongoose';
import database from 'mongoose';
import {applyFixture, clearCollections, closeOpenHandles} from './utils';
import {afterAll} from '@jest/globals';

globalThis.setupFixtures = async (fixturesPath = []) => {
  console.log('Setting up fixtures...');
  if (database.connection.readyState !== database.STATES.connected) {
    console.log('Connecting to database...');
    await mongoose.connect('mongodb://localhost:27017/weblender_test');
  }

  console.log('Clearing collections...');

  await clearCollections();

  return applyFixture(fixturesPath);
};
if (afterAll) {
  afterAll(closeOpenHandles);
}
