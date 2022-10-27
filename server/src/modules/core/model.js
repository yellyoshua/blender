// eslint-disable-next-line id-length
import _ from 'underscore';
import query_model from './query_model';
import {objectToDotNotation} from '../shared/utils';
import mongoose from 'mongoose';

/**
 * @param {import('mongoose').Model} Model
 */

export default (Model) => {
  return {
    async find (filter = {}, options = {}) {
      const mongooseInstance = Model.find(filter, null, {
        strictQuery: false,
        lean: true
      });
      const query = query_model(mongooseInstance);
      query.paginate(options.page, options.size);
      query.populate(options.populate);
      query.select(options.select);
      query.sort(options.sort);
      const data = await mongooseInstance.exec();

      return data;
    },
    async count (filter = {}) {
      const mongooseInstance = Model.countDocuments(filter, {
        strictQuery: false,
        lean: true
      });
      const data = await mongooseInstance.exec();

      return data;
    },
    async create (body = {}) {
      const entity = new Model({
        ...body
      });
      const data = await entity.save();

      return data;
    },
    async update (filter = {}, body = {}, options = {}) {
      if (!filter._id) {
        throw new Error('_id is required');
      }
      console.log('options :', options);
      const mongooseInstance = Model.findByIdAndUpdate(
        filter._id,
        {
          $set: 
          options.dot_notation
            ? objectToDotNotation(body)
            : body
        },
        _(options).omit('dot_notation')
      );
      await mongooseInstance.exec();
      const data = await Model.findById(filter._id)
      .lean()
      .exec();

      return data;
    },
    async delete (filter = {}) {
      const byId = {_id: filter._id};
      if (!filter._id) {
        throw new Error('_id is required');
      }
      const found = await Model.find(byId).exec();
      if (found.length === 0) {
        throw new Error('Entity not found');
      }
      const mongooseInstance = Model.deleteMany(byId);
      const data = await mongooseInstance.exec();

      return data;
    },
    raw: Model
  };
};

function sanitize_update_query (data, query = {}) {
  if (_(data).isArray()) {
    query.$set = data;
    return data;
  }

  const data_keys = Object.keys(data);

  _(data_keys).each((key) => {
    if (_(data[key]).isArray()) {
      query.$addToSet = query.$addToSet || {};
      query.$addToSet[key] = data[key];
      return;
    }
    if (_(data[key]).isObject()) {
      query.$set = query.$set || {};
      query.$set = {
        ...query.$set,
        ...objectToDotNotation({[key]: data[key]})
      };
    }
  });

  return query;
}
