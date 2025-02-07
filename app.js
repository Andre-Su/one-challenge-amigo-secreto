//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
/* o que precisa ser feito:
ADICIONAR AMIGO
    recolher o texto
    verificar o texto vazio
    adicionar texto no array
    mostrar array na interface

SORTEAR AMIGO
    verificar lista vazia
    verificar tamanho
    gerar número aleatório

*/

const inputAmigo = document.getElementById("amigo");
// const btnAdicionar = document.getElementById("button-add");
// const btnSortear = document.getElementById("button-draw");
const viewListaAmigos = document.getElementById("listaAmigos");
const viewResultado = document.getElementById("resultado");

let arrayAmigos = [];
let arrayAmigosSorteados = [];

/**
 * Recolhe o elemento do imput e adiciona na lista
 * */
function adicionarAmigo() {
    let texto = inputAmigo.value;
    if (arrayAmigos.includes(texto)) {
        alert("Já existe este nome na lista!");
        return;
    } 
    if (texto === "") {
        alert("O nome não pode estar vazio!");
        return;
    }
    arrayAmigos.push(texto);
    console.log(arrayAmigos);
    inserirNaLista(texto, viewListaAmigos);
}

/**
 * Sorteia um item da lista e retorna no elemento de resultado
 * */
function sortearAmigo() {
    if (arrayAmigos.length === 0) {
        alert("A lista está vazia!");
        return;
    }
    let indexSorteado = gerarNumero(arrayAmigos.length);
    let amigoSorteado = arrayAmigos[indexSorteado];

    if (!arrayAmigosSorteados.includes(arrayAmigos[indexSorteado])){
        arrayAmigosSorteados.push(amigoSorteado);
        inserirNaLista(amigoSorteado, viewResultado);
    }
    console.log(arrayAmigosSorteados);
}

function inserirNaLista(texto, lista) {
    let itemLista = document.createElement("li");
    itemLista.textContent = texto;
    lista.appendChild(itemLista);
}

/**
 * Retona um valor pseudoaleatório entre 0 (inclusivo) e o numero máximo enviado como parâmetro (exclusivo)
 * @param {number} max 
 * @returns {number}
 */
function gerarNumero(max) {
    return parseInt(Math.random() * max);
}
