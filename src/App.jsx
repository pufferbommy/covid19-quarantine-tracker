import { useContext, useEffect } from 'react'
import Picker from './components/Picker'
import DateContext from './context/DateContext'
import Result from './components/Result'

const App = () => {
  const { selectedDate } = useContext(DateContext)

  useEffect(() => {
    if (selectedDate) {
      localStorage.setItem('selectedDate', selectedDate)
    }
  }, [selectedDate])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {selectedDate && <Result />}
      {!selectedDate && <Picker />}
    </div>
  )
}

export default App
