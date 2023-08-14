let resultado = fetch("https://rickandmortyapi.com/api")
    .then(resultado => resultado.json())
    .then(valor => valor)

console.log(await resultado)

let funcionPrueba = async () => {
    const resultado = await fetch("https://rickandmortyapi.com/api");
    return resultado.json();
};

(async () => {
    let awaitPrueba = await funcionPrueba();
    console.log(awaitPrueba);
})

();


let awaitPrueba = funcionPrueba().then();

console.log(awaitPrueba);