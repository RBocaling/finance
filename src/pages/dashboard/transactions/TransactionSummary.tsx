import { formatNumber } from "../../../utils/formatNumber"

const overviewData = [
    {
        title: "Completed",
        value: 5060692.09,
    },
    {
        title: "Endorse to finance",
        value: 2036014.19,
    },
    {
        title: "On Process",
        value: 323000.00,
    },
]

const overviewData1 = [
    {
        title: "Open",
        value: 42729.09,
    },
    {
        title: "Pending",
        value: 5060692.09,
        total: 5060692.09,
    },
    {
        title: "Request for Termination",
        value: 5060692.09,
        total: 5060692.09,
    },
]

const TransactionSummary = () => {
    return (
        <div className='flex justify-between gap-6 w-full'>
            <div className="flex flex-col space-y-4 w-full">
                <h1 className="text-base leading-6 text-[#DCA955] font-semibold">Transaction Status Overview</h1>
                <div className="space-y-2">
                    {overviewData.map((item, key) => (
                        <div key={key} className="flex justify-between items-center p-4 rounded-lg border border-[#4C4C4C] ">
                            <span className="text-sm leading-6">{item.title}</span>
                            <span className="text-base leading-6 font-bold">${formatNumber(item.value)}</span>
                        </div>
                    ))}
                    <div className=" px-4 rounded-lg border border-[#4C4C4C] ">
                        <div className="flex py-4 justify-between border-b border-[#4C4C4C]">
                            <span className="text-sm leading-6">GCA QMGT Locked</span>
                            <div className="flex flex-col text-end ">
                                <span className="text-base leading-6 font-bold">42,116.88</span>
                                <span className="text-base leading-6">= $4,548,622.91</span>
                            </div>
                        </div>
                        <div className="flex justify-between py-4">
                            <span className="text-sm leading-6">Expected Termination</span>
                            <span className="text-base leading-6 font-bold">$1,048,622.91</span>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="flex flex-col space-y-4 w-full">
                <div className="space-y-2 mt-10">
                    {overviewData1.map((item, key) => (
                        <div key={key} className="flex justify-between items-center p-4 rounded-lg border border-[#4C4C4C] ">
                            <span className="text-sm leading-6">{item.title}</span>
                            <span className="text-base leading-6 font-bold">${formatNumber(item.value)}</span>
                        </div>
                    ))}
                    <div className=" px-4 rounded-lg border border-[#4C4C4C] ">
                        <div className="flex py-4 justify-between border-b border-[#4C4C4C]">
                            <span className="text-sm leading-6">GAE QMGT Locked</span>
                            <div className="flex flex-col text-end ">
                                <span className="text-base leading-6 font-bold">147,947.11</span>
                                <span className="text-base leading-6">= $15,978,287.72</span>
                            </div>
                        </div>
                        <div className="flex justify-between py-4">
                            <span className="text-sm leading-6">Expected Termination</span>
                            <span className="text-base leading-6 font-bold">$3,978,287.72</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TransactionSummary