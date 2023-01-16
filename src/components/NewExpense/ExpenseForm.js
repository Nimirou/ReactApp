import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (oEvent) => {
    setEnteredTitle(oEvent.target.value);
  };

  const priceChangeHandler = (oEvent) => {
    setEnteredPrice(oEvent.target.value);
  };

  const dateChangeHandler = (oEvent) => {
    setEnteredDate(oEvent.target.value);
  };

  const submitHandler = (oEvent) => {
    oEvent.preventDefault();
    const ExpenseItemData = {
      title: enteredTitle,
      amount: enteredPrice,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(ExpenseItemData);
    clearForm();
  };

  const clearForm = () => {
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            value={enteredPrice}
            type="number"
            min="0.01"
            step="0.01"
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2023-10-03"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
