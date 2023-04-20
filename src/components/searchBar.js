import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h6>bar</h6>
    </div>
  );
}

export default SearchAppBar;
