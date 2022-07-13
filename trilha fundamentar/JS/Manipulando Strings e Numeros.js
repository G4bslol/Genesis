// Manipulando Strings e Números

    // Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

    // let string = "123"
    // console.log(Number(string))
    // let number = 321
    // console.log(String(number))

    // aqui temos uma inversão de tipagem ↑

    //Manipulando Strings e Números

    // Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

    let word01 = "Paralelepipedo"
    console.log(word.length)
    let number01 = 1234
    console.log(String(number).length)



    // Transformar um número quebrado com 2 casas decimais e trocar ponto por vigula 

    console.log(`Transformar um número quebrado com 2 casas decimais e trocar ponto por vigula `)
    let number = 3.14159265359
    console.log(number.toFixed(4).replace(".", ","))

    // Colocar o texto em caixa alta ou caixa baixa .toLowerCase() // .toUpperCase()
    console.log(' ')
    console.log(`Colocar o texto em caixa alta ou caixa baixa .toLowerCase() // .toUpperCase()`)
    let word = "Gosto Muito de Programar"
    console.log(word.toLowerCase().toUpperCase())


    // Verificar se existe uma palavra na frase .includes('string')
    console.log(' ')
    console.log(`Verificar se existe uma palavra na frase 'Eu quero viver'`)
    let phrase1 = "Eu quero viver"
    console.log(phrase1.includes("Amor")) // false, pois o JS é sensintivo, sensível aos detálhes no caso {A}mor

    // Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array.
    // Depois disso, transforme o array em um texto e onde eram espaços, coloque `_`
        
        // usando .split("") → separar []X[]X[] usado .join("") → juntar

    console.log(' ')
    console.log(`Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array`)
    let phrase2 = "Eu também quero viver o amor!"
    let myArray = phrase2.split(" ") // separa por "espaços"
    console.log(myArray) // array separado posição por posição pelo espaço
    let phraseWithUnderscore = myArray.join("_")
    console.log(' ')
    console.log(`Transformar o array em um texto e onde eram espaços, colocar _`)
    console.log(phraseWithUnderscore) // frase juntada espaço por underline ou Underscore

    // Criando array com construtor
    console.log(' ')
    console.log('Criando array com construtor')
    let myArray2 = new Array('a', 'b', 'c') // let {nome} = new Array() → constructor
    console.log(myArray2)

    // Contar elementos de um array

    console.log(' ')
    console.log(`Contar elementos de um array`)
    console.log([
        'a',
        {type: "array"},
        function() { return 'alo'},
    ][2]())

    console.log([
        'a',
        'b',
        'c'
    ].length)