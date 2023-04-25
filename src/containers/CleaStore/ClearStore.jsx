import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { resetStoreAction } from "store/expense/expense-slice";

export function ClearStore() {
  const dispatch = useDispatch();

  const handleClearStore = () => {
    dispatch(resetStoreAction());
  };
  return (
    <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
      <button
        type="button"
        className={`btn btn-primary ${s.buttn}`}
        onClick={handleClearStore}
      >
        Clear Expenses
      </button>
    </div>
  );
}
