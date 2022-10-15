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
