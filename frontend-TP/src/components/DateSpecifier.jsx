import "../css/DateSpecifier.css";
import { Triangle } from "lucide-react";

function DateSpecifier() {
  return (
    <div className="header">
      <button className="backArrow">
        <Triangle
          size={40}
          color="#f0f0f0"
          style={{ transform: "rotate(-90deg)" }}
        />
      </button>
      <h3>
        <a>December 2026</a>
      </h3>
      <div className="up-down">
        <button className="btnUpDown">
          <Triangle size={32} color="#f0f0f0" />
        </button>
        <button className="btnUpDown">
          <Triangle
            size={32}
            color="#f0f0f0"
            style={{ transform: "rotate(-180deg)" }}
          />
        </button>
      </div>
    </div>
  );
}
export default DateSpecifier;
