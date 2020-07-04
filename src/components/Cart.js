import React from 'react';
import Base from './Base';
import { useSelector, useDispatch } from 'react-redux';
import Tile from './Tile';
import { Link } from 'react-router-dom';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const finalAmount = useSelector((state) => state.amount);
  const dispatch = useDispatch();

  const removeFromCart = (name, size, price, quantity) => {
    const item = { name, size, quantity };
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    dispatch({ type: 'SUB_AMOUNT', payload: quantity * price });
  };
  const itemList = () => (
    <div className="col-6">
      {cart &&
        cart.map((item, index) => (
          <Tile
            key={index}
            name={item.name}
            quantity={item.quantity}
            image={item.image}
            size={item.size}
            price={item.price}
            removeFromCart={removeFromCart}
          />
        ))}
    </div>
  );
  const checkoutForm = () => (
    <div className="col-6 text-center py-3 text-orange">
      <h3 className=" ">Final Amount</h3>
      <h4 className="">&#8377; {finalAmount} </h4>
      <button className="btn bg-orange p-1 w-75 mt-5">Place Order</button>
    </div>
  );

  return (
    <Base>
      <div className="py-3 container mx-5 ">
        <h1 className="text-white ">CART</h1>
        {cart.length !== 0 ? (
          <div className="row ">
            {itemList()}
            {checkoutForm()}{' '}
          </div>
        ) : (
          <div
            className="text-center text-white "
            style={{ height: '40vh', margin: '10%' }}
          >
            <h1>
              <i className="fa fa-shopping-cart " /> Cart is Empty
            </h1>
            <Link to="/menu">
              <h3 className=" btn  text-center bg-orange bordering">
                Check Menu
              </h3>{' '}
            </Link>
          </div>
        )}
      </div>
    </Base>
  );
}
