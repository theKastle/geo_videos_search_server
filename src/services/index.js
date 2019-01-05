const videos = require('./videos/videos.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(videos);
  app.configure(users);
};
