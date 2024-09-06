import { extname, dirname, join } from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const utils = dirname(filePath);
const root = dirname(utils);

export function getFile(req, folder = "public") {
  const path = join(
    root,
    folder,
    req.url.endsWith("/") ? `${req.url}index.html` : req.url
  );
  const extension = extname(path);

  return {
    path,
    extension,
  };
}
