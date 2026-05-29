import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  // Leer carrito guardado
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar carrito automáticamente
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
      setCart((prev) => {
          const existing = prev.find((item) => item.id === product.id);

          if (existing) {
              return prev.map((item) =>
                  item.id === product.id
                      ? { ...item, qty: item.qty +1}
                      : item
              )
          }
      return  [...prev, { ...product, qty: 1}];
      });
  };

  const changeQuantity = (productId, amount) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id !== productId) return item;

        const newQty = item.qty + amount;

        return newQty > 0
          ? { ...item, qty: newQty }
          : item;
      })
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => 
      prev.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        changeQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// custom hook
export function useCart() {
  return useContext(CartContext);
}
