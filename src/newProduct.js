import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import axios from "axios";

function NewProduct() {
  const [state, setState] = useState({
    sku: "",
    name: "",
    qty: 0,
    image: "",
    desc: "",
  });

  const handleSub = () => {
    console.log(state);
    axios
      .post("http://localhost:4500/products", state)
      .then((res) => {
        alert("Product added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <h2>Products</h2>
        <p>Add New Product</p>

        <Box>
          <Grid style={{ margin: "10px" }}>
            <TextField
              id="sku"
              label="SKU"
              variant="outlined"
              onChange={(e) => setState({ ...state, sku: e.target.value })}
            />
            <br />
          </Grid>
          <Grid style={{ margin: "10px" }}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              onChange={(e) => setState({ ...state, name: e.target.value })}
            />
            <br />
          </Grid>
          <Grid style={{ margin: "10px" }}>
            <TextField
              id="qty"
              label="Quantity"
              variant="outlined"
              onChange={(e) => setState({ ...state, qty: e.target.value })}
            />
            <br />
          </Grid>
          <Grid style={{ margin: "10px" }}>
            <TextField
              id="Product-description"
              label="Product Description"
              variant="outlined"
              onChange={(e) => setState({ ...state, desc: e.target.value })}
            />
            <br />
          </Grid>
          <Grid style={{ margin: "10px" }}>
            <input
              accept="image/*"
              type="file"
              onChange={(e) => setState({ ...state, image: e.target.value })}
            />
          </Grid>
          <Grid style={{ margin: "10px" }}>
            <Button variant="contained" onClick={() => handleSub()}>
              Submit
            </Button>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default NewProduct;
