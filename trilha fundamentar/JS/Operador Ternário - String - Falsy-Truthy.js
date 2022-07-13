// Operador condicional ternário

    /*
    
    let condição, valor1, valor2
    // Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições e podem entregar valores diferentes com base nelas.

    // Funciona da seguinte forma;

    condição ? valor1 : valor2


    // Exemplo de uso:

    // Café da manhã top

    let pao = true
    let queijo = false

    const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

    console.log(niceBreakfast)

    // Maior de 18
    let age = 18
    const canDrive = age >= 18 ? 'can drive' : "can 't drive"
    console. log (canDrive)
    
    */

// Operador de String (String operator)

    // comparison (comparação)
        // console.log('a' == 'b')

    // concatenation (concatenação)
        // let alpha = 'alpha'
        // console. log(alpha + 'bet' + 's')

    // Retorna a união de duas Strings

// Falsy e Truthy

    // O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

    /*
        Todos os valores abaixo seriam representados como false em um boolean.
            false
        0
        -0
        ""
        null
        undefined
        NaN
    */

    console.log( NaN ? 'verdadeiro' : 'falso' )

    // já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

    /* 
        Todos os valores abaixo seriam representados como false em um boolean.
            true
        {}
        []
        1
        3.23
        "0"
        "false"
        -1
        Infinity
        -Infinity
    */

    console.log( Infinity ? 'verdadeiro' : 'falso' )

// Precedência dos operadores

    // Nesta aula mostraremos a precedência dos operadores, ou seja, a ordem de importância de cada um deles.

    // // De cima para baixo, do mais importante ao menos importante.

    // * grouping                      ( )
    // * negação e incremento          ! ++ --
    // * multiplicação e divisão       * /
    // * adição e subtração            + -
    // * relacional                    < <= > >=
    // * igualdade                     == != === !==
    // * AND                           && 
    // * OR                            ||
    // * condicional                   ?:
    // * assignment (atribuição)       = += -= *= %= 