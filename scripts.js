const Modal = {
        open() {
                // Abrir modal (adicionar class active ao modal)
                document.querySelector(".modal-overlay").classList.add("active");          
        },

        close() {
                //Fechar modal (remover class active do modal)
                document.querySelector(".modal-overlay").classList.remove("active");          
        }
};

const transactions = [
        {
                id:1,
                description: "Luz",
                amount: -50000, //500,00
                date: "23/01/2021"
        },
        {
                id:2,
                description: "Website",
                amount: 500000, //5000,00
                date: "23/01/2021"
        },
        {
                id:3,
                description: "Internet",
                amount: -20000, //200,00
                date: "23/01/2021"
        }
];

const Transaction = {
        all: transactions,

        incomes() {        
                let income = 0;

                Transaction.all.forEach(transaction => {
                        if (transaction.amount > 0) {
                                income += transaction.amount;
                        }
                });

                return income;
        },

        expenses() {
                let expense = 0;

                Transaction.all.forEach(transaction => {
                        if (transaction.amount < 0) {
                                expense += transaction.amount;
                        }
                });

                return expense;
        },

        total() {
                return Transaction.incomes() + Transaction.expenses();
        }
};


const DOM = {
        transactionsContainer: document.querySelector("#data-table tbody"),

        addTransaction(transaction, index) {
                const tr = document.createElement("tr");
                tr.innerHTML = DOM.innerHTMLTransaction(transaction);
                DOM.transactionsContainer.appendChild(tr);
        },

        innerHTMLTransaction(transaction) {
                const CSSClass = transaction.amount > 0 ? "income" : "expense";
                const amount = Utils.formatCurrency(transaction.amount);

                const html = `
                        <td class="description">${transaction.description}</td>
                        <td class="${CSSClass}">${amount}</td>
                        <td class="date">${transaction.date}</td>
                        <td><img src="./assets/minus.svg" alt="Remove Transaction"></td>
                `
                return html;
        },

        updateBalance() {
                document.getElementById("incomeDisplay").innerHTML = Utils.formatCurrency(Transaction.incomes());
                document.getElementById("expenseDisplay").innerHTML = Utils.formatCurrency(Transaction.expenses());
                document.getElementById("totalDisplay").innerHTML = Utils.formatCurrency(Transaction.total());

        }
};

const Utils = {
        formatCurrency(value) {
                const signal = Number(value) < 0 ? "-" : "";
                value = String(value).replace(/\D/g, ""); // acha só números, troca o que não for número
                value = Number(value) / 100;
                value = value.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                })

                return signal + value;
        }
};

transactions.forEach(transaction => {
        DOM.addTransaction(transaction);
});

DOM.updateBalance();