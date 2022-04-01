import { useContext } from 'react'
import DateContext from '../context/DateContext'

const defaultClassNameBtn =
  'bg-pink-500 hover:bg-pink-400 mt-4 md:mt-2 text-white p-3 md:p-2 rounded-lg text-lg md:text-base transition duration-300 ease-in-out'

const ResultBox = ({
  icon,
  title,
  subtitle,
  classNameBtn = defaultClassNameBtn,
}) => {
  const { clearSelectedDate } = useContext(DateContext)

  return (
    <div className="flex px-4 flex-col items-center">
      {icon}
      <h2 className="text-4xl md:text-3xl leading-normal text-center mt-8 md:mt-4 font-bold">
        {title}
      </h2>
      {subtitle && (
        <h3 className="mt-4 md:mt-2 text-center text-xl md:text-lg">
          {subtitle}
        </h3>
      )}
      <button onClick={clearSelectedDate} className={classNameBtn}>
        เปลี่ยนแปลงวันที่เริ่มกักตัว
      </button>
    </div>
  )
}

export default ResultBox
