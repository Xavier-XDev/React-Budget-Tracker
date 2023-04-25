import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  IncrementActionPerformed,
  addExpenseAction,
  setIncomeAction,
} from "store/expense/expense-slice";

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  matcher: isAnyOf(setIncomeAction, addExpenseAction),
  //predicate: (action) => {
  //listen to any action
  // return true;
  // to return specific actions with predicate: return action.type==="expenseSlice/addExpenseAction" || action.type==="expenseSlice/addExpenseAction"
  // to listen to those specific actions.

  effect: async (action, listenerAPI) => {
    console.log("Action", action);
    listenerAPI.dispatch(IncrementActionPerformed());
    console.log(`New store value ${listenerAPI.getState()}`); //to get the current store value
  },
});
