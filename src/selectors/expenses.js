
export default (expenses,{text='',startDate,endDate,sortBy}={}) => {
    return expenses.filter((expense) => {
        const textMatched = expense.description.toLowerCase().includes(text.toLowerCase())
        const startDateMatched = typeof startDate !== 'number' ? true:   expense.createdAt >= startDate
        const endDateMatched = typeof endDate !== 'number' ? true: expense.createdAt < endDate

        return textMatched && startDateMatched && endDateMatched
    }).sort((a,b) => {
        if(sortBy ==='date') {
            return a.createdAt < b.createdAt ? 1 :-1
        } else {
            return a.amount < b.amount ? 1 : -1
        }
    })
}