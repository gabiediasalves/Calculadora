var n1 = parseFloat(prompt('Informe um número: '))
var n2 = 0
var rest = 0
cavalo = 0


function vezes(){
    var n2 = parseFloat(prompt('Informe outro número: '))
    n1 += (n1 * n2) - n1 
    res.innerHTML = `<p>Resultado: ${n1}</p>`

    cavalo = 0
    while (cavalo < n1 ){
        res.innerHTML += `\u{1F40E}	`
        cavalo ++
    }       
}

function mais(){
    var n2 = parseFloat(prompt('Informe outro número: '))
    n1 += (n1 + n2) - n1 
    res.innerHTML = `<p>Resultado: ${n1}</p>`

    cavalo = 0
    while (cavalo < n1 ){
        res.innerHTML += `\u{1F40E}	`
        cavalo ++
    }       
}

function menos(){
    var n2 = parseFloat(prompt('Informe outro número: '))
    n1 += (n1 - n2) - n1 
    res.innerHTML = `<p>Resultado: ${n1}</p>`

    cavalo = 0
    while (cavalo < n1 ){
        res.innerHTML += `\u{1F40E}	`
        cavalo ++
    }       
}

function dividido(){
    var n2 = parseFloat(prompt('Informe outro número: '))
    n1 += (n1 / n2) - n1 
    res.innerHTML = `<p>Resultado: ${n1}</p>`

    cavalo = 0
    while (cavalo < n1 ){
        res.innerHTML += `\u{1F40E}	`
        cavalo ++
    }       
}




