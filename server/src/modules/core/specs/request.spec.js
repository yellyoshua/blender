import {beforeEach, describe, expect, jest} from '@jest/globals';
import core_request from '../request';

describe('Request core module', () => {
  let request = null;
  let handler_mock = null;
  let req_mock = null;
  let res_mock = null;

  beforeEach(() => {
    handler_mock = jest.fn();

    req_mock = {};
    res_mock = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    request = core_request(handler_mock);
  });

  it('should [get] values of the given query', async () => {
    const query = {name: 'test_name'};
    req_mock.query = query;
    req_mock.method = 'GET';

    await request(req_mock, res_mock);

    const [filter, options] = handler_mock.mock.calls[0];

    expect(filter.name).toEqual(query.name);
    expect(options).toEqual({});
  });

  it('should [get] values of the given query and options', async () => {
    const query = {
      name: 'test_name',
      ___skip: 0,
      ___page: 1
    };
    req_mock.query = query;
    req_mock.method = 'GET';

    await request(req_mock, res_mock);

    const [filter, options] = handler_mock.mock.calls[0];

    expect(filter.name).toEqual(query.name);
    expect(options.skip).toEqual(query.___skip);
    expect(options.page).toEqual(query.___page);
  });

  it('should [post] values of the given body', async () => {
    const body = {name: 'test_name'};
    req_mock.body = body;
    req_mock.method = 'POST';

    await request(req_mock, res_mock);

    const [body_arg] = handler_mock.mock.calls[0];

    expect(body_arg.name).toEqual(body.name);
  });

  it('should [put] values of the given query and body', async () => {
    const query = {_id: 'test_id'};
    const body = {name: 'test_name'};
    req_mock.query = query;
    req_mock.body = body;
    req_mock.method = 'PUT';

    await request(req_mock, res_mock);

    const [filter, body_arg] = handler_mock.mock.calls[0];

    expect(filter._id).toEqual(query._id);
    expect(body_arg.name).toEqual(body.name);
  });

  it('should [delete] values of the given query', async () => {
    const query = {_id: 'test_id'};
    req_mock.query = query;
    req_mock.method = 'DELETE';

    await request(req_mock, res_mock);

    const [filter, options] = handler_mock.mock.calls[0];

    expect(filter._id).toEqual(query._id);
    expect(options).toEqual({});
  });
});
