const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hii from AWS CI/CD Pipeline! This is the new line I want to for Webhook update.. updated the script with real time Blue-Green clusters!\n');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
