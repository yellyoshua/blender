import utils from '../../utils';

function compose_request_handler_args (request, response, method) {
  const {filter, options} = utils.composeQuery(request.query);
  const body = request.body;

  const handler_methods_map = {
    post: [body, request, response],
    get: [filter, options, request, response],
    put: [filter, body, request, response],
    delete: [filter, options, request, response]
  };

  return handler_methods_map[method];
}

function response_handler (response_data) {
  return (res) => {
    if (response_data && response_data.redirect) {
      const redirect_code = response_data.redirect_code || 302;
      return res.status(redirect_code).redirect(response_data.redirect);
    }
  
    return res.status(200).json({response: response_data, errors: []});
  };
}

export default (requestHandler) => {
  return async (req, res, next) => {
    try {
      const method = req.method.toLowerCase();
      const request_args = compose_request_handler_args(req, res, method);
      const response = await requestHandler(...request_args);

      return response_handler(response)(res);
    } catch (error) {
      return next(error);
    }
  };
};

