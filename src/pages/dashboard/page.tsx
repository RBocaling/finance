import DashboardCard from './DashboardCard'
import Request from './Request'
import PieChart from '../../components/PieChart'
import BarChart, { type BarData } from '../../components/BarChart'
import TreasuryWallet from './treasury-wallet/TreasuryWallet'
import AUPLogo from "../../assets/AUPLogo.svg"
import Transactions from './transactions/Transactions'
import StatsAndAnalytics from './stats-analytics/StatsAndAnalytics'


const Cards = [
    {
        title: "Total AUP Transactions",
        value: "6,519.00"
    },
    {
        title: "Total Locked QMGT",
        value: "190,063.99"
    },
    {
        title: "Avg. Transaction/User",
        value: "$1,146.32"
    },
    {
        title: "Total Gross",
        value: "$7,472,873.74"
    },
    {
        title: "USDT Balance",
        value: "$1,978.10"
    },
    
]

const sampleData: BarData[] = [
  { label: "GCA", value: 5060692.09, color: "#FFAE4C" },
  { label: "GAE", value: 2036014.19, color: "#FFAE4C" },
  { label: "GAE PH", value: 323000.00, color: "#FFAE4C" },
  { label: "Buy", value: 42729.09, color: "#FFAE4C" },
  { label: "Sell", value: 10438.36, color: "#FFAE4C" },
];

const pieData = [
    { label: 'Total USDT/USDC', value: 1407606.61, color: '#FFD700' },
    { label: 'Total Fiat Received (in USD)', value: 3401390.84, color: '#FFA500' },
    { label: 'Total QMGT Received', value: 291662.28, color: '#FF8C00' },
    { label: 'Total USDAU', value: 2372214.00, color: '#DAA520' },
];
const Dashboard = () => {
   
  return (
    <div className='py-10 px-[6.5rem] space-y-7 text-white'>
        <div className="">
          <img src={AUPLogo} alt="Logo" className="w-full h-20" />
        </div>
        <h1 className='text-4xl leading-[3.375rem] font-semibold'>Dashboard</h1>
        <div className='flex flex-wrap gap-8'>
            <DashboardCard 
                card={Cards}
            />
        </div>
        <Request />
        <div className='flex gap-8'>
            <div className='space-y-6 p-6 border border-[#625339] bg-[#242424] rounded-2xl w-full'>
                <h1 className='text-xl leading-8 font-semibold text-[#DCA955]'>Currency Volume Summary</h1>
                <PieChart data={pieData} size={320} />
            </div>
            <div className='space-y-6 p-6 border border-[#625339] bg-[#242424] rounded-2xl w-full'>
                <h1 className='text-xl leading-8 font-semibold text-[#DCA955]'>Volume By Transaction Type</h1>
                <BarChart
                    initialData={sampleData}
                />
            </div>
        </div>
        <div className='space-y-7 pt-[1.375rem]'>
            <h1 className='text-4xl leading-[3.375rem] font-semibold'>Treasury Wallet</h1>
            <div>
                <TreasuryWallet />
            </div>
        </div>
        <div className='space-y-7 pt-[1.375rem]'>
            <h1 className='text-4xl leading-[3.375rem] font-semibold'>Transactions</h1>
            <div>
                <Transactions />
            </div>
        </div>
        <div className='space-y-7 pt-[1.375rem]'>
            <h1 className='text-4xl leading-[3.375rem] font-semibold'>User Statistics & Analytics</h1>
            <div>
                <StatsAndAnalytics />
            </div>
        </div>
    </div>
    
  )
}

export default Dashboard