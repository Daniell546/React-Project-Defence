export function useAddPerfumeToCart(perfume) {
    let cartItem = this.cart.items.find((item) => {
        return item.perfume._id === perfume?._id;
      });
  
      if (cartItem) {
        cartItem.quantity++;
        if (perfume) {
          this.changeQuantity(perfume._id, cartItem.quantity);
        }
      } else {
        if (perfume) {
          this.cart.items.push({
            perfume,
            quantity: 1,
            price: perfume.price,
          });
        }
      }
      this.setCartToLocalStorage();
}