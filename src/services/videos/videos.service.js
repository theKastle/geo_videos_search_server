// Initializes the `videos` service on path `/videos`
const createService = require('./videos.class.js');
const hooks = require('./videos.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate,
    apiKey: 'AIzaSyCbzWS8xXh19pTwfdfAQt4q9josjaoHW_A'
  };

  // Initialize our service with any options it requires
  app.use('/videos', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('videos');

  service.hooks(hooks);
};
