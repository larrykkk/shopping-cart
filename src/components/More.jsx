import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MoreItems from "../components/MoreItems.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default function More(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h5" component="h2">
          更多類似商品
        </Typography>
        <MoreItems max={111}></MoreItems>
      </div>
    </div>
  );
}
