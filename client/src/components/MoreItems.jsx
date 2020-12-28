import React from "react";
export default function MoreItems(props) {
  return (
    // products.data.map((item, key) =>
    <div>
      {props.max}
      {/* <Link to={`/products/${item.sno}`}>
        <img className={classes.img} src={item.img} alt='Paella dish' />
      </Link>
      <Link
        to={`/products/${item.sno}`}
        className={[classes.link, "link"].join(" ")}
      >
        <span className='link'>{item.name}</span>
      </Link>
      <Link to={`/products/${item.sno}`}>
        <span className={classes.price}>&nbsp;${item.price}</span>
      </Link> */}
    </div>
  );
}
