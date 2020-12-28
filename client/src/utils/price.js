export default {
  format(price) {
    if (price.toString().length > 3) {
      return (
        "$" +
        price
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")
          .replace(".00", "")
      );
    } else {
      return price;
    }
  }
};
