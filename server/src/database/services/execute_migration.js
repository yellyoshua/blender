/* eslint-disable */
// Execute migration
import _ from 'underscore';
import utils from '../../utils';

export default async function execute_migration (migration_number, migrations_path) {
  const migrations = utils.folder_contents(migrations_path);
  const migration_file_path = _(migrations).find((migration) => {
    return migration.indexOf(migration_number) === 0;
  });

  if (!migration_file_path) {
    console.log(`Migration '${migration_number}' not found`);
    return;
  }

  const migration = require(migration_file_path);
  try {
    await migration.up();
    console.log(`Migration '${migration_number}' executed`);
  } catch (err) {
    console.error(err);
    console.log(`Migration '${migration_number}' failed`);
    await migration.down();
    console.log(`Migration '${migration_number}' rolled back`);
  }
}
