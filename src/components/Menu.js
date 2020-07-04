import React from 'react';
import Card from './Card';
import wallpaper from '../assets/wallpaper.png';
import Base from './Base';
import DATA from '../data';
import { useDispatch } from 'react-redux';
const Menu = () => {
  const dispatch = useDispatch();
  const headImg = () => (
    <div>
      <img
        className=" img img-thumbnail p-0 border-0 mh-25 carousel-inner"
        src={wallpaper}
        alt="wallpaper"
      />
    </div>
  );

  const addToCart = ({ name, price, quantity, size, image }) => {
    const item = { name, price, quantity, size, image };
    dispatch({ type: 'ADD_TO_CART', payload: item });
    dispatch({ type: 'ADD_AMOUNT', payload: quantity * price });
  };

  return (
    <Base>
      {headImg()}

      <div className="container">
        <div className="row d-flex  justify-content-center p-5 ">
          <h1 className=" text-white col-12">Pizza</h1>

          {DATA &&
            DATA.map((item, index) => (
              <div key={index} className="col-4 ">
                <Card
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  addToCart={addToCart}
                ></Card>
              </div>
            ))}
        </div>
      </div>
    </Base>
  );
};
export default Menu;
