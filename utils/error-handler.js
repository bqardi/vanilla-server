export function errorHandler(res, err) {
  if (err.code === "ENOENT") {
    return {
      statusCode: 404,
      header: { "Content-Type": "text/plain" },
      message: "File not found!",
    };
  }

  if (err.code === "EACCES") {
    return {
      statusCode: 403,
      header: { "Content-Type": "text/plain" },
      message: "Permission denied!",
    };
  }

  if (err.code === "EISDIR") {
    return {
      statusCode: 400,
      header: { "Content-Type": "text/plain" },
      message: "Invalid path!",
    };
  }

  console.error(err);

  return {
    statusCode: 500,
    header: { "Content-Type": "text/plain" },
    message: "Error loading file",
  };
}
