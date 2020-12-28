import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import Products from "../components/products.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "1620px",
    width: "100%",
    margin: "0 auto"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  pagination: {
    "& ul": {
      justifyContent: "center"
    }
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    // console.log(value);
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={2}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} lg={10}>
          <Paper className={classes.paper}>
            <Products></Products>
            <Pagination
              page={page}
              onChange={handleChange}
              className={classes.pagination}
              count={10}
              variant='outlined'
              shape='rounded'
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

// function Index() {
//   const [numbers, setNumbers] = useState(() => new Array(30).fill(0));

//   window.addEventListener("scroll", () => {
//     if (
//       window.scrollY + window.innerHeight + 100 >=
//       document.documentElement.scrollHeight
//     ) {
//       setNumbers((currentState) => currentState.concat(new Array(30).fill(0)));
//     }
//   });

//   const listItems = numbers.map((number, i) => (
//     <div key={i}>
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
//       temporibus error possimus delectus repudiandae officiis laudantium maiores
//       quos eius nam, commodi totam aut. Laborum eius sint ratione ipsa. Libero,
//       repudiandae.
//     </div>
//   ));

//   return <div id='infinite-scroll'>is home</div>;
// }
// export default Index;
