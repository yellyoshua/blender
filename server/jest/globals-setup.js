import mongoose from '../src/config/mongoose';
import database from 'mongoose';
import {applyFixture, clearCollections, closeOpenHandles} from './utils';
import {afterAll} from '@jest/globals';

let connection = null;

globalThis.setupFixtures = async (fixturesPath = []) => {
  console.log('Setting up fixtures...');
  if (database.connection.readyState !== database.STATES.connected) {
    console.log('Connecting to database...');
    try {
      connection = await mongoose.connect('mongodb://localhost:27017/weblender_test');
    } catch (error) {
      console.log('error Connecting why? :', error);
    }
  }

  console.log('Clearing collections...');

  await clearCollections(connection);

  return applyFixture(fixturesPath, connection);
};
if (afterAll) {
  afterAll(async () => {
    await closeOpenHandles(connection);
  });
}
