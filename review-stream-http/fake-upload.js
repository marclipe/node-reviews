import { Readable } from 'node:stream'

/*Para deixar a letra minuscula*/
class LettersUpperStream extends Readable {
  letters = "ABC";

  _read() {
    setTimeout(() => {
      const l = this.letters.toUpperCase();
      console.log(l);
      const buf = Buffer.from(String(l));

      this.push(buf);
      console.log(buf);
    }, 1000);
  }
}

fetch("http://localhost:3334"), {
  method: 'POST',
  body: new LettersUpperStream(),
}