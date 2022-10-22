function get_ip (req) {
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
}

function get_user_agent (req) {
  return req.headers['user-agent'] || 'unknown';
}

export default {
  get_ip,
  get_user_agent
};
