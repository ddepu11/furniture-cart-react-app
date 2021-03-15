import "./App.css";
import Items from "./Components/Items";
import Summary from "./Components/Summary";

function App() {
  return (
    <div className="container">
      <h3 className="header">
        Home/<span style={{ color: "pink" }}>Cart</span>
      </h3>

      {/* Cart Items */}
      <Items />

      {/* Summary */}
      <Summary />

      <footer className="footer">
        <button>Checkout Items</button>
      </footer>
    </div>
  );
}

export default App;
