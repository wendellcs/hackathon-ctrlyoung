function calcJuros(simple) {

    const index = simple == true ? "" : 2
    
    let c = Number(document.getElementById(`capital${index}`).value)
    let taxa = Number(document.getElementById(`taxa${index}`).value)
    let t = Number(document.getElementById(`tempo${index}`).value)

    let tipoTaxa = document.getElementById(`tipoTaxa${index}`).value
    let tipoTempo = document.getElementById(`tipoTempo${index}`).value

    let res = document.getElementById(`res${index}`)

    if (c == 0 || taxa == 0 || t == 0) {
        res.innerHTML = `Coloque um valor diferente de 0`
    } else {
        if (tipoTaxa == "mes" && tipoTempo == "ano") {
            t *= 12
        } else if (tipoTaxa == "ano" && tipoTempo == "mes"){
            taxa /= 12
        }
        let i = taxa / 100
        if(simple){
            let j = c * i * t
            let m = c + j
            res.innerHTML = `O valor do Juros é R$${j.toFixed(2)} e o Montante é R$${m.toFixed(2)}`
        }else{
            let m = c * (1 + i)**t
            let j = m - c
            res.innerHTML = `O valor do Montante é R$${m.toFixed(2)} e o valor do Juros é R$${j.toFixed(2)}`
        }
    }
}
