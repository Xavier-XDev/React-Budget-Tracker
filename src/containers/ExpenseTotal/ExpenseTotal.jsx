import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const income = useSelector((store) => store.EXPENSE.income);
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const totalExpense = expenseList.reduce((accumulator, expense) => {
    console.log(accumulator + expense.price);
    return Number.parseFloat(accumulator) + Number.parseFloat(expense.price);
  }, 0);
  const remainingMoney = income - totalExpense;
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>R {totalExpense}</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Income Remaining</div>
        <div className={`col ${s.amount}`} style={{ color: "red" }}>
          R {remainingMoney}
        </div>
      </div>
    </div>
  );
}
