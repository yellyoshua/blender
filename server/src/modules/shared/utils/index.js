import _ from 'underscore';
import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;
export class CustomError extends Error {
  constructor (message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
  }
}

export const objectToDotNotation = (objToDotNotation) => {
  const result = {};

  const recurse = (cur, prop) => {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      result[prop] = cur;
    } else {
      let isEmpty = true;
      _(Object.keys(cur)).each((propKey) => {
        isEmpty = false;
        const propDotKey = prop
          ? `${prop}.${propKey}`
          : propKey;

        recurse(cur[propKey], propDotKey);
      });

      if (isEmpty && prop) {
        result[prop] = {};
      }
    }
  };
  recurse(objToDotNotation, '');
  return result;
};

export const toString = (data) => {
  if (_(data).isArray()) {
    return _(data)
    .chain()
    .compact()
    .map((item) => {
      return item.toString();
    })
    .compact()
    .value();
  }

  return data.toString();
};

export const toObjectId = (data) => {
  if (_(data).isArray()) {
    return _(data)
    .chain()
    .compact()
    .map((item) => {
      return id(item);
    })
    .compact()
    .value();
  }

  return id(data);
};
