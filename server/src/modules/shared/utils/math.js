/* eslint-disable id-length */
import Big from 'big.js';
import _ from 'underscore';

const add = (...values) => {
  if (isNotValid(values)) {
    return null;
  }

  const result = _(values).reduce((sum, value) => {
    return sum.plus(value);
  }, new Big(0));

  return toNumber(result);
};

const multiply = (...values) => {
  if (isNotValid(values)) {
    return null;
  }

  const result = _(values).reduce((acc, value) => {
    return acc.times(value);
  }, new Big(1));

  return toNumber(result);
};

const divide = (value, divisor) => {
  return toNumber(new Big(value).div(divisor));
};

const percentage = (value, total, decimals = 2) => {
  return toDecimal(multiply(divide(value, total), 100), decimals);
};

const average = (...values) => {
  if (isNotValid(values)) {
    return null;
  }

  const value = toDecimal(divide(add(...values), values.length));

  return toNumber(value);
};

export default {
  add,
  multiply,
  divide,
  percentage,
  average
};

function isNotValid (values) {
  return _(values).include(null) ||
  // eslint-disable-next-line no-undefined
  _(values).include(undefined);
}

function toNumber (value) {
  return Number(value);
}

function toDecimal (value, decimals = 2) {
  return new Big(value).toFixed(decimals);
}
