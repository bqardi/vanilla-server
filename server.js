import http from "http";
import fs from "fs";
import { getFile } from "./utils/get-file.js";

const server = http.createServer(handleRequest);
server.listen(3000, onConnect);

function handleRequest(req, res) {
  let file = getFile(req);

  let contentType = "text/html";
  if (file.extension === ".css") contentType = "text/css";
  if (file.extension === ".js") contentType = "text/javascript";
  if (file.extension === ".ico") contentType = "image/x-icon";

  fs.readFile(file.path, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error: Could not read file");
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
}

function onConnect(error) {
  if (error) return console.error(error);
  console.log("Server is running on port 3000");
}
