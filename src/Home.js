import React from "react";
import Container from "@mui/material/Container";
import Navbar from "./components/navbar";
import SearchAppBar from "./components/searchBar";
import ProductsList from "./components/productsList"
import Button from '@mui/material/Button';

function Home() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Navbar />
        <h1>PRODUCTS</h1>
        <Button variant="contained">New Product</Button>
        <SearchAppBar />
        <ProductsList />
      </Container>
    </React.Fragment>
  );
}

export default Home;
