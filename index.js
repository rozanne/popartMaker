const chromeLauncher = require('chrome-launcher');
const express = require('express');
const app = express();

const PORT = 8080;
const LOCAL_HOST = `http://localhost:${PORT}/`;
app.use(express.static(__dirname + '/www'));
app.listen(PORT, function () {
    console.log(`server is opened. ${LOCAL_HOST}`);

    openUrl(LOCAL_HOST);
});

function openUrl(url) {
    chromeLauncher.launch({
        startingUrl: url,
    });
}
