// Manipulando Arrays

    // Transformar uma cadeia de caracteres em elementos de um array

    let word = ["html", "css", "js"]
    console.log(word)
    console.log(' ')

    // adicionar um item no fim
    word.push("nodejs")
    console.log(word)
    console.log(' ')
    
    // adicionar no começo
    word.unshift("sql")
    console.log(word)
    console.log(' ')
    
    // remover do fim
    word.pop()
    console.log(word)
    console.log(' ')
    
    // remover do começo
    word.shift()
    console.log(word)
    console.log(' ')
    
    // pegar somente alguns elementos do array
    console.log(word.slice(1,3))
    console.log(' ')
    
    // remover 1 ou mais items em qualquer posição do array
    word.splice(1, 1)
    console.log(word)
    console.log(' ')
    
    // encontrar a posição de um elemento no array
    let index = word.indexOf('html')
    word.splice(index, 1)


    console.log(word)