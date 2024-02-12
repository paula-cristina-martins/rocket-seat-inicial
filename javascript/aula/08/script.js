/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes.
*/

let pacientes = [
  {
    nome: "Ana",
    idade: 19,
    peso: 596,
    altura: 159,
  },
  {
    nome: "João",
    idade: 24,
    peso: 786,
    altura: 19,
  },
]

let nomePacientes = []

for (let i of pacientes) {
  nomePacientes.push(i.nome)
}

alert(`Lista dos nomes dos pacientes: ${nomePacientes}`)
