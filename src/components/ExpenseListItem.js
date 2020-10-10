import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {removeExpense} from '../actions/expenses'

const ExpenseListItem = ({dispatch, expense}) => (
    <div>
         <h4>{expense.description} <button onClick={(e) => {
            dispatch(removeExpense(expense.id))
         }}>Remove</button>
         <Link to={`/edit/${expense.id}`}>Edit</Link>
         </h4> 
        {expense.amount} - {expense.createdAt}
    </div>
)


export default connect()(ExpenseListItem)



