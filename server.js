import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const server = http.createServer(handleRequest);
server.listen(3000, onConnect);

function handleRequest(req, res) {
  const filePath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "public",
    req.url.endsWith("/") ? `${req.url}index.html` : req.url
  );

  let contentType = "text/html";
  if (path.extname(filePath) === ".css") contentType = "text/css";
  if (path.extname(filePath) === ".js") contentType = "text/javascript";
  if (path.extname(filePath) === ".ico") contentType = "image/x-icon";

  fs.readFile(filePath, (err, data) => {
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
