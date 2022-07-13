import React, { useState } from "react";
import Pagecell from "./Pagecell";
import "./pagination.css";

const Pagination = ({ total, selected, onPageChange }) => {
  let arr = new Array(total).fill(0).map((x, i) => (x = i + 1));
  const [curr, setCurr] = useState(selected);

  onPageChange = (val) => {
    val < 0 && curr + val >= 1 && setCurr(curr + val);
    val > 0 && curr + val <= arr.length && setCurr(curr + val);
  };

  return (
    <div className="cellContainer">
      <button disabled={curr === 1} onClick={() => onPageChange(-1)}>
        Prev
      </button>
      {arr.map((x, i) => (
        <Pagecell key={i + 1} curr={curr} setCurr={setCurr} num={i + 1} />
      ))}
      <button disabled={curr === arr.length} onClick={() => onPageChange(1)}>
        Next
      </button>
    </div>
  );
};
export default Pagination;
