import React from "react";
import CurrentItems from "./CurrentItems";

function BalanceContainer(props) {
  let income = 0;
  let expenses = 0;

    props.expense.forEach((item) => {
    if (item.amount > 0) {
      income += parseInt(item.amount);
    } else {
      expenses += parseInt(item.amount);
    }
  });
  console.log(income, expenses);
    return (
    <div className="balance-container">
        <CurrentItems title = "income" amount = {income} type = "income"/>
         <CurrentItems title = "expense" amount = {expenses} type ="expense"/>
          <CurrentItems title = "Balance" amount = {income + expenses} type ="balance"/>
    </div>
  );
}

export default BalanceContainer;
