import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2021");
  const onYearSelect = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filterYear;
  })
  let expensesContent  = <p>No expenses Found.</p>;
    if(filteredExpenses.length > 0){
        expensesContent =  filteredExpenses.map(expense => <ExpenseItem
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />);
    }
  return (
    <Card className="expenses">

      <ExpenseFilter
        selected={filterYear}
        onYearSelect={onYearSelect}
      ></ExpenseFilter>
        {expensesContent}
    </Card>
  );
}

export default Expenses;
