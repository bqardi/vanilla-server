// List off most used MIME types in a website: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
// Complete list of all MIME types in a website: https://www.iana.org/assignments/media-types/media-types.xhtml

export function getMimeType(extname) {
  // Common MIME types
  if (extname === ".html" || extname === ".htm") return "text/html";
  if (extname === ".js") return "text/javascript";
  if (extname === ".css") return "text/css";
  if (extname === ".txt") return "text/plain";
  if (extname === ".json") return "application/json";
  if (extname === ".ico") return "image/x-icon";
  if (extname === ".php") return "application/x-httpd-php";
  // Image MIME types
  if (extname === ".jpg" || extname === ".jpeg") return "image/jpeg";
  if (extname === ".png") return "image/png";
  if (extname === ".gif") return "image/gif";
  if (extname === ".svg") return "image/svg+xml";
  if (extname === ".webp") return "image/webp";
  // Font MIME types
  if (extname === ".woff") return "font/woff";
  if (extname === ".woff2") return "font/woff2";
  if (extname === ".ttf") return "font/ttf";
  if (extname === ".otf") return "font/otf";
  if (extname === ".eot") return "application/vnd.ms-fontobject";
  // Audio and video MIME types
  if (extname === ".mp4") return "video/mp4";
  if (extname === ".webm") return "video/webm";
  if (extname === ".ogg") return "audio/ogg";
  if (extname === ".mp3") return "audio/mpeg";
  if (extname === ".wav") return "audio/wav";
  // Application MIME types
  if (extname === ".xml") return "application/xml";
  if (extname === ".pdf") return "application/pdf";
  if (extname === ".zip") return "application/zip";

  // When a file's MIME type is set to "application/octet-stream",
  // it generally means that the file's content is not recognized or
  // does not fit into any other specific MIME type category.
  // As a result, the file is typically treated as a binary file, and
  // browsers will often prompt the user to download it                <-----------------
  // rather than attempting to display it.
  return "application/octet-stream"; // Default MIME type
}
