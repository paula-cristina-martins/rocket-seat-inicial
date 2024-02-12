/*

  Solicitar o nome do aluno e as 3 notas do bimestre
  - Calcular a média.

  - Se o aluno passou - Parabéns!
  - Se o aluno esta em recuperação - Estude, que ainda dá tempo!
  
  - Exibir a mensagem, nome do aluno e média.

*/

let nome = prompt("Nome do(a) aluno(a): ")
let nota1 = Number(prompt("Insira a 1 nota: "))
let nota2 = Number(prompt("Insira a 2 nota: "))
let nota3 = Number(prompt("Insira a 3 nota: "))

let media = (nota1 + nota2 + nota3) / 3

let resultado = media >= 6

media = media.toFixed(2)

let mensagem = `${nome}, sua média foi de ${media}.`

if (resultado) {
  alert(`${mensagem} Parabéns você foi aprovado!`)
} else {
  alert(`${mensagem} Estude, que ainda dá tempo!`)
}
