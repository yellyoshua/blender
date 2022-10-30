/* eslint-disable no-process-exit */
import 'dotenv/config';
import '../config/globals.js';
import path from 'path';
import mongoose from '../config/mongoose.js';
import generate_migration from './services/generate_migration.js';
import execute_migration from './services/execute_migration.js';

const migrations_path = path.resolve(__dirname, 'migrations');

/**
 * Generate migration
 * node database/migration.js generate <migration_name>
 * 
 * Example:
 * node database/migration.js generate create_users
 * 
 * Execute migration
 * node database/migration.js execute <migration_number>
 * 
 * Example:
 * node database/migration.js execute 4
 * 
 */

const args = process.argv.slice(2);
const command = args[0];
const migration_name = args[1];

if (command === 'generate') {
  generate_migration(migration_name, migrations_path);
  process.exit(0);
}

if (command === 'execute') {
  mongoose.connect(process.env.DATABASE_URL).
  then(() => execute_migration(migration_name, migrations_path)).
  then(() => process.exit(0)).
  catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

