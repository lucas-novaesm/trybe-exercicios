// Faça um programa que retorne o maior de três números. Defina, no 
// começo do programa, três constantes com os valores que serão comparados.

function maior (a, b, c) {
    if (a > b && a > c) {
            return 'a é o maior'
    }   else if (b > a && b > c) {
            return 'b é o maior'
    }   else {
            return 'c é o maior'
    }
}

console.log(maior(700, 6800, 900));