import React, { useEffect } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

export const Product = () => {
  const dispatch = useDispatch();
  const { data: product, status } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (status === StatusCode.LOADING) {
    return <div>Loading...</div>;
  }

  if (status === StatusCode.ERROR) {
    return (
      <Alert variant="danger">
        Something went wrong. Please try again later
      </Alert>
    );
  }

  const addToCart = (pro) => {
    dispatch(add(pro));
  };

  const cards = product.map((pro) => (
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
          <Button variant="primary" onClick={() => addToCart(pro)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <h1>Product</h1>
      <div className="row">{cards}</div>
    </div>
  );
};
