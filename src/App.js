import "./App.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ImBin } from "react-icons/im";

function App() {
  return (
    <div className="container">
      <h3 className="header">
        Home/<span style={{ color: "pink" }}>Cart</span>
      </h3>

      {/* Cart Items */}
      <aside className="items">
        <div className="item">
          <img src="" alt="" />
          <h6>Eames Daw</h6>
          <div className="buttons-div">
            <FaPlus className="plus" />
            <span>24</span>
            <FaMinus className="minus" />
          </div>
          <ImBin className="bin" />
        </div>
      </aside>

      {/* Summary */}
      <section className="summary">
        <h4>Summary</h4>
        <div className="details">
          <div className="order-total">
            <p>Order total</p>
            <span>$544</span>
          </div>
          <div className="shiping">
            <p>Shipping</p>
            <span>$210</span>
          </div>

          <div className="subtotal">
            <p>Subtotal</p>
            <span>$1599.25</span>
          </div>
        </div>
      </section>
      <footer className="footer">
        <button>Checkout Items</button>
      </footer>
    </div>
  );
}

export default App;
