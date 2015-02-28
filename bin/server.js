/* jslint node: true */

var debug = require('debug')('mob');
var app = require('../app');
var modsync = require('../sync');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});

var sync = modsync();
sync.syncAll();