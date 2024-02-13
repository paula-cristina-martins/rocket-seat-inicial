/* 
  3. Crie um script que declare uma variável e verifique se o seu valor é um número. 
     Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
*/

let x = Number(prompt("Insira algo: "))

if (isNaN(x) == false) {
  alert(`É um número!`)
} else {
  alert(`Não é um número!`)
}
