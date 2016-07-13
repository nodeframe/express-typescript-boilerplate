"use strict";
var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(PORT, function () {
    console.log("Listen on " + PORT + " ...");
});

//# sourceMappingURL=index.js.map
