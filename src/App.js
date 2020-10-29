import React, {useState,useEffect} from 'react';
import close from '../scss/images/x-img.png';
import edit from '../scss/images/edit-img.png';
import headphones from '../scss/images/headphones.png';
import Done from './Done';




function App() {

  useEffect(() =>{
    if(subTotal > 100 ){
      setShippingCost('FREE Delivery')
      setGrandTotal(subTotal)
      console.log(subTotal)
    }else if(subTotal == 0.00){
      setShippingCost(0)  
    }
    else{
      setShippingCost(subTotal !== 0 && subTotal <= 100);
      setShippingCost((23.80).toFixed(2)) 
    }
    setGrandTotal((parseFloat(shippingCost) + parseFloat(subTotal)).toFixed(2))

    if(closeBnt === true){
      setSubtotal(0);
      setGrandTotal(0);
      setShippingCost(0)
      setcloseBnt(false)
    }

  })

const [itemsCounter, setItemsCounter] = useState(1);
const [subTotal, setSubtotal] = useState(11.90.toFixed(2));
const [shippingCost, setShippingCost] = useState('$' + 23.80);
const [grandTotal, setGrandTotal] = useState(35.80.toFixed(2));
const [closeBnt, setcloseBnt] = useState(false)
const [classCloseWindow, setClassCloseWindow] = useState(false)
const [closeCart, setCloseCart] = useState(true)


function handleRemoveItem (){
  if(itemsCounter!= 0){
    setItemsCounter(itemsCounter - 1)
  }
}
function handleAddItem(){
  setItemsCounter(itemsCounter + 1)
}

function totalUpdate(){
  const itemsPrice = 11.90;
  let itemsNumber = itemsCounter;
  let itemsSum = (itemsNumber * itemsPrice).toFixed(2) ;
  setSubtotal(itemsSum);
}

function handleOnClickCloseBnt(){
  setcloseBnt(true)
  setClassCloseWindow(true)
}

function handlOnClickDone(){
  setCloseCart(false)
}


  return (
    <>
   <header>
        <div className="header">
            <div className="header__cart-word">Shopping Cart</div>
            <div className="header__proceed-bnt" onClick={handlOnClickDone}>Proceed to checkout</div>
        </div>
    </header>
    <section>
        <div className="main-section">
            <div  className={classCloseWindow ? "close-window main-section__item-window" : "main-section__item-window"}>
                <div className={classCloseWindow ? "item-window__first-element hiddenElements" : "item-window__first-element"}>
                    <div className="first-element__items">
                        <p className="first-element__items__words">Product name</p>
                        <p className="first-element__items__words">Unite price</p>
                        <p className="first-element__items__words">Qty</p>
                    </div>  
                </div>
                <div className={classCloseWindow ? "item-window__second-element hiddenElements" : "item-window__second-element"}>
                    <div className="second-element__item-photo">
                        <img onClick={handleOnClickCloseBnt} src={close} ></img>
                        <img src={headphones} alt="headphones" className="item-photo__item-photo"></img>
                    </div>
                    <div className="second-element__item-price">
                        <p className="item-price__items">Headphones</p>
                        <p className="item-price__items"><b>${subTotal}</b></p>
                        <div className="item-price__counter">
                            <div className="price-items__quantity" onClick={handleRemoveItem}>-</div>
                            <div className="price-items__number">{itemsCounter}</div>
                            <div className="price-items__quantity" onClick={handleAddItem}>+</div>
                            <img className="price-items__edit" src={edit} onClick={totalUpdate}></img>
                        </div>
                    </div>
                </div>
                <div className={classCloseWindow ? "item-window__third-element hiddenElements" : "item-window__third-element" }>
                    <div className="update-cart" onClick={totalUpdate}>Update Shopping Cart</div>
                </div>
            </div>
            {closeCart
            ?
            <div className="main-section__total-ammount">
            <div className="total-ammount__shiping-cost">
                <p>SHIPPING</p>
                <p>${shippingCost}</p>
            </div>
            <div className="total-ammount__cart-totals">
                <p className="cart-totals__word">CART TOTALS</p>
                <div className="cart-totals__container">
                    <div className="cart-totals__subtotal">
                        <p className="subtotal__word">Subtotal</p>
                        <p>${subTotal}</p>
                    </div>
                      <div className="cart-totals__grand-total">
                      <p className="subtotal__word">Grand Total</p>
                      <p className="grand-total__price">${grandTotal}</p>
                  </div>
                  <div className="cart-totals__checkout" onClick={handlOnClickDone}>Proceed to checkout</div>
                </div>
            </div>
        </div>
        :
        <Done />
           }
            
        </div>
    </section>

    </>
  );
}

export default App;
