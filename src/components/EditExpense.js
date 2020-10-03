import React from 'react'

const EditExpense = (props) => {
    console.log(props)
     return (
         <div>
            <p>Editing Expense for {props.match.params.id}</p>
        </div>
     )
}

export default EditExpense