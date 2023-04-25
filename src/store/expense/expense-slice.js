const { createSlice, current } = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
  name: "expenceSlice",
  initialState: {
    income: 12000,
    expenseList: [],
    //     { name: "Apple", price: 1.5 }, used these to show how default values can be put
    //     { name: "Laptop", price: 2000 },
    countActionPerformed: 0,
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      //for using the current slice to add data and stuff
      console.log("addExpenseAction");
      currentSlice.expenseList.push(action.payload); //for action that adds stuff to the array when form is submitted. Directly
    },
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
    IncrementActionPerformed: (currentSlice, action) => {
      currentSlice.countActionPerformed++;
    },
    resetStoreAction: (currentSlice, action) => {
      console.log("Button pressed");
      return {
        income: 12000,
        expenseList: [],
        countActionPerformed: 0,
      };
    },
  },
});

export const {
  addExpenseAction,
  setIncomeAction,
  IncrementActionPerformed,
  resetStoreAction,
} = expenseSlice.actions; //this allows us to export the action (as a structure)
// this is the same as const addExpenseAction = expenseSlice.actions.addExpenseAction
