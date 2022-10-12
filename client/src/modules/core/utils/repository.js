import services from '../services';

/**
 * @param {import('axios').AxiosInstance} axios_instance
 */

function setup_headers (axios_instance) {
  const accessToken = services.auth.getAccessToken();

  axios_instance.defaults.headers.common = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    authorization: `Bearer ${accessToken}`,
    application: 'web'
  };
}

const statusCodesForLogout = [401, 403];

/**
 * @param {import('axios').AxiosInstance} axios_instance
 */

function setupInterceptors (axios_instance) {
  const onResponseSuccess = (response) => response;
  const onResponseFail = (error) => {
    const textError = String(error);
    const statusCode = Number(textError.match(/\d+/ug)[0]);

    if (statusCodesForLogout.includes(statusCode) && services.auth.isAuthenticated()) {
      services.auth.logout();
      return location.reload();
    }

    return Promise.reject(error);
  };

  axios_instance.interceptors.response.use(onResponseSuccess, onResponseFail);
}

/**
 * 
 * @param {import('axios').AxiosInstance} axios_instance 
 * @param {string} route_path
 * @returns 
 */

function crud (axios_instance, route_path) {
  const parsed_route_path = `/${route_path}`;
  setupInterceptors(axios_instance);

  return {
    async get (params) {
      setup_headers(axios_instance);
      const {data = {}} = await axios_instance.get(parsed_route_path, { params });
      return data.response;
    },
    async post (post_data = {}) {
      setup_headers(axios_instance);
      const {data = {}} = await axios_instance.post(parsed_route_path, post_data);
      return data.response;
    },
    async put (put_data = {}) {
      setup_headers(axios_instance);
      const {data = {}} = await axios_instance.put(parsed_route_path, put_data);
      return data.response;
    },
    async delete (params) {
      setup_headers(axios_instance);
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
