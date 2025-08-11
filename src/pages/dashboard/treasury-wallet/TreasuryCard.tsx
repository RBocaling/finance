import { formatNumber } from "../../../utils/formatNumber"

interface info {
    title: string
    value: number
}

type Props = {
    data: info[]
}

const TreasuryCard = ({data}:Props) => {
  return (
    <>
        {data.map((item, key) =>(
            <div key={key} className="flex flex-col w-full text-center space-y-1">
                <span className="text-xl leading-6 font-bold">${formatNumber(item.value)}</span>
                <span className="text-sm leading-6">{item.title}</span>
            </div>
        ))}
    </>
  )
}

export default TreasuryCard