const search = require('youtube-search');

/* eslint-disable no-unused-vars */
class Service {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    const { query } = params;

    const opts = {
      maxResults: query.maxResults || 10,
      key: this.options.apiKey,
      location: `${query.lat},${query.lng}`,
      locationRadius: `${query.radius}`,
      pageToken: query.pageToken || undefined,
      part: 'snippet',
      type: 'video'
    };

    try {
      const result = await search(null, opts);
      return result;
    } catch (err) {
      throw new Error();
    }
  }

  async get(id, params) {
    return {
      id,
      text: `A new message with ID: ${id}!`
    };
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return { id };
  }
}

module.exports = function(options) {
  return new Service(options);
};

module.exports.Service = Service;
