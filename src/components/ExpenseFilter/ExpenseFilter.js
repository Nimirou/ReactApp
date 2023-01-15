import React, { useState } from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const [year, setYear] = useState("2021");
  const setSelectedYear = (oEvent) => {
    setYear(oEvent.target.value);
    props.onYearSelect(oEvent.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={setSelectedYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
