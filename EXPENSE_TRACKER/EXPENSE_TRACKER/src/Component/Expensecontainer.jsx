import React, { useEffect } from "react";
import { useState } from "react";
import Form from "./Form";
import { v4 as uid } from "uuid";
import History from "./History";
import BalanceContainer from "./BalanceContainer";

function Expensecontainer() {
//   const EXPENSE = [
//     {
//       id: uid(),
//       title: "Food",
//       amount: 500,
//     },
//     {
//       id: uid(),
//       title: "Transport",
//       amount: 20,
//     },
//   ];

  const [Expense, setExpense] = useState([]);


  async function addExpense(title, amount) {
    try{
      const newExpense = await fetch('http://localhost:4500/post', {  
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({ title, amount }),
    });
    const data = await newExpense.json();
    setExpense([...Expense, data.expense]);
    console.log(data);
    getExpense();
  }
  catch(error){
    console.log(error);
  }
}

async function deleteExpense(id) {
  await fetch(`http://localhost:4500/delete/${id}`, {
    method: "DELETE"
  });
  setExpense(Expense.filter((item) => item.id !== id))
  console.log("Deleted", id);  
  getExpense();
}

async function getExpense(){
  try{
  const response = await fetch('http://localhost:4500/get');
  const data = await response.json();
  setExpense(data.expenses);
  }
  catch (error){
    console.log(error.message);
  }
}

useEffect(()=>{
  getExpense();
},[]);
 
  return (
    <div className="expense-container">
      <BalanceContainer expense={Expense} />
      <Form addExpense={addExpense} />
      <History expense={Expense}  deleteExpense={deleteExpense}/>
    </div>
  );
}

export default Expensecontainer;
