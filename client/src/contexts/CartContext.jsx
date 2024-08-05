import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('Cart');
    return savedCart ? JSON.parse(savedCart) : { items: [], totalPrice: 0 };
  });

  useEffect(() => {
    localStorage.setItem('Cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (perfume) => {
    const cartItem = cart.items.find(item => item.perfume._id === perfume._id);

    if (cartItem) {
      cartItem.quantity++;
      changeQuantity(perfume._id, cartItem.quantity);
    } else {
      setCart(prevCart => ({
        ...prevCart,
        items: [...prevCart.items, { perfume, quantity: 1, price: perfume.price }],
        totalPrice: prevCart.totalPrice + perfume.price,
      }));
    }
  };

  const changeQuantity = (perfumeId, quantity) => {
    setCart(prevCart => {
      const updatedItems = prevCart.items.map(item => 
        item.perfume._id === perfumeId ? { ...item, quantity, price: item.perfume.price * quantity } : item
      );
      const newTotalPrice = updatedItems.reduce((total, item) => total + item.price, 0);
      return { ...prevCart, items: updatedItems, totalPrice: newTotalPrice };
    });
  };

  const removeFromCart = (perfumeId) => {
    setCart(prevCart => {
      const updatedItems = prevCart.items.filter(item => item.perfume._id !== perfumeId);
      const newTotalPrice = updatedItems.reduce((total, item) => total + item.price, 0);
      return { ...prevCart, items: updatedItems, totalPrice: newTotalPrice };
    });
  };

  const clearCart = () => {
    setCart({ items: [], totalPrice: 0 });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, changeQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
