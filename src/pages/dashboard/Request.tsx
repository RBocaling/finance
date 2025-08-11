
const Request = () => {
  return (
    <div className='p-6 bg-[#242424] border border-[#625339] rounded-2xl space-y-6'>
        <h1 className='text-xl leading-8 font-semibold text-[#DCA955]'>USDAU TO USDT Request </h1>
        <div className='flex py-4 bg-[#2C2C2C] rounded-2xl w-full'>
            <div className='flex flex-col justify-center text-center w-full space-y-2'>
                <span className='text-2xl leading-8 text-[#FF9F1A]'>10,000</span>
                <span className='text-sm leading-6 text-white'>Due in 7 days</span>
            </div>
            <div className='flex flex-col justify-center text-center w-full space-y-2'>
                <span className='text-2xl leading-8 text-[#F04242]'>12,000</span>
                <span className='text-sm leading-6 text-white'>Overdue 7 days</span>
            </div>
        </div>
    </div>
  )
}

export default Request