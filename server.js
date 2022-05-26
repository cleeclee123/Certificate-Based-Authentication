const express = require("express");
const https = require("https");
const path = require("path");
const filePath = require("fs");

const app = express();

app.use("/", (request, response, next) => {
    response.send("You are in a Secure Server");
});

const sslServer = https.createServer(
    {
        key: filePath.readFileSync(path.join(__dirname, "cert", "key.pem")),
        cert: filePath.readFileSync(path.join(__dirname, "cert", "cert.pem")),
    }
);

sslServer.listen(3000, () => console.log("You are in a Secure Server (logging)"));