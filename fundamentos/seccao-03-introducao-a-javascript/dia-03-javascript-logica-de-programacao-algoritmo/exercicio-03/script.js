let palavras = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = palavras[0];
let menorPalavras = palavras[0];

for (let index = 0; index < palavras.length; index += 1) {
  if (palavras[index].length > maiorPalavra.length) {
    maiorPalavra = palavras[index];
  }
}

for (let index = 0; index < palavras.length; index += 1) {
  if (palavras[index].length < menorPalavras.length) {
    menorPalavras = palavras[index];
  }
}

console.log(maiorPalavra);
console.log(menorPalavras);