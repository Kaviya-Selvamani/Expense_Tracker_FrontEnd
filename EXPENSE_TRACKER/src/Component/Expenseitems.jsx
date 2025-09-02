import React from "react";

function Expenseitems(props) {
  const { title, amount, _id } = props.expense;
  const type = amount < 0 ? "expense" : "income";

  function handleDelete() {
    props.deleteExpense(_id);
  }

  return (
    <div className={`expense-item ${type}`}>
      <div className="expense-title">{title}</div>
      <div className="expense-amount">${amount}</div>
      <div className="expense-delete">
      <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Expenseitems;
