import React, { createContext, useContext, useState } from "react";
import { CartItem, CollectionItem } from "../types";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CollectionItem) => void;
  removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => useContext(CartContext)!;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CollectionItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};