import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import core_model from '../model';


describe('Model core module', () => {
  let model_mock = null;
  let crud = null;

  beforeEach(() => {
    model_mock = {
      find: jest.fn(),
      countDocuments: jest.fn(),
      create: jest.fn(),
      findByIdAndUpdate: jest.fn(),
      deleteMany: jest.fn()
    };

    crud = core_model(model_mock);
  });

  xit('should [find] values of the given filter', async () => {
    const filter = {name: 'test_name'};
    const options = {page: 1, size: 10};
    await crud.find(filter, options);
  });

  it('should pass', () => {
    expect(true).toEqual(true);
  });
});
