import ReactDOM from 'react-dom'
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
    createdAt: 100
}

const gasBill = {
    description: 'Gas Bill',
    amount: 900,
    createdAt: 110
}

store.dispatch(addExpense(waterBill))
store.dispatch(addExpense(gasBill))

store.dispatch(setTextFilter('bill'))


console.log(expenses(store.getState().expenses,store.getState().filter))

ReactDOM.render(AppRouter, document.getElementById('app'))

