import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseList = (props) => (
    <div>
    <ExpenseListFilters filters={props.filters}/>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => <ExpenseListItem expenses= {props.expenses} expense={expense} key={expense.id}/>)}
  </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filter),
        filters: state.filter
    }
}

export default connect(mapStateToProps)(ExpenseList)