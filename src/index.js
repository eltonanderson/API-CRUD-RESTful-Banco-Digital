const express = require("express");
const route = require("./router");
const server = express();

const port = 3000;

server.use(express.json());

server.use(route);

server.listen(port, () => console.log(`Server listening on port ${port}!`));
