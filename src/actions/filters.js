//Set Text Filter
export const setTextFilter = (text ='') => (
    {
        type: 'SET_TEXT',
        text
    }
)
//Sort by Date

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
//Sort by Amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
//Set Start Date
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
//Set End Date
export const setEndeDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})