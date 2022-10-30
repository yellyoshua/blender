/* eslint-disable id-length */
/* eslint-disable prefer-named-capture-group */
import mongoose from 'mongoose';
import _ from 'underscore';

const id = mongoose.Types.ObjectId;

import {createHash} from 'crypto';

export const generateObjectId = (value) => {
  const hash = createHash('sha1')
  .update(value, 'utf8')
  .digest('hex');

  return id(hash.substring(0, 24));
};

export const snakeCase = (str) => {
  const snake = str.trim().toLowerCase();
  // Replace spaces with underscores and remove all non-word characters
  return snake.replace(/\s+/gu, '_').replace(/\W/gu, '');
};

export const getMigrationNumber = (last_migration_number) => {
  const number_length = 4;
  const migration_number = last_migration_number + 1;
  const migration_number_string = migration_number.toString();
  const migration_number_length = migration_number_string.length;
  const migration_number_padding = number_length - migration_number_length;

  const padding = _(migration_number_padding).
  times(() => '0').
  join('');

  return padding + migration_number_string;
};

export const matchMigrationIdentity = (migration_identity, migrations) => {
  const migration_identity_regex = new RegExp(`^\\d{4}_${migration_identity}$`, 'u');
  return migrations.find((migration) => {
    const has_extension = migration.indexOf('.js') > -1;

    const migration_name = has_extension
      ? migration.replace('.js', '')
      : migration;

    return migration_identity_regex.test(migration_name);
  });
};
