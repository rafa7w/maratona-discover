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
        incomes() {
                // somar as entradas
        },
        expenses() {
                // somar as saídas
        },
        total() {
                // saldo entre entradas e saídas
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

                const html = `
                        <td class="description">${transaction.description}</td>
                        <td class="${CSSClass}">${transaction.amount}</td>
                        <td class="date">${transaction.date}</td>
                        <td><img src="./assets/minus.svg" alt="Remove Transaction"></td>
                `
                return html;
        }
};


transactions.forEach(transaction => {
        DOM.addTransaction(transaction);
});

