import emailjs from "@emailjs/browser";
import { CartItem } from "../types";

export const sendOrderEmail = async (
  cart: CartItem[],
  user: { name: string; email: string }
) => {
  const orders = cart
    .map(
      (item) => `
      <div>
        <strong>${item.name}</strong><br/>
        Qty: ${item.quantity}<br/>
        UGX ${item.price}
      </div>
    `
    )
    .join("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      user_name: user.name,
      user_email: user.email,
      orders,
      total,
      order_id: `ORD-${Date.now()}`,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};