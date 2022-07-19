// Sistema de notas escolares 


    function getScore(score) {

        let scoreA = score >= 90 && score <= 100
        let scoreB = score <= 89 && score >= 80
        let scoreC = score <= 79 && score >= 70
        let scoreD = score <= 69 && score >= 60
        let scoreF = score < 60 && score >= 0

        let scoreFinal;

        if (scoreA) {
            scoreFinal = "A"
        } else if (scoreB) {
            scoreFinal = "B"
        } else if (scoreC) {
            scoreFinal = "C"
        } else if (scoreD) {
            scoreFinal = "D"
        } else if (scoreF) {
            scoreFinal = "F"
        } else {
            scoreFinal = "Nota inválida"
        }

        return scoreFinal

        
    }

    console.log(getScore(1))
    console.log(getScore(-1))
    console.log(getScore(100))
    console.log(getScore(80))
    console.log(getScore(70))
    console.log(getScore(67))
    console.log(getScore(23))
    console.log(getScore(9))
    console.log(getScore(61))
    console.log(getScore(72))
    console.log(getScore(-213))
    console.log(getScore(0))
    console.log(getScore(101))