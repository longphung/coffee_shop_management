const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


handleCoffeeRoute = (res) => {
  const data = [{
    "name": "Cà phê đá", "price": 10000, "currency": "VND"
  }, {
    "name": "Cà phê sữa", "price": 10000, "currency": "VND"
  }]
  switch (res.method) {
    case 'GET':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(data));
      break;
    case "POST":
      // TODO: add another coffee type and return the whole array
    default:
      res.statusCode(405)
      res.end("Method not allowed")
  }
}

const server = http.createServer((req, res) => {
  console.log(`url: ${req.url} method: ${req.method}`)
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World');
      break;
    case "/coffee":
      handleCoffeeRoute(res);
      break;
    default:
      res.statusCode = 404;
      res.end("Route not found");
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
