import { extname, dirname, join } from "path";
import { fileURLToPath } from "url";
import { getMimeType } from "./get-mime-type.js";

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
  const contentType = getMimeType(extension);

  return {
    path,
    contentType,
  };
}
