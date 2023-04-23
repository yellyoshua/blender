import mongoose from '../src/config/mongoose';
import database from 'mongoose';
import {applyFixture, clearCollections, closeOpenHandles} from './utils';
import {afterAll} from '@jest/globals';

const database_url = process.env.DATABASE_URL_TESTS || 'mongodb://localhost:27017/weblender_test';

globalThis.setupFixtures = async (fixturesPath = []) => {
  if (!database.connection.readyState) {
    await mongoose.connect(database_url, {
      disableLogs: true
    });
  }

  await clearCollections();

  return applyFixture(fixturesPath);
};

afterAll(closeOpenHandles);
