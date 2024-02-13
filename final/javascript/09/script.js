/* 
  9. Crie um script que declare uma variável e verifique se o seu valor é um número par. 
  Se for, exiba a mensagem "É um número par", 
  caso contrário, exiba a mensagem "Não é um número par".
*/

let numero = Number(prompt("Insira o número: "))

if (numero % 2 == 0) {
  alert(`É um número par.`)
} else {
  alert(`Não é um número par.`)
}
