var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'monthcount'
    },
    port: 3000,
    db: {
      database: "monthcount-development",
      protocol: "sqlite",
      host: "db/example"
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'monthcount'
    },
    port: 3000,
    db: 'mysql://localhost/monthcount-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'monthcount'
    },
    port: 3000,
    db: 'mysql://localhost/monthcount-production'
  }
};

module.exports = config[env];
