const App = function () {
  if (!(this instanceof App)) return new App;
};
App.prototype.connect = require('connect')();

App.prototype.send = function(url, obj) {
  this.connect.use(url, (request, response, next) => {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(obj));
    next();
  });
};

const app = App();

export {app}
