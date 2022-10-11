import vars from '../../config/vars';

export default {
  getHealth: () => {
    return {
      status: 'OK',
      timestamp: new Date().toISOString(),
      environment: vars.env
    };
  }
};
