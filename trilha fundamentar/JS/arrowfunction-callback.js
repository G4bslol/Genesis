// arrow function

const sayMyName = (nome) => {
    console.log(nome)
}

sayMyName('Gabriel')

// callback function

    function sayMyName2 (name) {
    
        console.log('antes de executar a funcao callback')
    
        name()
    
        console.log('depois de executar callback')
    }
    
    sayMyName2(() => {
     console.log('estou em uma callback') 

    })