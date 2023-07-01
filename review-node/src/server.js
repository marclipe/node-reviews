//Importo me módulo interno do Node
import http from 'node:http'

const books = [];
const port = 3000;

//Crio meu servidor com parametros req e res
const server = http.createServer((req, res) => {
  const {method, url} = req

  //Usando métodos GET para listar e POST par criar livros
  if (method === 'GET' && url === '/books') {
    return res
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(books));
  } 

  if (method === 'POST' && url === '/books') {
    books.push(
    {
      id: 1, 
      name: 'Bíblia Sagrada',
      gender: 'Livro Sagrado',
    }, 
    {
      id: 2, 
      name: 'Diário de um Banana 1',
      gender: 'HQ'
    }
    );
    return res.writeHead(201).end();
  }

  //Finalizo a resposta HTTP
  return res.writeHead(404).end();
})

server.listen(port, 'localhost', () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
});