/*

  Capture 10 itens para compor a lista de um supermercado;

  Após capturar os 10 itens, imprima-os, separando por virgula.

*/

let item = []

for (let i = 1; i <= 10; i++) {
  item.push(prompt(`Insira o item de número ${i}: `))
}

alert(item)
