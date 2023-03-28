# DRY

O conceito DRY (do inglês, "Don't Repeat Yourself") é um princípio fundamental na programação que enfatiza a importância de evitar a repetição de código.

Em outras palavras, o DRY nos diz para garantir que cada pedaço de informação em nosso código seja representado de forma única e precisa.

O objetivo do DRY é tornar o código mais fácil de ler, entender e manter. Quando seguimos este princípio, podemos evitar problemas como códigos confusos e difíceis de manter, além de aumentar a produtividade e a qualidade do código.



Um exemplo de como o DRY pode ser aplicado em um código é quando temos um trecho de código(fora de uma função) que é chamado em várias partes do código.

Em vez de escreve-lo em vários lugares, podemos criar uma única versão desse código, em forma de função e chamá-la sempre que precisarmos. Isso garante que haja apenas uma única fonte de verdade para essa função, o que facilita a manutenção e a leitura do código.

Outra forma de seguir o DRY é evitar a duplicação de dados. Por exemplo, se temos uma lista de produtos em nosso código, é importante garantir que cada produto seja representado de forma única. Caso contrário, corremos o risco de ter informações inconsistentes ou desatualizadas em diferentes partes do código.



Veja aqui um exemplo de um código que não segue o conceito DRY:



function calculateTotalPrice3(item1, item2, item3) {
  return item1.price + item2.price + item3.price;
}
 
function calculateTotalPrice4(item1, item2, item3, item4) {
  return item1.price + item2.price + item3.price + item4.price;
}
 
function calculateTotalPrice5(item1, item2, item3, item4, item5) {
  return item1.price + item2.price + item3.price + item4.price + item5.price;
}
 
const product1 = { name: "Product 1", price: 5 };
const product2 = { name: "Product 2", price: 10 };
const product3 = { name: "Product 3", price: 15 };
const product4 = { name: "Product 4", price: 20 };
const product5 = { name: "Product 5", price: 25 };
 
console.log(calculateTotalPrice3(product1, product2, product3));
// Output: 30
 
console.log(calculateTotalPrice4(product1, product2, product3, product4));
// Output: 50
 
console.log(calculateTotalPrice5(product1, product2, product3, product4, product5));


Perceba que o Dev que fez esse código criou 3 funções para calcular o preço total de 3,4 e 5 produtos diferentes, porém ele poderia resumir tudo em uma única função, assim:

function calculateTotalPrice(products, maxSize) {
    let productsList = [...products];
    productsList.length = maxSize;
    let total = 0;
    productsList.forEach(product => {
        total += product.price;
    });
    return total;
}
  
let products = [
    { name: "Product 1", price: 5 },
    { name: "Product 2", price: 10 },
    { name: "Product 3", price: 15 },
    { name: "Product 4", price: 20 },
    { name: "Product 5", price: 25 }
]
 
 
  console.log(calculateTotalPrice(products,3));
  console.log(calculateTotalPrice(calculateTotalPrice(products,4));
  console.log(calculateTotalPrice(calculateTotalPrice(products,5));


Em tão lembre-se, evite repetições sempre!

# KISS
O conceito KISS, ou "Keep It Simple, Stupid", é um princípio popular em muitos campos, incluindo a programação. O conceito é baseado na ideia de que, em geral, as soluções simples são as melhores. É melhor manter as coisas simples do que complicá-las desnecessariamente.



Em programação, o conceito KISS pode ser aplicado de várias maneiras. Por exemplo, é importante escrever código que seja fácil de entender e de manter. Isso significa escrever código que seja limpo, organizado e bem documentado. Além disso, é importante evitar criar soluções complexas que possam causar problemas no futuro.



Um dos principais benefícios de seguir o conceito KISS é que isso pode tornar o processo de desenvolvimento de software mais eficiente. Quando o código é simples e fácil de entender, é mais fácil trabalhar em equipe e colaborar com outros programadores. Além disso, é mais fácil adicionar novas funcionalidades e corrigir bugs no código.



Outro benefício é que código simples é geralmente mais confiável do que código complexo. Quanto mais complexo é o código, mais chances existem de que ele contenha erros ou falhas. Isso pode levar a problemas de desempenho e a instabilidade do software. Ao contrário, código simples tem menos probabilidade de conter erros e, portanto, é mais confiável.



Além disso, o conceito KISS também pode ser aplicado à arquitetura de software. É importante criar soluções de software que sejam escaláveis e flexíveis, mas que ao mesmo tempo sejam simples e fáceis de entender. Isso pode ajudar a garantir que o software seja capaz de crescer e evoluir com o tempo, sem ficar cada vez mais complexo e difícil de gerenciar.



Em resumo, o conceito KISS é um princípio importante na programação. Ao seguir esse conceito, é possível criar soluções de software simples, eficientes e confiáveis. Isso pode tornar o processo de desenvolvimento de software mais eficiente e ajudar a garantir que o software seja capaz de evoluir e crescer com o tempo.



Ou seja, quer usar aquele padrão arquitetural super complexo e hypado que você viu no Linkedin? com dezenas de camadas de abstração?



Esqueça isso, em alguns projetos arquiteturas complexas FAZEM SENTIDO, mas em MUITOS, só vão fazer com que você seja menos produtivo e gere código com mais camadas de complexidade.



Código esse que pode se tornar uma dor de cabeça para dar manutenção no futuro.



Bote uma coisa na cabeça, o simples funciona, e funciona MUITO!