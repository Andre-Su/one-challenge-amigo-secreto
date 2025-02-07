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

let amigos = [];
let arrayAmigosSorteados = [];

/**
 * Recolhe o elemento do imput e adiciona na lista
 * */
function adicionarAmigo() {
    let texto = inputAmigo.value;
    if (amigos.includes(texto)) {
        alert("Já existe este nome na lista!");
        return;
    } 
    if (texto === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(texto);
    inputAmigo.value = "";
    inserirNaLista(amigos, viewListaAmigos);
}

/**
 * Sorteia um item da lista e retorna no elemento de resultado
 * */
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia!");
        return;
    }
    let indexSorteado = gerarNumero(amigos.length);
    let amigoSorteado = amigos[indexSorteado];

    if (!arrayAmigosSorteados.includes(amigos[indexSorteado])){
        arrayAmigosSorteados.push(amigoSorteado);
        inserirNaLista(arrayAmigosSorteados, viewResultado);
    }
    console.log(arrayAmigosSorteados);
}

function inserirNaLista(array, lista) {
    lista.innerHTML = "";
    for (let i = 0; i < array.length; i++){
        let itemLista = document.createElement("li");
        itemLista.textContent = array[i];
        lista.appendChild(itemLista);
    }
}

/**
 * Retona um valor pseudoaleatório entre 0 (inclusivo) e o numero máximo enviado como parâmetro (exclusivo)
 * @param {number} array 
 * @returns {number}
 */
function gerarNumero(array) {
    return Math.floor(Math.random() * array.length);
}
