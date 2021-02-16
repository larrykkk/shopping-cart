import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Pagination from "@material-ui/lab/Pagination"
import Products from "../components/products.jsx"
import axios from "../axios.js"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "1620px",
    width: "100%",
    margin: "0 auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  pagination: {
    "& ul": {
      justifyContent: "center",
    },
  },
}))

export default function FullWidthGrid() {
  const classes = useStyles()

  const [page, setPage] = useState(1)
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])

  const handleChange = (event, value) => {
    setPage(value)
  }
  async function fetchData() {
    const res = await axios.Products.get()
    if (res) {
      const { count, search_result } = res.data.payload
      setCount(count)
      setProducts(search_result)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={2}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} lg={10}>
          <Paper className={classes.paper}>
            <Products data={products}></Products>
            <Pagination
              page={page}
              onChange={handleChange}
              className={classes.pagination}
              count={count}
              variant="outlined"
              shape="rounded"
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
