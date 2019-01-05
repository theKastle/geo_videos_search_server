// Initializes the `videos` service on path `/videos`
const createService = require('feathers-mongoose');
const createModel = require('../../models/videos.model');
const hooks = require('./videos.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/videos', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('videos');

  service.hooks(hooks);
};
