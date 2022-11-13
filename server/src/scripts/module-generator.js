/* eslint-disable no-process-exit */
import utils from '../utils';
import path from 'path';

const args = process.argv.slice(2);
const module_name = args[0];
console.log('module_name :', module_name);
console.log('process.argv :', process.argv);

if (!module_name) {
  console.error('Module name is required');
  process.exit(1);
}


const modules_path = path.resolve(__dirname, '../modules');
const modules_list = utils.folder_contents(modules_path);
console.log('modules_list :', modules_list);

