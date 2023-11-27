var express = require('express');

var app = express();

app.listen(3000, function () {
    logger.info("app listening on port 3000!");
});