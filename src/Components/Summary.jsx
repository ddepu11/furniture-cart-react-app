import { useGlobalContext } from "../context";

const Summary = () => {
  const { loading } = useGlobalContext();
  return (
    <section className="summary">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h4>Summary</h4>
          <div className="details">
            <div className="order-total flex">
              <p>Order total</p>
              <span>$544</span>
            </div>
            <div className="shiping flex">
              <p>Shipping</p>
              <span>$210</span>
            </div>

            <div className="subtotal flex">
              <p>Subtotal</p>
              <span>$1599.25</span>
            </div>
            <button>Checkout Items</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Summary;
