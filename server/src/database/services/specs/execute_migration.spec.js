import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import execute_migration from '../execute_migration';
import utils from '../../../utils';

jest.mock('../../../utils');


describe('execute_migration', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
    utils.folder_contents.mockReturnValue(['0001_create_users']);
    // jest.spyOn(globalThis, 'require');
    // require.mockReturnValue({
    //   up: jest.fn(),
    //   down: jest.fn()
    // });
    // TODO: How to mock require?
  });

  it('should execute migration', () => {
    expect(true).toBeTruthy();
  });
});
