import { createContext, useState } from 'react'

const DateContext = createContext()

const getSelectedDate = localStorage.getItem('selectedDate') || undefined

const DateContextProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(getSelectedDate)

  const clearSelectedDate = () => {
    setSelectedDate(undefined)
    localStorage.clear()
  }

  return (
    <DateContext.Provider
      value={{ selectedDate, setSelectedDate, clearSelectedDate }}
    >
      {children}
    </DateContext.Provider>
  )
}

export { DateContextProvider }
export default DateContext
