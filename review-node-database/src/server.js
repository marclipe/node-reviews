import http from "node:http";
import { json } from "./middlewares/json.js";
import { Database } from "./database.js";
import { randomUUID } from "node:crypto";

const database = new Database();

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  if (method === "GET" && url === "/books") {
    const books = database.select("books");

    return res.end(JSON.stringify(books));
  }

  if (method === "POST" && url === "/books") {
    const { name, gender } = req.body;

    const book = {
      id: randomUUID(),
      name,
      gender,
    };

    database.insert("books", book);

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3001)