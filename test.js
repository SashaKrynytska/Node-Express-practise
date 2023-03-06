const http = require("http");
const fs = require("fs").promises;

const PORT = 8080;

const requestHandler = async (request, response) => {
  //   if (request.url.indexOf("/home") >= 0) {
  //если мы получаем запрос урл хоум, даем такой ответ
  const manifest = fs.readFile("./package.json", "utf8");
  // записываем содержимое файла в ответ
  response.writeHead(200, { "Content-Type": "text/json" });
  return response.end(manifest);

  //   return response.end('{"url": "homepage"}');
  // response.end("<h1>GOIT</h1>");
  //   }
  //   response.writeHead(200, { "Content-Type": "text/json" });
  //   return response.end('{"url": "other"}');

  //   response.write("<h1>GOIT</h1>");
  //   response.end();
};

const server = http.createServer(requestHandler);
//server нужно запустить на порту ОС, чтобы сервер слушал клиентские запросы
server.listen(PORT, (err) => {
  if (err) {
    console.error("Error at a server launch:", err);
  }
  console.log(`Server works at port ${PORT}!`);
});
