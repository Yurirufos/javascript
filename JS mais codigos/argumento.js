//  arugumento dentro de uma function

function price() {
 let total = 0 

 for (let value of arguments) {
  total += value 

 }
 return total
}

console.log(price(20, 50, 60,))

// colocar parâmetros default em um função
// exemplo con uma conta de juros de financiamento ao ano 

function carLoan(Loan, rate = 17.5, years = 5) {
return( Loan * rate / 100 * years ) + Loan
}

console.log(carLoan(30000))
