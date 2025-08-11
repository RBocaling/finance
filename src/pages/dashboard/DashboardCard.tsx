
interface Cards{
    title: string
    value: string
}

type Props = {
    card: Cards[]
}

const DashboardCard = ({card}:Props) => {
  return (
    <>
        {card.map((item, key) => (
            <div key={key} className='flex flex-col rounded-2xl p-6 border border-[#625339] bg-[#242424] w-[24.375rem]'>
                <span className='text-base leading-6'>{item.title}</span>
                <span className='text-[2rem] leading-12 font-bold'>{item.value}</span>
            </div> 
        ))}
    </>
  )
}

export default DashboardCard