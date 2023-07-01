import { Readable, Writable, Transform } from 'node:stream';

/*Para deixar a letra minuscula*/
class LettersUpperStream extends Readable {
  letters = "ABC"; 

  _read(){
    setTimeout(() => {
      const l = this.letters.toUpperCase();
      console.log(l);
      const buf = Buffer.from(String(l));

      this.push(buf);
      console.log(buf);
    }, 1000)
  }
}

/*Transformando uma Stream em um Array*/
class TransformInArray extends Transform {
  _write(chunk, encoding, callback) {
    console.log(chunk.toString().split(''));
    callback();
  }
}

/*Para deixar a letra maiúscula*/
class LetterLowerStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(chunk.toString().toLowerCase());
    callback();
  }
}

new LettersUpperStream()
  .pipe(new TransformInArray())
  .pipe(new LetterLowerStream());
