import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    items,
    updateItemQuantity,
    removeItem,
    isEmpty,
    cartTotal,
    emptyCart,
  } = useCart();
  return isEmpty ? (
    <>
      <h1 className="text-center mt-5">Your Cart is empty</h1>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <img
          width={400}
          src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg"
          alt=""
          className="cart--is--empty"
        />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Link to="/sale" className="button">
          Go to the Products
        </Link>
      </div>
    </>
  ) : (
    <>
      <h2 className="text-center my-3">Shopping List</h2>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Photo</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">
                <div className="d-flex justify-content-center">Remove Item</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, c) => (
              <tr key={c}>
                <th scope="row">
                  <div className="item-number mt-4">{c + 1}</div>
                </th>
                <td>
                  <img
                    className="mt-1"
                    width={100}
                    src={item.images[0]}
                    alt=""
                  />
                </td>
                <td>
                  <div className="item-title mt-4">{item.title}</div>
                </td>
                <td>
                  <div className="item-price mt-4">
                    {item.price * item.quantity}$
                  </div>
                </td>
                <td>
                  <div className="item-quantity mt-3">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="mx-3"> {item.quantity}</span>
                    <button
                      className="btn btn-outline-success"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <div className="trash-icon d-flex justify-content-center mt-3">
                    <FaRegTrashAlt
                      onClick={() => removeItem(item.id)}
                      className="trash-icon-2"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center mt-5">
          <h1>
            Total Price is : <span className="fw-bold"> {cartTotal} $</span>
          </h1>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button
            onClick={() => {
              emptyCart();
            }}
            className="btn btn-outline-danger"
          >
            Remove Items
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
