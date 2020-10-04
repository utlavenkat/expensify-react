import {createStore,combineReducers} from 'redux'
import {v4 as uuidv4} from 'uuid'

// Add Expense
const addExpense = ({description = '', note ='', amount=0, createdAt=0}={}) => (
    {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuidv4(),
            description,
            note,
            amount,
            createdAt
        }
    }
    )
//Remove Expense

const removeExpense = (id) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
)

//Edit Expense

const editExpense= (id,expense) => ({
    type: 'EDIT_EXPENSE',
    id,
    expense
})
//Set Text Filter
const setTextFilter = (text ='') => (
    {
        type: 'SET_TEXT',
        text
    }
)
//Sort by Date

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
//Sort by Amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
//Set Start Date
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
//Set End Date
const setEndeDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
/*
expenses : [{
    id:
    description:
    note:
    amount:
    createdAt:
}]

filters: {
    text:
    sortBy:
    startDate:
    endDate:
}
*/
const expensesDefaultState = []
const expensesReducer = (state = expensesDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': 
           return [...state, action.expense ]
        case 'REMOVE_EXPENSE': 
            return state.filter(({id}) => id !== action.id)
            
        case 'EDIT_EXPENSE': 
             return state.map((expense)=> {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.expense
                    }
                } else {
                    return expense
                }
            })
        default: return state
    }
}

const filterDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state=filterDefaultState,action) => {
    switch(action.type) {
        case 'SET_TEXT': return {
                ...state,
                text: action.text
        }
        case 'SORT_BY_DATE': return {
            ...state,
            sortBy:'date'
        } 
        case 'SORT_BY_AMOUNT': return {
            ...state,
            sortBy:'amount'
        }
        case 'SET_START_DATE': return {
            ...state,
            startDate: action.startDate
        }

        case 'SET_END_DATE': return {
            ...state,
            endDate: action.endDate
        }

        default: return state
    }
}

const getVisibleItems = (expenses,{text='',startDate,endDate,sortBy}) => {
    return expenses.filter((expense) => {
        const textMatched = expense.description.includes(text)
        const startDateMatched = typeof startDate !== 'number' ? true:   expense.createdAt >= startDate
        const endDateMatched = typeof endDate !== 'number' ? true: expense.createdAt < endDate

        return textMatched && startDateMatched && endDateMatched
    }).sort((a,b) => {
        if(sortBy ==='date') {
            return a.createdAt < b.createdAt ? 1 :-1
        } if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}
const store = createStore(combineReducers(
    {
        expenses: expensesReducer,
        filter: filterReducer
    }
    ))

const unSubscribe = store.subscribe(()=> {
    const state = store.getState()
    console.log(getVisibleItems(state.expenses,state.filter))
})
const expenseOne = store.dispatch(addExpense(
    {
        description: 'Rent',
        amount: 13000,
        createdAt: 1000
    }
    )
)
const expenseTwo = store.dispatch(addExpense(
    {
        description: 'PowerBill',
        amount: 2000,
        createdAt: 130
    }
    )
)
//store.dispatch(removeExpense(expenseOne.expense.id))
//store.dispatch(editExpense(expenseTwo.expense.id,{amount:2500}))

//store.dispatch(setTextFilter('e'))
//store.dispatch(setStartDate(100))
//store.dispatch(setEndeDate(140))

store.dispatch(sortByAmount())