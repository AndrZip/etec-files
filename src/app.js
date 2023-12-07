const http = require('http');
const fs = require('fs');
const path = require('path');
const Database = require('../src/database/connection');
Database();


const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;

  if (filePath === './') { 
    filePath = path.resolve('public', 'login-page.html');
  }

  const extname = path.extname(filePath).toLowerCase();
  const contentType = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.svg': 'application/image/svg+xml'
  }[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    console.log(`FILE PATH: ${filePath}\nERROR: ${error}\nCONTENT: ${content}`)
    if (error) {
      const statusCode = error.code === 'ENOENT' ? 404 : 500;
      res.writeHead(statusCode, { 'Content-Type': 'text/html' });
      res.end(`${statusCode} ${error.message}`);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
