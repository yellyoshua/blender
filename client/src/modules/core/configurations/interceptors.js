// eslint-disable-next-line id-length
import _ from 'underscore';
import {FetcherApi} from './fetcher';

/**
 * @typedef {import('axios').AxiosResponse} AxiosResponse
 * 
 * @callback ResponseHandler
 * @param {AxiosResponse} response
 * @returns {void}
 * 
 * @callback ErrorHandler
 * @param {Error} error
 * @returns {void}
 */

export default {

  /**
   * @param {Record<string, any>} headers
   * @returns {Record<string, any>}
   */

  setupAuthHeaders (headers = {}) {
    const default_headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    };

    const fullHeaders = _(default_headers).extend(headers);

    FetcherApi.defaults.headers.common = fullHeaders;
  },

  /**
   * @param {ResponseHandler} responseCallback
   * @param {ErrorHandler} errorCallback
   */

  responseInterceptor (responseCallback, errorCallback) {
    FetcherApi.interceptors.response.use(responseCallback, errorCallback, {synchronous: true});
  }
};

