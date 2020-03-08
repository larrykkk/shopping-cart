import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    paddingLeft: "20px",
    paddingRight: "20px",
    height: "56px",
    lineHeight: "56px",
    backgroundColor: "#333"
  },
  logo: {
    display: "inline"
  },
  ul: {
    float: "right",
    display: "inline",
    "& li": {
      display: "inline",
      marginLeft: "10px"
    }
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logo}>Logo</div>
      <ul className={classes.ul}>
        <li>
          <Link to='/'>商品</Link>
        </li>
        <li>
          <Link to='/about'>關於我們</Link>
        </li>
        <li>
          <Link to='/login'>登入</Link>
        </li>
      </ul>
    </div>
  );
}
