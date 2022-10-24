/* eslint-disable id-length */
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

export const objectToDotNotation = (args) => {
  const setObject = {};
  Object.keys(args).forEach((key) => {
    if (typeof args[key] === 'object') {
      Object.keys(args[key]).forEach((subkey) => {
        setObject[`${key}.${subkey}`] = args[key][subkey];
      });
    } else {
      setObject[key] = args[key];
    }
  });
  return setObject;
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
