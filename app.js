var restify = require('restify');
var builder = require('botbuilder');

// Get secrets from server environment
var botConnectorOptions = { 
    appId: '710f4e2a-0cd4-4e86-907f-7c7db2bcd5a0', 
    appPassword: 'pNny7sFzX2cVYYsar1fs9gm'
};

var bot = new builder.UniversalBot(connector);  
bot.dialog('/', function (session) {
    session.send('Hello World');
});

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', connector.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url); 
});