import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import expenses from './selectors/expenses'
import {setTextFilter} from './actions/filters'

import '../node_modules/normalize-css/normalize'
import './styles/styles.scss'

const store = configureStore()
const waterBill = {
    description: 'Water Bill',
    amount: 100,
    createdAt: 120
}

const gasBill = {
    description: 'Gas Bill',
    amount: 900,
    createdAt: 100
}

const rent = {
    description: 'Rent',
    amount: 13000,
    createdAt: 110
}

store.dispatch(addExpense(waterBill))
store.dispatch(addExpense(gasBill))
store.dispatch(addExpense(rent))


console.log(expenses(store.getState().expenses,store.getState().filter))

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

