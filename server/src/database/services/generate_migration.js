/* eslint-disable id-length */
/* eslint-disable no-sync */
// Generate migration
import _ from 'underscore';
import utils from '../../utils';
import fs from 'fs';
import {snakeCase, getMigrationNumber, matchMigrationIdentity} from '../utils';

const migration_script = (migration_name) => `
/* eslint-disable */
// Migration: ${migration_name}
import models from '../../modules/models';

export default {
  async up () {
    console.log('Up');
  },
  async down () {
    console.log('Down');
  }
};
`;

const migration_test_script = (migration_name) => `
/* eslint-disable */
// Migration: ${migration_name}
import { afterAll, beforeEach, describe } from "@jest/globals";
import models from '../../../modules/models.js';
import migration from "./migration.js";

describe("Migration: users_update", () => {
  beforeEach(async () => {
    await setupFixtures([
      \`\${__dirname}/fixtures.js\`,
    ]);
  });


});
`;

export default function generate_migration (migration_name, migrations_path) {
  const migrations = utils.folder_contents(migrations_path);

  const migrations_folders = _(migrations).map((migration) => {
    const migration_paths = migration.split('/');
    return migration_paths[migration_paths.length - 1];
  });

  const migration_identity = snakeCase(migration_name);

  if (matchMigrationIdentity(migration_identity, migrations_folders)) {
    console.log(`Migration '${migration_identity}' already exists`);
    return;
  }
  
  const migration_number = getMigrationNumber(migrations_folders.length);
  const migration_folder_name = `${migration_number}_${migration_identity}`;
  const migration_folder = `${migrations_path}/${migration_folder_name}`;

  fs.mkdirSync(migration_folder);

  const migration_file_content = migration_script(migration_identity);
  const migration_test_file_content = migration_test_script(migration_identity);

  fs.writeFileSync(`${migration_folder}/migration.js`, migration_file_content, {encoding: 'utf8'});
  fs.writeFileSync(`${migration_folder}/migration.spec.js`, migration_test_file_content, {encoding: 'utf8'});
  fs.writeFileSync(`${migration_folder}/fixtures.js`, '', {encoding: 'utf8'});

  console.log(`Migration '${migration_folder_name}' created`);
}
