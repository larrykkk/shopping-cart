import React, { useState } from "react";

function Index() {
  const [numbers, setNumbers] = useState(() => new Array(30).fill(0));

  window.addEventListener("scroll", () => {
    if (
      window.scrollY + window.innerHeight + 100 >=
      document.documentElement.scrollHeight
    ) {
      setNumbers((currentState) => currentState.concat(new Array(30).fill(0)));
    }
  });

  const listItems = numbers.map((number, i) => (
    <div key={i}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
      temporibus error possimus delectus repudiandae officiis laudantium maiores
      quos eius nam, commodi totam aut. Laborum eius sint ratione ipsa. Libero,
      repudiandae.
    </div>
  ));

  return <div id='infinite-scroll'>is home</div>;
}
export default Index;
