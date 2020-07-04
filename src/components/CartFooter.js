import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CartFooter() {
  const amount = useSelector((state) => state.amount);

  return (
    amount !== 0 && (
      <h3>
        <footer className="fixed-bottom card-footer d-inline bg-gray large py-3 text-large">
          <span>
            <span>Subtotal : &#8377; {amount} &nbsp;</span>
            <Link to="/cart">
              <button className="btn bg-orange p-2 bordering">Continue</button>
            </Link>
          </span>
        </footer>
      </h3>
    )
  );
}
