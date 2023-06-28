import { createServer } from "http";

const hostname = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

const server = createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/plain");
  // res.end("Hello World");
  if (req.url === "/") {
    res.end("Hello to Simple CRUD API");
  } else if (req.url === "/users") {
    res.end("Users");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
