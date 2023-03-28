// Clonando uma váriavel 

function Teste() {
    let a = {
        nome: "A",
        idade: 24
    }

    let b = {...a}
}

// Caso voce passe o nome da mesma forma do paramentro ele vai omitir 

function Teste(nome, idade) {

    let b = {
        nome,
        idade
        // nome = nome
    }
}
