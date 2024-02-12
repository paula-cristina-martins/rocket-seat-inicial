/*

- A soma dos dois números;
- A subtração dos dois números;
- A multiplicação dos dois números;
- A divisão dos dois números;
- O resto da divisão dos dois números;

- Verifique se a soma dos dois números é par (ou ímpar);
- Verifique se os dois números inseridos são iguais (ou diferentes).

*/

let a = Number(prompt("Insira o primeiro número: "))
let b = Number(prompt("Insira o segundo número: "))

alert(`A soma de ${a} + ${b} = ${a + b}`)
alert(`A subtração de ${a} - ${b} = ${a - b}`)
alert(`A multiplicação de ${a} * ${b} = ${a * b}`)
alert(`A divisão de ${a} / ${b} = ${a / b}`)
alert(`O resto divisão de ${a} % ${b} = ${a % b}`)

if ((a + b) % 2 == 0) {
  alert(`A soma de ${a} + ${b} é par`)
} else {
  alert(`A soma de ${a} + ${b} é ímpar`)
}

if (a == b) {
  alert(`Os números ${a} e ${b} são iguais`)
} else {
  alert(`Os números ${a} e ${b} são diferentes`)
}
