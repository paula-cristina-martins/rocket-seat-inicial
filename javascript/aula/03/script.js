/*  

  Capturar 2 números e realizar as operações:
    1. soma
    2. subtração
    3. multiplicação
    4. divisão 
    5. resto da divisão

*/

let numberOne = Number(prompt("Insira o número 1: "))
let numberTwo = Number(prompt("Insira o número 2: "))

soma = numberOne + numberTwo
sub = numberOne - numberTwo
multi = numberOne * numberTwo
div = numberOne / numberTwo
resto = numberOne % numberTwo

alert(`Número 1: ${numberOne} - Número 2: ${numberTwo} 
      - Soma: ${soma} 
      - Subtração: ${sub} 
      - Multiplicação: ${multi} 
      - Divisão: ${div} 
      - Resto de Divisão: ${resto}
`)
