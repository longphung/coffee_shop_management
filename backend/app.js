const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


handleCoffeeRoute = (req, res) => {
  const data = [{
    "name": "Cà phê đá", "price": 10000, "currency": "VND"
  }, {
    "name": "Cà phê sữa", "price": 10000, "currency": "VND"
  }]
  switch (req.method) {
    case 'GET':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(data));
      break;
    case "POST":
      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json')
      req.on('data', (chunk) => {
        const reqData = JSON.parse(chunk.toString())
        console.log(reqData)
        if (!reqData.name) {
          res.statusCode = 400;
          res.end("Bad request, name is require")
          return;
        }
        data.push(reqData)
        // TODO: add reqData to data
        res.end(JSON.stringify(data));
      })
      break;
    default:
      res.statusCode = 405
      res.end("Method not allowed")
      break;
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
      handleCoffeeRoute(req, res);
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
