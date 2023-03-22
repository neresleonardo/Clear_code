// Coisas erradas na função

function CalculateTaxErrada(invoiceName, document, value, customer,date) {
  let invoice = {
    name: invoiceName, // Ou tudo em ingles ou tudo em portugues
    data: date,
    number: document,
    value: 0,
    customer: customer
  }

  let generalTax = "dsadsdsd";
  let cityTax = "dsfdfsdfsdf";
  let companyTax = "dsadsdsd";
  let sharedTax = "dsfdfsdfsdf";

  invoice.value = value;

  let liquidValue = invoice.value - sharedTax; //aparti daqui temos muito calculo o que não torna o código limpo
  invoice.value = liquidValue - generalTax - cityTax - cityTax -companyTax;
  return invoice;
}

// ****************************** Melhorando *****************

let purchase = {
  name: "sdfff",
  data: Date.now(),
  number: "432432",
  value: 123,
  customer: "Leonardo fdfdfd"
}

CalculateTaxCerta(purchase)

function CalculateTaxCerta(purchase) {

  let invoice = {...purchase};
  // let invoice = {
  //   name: purchase.name, // Ou tudo em ingles ou tudo em portugues
  //   data: purchase.data,
  //   number: purchase.number,
  //   value: purchase.value,
  //   customer: purchase.customer
  // }

  invoice.value = GetLiquedValue(invoice.value);
  invoice.value = GetTaxDeductedValue(invoice.value)
  return invoice;
}

function GetLiquedValue(value){
  let sharedTax = "dsfdfsdfsdf";
  return value - sharedTax;
}

function GetTaxDeductedValue(value) {
  let generalTax = "dsadsdsd";
  let cityTax = "dsfdfsdfsdf";
  let companyTax = "dsadsdsd";

  return value - generalTax - cityTax - cityTax -companyTax;
}

// Cada função que voce for criar deve fazer apenas uma coisa. 
// Não coloque funcções que façam mais de uma coisas por que pode ficar sujo

//  ***********Objetos como parâmetros************ //

