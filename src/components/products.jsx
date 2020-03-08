import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

function useLayoutEffect() {
  const [width, setWidth] = useState(5);

  function checkWidth() {
    if (600 > window.innerWidth) {
      setWidth(1);
    }
    if (880 > window.innerWidth && window.innerWidth >= 600) {
      setWidth(2);
    }
    if (1280 > window.innerWidth && window.innerWidth >= 880) {
      setWidth(3);
    }
    if (1680 > window.innerWidth && window.innerWidth >= 1280) {
      setWidth(4);
    }
    if (window.innerWidth >= 1680) {
      setWidth(5);
    }
  }
  var debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", debounce(checkWidth, 250));
    return () =>
      window.removeEventListener("resize", debounce(checkWidth, 250));
  });
  return width;
}

export default function ProductsComponent() {
  const width = useLayoutEffect();
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "inline-block",
      width: `calc(100% / ${width} - 10px)`,
      margin: "5px",
      float: "left"
    },
    img: {
      width: "100%",
      borderRadius: "5px"
    },
    link: {
      display: "block",
      marginTop: "5px",
      "& span:first-of-type:hover": {
        color: "dimgray",
        textDecoration: "underline"
      }
    },
    price: {
      color: "#ee4d2d",
      fontSize: "22px"
    }
  }));
  const classes = useStyles();

  const data = new Array(15).fill({
    sno: 1,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img:
      "https://attach.mobile01.com/attach/202002/mobile01-4a336b931fcd78e3c9ec67453be6bd85.jpg",
    price: 799
  });
  const [products] = useState({
    data
  });

  function Products() {
    return products.data.map((item, key) => (
      <div className={[classes.root]} key={key}>
        <Link to={`/products/${item.sno}`}>
          <img className={classes.img} src={item.img} alt='Paella dish' />
        </Link>
        <Link to={`/products/${item.sno}`} className={classes.link}>
          <span>{item.name}</span>
          <span className={classes.price}>&nbsp;${item.price}</span>
        </Link>
      </div>
    ));
  }

  return (
    <div>
      <Products></Products>
      <div style={{ clear: "both" }}></div>
    </div>
  );
}
