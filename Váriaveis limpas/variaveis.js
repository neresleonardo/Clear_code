// Conceito de Váriaveis limpas

// 1 erro é a falta de contexto 

let result = "asdasdadasdasdada";
let result2 = "asdasdadasdasdada";
let result3 = "asdasdadasdasdada";
let result4 = "asdasdadasdasdada";
let result5 = "asdasdadasdasdada";

// O result nesse caso não tem contexo do que ele realmente é

// Como resolver

// Parece que você está procurando informações sobre como criar e utilizar uma variável no JavaScript de maneira clara e contextualizada.
// Aqui estão algumas dicas para escrever um código JavaScript legível e bem organizado ao trabalhar com variáveis:


// Escolha nomes de variáveis significativos: Use nomes de variáveis que sejam descritivos e reflitam o propósito ou o tipo de dados que a variável armazena.
// Por exemplo, em vez de usar "x" ou "y", use nomes como "idade", "nomeCompleto" ou "listaDeProdutos".


// Utilize a convenção camelCase: No JavaScript, é comum usar a convenção camelCase ao nomear variáveis. 
// Isso significa que a primeira palavra começa com letra minúscula e cada palavra subsequente começa com uma letra maiúscula. Exemplo: "numeroDeItens".


// Declare variáveis com let, const ou var: No JavaScript moderno, é recomendado usar let e const para declarar variáveis,
// pois oferecem um escopo mais controlado em comparação com var. Use const para variáveis que não terão seu valor alterado e let para variáveis cujo valor pode ser alterado posteriormente.


// Adicione comentários, quando necessário: Se a variável tem um propósito específico que não é imediatamente óbvio,
// considere adicionar um comentário explicativo acima da declaração da variável.


// Agrupe variáveis relacionadas: Se várias variáveis estão relacionadas entre si,
// considere agrupá-las no mesmo bloco de código para facilitar a compreensão e a manutenção do código.


// Inicialize variáveis com valores apropriados: Ao declarar uma variável, é uma boa prática atribuir um valor inicial apropriado, se aplicável. 
//Isso pode evitar erros inesperados e tornar o código mais fácil de entender.


// Armazena informações sobre um usuário
const nomeCompleto = "João Silva";
let idade = 28;
let listaDeInteresses = ["ler", "correr", "viajar"];

// Exibe uma mensagem de boas-vindas ao usuário
function exibirMensagemDeBoasVindas(nome, interesses) {
  console.log(`Olá, ${nome}! Vejo que você gosta de ${interesses.join(", ")}.`);
}

// Chama a função com as variáveis nomeCompleto e listaDeInteresses
exibirMensagemDeBoasVindas(nomeCompleto, listaDeInteresses);


//   *********** FUJA das abreviações ******************

// Prefira nome longos do que nomes curtos e abreviados

// Forma errada
let value1 = "fdsfdsfsdfsd";

// Forma certa 
let liquidValue = "dsfdsfdsfsdf";


// ********** Redundancia: Um Problema Chato ***********

// Forma Errada
function CalculateTaxErrada(nomeDaNota, documentNomber, value, customer,date) {
  let nota = {
    notaNome: nomeDaNota,
    notaData: date,
    notaNumber: documentNomber,
    value: 0,
    customer: customer
  }
}

// Forma Certa
function CalculateTaxCerta(nomeDaNota, document, value, customer,date) {
  let nota = {
    nome: nomeDaNota,
    data: date,
    number: document,
    value: 0,
    customer: customer
  }
}

// ************ O Problema da Mistura de Idiomas ***********

// correto
function CalculateTaxCerta(invoiceName, document, value, customer,date) {
  let invoice = {
    name: invoiceName, // Ou tudo em ingles ou tudo em portugues
    data: date,
    number: document,
    value: 0,
    customer: customer
  }

  invoice.value = value;
}