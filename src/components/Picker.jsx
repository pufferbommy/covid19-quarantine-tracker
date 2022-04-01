import { DayPicker } from 'react-day-picker'
import DateContext from '../context/DateContext'
import { useContext } from 'react'

const today = { color: 'rgb(236 72 153)' }
const caption = { color: 'rgb(236 72 153)' }

const Picker = () => {
  const { selectedDate, setSelectedDate } = useContext(DateContext)

  return (
    <div className="flex flex-col items-center">
      <i className="fa-solid fa-viruses text-pink-500 text-[10rem]" />
      <h1 className="text-3xl text-center mt-8 md:mt-4 font-bold">
        คุณเริ่มกักตัวตั้งแต่วันไหน?
      </h1>
      <div className="mt-2 md:mt-0">
        <DayPicker
          showOutsideDays
          modifiersStyles={{ today }}
          styles={{
            caption,
          }}
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
        />
      </div>
    </div>
  )
}

export default Picker
