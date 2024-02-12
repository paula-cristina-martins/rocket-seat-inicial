/*

Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- Crie uma função que irá calcular a média das notas de cada aluno;
- Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

const estudantes = [
  {
    nome: "João",
    nota1: 5.0,
    nota2: 6.0,
  },
  {
    nome: "Ana",
    nota1: 9.0,
    nota2: 9.0,
  },
  {
    nome: "Maria",
    nota1: 8.0,
    nota2: 6.0,
  },
]

function MediaEstudante(estudante, nota1, nota2) {
  const media = (nota1 + nota2) / 2

  let mensagem = `A média do(a) aluno(a) foi de: ${media.toFixed(2)}.`

  if (media >= 7) {
    alert(`${mensagem} \nParabéns ${estudante}, você foi aprovado(a)!`)
  } else {
    alert(
      `${mensagem} \nOps ${estudante}, você foi reprovado(a)! Tente novamente!`
    )
  }
}

for (let i of estudantes) {
  MediaEstudante(i.nome, i.nota1, i.nota2)
}
