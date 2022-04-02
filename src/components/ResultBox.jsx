import { useContext } from 'react'
import DateContext from '../context/DateContext'

const ResultBox = ({ icon, title, subtitle, btnStyles }) => {
  const { clearSelectedDate } = useContext(DateContext)

  return (
    <div className="flex px-4 flex-col items-center">
      {icon}
      <h2 className="text-4xl md:text-3xl leading-normal text-center mt-8 md:mt-4 font-bold">
        {title}
      </h2>
      {subtitle && (
        <h3 className="mt-4 md:mt-2 text-center text-xl md:text-lg">{subtitle}</h3>
      )}
      <button onClick={clearSelectedDate} className={`${btnStyles} button`}>
        เปลี่ยนแปลงวันที่เริ่มกักตัว
      </button>
    </div>
  )
}

export default ResultBox
