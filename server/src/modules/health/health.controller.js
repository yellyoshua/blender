import vars from '../../config/vars';

export default {
  getHealth: () => {
    console.log('vars.env :', vars.env);
    return {
      status: 'OK',
      timestamp: new Date().toISOString(),
      environment: vars.env
    };
  }
};
