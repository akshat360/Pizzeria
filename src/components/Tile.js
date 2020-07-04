import React from 'react';

export default function Tile({
  name,
  price,
  quantity,
  size,
  image,
  removeFromCart,
}) {
  const pName = name ? name : 'Farmhouse Pizza';
  const pImage = image
    ? image
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQi4bytudNSzDW9FbX3CAWR8ElFF0MKbmyMiw&usqp=CAU';
  const pPrice = price ?? '00';
  const pQuantity = quantity ?? '0';
  const pSize = size ?? '6';
  const amount = pPrice * pQuantity;
  return (
    <div>
      <div className="card text-white shadow p-3 m-4 cardColor">
        <div className="card-horizontal">
          <div className="img-square-wrapper">
            <img
              className="card-img-top p-2 bg-gray rounded-circle"
              src={pImage}
              alt="foodIcon"
            />
          </div>
          <div className="card-body">
            <h4 className="card-title text-uppercase text-orange ">{pName}</h4>
            <h5 className="">Size : {pSize}</h5>
            <p className="card-text">
              Price: {pQuantity}X &#8377;{pPrice} = &#8377;{amount}
            </p>
          </div>
        </div>
        <div className="card-footer text-center ">
          <button
            className=" btn bg-orange w-100"
            onClick={() => {
              removeFromCart(name, size, price, quantity);
            }}
          >
            REMOVE ROM CART
          </button>
        </div>
      </div>
    </div>
  );
}
