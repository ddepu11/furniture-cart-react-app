import "./App.css";
import Items from "./Components/Items";
import Summary from "./Components/Summary";

function App() {
  return (
    <div className="container grid">
      <header className="header">
        <h3>
          Home/<span>Cart</span>
        </h3>
      </header>

      <Items />

      <Summary />

      <footer className="footer">
        
      </footer>
    </div>
  );
}

export default App;
