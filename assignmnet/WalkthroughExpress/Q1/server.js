const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Men & Women Dummy Data');
  } else if (req.url === '/men') {
    fs.readFile('products.json', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        const products = JSON.parse(data).men.slice(0, 10);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
      }
    });
  } else if (req.url === '/women') {
    fs.readFile('products.json', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        const products = JSON.parse(data).women.slice(0, 10);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
