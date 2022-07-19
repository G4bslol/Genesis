// Estrutura de repetição

    // # For

    for (let i = 10; i > 0; i--) {

        if (i === 5){
            continue;
        }
        console.log(i)

    }

    // # While
    // Para momentos que não sabemos o momento da parada
   
    let i = 0

    while(i < 10) {

        console.log(i)

        i++;
    }
    
    // # For .... ff

    let name = "Gabriel"
    let names = ['Gabs', 'Biel', 'Gah', 'Gabas']
    
    for (let char of name) {

        console.log(char)

    }

    for (let nomes of names) {

        console.log(nomes)

    }

    //  # For .... in

    let person = {
        name: 'Gabriel',
        age: 18,
        weight: 76.5,
    }

    for (let propety in person) {
        console.log(propety)
        console.log(person[propety])
    }