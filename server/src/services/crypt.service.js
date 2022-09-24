import bcrypt from 'bcrypt';

const cryptService = () => {
  return {
    compare: async (plain_text_value, hash) => {
      const isEqual = await bcrypt.compare(plain_text_value, hash);

      return isEqual;
    },
    encrypt: async (plain_text_value) => {
      const hash = await bcrypt.hash(
        plain_text_value,
        10
      );

      return hash;
    }
  };
};

export default cryptService;
