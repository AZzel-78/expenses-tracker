import { useState } from "react";
import DateSpecifier from "../components/DateSpecifier";
import IngestionHub from "../components/IngestionHub"
import "../css/Transactions.css";

function Transactions() {
  const [selectedExpenses, setSelectedExpenses] = useState(null);

  const handleSelectedExpenses = (expense) => {
    setSelectedExpenses(expense);
  };

  const handleNullSelectedExpenses = () => {
    setSelectedExpenses(null);
  };

  function addExpense() {}

  const cellstyle = {
    padding: "14px",
    margin: "1rem",
  };

  const expenses = [
    {
      id: 1,
      date: "Jul 01",
      merchant: "Jollibee",
      amount: 1000,
      items: [
        { id: 1, name: "C1", quantity: 2, unitPrice: 250 },
        { id: 2, name: "Peach Mango Pie", quantity: 4, unitPrice: 125 },
      ],
    },
    {
      id: 2,
      date: "Jul 02",
      merchant: "SM Supermarket",
      amount: 1250,
      items: [
        { id: 3, name: "Fresh Milk 1L", quantity: 2, unitPrice: 110 },
        { id: 4, name: "Whole Wheat Bread", quantity: 1, unitPrice: 85 },
        { id: 5, name: "Chicken Breast 1kg", quantity: 3, unitPrice: 315 },
      ],
    },
    {
      id: 3,
      date: "Jul 03",
      merchant: "7-Eleven",
      amount: 180,
      items: [
        { id: 6, name: "Iced Coffee", quantity: 1, unitPrice: 120 },
        { id: 7, name: "Hotdog Sandwich", quantity: 1, unitPrice: 60 },
      ],
    },
    {
      id: 4,
      date: "Jul 05",
      merchant: "Starbucks",
      amount: 390,
      items: [
        { id: 8, name: "Iced Caramel Macchiato", quantity: 1, unitPrice: 215 },
        { id: 9, name: "Chocolate Chip Cookie", quantity: 1, unitPrice: 175 },
      ],
    },
    {
      id: 5,
      date: "Jul 07",
      merchant: "Mercury Drug",
      amount: 650,
      items: [
        { id: 10, name: "Paracetamol 500mg (10s)", quantity: 2, unitPrice: 75 },
        { id: 11, name: "Vitamin C Tablets", quantity: 1, unitPrice: 500 },
      ],
    },
  ];
  return (
    <div className="transaction-main">
      <header className="header">
        <DateSpecifier />
        <button className="btn" onClick={addExpense}>
          + Add Expense
        </button>
      </header>
      <IngestionHub />
      <main className="transactions-content">
        <table className="expenses-list">
          <thead>
            <tr className="list-headers">
              <th className="list-header" style={cellstyle}>
                Date
              </th>
              <th className="list-header" style={cellstyle}>
                Merchant
              </th>
              <th className="list-header" style={cellstyle}>
                Amount
              </th>
              <th className="list-header" style={cellstyle}>
                Items
              </th>
              <th className="list-header" style={cellstyle}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="list-items">
                <td className="list-item" style={cellstyle}>
                  {expense.date}
                </td>
                <td className="list-item" style={cellstyle}>
                  {expense.merchant}
                </td>
                <td className="list-item" style={cellstyle}>
                  {expense.amount}
                </td>
                <td style={cellstyle}>
                  <button
                    className="btn-list"
                    onClick={() => handleSelectedExpenses(expense)}
                  >
                    View Item/s
                  </button>
                </td>
                <td style={cellstyle}>
                  <button className="btn-list">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      {selectedExpenses && (
        <div
          className="modal-overlay"
          onClick={() => handleNullSelectedExpenses()}
        >
          <div className="modal-content">
            <header className="modal-header">
              <div className="title-modal">List Items</div>
              <div>
                <button className="modal-close">X</button>
              </div>
            </header>
            <main className="modal-main">
              <table className="expenses-list">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
              </table>
            </main>
            <footer></footer>
          </div>
        </div>
      )}
    </div>
  );
}
export default Transactions;
