/* eslint-disable */

export default (disconnectProcess = []) => {
  const disconnect = () => {
    disconnectProcess.forEach((shutdownProcess) => {
      if (shutdownProcess) {
        shutdownProcess();
      }
    });
  };

  process.on('SIGINT', (err) => {
    console.error('uncaughtException', err.message);
    disconnect();
    process.exit(1);
  });
  
  process.on('uncaughtException', (err) => {
    console.error('uncaughtException', err.message);
    disconnect();
    process.exit(1);
  });
  
  process.on('unhandledRejection', (err) => {
    console.error('unhandledRejection', err.message);
    disconnect();
    process.exit(1);
  });
};
