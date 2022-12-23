import http from 'http';

const server = http.createServer((_req, res) => {
  res.writeHead(200);
  res.end(JSON.stringify({ message: 'Hello from server' }));
});

const PORT = Number(process.env.PORT ?? 3000);

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
