import React, {useState} from 'react';

import close from '../scss/images/x-img.png';
import edit from '../scss/images/edit-img.png';
import headphones from '../scss/images/headphones.png';



function App() {

const [itemsCounter, setItemsCounter] = useState(0);
const [subTotal, setSubtotal] = useState(0);
const [shippingCost, setShippingCost] = useState("$" + 0);
const [grandTotal, setGrandTotal] = useState(0);


function removeItem (){
  if(itemsCounter!= 0){
    setItemsCounter(itemsCounter - 1)
  }
}
function addItem(){
  setItemsCounter(itemsCounter + 1)
}

function totalUpdate(){
  const itemsPrice = 11.9;
  let itemsNumber = itemsCounter;
  let wynik = (itemsNumber * itemsPrice).toFixed(2);
  setSubtotal(wynik);

  if(subTotal <= 100 ){
    setShippingCost('$' + 23.9)
    
  }   else{
    setShippingCost('Free Delivery')
  }
}




  return (
    <>
   <header>
        <div class="header">
            <div class="header__cart-word">Shopping Cart</div>
            <div class="header__proceed-bnt">Proceed to checkout</div>
        </div>
    </header>
    <section>
        <div class="main-section">
            <div class="main-section__item-window">
                <div class="item-window__first-element">
                    <div class="first-element__items">
                        <p class="first-element__items__words">Product name</p>
                        <p class="first-element__items__words">Unite price</p>
                        <p class="first-element__items__words">Qty</p>
                    </div>
                </div>
                <div class="item-window__second-element">
                    <div class="second-element__item-photo">
                        <img src={close} ></img>
                        <img src={headphones} alt="headphones" class="item-photo__item-photo"></img>
                    </div>
                    <div class="second-element__item-price">
                        <p class="item-price__items">Headphones</p>
                        <p class="item-price__items"><b>${subTotal}</b></p>
                        <div class="item-price__counter">
                            <div class="price-items__quantity" onClick={removeItem}>-</div>
                            <div className="price-items__number">{itemsCounter}</div>
                            <div className="price-items__quantity" onClick={addItem}>+</div>
                            <img className="price-items__edit" src={edit} onClick={totalUpdate}></img>
                        </div>
                    </div>
                </div>
                <div class="item-window__third-element">
                    <div className="update-cart" onClick={totalUpdate}>Update Shopping Cart</div>
                </div>
            </div>
            <div class="main-section__total-ammount">
                <div class="total-ammount__shiping-cost">
                    <p>SHIPPING</p>
                    <p>{shippingCost}</p>
                </div>
                <div class="total-ammount__cart-totals">
                    <p class="cart-totals__word">CART TOTALS</p>
                    <div class="cart-totals__container">
                        <div class="cart-totals__subtotal">
                            <p class="subtotal__word">Subtotal</p>
                            <p>${subTotal}</p>
                        </div>
                        <div class="cart-totals__grand-total">
                            <p class="subtotal__word">Grand Total</p>
                            <p class="grand-total__price">${grandTotal}</p>
                        </div>
                        <div class="cart-totals__checkout">Proceed to checkout</div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    </>
  );
}

export default App;
