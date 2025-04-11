import React, { useEffect, useState, useContext } from "react";
import { dataContext } from "./Home";
import { data } from "react-router-dom";

function Counter(props) {
  const data = useContext(dataContext);
  const [count, setCount] = useState(0);
  // Batch Updation React

  useEffect(() => {
    console.log(count);
  });

  return (
    <div className="m-5">
      {/* <h2>{props.value}</h2> useContext hooks before I learned */}
      <h2>{data}</h2>
      <h2>{count}</h2>
      <button
        className="btn btn-primary"
        onClick={() => {
          //   setCount(count + 1);
          //   setCount(count + 1); we can't increment by 2 count to count statr variable fix this issue

          // setCount((count) => count + 1); before useRef Component Learn other wise this is updater method
          setCount((count) => count + 1); // then it will be increment by 2
          //   console.log(count); count = 5 but console print 4
        }}
      >
        Up
      </button>
    </div>
  );
}

export default Counter;
