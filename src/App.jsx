import { expenseSlice } from "store/expense/expense-slice";
import s from "./style.module.css";
import { ExpenseInput } from "containers/ExpenseInput/ExpenseInput";
import { List } from "components/List/List";
import { ExpenseList } from "containers/ExpenseList";
import { IncomeInput } from "containers/IncomeInput/IncomeInput";
import { ExpenseTotal } from "containers/ExpenseTotal/ExpenseTotal";
import { Logo } from "components/Logo/Logo";
import { ClearStore } from "containers/CleaStore/ClearStore";

export function App() {
  return (
    <div className={s.main_container}>
      <div className={`row ${s.header} ${s.center}`}>
        <div className={`col-7 text-center`}>
          <Logo
            title="MoneyWise"
            subtitle="Expense Tracker: Ballin' on a Budget"
          />
        </div>
        <div className={`col-9 ${s.income_input}`}>
          <IncomeInput />
        </div>
      </div>
      <div className={`row ${s.workspace}`}>
        <div className={`col-12  ${s.expense_input}`}>
          <ExpenseInput />
        </div>
        <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
          <ExpenseList />
          <div className={`col-12 ${s.expense_total}`}>
            <ExpenseTotal />
          </div>
          <div style={{ marginLeft: "200px", marginTop: "20px" }}>
            <ClearStore />
          </div>
        </div>
      </div>
    </div>
  );
}
