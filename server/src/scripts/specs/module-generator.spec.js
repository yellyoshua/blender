/* eslint-disable global-require */
import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import utils from '../../utils';
import path from 'path';

jest.mock('../../utils');

describe('Module generator', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.argv = [
      'node',
      'module-generator.js',
      'module_name'
    ];
    utils.folder_contents.mockReturnValue(['module_exists']);
    jest.spyOn(console, 'error').mockImplementation(null);
    jest.spyOn(process, 'exit').mockImplementation(null);
  });

  it('should generate a module', () => {
    require('../module-generator');

    const modules_path = path.resolve(__dirname, '../../modules');

    expect(utils.folder_contents).toHaveBeenCalledWith(modules_path);
    expect(console.error).not.toHaveBeenCalledWith('Module name is required');
  });

  /**
   * Do: Fix this test
   * it('should not generate a module if not provided a name', () => {
   * process.argv = [
   *  'node',
   * 'module-generator.js'
   * ];
   * require('../module-generator');
   * 
   * expect(console.error).toHaveBeenCalledWith('Module name is required');
   * expect(process.exit).toHaveBeenCalledWith(1);
   * });
   *
   */
});
