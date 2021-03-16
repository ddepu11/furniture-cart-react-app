import { useGlobalContext } from "../context";

const Summary = () => {
  const { loading, orderTotal } = useGlobalContext();
  const shipCh = 200;
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
              <span>&#8377;{orderTotal}</span>
            </div>
            <div className="shiping flex">
              <p>Shipping</p>
              <span>&#8377;{orderTotal === 0 ? `0` : shipCh}</span>
            </div>

            <div className="subtotal flex">
              <p>Subtotal</p>
              <span>&#8377;{orderTotal === 0 ? `0` : orderTotal + shipCh}</span>
            </div>
            <button>Checkout Items</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Summary;
