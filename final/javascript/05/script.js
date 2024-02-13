/* 
  5. Crie um script que declare uma variável e verifique se o seu valor é um boolean. 
  Se for, exiba a mensagem "É um boolean", caso contrário, exiba a mensagem "Não é um boolean".
*/

let x = Boolean(prompt("Insira algo: "))
if (isNaN(x) == true) {
  alert(`É um boolean!`)
} else {
  alert(`Não é um boolean!`)
}
