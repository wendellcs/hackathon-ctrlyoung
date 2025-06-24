document.querySelector('.calcular-juros-simples').addEventListener('click', (e) => {
    calcular(e)
})
function calcular(event) {

   event.preventDefault()
    
    let c = Number(document.getElementById("capital").value)
    let taxa = Number(document.getElementById("taxa").value)
    let t = Number(document.getElementById("tempo").value)

    let tipoTaxa = document.getElementById("tipoTaxa").value
    let tipoTempo = document.getElementById("tipoTempo").value

    let res = document.getElementById("res")

    if (c == 0 || taxa == 0 || t == 0) {
        res.innerHTML = `Coloque um valor diferente de 0`
    } else {
        if (tipoTaxa == "mes" && tipoTempo == "ano") {
            t *= 12
        } else if (tipoTaxa == "ano" && tipoTempo == "mes"){
            taxa /= 12
        }
        let i = taxa / 100
        let j = c * i * t
        let m = c + j
        res.innerHTML = `O valor do Juros é R$${j.toFixed(2)} e o Montante é R$${m.toFixed(2)}`
    }
}

function Composto() {
    let c2 = Number(document.getElementById("capital2").value)
    let taxa2 = Number(document.getElementById("taxa2").value)
    let t2 = Number(document.getElementById("tempo2").value)

    let tipoTaxa2 = document.getElementById("tipoTaxa2").value
    let tipoTempo2 = document.getElementById("tipoTempo2").value

    let res2 = document.getElementById("res2")

    if (c2 == 0 || taxa2 == 0 || t2 == 0) {
        res2.innerHTML = `Coloque um valor diferente de 0`
    } else {
        if (tipoTaxa2 == "mes2" && tipoTempo2 == "ano2") {
            t2 *= 12
        } else if (tipoTaxa2 == "ano2" && tipoTempo2 == "mes2") {
            taxa2 /= 12
        }
        let i2 = taxa2 / 100
        let m2 = c2 * (1 + i2)**t2
        let j2 = m2 - c2
        res2.innerHTML = `O valor do Montante é R$${m2.toFixed(2)} e o valor do Juros é R$${j2.toFixed(2)}`
    }
}