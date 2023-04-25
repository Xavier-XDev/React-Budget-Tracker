import { addExpenseAction } from "store/expense/expense-slice";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function ExpenseInput(props) {
  const dispatch = useDispatch(); //we need this to call an action, we don't call it the way we would any other function
  const [price, setPrice] = useState();
  const [expenseName, setExpenseName] = useState();

  const submit = (e) => {
    dispatch(addExpenseAction({ price, name: expenseName })); //function call for expene action
    //price key and value are the same so shorthand can be used
    // function to be called when we submit
    e.preventDefault(); //default behaviour of a form that is submitted is to reload the page. to avoid that, we use this
    console.log("submitted");
  };
  return (
    <form
      onSubmit={
        //call this function when we submit a form
        submit
      }
    >
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Eg : "Rent"'
            onChange={(e) => setExpenseName(e.target.value)} // to take the input value that was typed and set state
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.1"
            className="form-control"
            placeholder="Eg: 500"
            onChange={(e) => setPrice(e.target.value)} //same as 31
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Add expense
          </button>
        </div>
      </div>
    </form>
  );
}

//we cerate a "container" folder and put this in there to show that it's a component that interacts with the store
