import React, { useState } from 'react';
import CartFooter from './CartFooter';

const Card = ({ name, description, image, price, addToCart }) => {
  const pName = name ? name : 'Farmhouse Pizza';
  const pDescription = description ? description : 'toppings : capsicum';
  const pImage = image
    ? image
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQi4bytudNSzDW9FbX3CAWR8ElFF0MKbmyMiw&usqp=CAU';
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('small');
  const [pPrice, setPrice] = useState(price.small);

  return (
    <div
      className="card text-white text-center shadow p-3 m-4 cardColor "
      style={{ width: '18rem' }}
    >
      <img
        className="card-img-top p-2 bg-gray rounded-circle"
        src={pImage}
        alt="Card"
      />
      <div className="card-body ">
        <h5 className="card-title text-uppercase">{pName}</h5>
        <p className="lead card-text small text-secondary ">{pDescription}</p>
        <h5 className="text-orange font-weight-bold mb-4">&#8377; {pPrice}</h5>
        <div className="quantity">
          <select
            name="size"
            className="bordering-left quantity"
            onChange={(e) => {
              setSize(e.target.value);
              setPrice(price[e.target.value]);
            }}
          >
            <option value="small">6"</option>
            <option value="medium">8"</option>
            <option value="large">10"</option>
          </select>
          <input
            type="number"
            className=" text-center bordering-right quantity"
            value={quantity}
            min="1"
            max="5"
            step="1"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <span>
          <button
            id="addbtn"
            className="btn bg-orange w-100 bordering mt-2 "
            onClick={() =>
              addToCart({
                name: pName,
                price: pPrice,
                image: pImage,
                quantity,
                size,
              })
            }
          >
            ADD
          </button>
        </span>
      </div>
      <CartFooter></CartFooter>
    </div>
  );
};
export default Card;
