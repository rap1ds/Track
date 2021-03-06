var restify = require('restify');
var API = require('./api');
var Mongo = require('./mongo');

var ApplicationConstraints = {
    port: 9999,
    name: "TrackAPI"
}

var server = restify.createServer({
  name: ApplicationConstraints.name
});

API.start(server);
Mongo.init();
Mongo.deleteAll();
Mongo.createSampleData();

server.listen(ApplicationConstraints.port, function() {
  console.log('%s listening at %s', server.name, server.url);
});