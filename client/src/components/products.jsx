import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"

function useLayoutEffect() {
  const [width, setWidth] = useState(5)

  function checkWidth() {
    if (600 > window.innerWidth) {
      setWidth(1)
    }
    if (880 > window.innerWidth && window.innerWidth >= 600) {
      setWidth(2)
    }
    if (1280 > window.innerWidth && window.innerWidth >= 880) {
      setWidth(3)
    }
    if (1680 > window.innerWidth && window.innerWidth >= 1280) {
      setWidth(4)
    }
    if (window.innerWidth >= 1680) {
      setWidth(5)
    }
  }
  var debounce = function (func, wait, immediate) {
    var timeout
    return function () {
      var context = this,
        args = arguments
      var later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }
  useEffect(() => {
    checkWidth()
    window.addEventListener("resize", debounce(checkWidth, 250))
    return () => window.removeEventListener("resize", debounce(checkWidth, 250))
  })
  return width
}

export default function ProductsComponent({ data }) {
  const width = useLayoutEffect()
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "inline-block",
      width: `calc(100% / ${width} - 10px)`,
      margin: "5px",
      float: "left",
    },
    img: {
      width: "100%",
      borderRadius: "5px",
    },
    link: {
      marginTop: "5px",
    },
    price: {
      color: "#ee4d2d",
      fontSize: "22px",
    },
  }))
  const classes = useStyles()

  function Products() {
    return data.map((item, key) => (
      <div className={[classes.root]} key={key}>
        <Link to={`/products/${item.id}`}>
          <img
            className={classes.img}
            src={
              item.img || "https://semantic-ui.com/images/wireframe/image.png"
            }
            alt="Paella dish"
          />
        </Link>
        <Link
          to={`/products/${item.id}`}
          className={[classes.link, "link"].join(" ")}
        >
          <span className="link">{item.name}</span>
        </Link>
        <Link to={`/products/${item.id}`}>
          <span className={classes.price}>&nbsp;${item.price}</span>
        </Link>
      </div>
    ))
  }

  return (
    <div>
      <Products></Products>
      <div style={{ clear: "both" }}></div>
    </div>
  )
}
