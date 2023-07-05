import http from 'node:http'
import { json } from "./middleware/json.js";

const books = []

const port = 3333

const server = http.createServer(async(req, res) => { 
  const { method, url} = req
  
  await json(req, res)

  if (method === 'GET' && url === '/books') {
    return res.end(JSON.stringify(books))
  }

  if(method === 'POST' && url === '/books') {
    const {name, gender, id} = req.body

    books.push({
      id, 
      name, 
      gender
    })
    return res.writeHead(201).end();
  }

  return res.writeHead(404).end()
})

server.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}/books`)
})
