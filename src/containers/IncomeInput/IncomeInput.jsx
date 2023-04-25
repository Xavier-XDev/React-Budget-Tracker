import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { setIncomeAction } from "store/expense/expense-slice";

export function IncomeInput(props) {
  const income = useSelector((store) => store.EXPENSE.income);
  const dispatch = useDispatch();
  const setIncome = (e) => {
    dispatch(setIncomeAction(Number.parseFloat(e.target.value)));
  };
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-5 ${s.label}`}>Income: R</div>
      <div className="col-5">
        <input
          defaultValue={income}
          onChange={setIncome}
          type="number"
          className="form-control"
          placeholder="Eg: 12000"
        />
      </div>
    </div>
  );
}
