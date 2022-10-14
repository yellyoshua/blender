import {generateObjectId} from '../utils';

export const PROMPTS_REF = {
  prompts_1: generateObjectId('prompt_1'),
  prompts_2: generateObjectId('prompt_2')
  
};

export default [
  {
    _id: PROMPTS_REF.prompts_1,
    prompt: 'What is your favorite color?'
  },
  {
    _id: PROMPTS_REF.prompts_2,
    prompt: 'What is your favorite food?'
  }
];
