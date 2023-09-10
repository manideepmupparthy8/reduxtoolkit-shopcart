import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { remove } from "../store/cartSlice";

export const Cart = () => {
  const productCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removefromCart = (id) => {
    dispatch(remove(id));
  };

  const cards = productCart.map((pro) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={pro.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={pro.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{pro.title}</Card.Title>
          <Card.Text className="justify-content-end">
            INR : {pro.price}
            <br></br>
            Category: {pro.category}
            <br></br>
            Rating: {pro.rating["rate"]}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="danger" onClick={() => removefromCart(pro.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
};
