let firtNumber = prompt("Digite o primeiro número: ")
let seconNumber = prompt("Agora o segundo número: ")

let sum = Number(firtNumber) + Number(seconNumber)
let sub= Number(firtNumber) - Number(seconNumber)
let mult= Number(firtNumber) * Number(seconNumber)
let div= Number(firtNumber) / Number(seconNumber)
let rest = Number(firtNumber) % Number(seconNumber)

prompt("A soma dos números é: ", sum)
prompt("A subtração dos números é: ", sub)
prompt("A multiplicação dos números é: ", mult)
prompt("A divisão dos números é: ", div)
prompt("A o resto dos números é: ", rest)

if (rest == 0) {
    alert("O resultado é par")
}else {
    alert("O resultado é ímpar")
}

if (firtNumber==seconNumber){
    alert("Os números são iguais")
}else {
    alert ("Os números inseridos são diferentes")
}


