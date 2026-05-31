// to create a server we have to import http module

const http = require("http");

const server = http.createServer((req, response) => {
  console.log("request made");

  // the request and response contains multiple properties stored in an object we can access it by printing them
  // now we are going to see the important ones in req
  console.log(req.url);
  console.log(req.method);

  //sending a response - first create a response header
  response.setHeader("Content-Type", "text/html");
  response.write("<h1>hi iam sarankumar</h1>");

  // we can also send data in multiple formats now iam going to send an html element
  response.write("\n");
  response.write("<a href='https://example.com'><h1>iam a pro player</h1></a>");
  response.end(); // end is mandatory to send the response
});

// after creating a server
server.listen(3000, "localhost", () => {
  console.log("server is listening");
});
