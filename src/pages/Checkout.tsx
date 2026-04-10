import { useCart } from "../context/CartContext";
import { sendOrderEmail } from "../services/email";
import { useState } from "react";

const Checkout = () => {
  const { cart } = useCart();
  const [user, setUser] = useState({ name: "", email: "" });

  const handleCheckout = async () => {
    await sendOrderEmail(cart, user);
    alert("Order sent!");
  };

  return (
    <div className="p-4">
      <h1>Checkout</h1>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} x{item.quantity}
        </div>
      ))}

      <input
        placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default Checkout;