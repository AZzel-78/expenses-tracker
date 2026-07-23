import ExpensesCard from "../components/ExpensesCard";
import { useState } from "react";
import "../css/Dashboard.css";
import DateSpecifier from "../components/DateSpecifier";
import LineGraph from "../components/LineGragh";
import { ShoppingBag, TrendingUp, DollarSign } from "lucide-react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const MOCK_DAILY_EXPENSES = [
    { date: "Jul 01", totalAmount: 45.5 },
    { date: "Jul 02", totalAmount: 120.0 },
    { date: "Jul 03", totalAmount: 15.25 },
    { date: "Jul 04", totalAmount: 310.8 },
    { date: "Jul 05", totalAmount: 62.0 },
    { date: "Jul 06", totalAmount: 89.9 },
    { date: "Jul 07", totalAmount: 0.0 },
  ];
  const MOCK_TOP_TRANSACTIONS = [
    {
      id: "exp-101",
      merchant: "SM Supermarket",
      amount: 245.5,
      category: "Groceries",
      date: "2026-07-04",
    },
    {
      id: "exp-102",
      merchant: "Electric Utility Co.",
      amount: 180.0,
      category: "Utilities",
      date: "2026-07-02",
    },
    {
      id: "exp-103",
      merchant: "Nike Store",
      amount: 120.0,
      category: "Shopping",
      date: "2026-07-06",
    },
    {
      id: "exp-104",
      merchant: "Gas Station",
      amount: 65.0,
      category: "Transportation",
      date: "2026-07-01",
    },
    {
      id: "exp-105",
      merchant: "Italian Bistro",
      amount: 55.4,
      category: "Food & Dining",
      date: "2026-07-05",
    },
  ];

  const MOCK_TOP_CATEGORIES = [
    { category: "Groceries", totalAmount: 520.4, percentage: 42.5 },
    { category: "Utilities", totalAmount: 310.0, percentage: 25.3 },
    { category: "Food & Dining", totalAmount: 215.8, percentage: 17.6 },
    { category: "Transportation", totalAmount: 120.0, percentage: 9.8 },
    { category: "Entertainment", totalAmount: 58.0, percentage: 4.8 },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="dashboard">
      <DateSpecifier />
      <LineGraph expensesData={MOCK_DAILY_EXPENSES} />
      <div className="grouped-expenses-grid">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            marginTop: "24px",
          }}
        >
          <div className="card-style">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <DollarSign size={20} color="#059669" />
              <h2 className="card-header-style">Largest Transactions</h2>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                flexShrink: "0",
              }}
            >
              {MOCK_TOP_TRANSACTIONS.map((tx) => (
                <div key={tx.id} className="items-row-style">
                  <div>
                    <div style={{ fontWeight: "600", fontSize: "2rem" }}>
                      {tx.merchant}
                    </div>
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      color: "#f0f0f0",
                      fontSize: "2rem",
                    }}
                  >
                    ${tx.amount.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-style">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <ShoppingBag size={20} color="#D97706" />
              <h2 className="card-header-style">Top Categories</h2>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {MOCK_TOP_CATEGORIES.map((cat, index) => (
                <div key={index}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "2rem",
                      marginBottom: "4px",
                    }}
                  >
                    <span style={{ fontWeight: "500" }}>{cat.category}</span>
                    <span style={{ fontWeight: "bold" }}>
                      ${cat.totalAmount.toFixed(2)} ({cat.percentage}%)
                    </span>
                  </div>
                  {/* Simple Progress Bar */}
                  <div
                    style={{
                      width: "100%",
                      backgroundColor: "#F3F4F6",
                      height: "8px",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${cat.percentage}%`,
                        backgroundColor: index === 0 ? "#53d7f2" : "#496e75",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
