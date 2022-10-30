/* eslint-disable no-sync */
import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import generate_migration from '../generate_migration';
import utils from '../../../utils';
import fs from 'fs';

jest.mock('fs');
jest.mock('../../../utils');

describe('generate_migration', () => {
  beforeEach(() => {
    fs.writeFileSync.mockClear();
    fs.mkdirSync.mockClear();
    jest.spyOn(console, 'log');
    utils.folder_contents.mockReturnValue(['0001_create_users']);
  });

  it('should generate migration', () => {
    expect(generate_migration).toBeDefined();
  });

  it('should create migration file', () => {
    generate_migration('create_users_2', 'migrations');

    expect(fs.writeFileSync).toHaveBeenCalled();
    expect(fs.mkdirSync).toHaveBeenCalledWith('migrations/0002_create_users_2');
    expect(utils.folder_contents).toHaveBeenCalled();
    expect(utils.folder_contents).toHaveBeenCalledWith('migrations');
    expect(console.log).toHaveBeenCalledWith('Migration \'0002_create_users_2\' created');
  });

  it('should not create migration file because duplicity', () => {
    generate_migration('create_users', 'migrations');

    expect(fs.writeFileSync).not.toHaveBeenCalled();
    expect(fs.mkdirSync).not.toHaveBeenCalled();
    expect(utils.folder_contents).toHaveBeenCalled();
    expect(utils.folder_contents).toHaveBeenCalledWith('migrations');
    expect(console.log).toHaveBeenCalledWith('Migration \'create_users\' already exists');
  });

  it('should create migration file with folder', () => {
    generate_migration('create_users_2', 'migrations');

    expect(fs.writeFileSync).toHaveBeenCalled();
    expect(fs.mkdirSync).toHaveBeenCalledWith('migrations/0002_create_users_2');
    expect(utils.folder_contents).toHaveBeenCalled();
    expect(utils.folder_contents).toHaveBeenCalledWith('migrations');
    expect(console.log).toHaveBeenCalledWith('Migration \'0002_create_users_2\' created');
  });
});
