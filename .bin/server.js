require('source-map-support').install();
var app = require('../.build/src').default;
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT,function(){
  console.log(`Listening on ${PORT} ...`);
});