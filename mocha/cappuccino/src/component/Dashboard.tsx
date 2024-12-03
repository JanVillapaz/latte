import React, { useState, useEffect } from "react";
import "../styles/Dashboard.css";

interface Transaction {
    id: number;
    description: string;
    category: string;
    amount: number;
    date: string;
}

const Dashboard: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [totalIncome, setTotalIncome] = useState<number>(0);
    const [totalExpense, setTotalExpense] = useState<number>(0);
    const [balance, setBalance] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            const sampleData: Transaction[] = [
                { id: 1, description: "Salary", category: "Income", amount: 5000, date: "2024-11-01" },
                { id: 2, description: "Rent", category: "Expense", amount: -1500, date: "2024-11-03" },
                { id: 3, description: "Groceries", category: "Expense", amount: -300, date: "2024-11-05" },
                { id: 4, description: "Freelance Work", category: "Income", amount: 800, date: "2024-11-10" },
            ];

            setTransactions(sampleData);

            const income = sampleData.filter((t) => t.amount > 0).reduce((sum, t) => sum + t.amount, 0);
            const expense = sampleData.filter((t) => t.amount < 0).reduce((sum, t) => sum + Math.abs(t.amount), 0);

            setTotalIncome(income);
            setTotalExpense(expense);
            setBalance(income - expense);
        };

        fetchData();
    }, []);

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>

            {/* Summary Cards */}
            <div className="summary">
                <div className="card">
                    <h3>Total Income</h3>
                    <p>${totalIncome.toFixed(2)}</p>
                </div>
                <div className="card">
                    <h3>Total Expense</h3>
                    <p>${totalExpense.toFixed(2)}</p>
                </div>
                <div className="card">
                    <h3>Balance</h3>
                    <p>${balance.toFixed(2)}</p>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="transactions">
                <h2>Recent Transactions</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            <td>${transaction.amount.toFixed(2)}</td>
                            <td>{transaction.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
