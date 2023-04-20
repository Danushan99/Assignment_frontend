/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";

import { useDispatch } from 'react-redux';
import { setProducts } from '../store/apps/products/index';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const productsList = () => {
  const [products, setProduct] = React.useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("http://localhost:4500/products")
      .then((res) => {
        dispatch(setProducts(res.data))
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (id) => {
    alert("Edit function");
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4500/products/${id}`)
      .then((res) => {
        alert("Product successfully deleted...!");
        getProducts()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SKU</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.sku}
              </TableCell>
              {row.image?.map((imagePath, index) => (
                <img
                  key={index}
                  src={
                    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                  }
                  alt={`Images-${index}`}
                  width={"40px"}
                  style={{ borderRadius: "100px", marginTop: "30px" }}
                />
              ))}
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleEdit(row._id)}
                >
                  <EditIcon style={{ color: "#001EB9" }} />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(row._id)}
                >
                  <DeleteIcon style={{ color: "#001EB9" }} />
                </IconButton>
                <IconButton aria-label="favorite">
                  <FavoriteIcon style={{ color: "#001EB9" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default productsList;
