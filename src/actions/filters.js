//set name filter
export const setNameFilter = (name = '') => ({
  type: "SET_NAME_FILTER",
  name
})

//sort by date
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
})

//sort by name
export const sortByName = () => ({
  type: "SORT_BY_NAME"
})

//set start date
export const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
})


//set end date
export const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate
})