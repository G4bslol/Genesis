// Sistema de Gastos Familiar


    let family = {
        incomes: [1337.68, 3500, 600],
        expenses: [1500, 97.90, 120.21, 600, 5000],

    }

        function sum(array) {
            let total = 0;

            for (let value of array) {
                total += value;
            }

            return total

        }


        function calculateBalance() {
            const calculateIncomes = sum(family.incomes)
            const calculateExpenses = sum(family.expenses)

            const total = calculateIncomes - calculateExpenses

            const BalancePositive = total >= 0
            let BalanceText = "Negativo"

            if (total) {
                BalanceText = "Positivo"
            }

            console.log(`Seu saldo é ${BalanceText} de: R$${total.toFixed(2)}`)
        }

calculateBalance()