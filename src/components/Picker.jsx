import { DayPicker } from 'react-day-picker'
import DateContext from '../context/DateContext'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const today = { color: '#EC4899' },
  caption = { color: '#EC4899' }

const Picker = () => {
  const { selectedDate, setSelectedDate } = useContext(DateContext)

  return (
    <div className="flex flex-col items-center">
      <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: -25, opacity: 0 }}>
        <FontAwesomeIcon className="text-pink-500 text-[10rem]" icon={faVirus} />
      </motion.div>
      <h1 className="text-3xl text-center mt-8 font-bold">
        คุณเริ่มกักตัวตั้งแต่วันไหน?
      </h1>
      <div className="mt-2">
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
