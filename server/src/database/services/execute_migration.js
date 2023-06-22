/* eslint-disable */
// Execute migration
import _ from 'underscore';
import utils from '../../utils';

export default async function execute_migration (migration_number, migrations_path) {
  const migrations = utils.folder_contents(migrations_path);
  const migration_file_path = _(migrations).find((migration_path) => {
    const migration = migration_path.match(/(\d+)/)[0];
    return Number(migration) === Number(migration_number);
  });

  if (!migration_file_path) {
    console.log(`Migration '${migration_number}' not found`);
    return;
  }

  const migration = require(migration_file_path + '/migration.js').default;

  if (!migration) {
    console.log(`Migration '${migration_number}' not contains a migration.js file`);
    return;
  }

  try {
    await migration.up();
    console.log(`Migration '${migration_number}' executed`);
  } catch (err) {
    console.error(err);
    console.log(`Migration '${migration_number}' failed`);

    if (migration.down) {
      await migration.down();
      console.log(`Migration '${migration_number}' rolled back`);
    }
  }
}
