import { useContext, useEffect } from 'react'
import Picker from './components/Picker'
import DateContext from './context/DateContext'
import Result from './components/Result'
import Footer from './components/Footer'

const App = () => {
  const { selectedDate } = useContext(DateContext)

  useEffect(() => {
    selectedDate && localStorage.setItem('selectedDate', selectedDate)
  }, [selectedDate])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {selectedDate && <Result />}
      {!selectedDate && <Picker />}
      <Footer />
    </div>
  )
}

export default App
