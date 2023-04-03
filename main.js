import createServer from './compiled/createServer';

createServer()
  .listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running on localhost:3000');
  });
