import React, { useState } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Product from "../components/Product.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "1620px",
    width: "100%",
    margin: "0 auto"
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.secondary
  },
  pagination: {
    "& ul": {
      justifyContent: "center"
    }
  }
}));

export default function() {
  const classes = useStyles();
  var id = window.location.pathname.replace("/products/", "");
  console.log(id);

  const [data, setData] = useState({
    sno: 1,
    name: "一台跑車",
    img:
      "https://attach.mobile01.com/attach/202002/mobile01-4a336b931fcd78e3c9ec67453be6bd85.jpg",
    price: 799,
    introduction:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam nemo illo, corrupti, accusamus quia in ut aliquid accusantium doloribus beatae asperiores magnam illum consequatur culpa alias. Quod similique cumque hic.",
    features: [
      "連續讀取560MB/s /連讀寫入510MB/s",
      "動態寫入加速",
      "獨立NAND容錯陣列(RAIN)",
      "四層特定資料防護",
      "AES 256 位元加密"
    ]
  });
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {/* <Grid item xs={12} lg={2}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid> */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Product data={data}></Product>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
