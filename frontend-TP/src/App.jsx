import "./css/App.css";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Limit from "./pages/Limit";
import Settings from "./pages/Settings";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "@fontsource/iceberg";

function App() {
  return (
    <div className="main-screen">
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/limit" element={<Limit />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
