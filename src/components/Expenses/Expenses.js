import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2021");
  const onYearSelect = (year) => {
    console.log(year);
    setFilterYear(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onYearSelect={onYearSelect}
      ></ExpenseFilter>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
    </Card>
  );
}

export default Expenses;
