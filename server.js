'use strict';

var path    = require( 'path' )
  , express = require( 'express' )
  , app     = express();

app.configure(function () {
  app.use( express.static( path.join(__dirname, 'www')) );
});

app.listen( 3000 );
