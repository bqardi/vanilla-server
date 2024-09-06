import http from "http";

const server = http.createServer(handleRequest);
server.listen(3000, onConnect);

function handleRequest(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
}

function onConnect(error) {
  if (error) return console.error(error);
  console.log("Server is running on port 3000");
}
