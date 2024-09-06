import http from "http";
import fs from "fs";

const server = http.createServer(handleRequest);
server.listen(3000, onConnect);

function handleRequest(req, res) {
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error: Could not read file");
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function onConnect(error) {
  if (error) return console.error(error);
  console.log("Server is running on port 3000");
}
