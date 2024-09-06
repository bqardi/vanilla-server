import { WebSocketServer } from "ws";
import fs from "fs";
import path from "path";

export function setupHotReload(server) {
  const wss = new WebSocketServer({ server });
  const watchedFolder = path.join(process.cwd(), "public");

  fs.watch(watchedFolder, { recursive: true }, (eventType, filename) => {
    if (!filename) return;

    wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send("reload");
      }
    });
  });
}
