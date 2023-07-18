
function calcular() {      

let dinheiro = document.getElementById('idin')
let pix = document.getElementById('ipix')
let debito = document.getElementById('ideb')
let credito = document.getElementById('icred')

let din = Number(dinheiro.value)
let pi = Number(pix.value)
let deb = Number(debito.value)
let cre = Number(credito.value)

let percentual = document.getElementById('icom').value

let debit = document.getElementById('idebito').value
let credit = document.getElementById('icredito').value

let resdeb = deb - deb /100 * debit
let recred = cre - cre /100 * credit

    res = din + pi + resdeb + recred

    resul = res /100 * percentual
    
let total = resul.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    resultado.innerHTML = `<strong>${total}</strong>`
}
