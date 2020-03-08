import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  img: {
    width: "100%"
  },
  info: {
    marginLeft: "15px"
  },
  margin: {
    "&:not(:first-of-type)": {
      margin: theme.spacing(0.5)
    }
  }
}));

export default function(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <img
            className={classes.img}
            src={props.data.img}
            alt={props.data.name}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <h1>{props.data.name}</h1>
          <p>{props.data.introduction}</p>
          <ul>
            {props.data.features.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
          <Button
            variant='outlined'
            size='small'
            color='primary'
            className={classes.margin}
          >
            買
          </Button>
          <Button
            variant='outlined'
            size='small'
            color='primary'
            className={classes.margin}
          >
            存
          </Button>
          <Button
            variant='outlined'
            size='small'
            color='primary'
            className={classes.margin}
          >
            喜歡
          </Button>
        </Grid>
      </Grid>
      {/* <div>輪播</div>
      <div className={classes.info}></div> */}
    </div>
  );
}
