const Summary = () => {
  return (
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
  );
};

export default Summary;
