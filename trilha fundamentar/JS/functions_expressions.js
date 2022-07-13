// function expression
// function anonymous


// parâmetros (parametros)

    const sum = function(number1, number2){

        total = number1 + number2 // declaração de váriavel sem definição gera uma variável global
        return total
        
        // return → dá-se o retorno do programa ou função, retornando a variável ou o valor que está á frente

    }

    sum(2, 3) // argumentos - arguments

    sum(50, 23)

    sum(0, -3)

    let nmbr1 = 18
    let nmbr2 = 75

    sum(nmbr1, nmbr2)

    console.log(`O número 1 é ${nmbr1}`)
    console.log(`O número 2 é ${nmbr2}`)
    console.log(`A soma é ${sum(nmbr1, nmbr2)}`)
    
    //a função já está faezndo o calculo e printando esse cálculo.