// Expressões e Operadores

    //    # new

        /*
            left-hand-side expression
            criar um novo objeto
        */

  
            let age = new Number(18)
            let nome = new String('Gabriel')
            nome.surName = "Perosso" 
            
            console.log(age, nome, nome.surName)

            let nascimento  = new Date('2003-11-01')

            console.log(nascimento)


    /*      # Operadores Unários
                * typeof
                * delete
    */
  
        const person = {
            name: 'Gabriel',
            age: 18,
        }

        delete person.age

        console.log(typeof person)
        
        console.log(person)



//      # Operadores Aritiméticos
        
// multiplicação
        console.log(1*1)
        
        
// divisão
        console.log(10/5)
        
        
// soma
        console.log(1+1)
        
        
// subtração
        console.log(2-1)
        
        
    // ------------------ //
        
// resto da divisão

        let remainder
        remainder = 11 % 2
        console.log(remainder)
        
        
// incremento
        let increment = 0
        console.log(++increment) // ++ antes faz o incremento antes do 'printf'
        
        
// decremento
        let decrement = 0
        console.log(--decrement) // -- antes faz o decremento antes do 'printf'
        
        
// exponencial
        console.log( 3 ** 3)
        
// Operadores de comparação
// Irá comparar valores e retornar um Boolean como resposta à comparação
        console.log('')
        
        let one = 1
        let two = 2
        
//  ==       igual a
        
        console.log( two == 1 )
        console.log( one == "1")
        
// !=       diferente de
        
        console.log(one != two)
    console. log(one != 1)
    console.log(one != "1")
    
    console.log('')
    
// Operadores de comparação estritamente igual e estritamente diferente
    
// === estritamente igual a
    
    console.log( two === "1")
    console. log( one === 1 )
    
// !==
    
// estritamente diferente de
    
    console.log( two !== "2")
    console.log( two !== 2 )
    
    console.log('')
    
    // 
    
    //  # Operadores de comparação maior e menor (igual) 
    
    // >    Maior que 
    
    console.log(one > two)
    
    // >=   Maior igual a
    
    console. log(one >= 1)
    console.log( two >= 1)
    
    // <    Menor que
    
    console.log(one < two)
    
    // <=   Menor igual a
    
    console.log( one <= two)
    console.log( one <= 1)
    console.log( one <= 0)
    
    console.log('')

// Operadores de atribuição


// Operadores de atribuição (Assignment)
let x

// assignment normal:
x = 1

// addition assignment (adição):
x += 2

// subtraction assignment (subtração):
x -= 1

// multiplication assignment (multiplacação):
x *= 2

// division assignment (divisão):
x /= 2

// exponetiation assignment (exponenciação):
x **= 2

// remainder assignment (resto de divisão):
x %= 2

// Operadores Lógicos

// Operadores lógicos (logical operators)

// - 2 valores booleanos, quando verificados resultará em verdadeiro ou falso

    let pao = true
    let queijo = true

      // AND &&

      // OR ||

      // NOT !