import transactionHistory from './transactions.js';

console.log(transactionHistory);

//  


const makeTransactionTableRowMarkup = (transaction) => {
    const { id, amount, date, business, type, name, account } = transaction;
    console.log(transaction);

    return
    `<tr>
             <td>${id}</td>
             <td>${amount}</td>
             <td>${date}</td>
             <td>${business}</td>
             <td>${type}</td>
            <td>${name}</td>
            <td>${account}</td>
         </tr>`;

};

console.log(transactionHistory);
const tableEl = document.querySelector('.js-transaction-table');

//console.log(makeTransactionTableRowMarkup(transactionHistory[0]));

const makeTransactionTableRows = transactionHistory
    .map(makeTransactionTableRowMarkup)
    .join('');

    tableEl.insertAdjacentHTML('beforeend',makeTransactionTableRows)
console.log(makeTransactionTableRows);
