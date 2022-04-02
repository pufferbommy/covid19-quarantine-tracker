import { useContext, useMemo } from 'react'
import DateContext from '../context/DateContext'
import { addDays, format, differenceInDays } from 'date-fns'
import { th } from 'date-fns/locale'
import ResultBox from './ResultBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHatWizard,
  faHouseChimney,
  faHouse,
} from '@fortawesome/free-solid-svg-icons'

const Result = () => {
  const { selectedDate } = useContext(DateContext)
  const targetDate = useMemo(
    () => addDays(new Date(selectedDate), 14),
    [selectedDate],
  )
  const targetDay = useMemo(
    () => differenceInDays(targetDate, new Date()),
    [targetDate],
  )
  const isFuture = targetDay >= 14
  const isQuarantineCompleted = targetDay <= 0

  if (isFuture) {
    return (
      <ResultBox
        icon={
          <FontAwesomeIcon
            className="text-[10rem] text-purple-500"
            icon={faHatWizard}
          />
        }
        title="นี่คือวันในอนาคต!"
        btnStyles="bg-purple-500 hover:bg-purple-400 ring-purple-300"
      />
    )
  }

  if (isQuarantineCompleted) {
    return (
      <ResultBox
        icon={
          <FontAwesomeIcon
            className="text-[10rem] text-green-500"
            icon={faHouseChimney}
          />
        }
        title="คุณกักตัวครบวันที่กำหนดแล้ว!"
        subtitle="หายป่วยแล้ว ดูแลสุขภาพด้วยนะ"
        btnStyles="bg-green-500 hover:bg-green-400 ring-green-300"
      />
    )
  }

  return (
    <ResultBox
      icon={
        <FontAwesomeIcon className="text-[10rem] text-pink-500" icon={faHouse} />
      }
      title={`เหลืออีก ${targetDay} วันจะครบเวลากักตัว`}
      subtitle={`วันที่ ${format(targetDate, 'd MMM yyyy', {
        locale: th,
      })} คุณจะเป็นอิสระแล้ว!`}
      btnStyles="bg-pink-500 hover:bg-pink-400 ring-pink-300"
    />
  )
}

export default Result
