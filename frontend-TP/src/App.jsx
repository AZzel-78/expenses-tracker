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
          <Route path="/transactions" elements={<Transactions />} />
          <Route path="/limit" elements={<Limit />} />
          <Route path="/settings" elements={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
