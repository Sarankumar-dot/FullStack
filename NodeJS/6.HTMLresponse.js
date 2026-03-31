const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request made");

  console.log(req.url);

  res.setHeader("Content-Type", "text/html");

  if (req.url == "/") {
    fs.readFile("./data/index.html", (err, data) => {
      if (err) {
        console.log(err.message);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url == "/home") {
    res.statusCode = 301;
    res.setHeader("Location", "/");
    res.end();
  } else if (req.url == "/about") {
    fs.readFile("./data/about.html", (err, data) => {
      if (err) {
        console.log(err.message);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    fs.readFile("./data/notfound.html", (err, data) => {
      if (err) {
        console.log(err.message);
        res.end();
      } else {
        res.statusCode = 404;
        res.end(data);
      }
    });
  }
});

server.listen(3000, "localhost", () => {
  console.log("server is listening");
});
