// Initialize expenses storage
let expenses = JSON.parse(localStorage.getItem('expenses')) || {};

// Add Expense Functionality
if (document.getElementById('expenseForm')) {
    document.getElementById('expenseForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const date = document.getElementById('date').value;
        const amount = document.getElementById('amount').value;
        const description = document.getElementById('description').value;

        // Add expense to the expenses object
        if (!expenses[date]) {
            expenses[date] = [];
        }
        expenses[date].push({ amount, description });

        // Save to localStorage
        localStorage.setItem('expenses', JSON.stringify(expenses));

        alert('Expense added successfully!');
        document.getElementById('expenseForm').reset();
    });
}

// Show Expense Functionality
if (document.getElementById('showButton')) {
    document.getElementById('showButton').addEventListener('click', function() {
        const date = document.getElementById('showDate').value;
        const expenseList = document.getElementById('expenseList');
        expenseList.innerHTML = '';

        // Retrieve expenses for the selected date
        const dailyExpenses = expenses[date] || [];
        if (dailyExpenses.length > 0) {
            dailyExpenses.forEach(expense => {
                const div = document.createElement('div');
                div.textContent = `${expense.description}: ₹${expense.amount}`;
                expenseList.appendChild(div);
            });
        } else {
            expenseList.textContent = 'No expenses for this date.';
        }
    });
}
