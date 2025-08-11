import { formatNumber } from "../../../utils/formatNumber"

const usdtData = [
    {
        title: "Total Received USDT",
        value: 5060692.09,
    },
    {
        title: "Transaction Fee",
        value: 2036014.19,
    },
    {
        title: "Total Release USDT",
        value: 323000.00,
    },
    {
        title: "Total Treasury Balance",
        value: 42729.09,
    },
    {
        title: "Pending USDT Request",
        value: 10438.36,
    },
]

const depositData = [
    {
        title: "GCA",
        value: 5060692.09,
        total: 5060692.09,
    },
    {
        title: "GAE",
        value: 5060692.09,
        total: 5060692.09,
    },
    {
        title: "Buy",
        value: 5060692.09,
        total: 5060692.09,
    },
]

const usdauData = [
    {
        title: "Buy",
        value: 114.00,
        total: 0.11,
    },
    {
        title: "GAE",
        value: 1176352.85,
        total: 49.30,
    },
    {
        title: "GAE PH",
        value: 195500.00,
        total: 30.30,
    },
    {
        title: "Gold Convert",
        value: 150037.07,
        total: 127.21,
    },
]

const TreasurySummary = () => {
  return (
    <div className='flex justify-between gap-6 w-full'>
        <div className="flex flex-col space-y-4 w-full">
            <h1 className="text-base leading-6 text-[#DCA955] font-semibold">USDT</h1>
            <div className="space-y-2">
                {usdtData.map((item, key) => (
                    <div key={key} className="flex justify-between items-center p-4 rounded-lg border border-[#4C4C4C] ">
                        <span className="text-sm leading-6">{item.title}</span>
                        <span className="text-base leading-6 font-bold">${formatNumber(item.value)}</span>
                    </div>
                ))}
            </div>
            
        </div>
        <div className="flex flex-col space-y-4 w-full">
            <h1 className="text-base leading-6 text-[#DCA955] font-semibold">Direct Deposit Wallet</h1>
            <div className="space-y-2">
                {depositData.map((item, key) => (
                    <div key={key} className="flex justify-between items-center p-4 rounded-lg border border-[#4C4C4C] ">
                        <span className="text-sm leading-6">{item.title}</span>
                        <div className="flex flex-col">
                            <span className="text-base leading-6 font-bold">PHP{formatNumber(item.value)}</span>
                            <span className="text-sm leading-6 text-white/75 text-end">=${formatNumber(item.total)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex flex-col space-y-4 w-full">
            <h1 className="text-base leading-6 text-[#DCA955] font-semibold">Direct Deposit Wallet</h1>
            <div className="space-y-2">
                {usdauData.map((item, key) => (
                    <div key={key} className="flex justify-between items-center p-4 rounded-lg border border-[#4C4C4C] ">
                        <div className="flex gap-2">
                            <span className="text-sm leading-6">{item.title}</span>
                            <span className="text-sm leading-6 text-[#DCA955]">(${item.total})</span>
                        </div>
                        <span className="text-base leading-6 font-bold">${formatNumber(item.value)}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TreasurySummary