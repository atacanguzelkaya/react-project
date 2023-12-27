import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

export default function ProductAdd() {
 const [show, setShow] = useState(false);
 const [productName, setProductName] = useState("");
 const [productDescription, setProductDescription] = useState("");
 const [productPrice, setProductPrice] = useState("");
 const [productImage, setProductImage] = useState("");

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      description: productDescription,
      price: productPrice,
      image: productImage,
    };

    const response = await axios.post("https://dummyjson.com/products", newProduct);

    // You need to update the HomePage component to handle this state change.
    // setProducts([...products, response.data])

    setShow(false);
 };

 return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="productDescription">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="productPrice">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="productImage">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product image URL"
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
 );
}