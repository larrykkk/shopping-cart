import React from "react";

function Index() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return nums.map((num, i) => <h1>Hello, {num}</h1>);
}
export default Index;
