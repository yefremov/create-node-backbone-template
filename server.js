'use strict';

var path    = require( 'path' )
  , express = require( 'express' )
  , app     = express();

var rootDir = __dirname
  , wwwDir  = path.join( rootDir, 'www' );

app.configure(function () {
  app.use( express.static(wwwDir) );
});

app.listen( 3000 );