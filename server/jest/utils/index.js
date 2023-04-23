/* eslint-disable global-require */
import _ from 'underscore';
import database from 'mongoose';

export function clearCollections () {
  const collections = database.connection.collections;

  const promises = _(collections).map((collection) => {
    return collection.deleteMany({});
  });

  return Promise.all(promises);
}

export async function closeOpenHandles () {
  if (database.connection.readyState) {
    await database.connection.close(true);
  }
}

export function applyFixture (fixturesPath) {
  const data = readFixtures(fixturesPath);

  const promises = _(data).map((fixture) => {
    return setupFixture(fixture);
  });

  return Promise.all(promises);
}

function readFixtures (fixturesPath) {
  return _(fixturesPath).map((fixturePath) => {
    return require(fixturePath);
  });
}

function setupFixture (fixture) {
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
