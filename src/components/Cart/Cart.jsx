import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import classes from "./Cart.module.css";
import fetchAllCart from "../../store/creators/cartCreator";
import { Spinner } from "../../pages";

const Cart = () => {
  const { cartStatus, cart, cartError } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCart());
  }, [dispatch]);

  const renderCartItems = (item, idx) => {
    const { title, id, count, total } = item;
    return (
      <tr key={`item-${id}`}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}$</td>
        <td>
          <Button className="mx-1" variant="outline-success">
            <i className="fa-solid fa-plus"></i>
          </Button>
          <Button className="mx-1" variant="outline-warning">
            <i className="fa-solid fa-minus"></i>
          </Button>
          <Button className="mx-1" variant="outline-danger">
            <i className="fa-solid fa-trash"></i>
          </Button>
        </td>
      </tr>
    );
  };

  const statusCases = {
    empty: "You have no item in your cart",
    rejected: cartError,
    pending: <Spinner/>
  };

  return (
    <div>
      <h1>Your Order</h1>

      {statusCases[cartStatus] ? (
        statusCases[cartStatus]
      ) : (
        <Table>
          <thead>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </thead>

          <tbody>{cart?.map(renderCartItems)}</tbody>
        </Table>
      )}
      <div>Total cart items cost: 1000$</div>
    </div>
  );
};

export default Cart;