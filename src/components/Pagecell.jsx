import react from "react";
import "./pagination.css";

const Pagecell = ({ num, curr, setCurr }) => {
  return (
    <div
      onClick={() => setCurr(num)}
      className={curr === num ? "blue pointer" : "black pointer"}
    >
      {num}
    </div>
  );
};

export default Pagecell;
