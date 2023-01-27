// 🚀 Modifique as concatenações para template literals.

const name = 'Adriana';
const lastName = 'Soares';
// console.log('Olá' + ',' + name + ' ' + lastName + '!');
mensagem = `Olá, ${name} ${lastName}!`;
console.log(mensagem);

function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
// console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
soma = `O resultado da soma de ${a} + ${b} é ${soma(a,b)}`;
console.log(soma);
