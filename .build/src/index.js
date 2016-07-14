"use strict";
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/api/payment', function (req, res) {
    res.send({ success: true });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;

//# sourceMappingURL=index.js.map
