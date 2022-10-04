/**
 * 
 * @param {import('axios').AxiosInstance} axios_instance 
 * @param {string} route_path
 * @returns 
 */

function crud (axios_instance, route_path) {
  const parsed_route_path = `/${route_path}`;

  return {
    async get (params) {
      const {data = {}} = await axios_instance.get(parsed_route_path, { params });
      return data.response;
    },
    async post (post_data = {}) {
      const {data = {}} = await axios_instance.post(parsed_route_path, post_data);
      return data.response;
    },
    async put (put_data = {}) {
      const {data = {}} = await axios_instance.put(parsed_route_path, put_data);
      return data.response;
    },
    async delete (params) {
      const {data = {}} = await axios_instance.delete(parsed_route_path, { params });
      return data.response;
    }
  };
}

/**
 * 
 * @param {import('axios').AxiosInstance} axios_instance 
 * @returns 
 */

export default function repository (axios_instance) {
  return (route_path) => {
    return crud(axios_instance, route_path);
  };
}
