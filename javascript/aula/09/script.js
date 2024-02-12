/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* 
Formula - (peso / ((altura / 100) ** 2)).toFixed(2)
*/

let pacientes = [
  {
    nome: "Ana",
    idade: 19,
    peso: 190,
    altura: 100,
  },
  {
    nome: "João",
    idade: 24,
    peso: 70,
    altura: 170,
  },
]

function IMC(peso, altura) {
  return (peso / (altura / 100) ** 2).toFixed(2)
}

function PacienteIMC(paciente) {
  return `Paciente ${paciente.nome} possui o IMC de: ${IMC(
    paciente.peso,
    paciente.altura
  )}.`
}

for (let i of pacientes) {
  alert(PacienteIMC(i))
}
