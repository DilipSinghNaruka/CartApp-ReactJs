import React, { useState } from "react";
// import Rating from "./Rating";

function Filter() {
  const [ascending, setAscending] = useState(false);
  const [descending, setDescending] = useState(false);
//   const [rate, setRate] = useState();
  const handleAscendingChange = () => {
    setAscending(true);
    setDescending(false); // Clear the descending option
  };

  const handleDescendingChange = () => {
    setAscending(false); // Clear the ascending option
    setDescending(true);
  };

  return (
    <div className="Filter_Container">
      <div>
        <span>Ascending</span>
        <input
          type="checkbox"
          checked={ascending}
          onChange={handleAscendingChange}
        />
      </div>
      <div>
        <span>Descending</span>
        <input
          type="checkbox"
          checked={descending}
          onChange={handleDescendingChange}
        />
      </div>
      <div>
        <span>Include Out of Stock</span>
        <input type="checkbox" name="" id="" />
      </div>
      <div>
        <span>Fast Delivery Only</span>
        <input type="checkbox" name="" id="" />
      </div>
      <div>
        <span>Rating:-</span>
        {/* <Rating
          rating={rate}
          style={{ cursor: "pointer" }}
          onClick={(i) => setRate(i + 1)}
        /> */}
      </div>
      <div>
        <button>Clear Filter</button>
      </div>
    </div>
  );
}

export default Filter;
