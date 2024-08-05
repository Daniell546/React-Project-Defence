// import { useContext, useState } from "react";
// import { CartContext } from "../contexts/CartContext";

// const { cart } = useContext(CartContext)
// // const[cart, setCart] = useState(getCartFromLocalStorage())
    
// export const getCartFromLocalStorage = () => {
//     const cartJson = localStorage.getItem("Cart");
//     if (cartJson) {
//         return JSON.parse(cartJson);
//     } else {
//         return {
//             items: [],
//             totalPrice: 0,
//         };
//     }
// };

// export const addToCart = (perfume) => {
//     console.log(perfume);
    
//     let cartItem = cart.items.find((item) => {
//         return item.perfume._id === perfume?._id;
//     });

//     if (cartItem) {
//         cartItem.quantity++;
//         if (perfume) {
//             changeQuantity(perfume._id, cartItem.quantity);
//         }
//     } else {
//         if (perfume) {
//             cart.items.push({
//                 perfume,
//                 quantity: 1,
//                 price: perfume.price,
//             });
//         }
//     }
//     setCartToLocalStorage();
// };


// export const changeQuantity = (perfumeId, quantity) => {
//     let cartItem = cart.items.find((item) => {
//         return item.perfume._id == perfumeId;
//     });
//     if (!cartItem) return;

//     cartItem.quantity = quantity;
//     cartItem.price = quantity * cartItem.perfume.price;
//     setCartToLocalStorage();
// };

// export const setCartToLocalStorage = () => {
//     cart.totalPrice = cart.items.reduce(
//         (accumulator, currentItem) => accumulator + currentItem.price,
//         0
//     );
//     const cartJson = JSON.stringify(cart);
//     localStorage.setItem("Cart", cartJson);
//     cartSubject.next(cart);
// };

// export const clearCart = () => {
//     cart = {
//         items: [],
//         totalPrice: 0,
//     };
//     setCartToLocalStorage();
// };

// export const removeFromCart = (perfumeId) => {
//     cart.items = cart.items.filter((item) => item.perfume._id != perfumeId);
//     setCartToLocalStorage();
// };
