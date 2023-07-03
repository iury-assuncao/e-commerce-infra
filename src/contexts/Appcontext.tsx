import React, { createContext, useContext, useState } from 'react';
import { IProduct, ICart } from '../interfaces';

const CartContext = createContext<ICart>(undefined!);

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<IProduct[]>();
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider
      value={{ products, setProducts, setCartItems, cartItems }}
    >
      {children}
    </CartContext.Provider>
  );
}
