import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import core_model from '../model';
import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

fdescribe('Model core module', () => {
  let model_mock = null;
  let crud = null;

  beforeEach(() => {
    model_mock = {
      find: jest.fn().mockReturnThis(),
      skip: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis(),
      countDocuments: jest.fn().mockReturnThis(),
      create: jest.fn().mockReturnThis(),
      findById: jest.fn().mockReturnThis(),
      lean: jest.fn().mockReturnThis(),
      findByIdAndUpdate: jest.fn().mockReturnThis(),
      deleteMany: jest.fn().mockReturnThis(),
      exec: jest.fn()
    };

    crud = core_model(model_mock);
  });

  describe('On find', () => {
    it('should [find] values of the given filter', async () => {
      const filter = {name: 'test_name'};
      const options = {page: 1, size: 10};
      await crud.find(filter, options);
  
      expect(model_mock.find).toHaveBeenCalledWith(filter, null, {strictQuery: false, lean: true});
      expect(model_mock.skip).toHaveBeenCalledWith(0);
      expect(model_mock.limit).toHaveBeenCalledWith(10);
      expect(model_mock.exec).toHaveBeenCalled();
    });
  });

  xdescribe('On update', () => {
    it('should sanitize arrays inside the body', async () => {
      const body = {values: [1, 2, 3], options: [{name: 'test_name'}]};

      await crud.update({_id: '-'}, body);

      const [, model_values] = model_mock.findByIdAndUpdate.mock.calls[0];
      
      expect(model_values.$addToSet.values).toEqual([1, 2, 3]);
      expect(model_values.$addToSet.options).toEqual([{name: 'test_name'}]);
      expect(Object.keys(model_values.$set).length).toBe(2);
    });

    fit('should sanitize ObjectId arrays inside the body', async () => {
      const body = {values: [id(), id(), id()], options: [{name: 'test_name'}]};

      await crud.update({_id: '-'}, body);

      const [, model_values] = model_mock.findByIdAndUpdate.mock.calls[0];
      
      expect(model_values.$addToSet.values.length).toBe(3);
      expect(model_values.$addToSet.options).toEqual([{name: 'test_name'}]);
      expect(Object.keys(model_values.$addToSet).length).toBe(2);
    });

    it('should sanitize objects inside the body', async () => {
      const body = {values: {name: 'test_name'}, options: {name: 'test_name'}};

      await crud.update({_id: '-'}, body, {dot_notation: true});

      const [, model_values] = model_mock.findByIdAndUpdate.mock.calls[0];

      expect(model_values.$set['values.name']).toBe('test_name');
      expect(model_values.$set['options.name']).toBe('test_name');
      expect(Object.keys(model_values.$set).length).toBe(2);
    });
  });
});
