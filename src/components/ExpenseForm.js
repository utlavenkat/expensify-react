import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'


class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state =
                {
                    description: props.expense? props.expense.description: '',
                    amount: props.expense? props.expense.amount: '',
                    note: props.expense? props.expense.note:'',
                    createdAt: moment(),
                    calendarFocus: false,
                    error: ''
                }
   
    }

    
    onUpdateDescription = (e) => {
        const description = e.target.value
        this.setState((prev)=> (
            {
                description
            }
        ))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        this.setState((prev)=> (
            {
                amount
            }
        ))
    }

    onUpdateNote = (e) => {
        const note = e.target.value
        this.setState((prev)=> (
            {
                note
            }
        ))
    }

    onDateChange = (createdAt) => {
        if(createdAt) 
        {
            this.setState(() => ({createdAt}))
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide Description and Amount'}))
        } else {
            this.setState(() => ({error:''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10) * 100,
                createdAt: moment().unix(),
                note: this.state.note
            })
        }
    }

    render() {
       return  <div>
            {this.state.error && <p>{this.state.error}</p> }
            <form onSubmit={this.onSubmit}>
                <input type="text" autoFocus placeholder="Description (Mandatory)" value={this.state.description} onChange={this.onUpdateDescription}></input> <br/><br/>
                <input type="text" value={this.state.amount} onChange={this.onAmountChange}></input> <br/><br/><br/>
                <SingleDatePicker
                    date={this.state.createdAt} // momentPropTypes.momentObj or null
                    onDateChange={this.onDateChange} // PropTypes.func.isRequired
                    focused={this.state.calendarFocus} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ calendarFocus:focused })} // PropTypes.func.isRequired
                    isOutsideRange = {() => {false}}
                    numberOfMonths= {1}
                    id="createdAt" // PropTypes.string.isRequired,
                /> <br/><br/><br/>
                <textarea placeholder="Note (Optional" defaultValue={this.state.note} onChange={this.onUpdateNote}></textarea><br/>
                <button>Add Expense</button>
            </form>
        </div>
    }
}

export default ExpenseForm