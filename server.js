const express = require("express");

const app = express();

const port = 8080;

// Экспресс определяет пути последовательно (если не найдется обработчик, тогда отправит 404)

// определяем маршруты через метод
app.get("/", (req, res) => {
  //   res.sendStatus(200); // по умолчанию статус 200
  res.send("get request");

  //   res.send("<h1>Homepage!</h1>");
});

// если хотите отправить обработчик запроса для всех параметров, игнорируете первый параметр и он будет срабатывать для всех
// app.get((req, res) => {

app.post("/home", (req, res) => {
  res.send("post request");
});

app.delete("/home", (req, res) => {
  res.send("delete request");
});

app.use((req, res, next) => {
  res.send("middleware request");
  next();
});

// app.get("*", (req, res) => {
//   //
// });

app.listen(port, (err) => {
  if (err) console.error("Error!");
  console.log("Example app listening on port 8080!");
});
