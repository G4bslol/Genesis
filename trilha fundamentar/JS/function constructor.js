/*
 
    Function constructor

        * expressão new
        * criar um novo objeto
        *  this keyword

*/

function Person (nome) {

    this.nome = nome

    this.walk = function () {
       return this.nome + " está andando"
    }
}

    const gabs = new Person("Gabs")
    const joao = new Person ("João")

    console.log(gabs.walk())
    console.log(joao.walk())