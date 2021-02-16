import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "../axios.js"

import Price from "../utils/price.js"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  img: {
    width: "100%",
  },
  info: {
    marginLeft: "15px",
  },
  margin: {
    "&:not(:first-of-type)": {
      margin: theme.spacing(0.5),
    },
  },
}))

export default function Product(props) {
  const classes = useStyles()
  const price = Price.format(props.data.price)

  const { id } = useParams()
  const [productDetail, setProductDetail] = useState({})

  async function fetchData() {
    const res = await axios.Products.get(id)
    console.log(res)
    if(res.data.payload){

    }
    setProductDetail()
  }
  useEffect(() => {
    fetchData()
  }, [])
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
          <div>{price}</div>
          <span>款式:</span>
          <ul>
            <li>
              <Button
                variant="outlined"
                size="small"
                className={classes.margin}
              >
                A
              </Button>
              <Button
                variant="outlined"
                size="small"
                className={classes.margin}
              >
                B
              </Button>
              <Button
                variant="outlined"
                size="small"
                className={classes.margin}
              >
                C
              </Button>
            </li>
          </ul>
          <ul>
            {props.data.features.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.margin}
          >
            買
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.margin}
          >
            存
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.margin}
          >
            喜歡
          </Button>
        </Grid>
      </Grid>
      {/* <div>輪播</div>
      <div className={classes.info}></div> */}
    </div>
  )
}
