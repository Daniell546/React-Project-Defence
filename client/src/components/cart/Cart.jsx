import './cart.css'

export default function Cart() {
    return (
        <div className="section-cart">
            <h1>Cart</h1>
            <div className="container">
                <ul>
                    <li>
                        <div>
                            <img />
                        </div>
                        <div>
                            <a>

                            </a>
                        </div>
                        <div>
                            <input

                            />
                        </div>
                        <div>

                        </div>

                        <div>
                            <button className="remove-button" >
                                Remove
                            </button>
                        </div>
                    </li>
                </ul>
                <div className="checkout">
                    <div>
                        <div className="total-price"></div>
                    </div>

                    <a >Proceed to Checkout</a>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div >
    );
}



{/* <h1>Cart</h1>
<div *ngIf="isEmpty">
  <div className="empty">Sorry, your Cart is empty😔...</div>
  <a className="addItems" routerLink="/home">Add items</a>
</div>

<div *ngIf="cart && cart.items.length" className="container">
  <ul>
    <li *ngFor="let cartItem of cart.items">
      <div>
        <img [src]="cartItem.perfume.imageUrl" />
      </div>
      <div>
        <a routerLink="/home/{{ cartItem.perfume._id }}">
          {{ cartItem.perfume.brand }}
        </a>
      </div>
      <div>
        <input
          #quantitySelect
          [value]="cartItem.quantity"
          (change)="changeQuantity(cartItem, quantitySelect.value)"
        />
      </div>
      <div>
        {{ cartItem.price | currency : "BGN" }}
      </div>

      <div>
        <button className="remove-button" (click)="removeFromCart(cartItem)">
          Remove
        </button>
      </div>
    </li>
  </ul>
  <div className="checkout">
    <div>
      <div className="total-price">{{ cart.totalPrice | currency : "BGN" }}</div>
    </div>

    <!-- <a routerLink="/checkout">Proceed to Checkout</a> -->
    <button (click)="checkout()">Proceed to Checkout</button>
  </div>
</div> */}
