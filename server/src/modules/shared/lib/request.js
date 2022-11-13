import needle from 'needle';

export default {
  get: async (url) => {
    const response = await needle('get', url);
    return response.body;
  },
  post: async (url, data) => {
    const response = await needle('post', url, data);
    return response.body;
  }
};
