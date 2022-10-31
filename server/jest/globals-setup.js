/* eslint-disable id-length */
/* eslint-disable global-require */
/* eslint-disable no-sync */
import _ from 'underscore';
import mongoose from '../src/config/mongoose';
import database from 'mongoose';

globalThis.setupFixtures = async (fixturesPath) => {
  if (!database.connection.readyState) {
    await mongoose.connect('mongodb://localhost:27017/weblender_test', {
      disableLogs: true
    });
  }

  await clearCollections();
  
  const data = readFixtures(fixturesPath);

  const promises = _(data).map((fixture) => {
    return applyFixture(fixture);
  });

  return Promise.all(promises);
};

globalThis.closeOpenHandles = async () => {
  if (database.connection.readyState) {
    await database.connection.close(true);
  }
};

function readFixtures (fixturesPath) {
  return _(fixturesPath).map((fixturePath) => {
    return require(fixturePath);
  });
}

function applyFixture (fixture) {
  const collections = _(fixture).keys();

  const promises = _(collections).map((collection) => {
    const model = database.connection.db.collection(collection);

    if (_(fixture[collection]).isArray()) {
      return model.insertMany(fixture[collection]);
    }

    return null;
  });

  return Promise.all(promises);
}

function clearCollections () {
  const collections = database.connection.collections;

  const promises = _(collections).map((collection) => {
    return collection.deleteMany({});
  });

  return Promise.all(promises);
}
