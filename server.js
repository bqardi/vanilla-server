import http from "http";
import fs from "fs";
import { getFile } from "./utils/get-file.js";
import { errorHandler } from "./utils/error-handler.js";

const PORT = 8888;
const server = http.createServer(handleRequest);
server.listen(PORT, onConnect);

function handleRequest(req, res) {
  let file = getFile(req);

  fs.readFile(file.path, (err, data) => {
    if (err) {
      const { statusCode, header, message } = errorHandler(res, err);
      res.writeHead(statusCode, header);
      res.end(message);
      return;
    }

    res.writeHead(200, { "Content-Type": file.contentType });
    res.end(data);
  });
}

function onConnect(error) {
  if (error) return console.error(error);
  console.log(`Server is running on port ${PORT}`);
}
