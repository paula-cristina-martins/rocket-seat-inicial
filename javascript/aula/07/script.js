/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let lista = []

let option

let nome = prompt("Qual seu nome? ")

while (option != 3) {
  option = Number(
    prompt(`
    Olá ${nome}! Digite o número da opção desejada!
    1. Cadastrar um item na lista.
    2. Mostrar itens cadastrados.
    3. Sair do programa.
  `)
  )

  switch (option) {
    case 1:
      lista.push(prompt("Insira um elemento na lista: "))
      break

    case 2:
      if (lista.length == 0) {
        alert("Não existem itens cadastrados!")
      } else {
        alert(lista)
      }
      break

    case 3:
      alert("Programa finalizado com sucesso!")
      break

    default:
      alert("Opção escolhida inválida do menu!")
      break
  }
}
