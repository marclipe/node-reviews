import http from 'node:http';
import { Transform } from 'node:stream';

/*Transformando uma Stream em um Array*/
class TransformInArray extends Transform {
  _write(chunk, encoding, callback) {
    const trasnformed = (chunk.toString().split(""));
    console.log(trasnformed);
    callback(null, Buffer.from(trasnformed));
  }
}


const port = 3334;

const server = http.createServer((req, res) => {
  return req
  .pipe(new TransformInArray())
  .pipe(res) 
})

server.listen(port)