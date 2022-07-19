// Fahrenheit to Celsius // Celsius to Fahrenheit

    function transformDegree(degree) {
        const celsiusExists = degree.toUpperCase().includes('C');
        const fahrenheitExists = degree.toUpperCase().includes('F');

        // caminho de error

        if (!celsiusExists && !fahrenheitExists) {
            throw new Error('Grau não identificado')
        }

        // expressão regular

        let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
        let formula= (fahrenheit) => (fahrenheit - 32) * 5/9
        let degreesSing = "C" 

        // expressão alternativa

        if (celsiusExists) {
            updatedDegree = Number(degree.toUpperCase().replace("C", ""));
            formula= celsius => celsius * 9/5 + 32;
            degreesSing = "F"
        }

        return formula(updatedDegree) + degreesSing

}

    try {
        console.log(transformDegree('10C'))
        console.log(transformDegree('50F'))
        transformDegree('50z')
    } catch (error) {
        console.log(error.message)
        
    }