import { useContext, useState } from 'react'
import DateContext from '../context/DateContext'
import { addDays, format, differenceInDays } from 'date-fns'
import { th } from 'date-fns/locale'
import ResultBox from './ResultBox'

const Result = () => {
  const { clearSelectedDate, selectedDate } = useContext(DateContext)
  const [targetDate, setTargetDate] = useState(
    addDays(new Date(selectedDate), 14),
  )
  const [targetDay, setTargetDay] = useState(
    differenceInDays(targetDate, new Date()),
  )

  const isFuture = targetDay >= 14
  const isQuarantineCompleted = targetDay <= 0

  if (isFuture) {
    return (
      <ResultBox
        icon={<i class="fa-solid fa-hat-wizard text-[10rem] text-purple-500" />}
        title={'นี่คือวันในอนาคต!'}
        classNameBtn="bg-purple-500 hover:bg-purple-400 mt-4 md:mt-2 text-white p-3 md:p-2 rounded-lg text-lg md:text-base transition duration-300 ease-in-out"
      />
    )
  }

  if (isQuarantineCompleted) {
    return (
      <ResultBox
        icon={
          <i class="fa-solid fa-house-chimney text-[10rem] text-green-500" />
        }
        title={`คุณกักตัวครบวันที่กำหนดแล้ว!`}
        subtitle="หายป่วยแล้ว ดูแลสุขภาพด้วยนะ"
        classNameBtn="bg-green-500 hover:bg-green-400 mt-4 md:mt-2 text-white p-3 md:p-2 rounded-lg text-lg md:text-base transition duration-300 ease-in-out"
      />
    )
  }

  return (
    <ResultBox
      icon={<i className="fa-solid fa-house text-[10rem] text-pink-500"></i>}
      title={`เหลืออีก ${targetDay?.toString()} วันจะครบเวลากักตัว`}
      subtitle={`วันที่ ${format(targetDate, 'd MMM yyyy', {
        locale: th,
      })}
        คุณจะเป็นอิสระแล้ว!`}
    />
  )
}

export default Result
