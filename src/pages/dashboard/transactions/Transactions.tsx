import DateRangePicker from '../../../components/DateRangePicker'
import GroupedBarChart, { type BarTypeConfig } from '../../../components/GroupedBarChart'
import TransactionCard from './TransactionCard';
import TransactionSummary from './TransactionSummary';

const barTypes: BarTypeConfig[] = [
  { key: "value1", label: "Buy", color: "#8979FF" },
  { key: "value2", label: "GAE", color: "#FF928A" },
  { key: "value3", label: "GAEPH", color: "#3CC3DF" },
  { key: "value4", label: "Gold Convert", color: "#FFAE4C" },
  { key: "value5", label: "Sell", color: "#537FF1" },
];

const groupData = [
  {
    label: "Jan 2025",
    value1: 5060692.09,
    value2: 4060692.09,
    value3: 3060692.09,
    value4: 2060692.09,
    value5: 12060692.09,
  },
  {
    label: "Feb 2025",
    value1: 5060692.09,
    value2: 4060692.09,
    value3: 3060692.09,
    value4: 2060692.09,
    value5: 12060692.09,
  },
  {
    label: "Mar 2025",
    value1: 5060692.09,
    value2: 4060692.09,
    value3: 3060692.09,
    value4: 2060692.09,
    value5: 12060692.09,
  },
  {
    label: "Apr 2025",
    value1: 5060692.09,
    value2: 4060692.09,
    value3: 3060692.09,
    value4: 2060692.09,
    value5: 12060692.09,
  },
  {
    label: "May 2025",
    value1: 5060692.09,
    value2: 4060692.09,
    value3: 3060692.09,
    value4: 2060692.09,
    value5: 12060692.09,
  },
  {
    label: "Jun 2025",
    value1: 5060692.09,
    value2: 4060692.09,
    value3: 3060692.09,
    value4: 2060692.09,
    value5: 12060692.09,
  },
];

const sampleData = [
    {
        title: "Buy",
        value: 7472873.74,
    },
    {
        title: "GAE",
        value: 1663.67,
    },
    {
        title: "GAE PH",
        value: 448273.47,
    },
    {
        title: "Gold Convert",
        value: 446522.99,
    },
    {
        title: "Grand total",
        value: 446522.99,
    },
]

const Transactions = () => {
  return (
    <div className="space-y-8">
        <div className="rounded-2xl p-6 border border-[#625339] space-y-6">
            <div className="flex justify-between items-center">
                <h1 className='text-xl leading-8 font-semibold text-[#DCA955]'>Transaction Type Month to Month View</h1>
                <DateRangePicker />
            </div>
            <div className="flex justify-center rounded-2xl bg-[#2C2C2C] p-4">
                <TransactionCard
                    data={sampleData}
                />
            </div>
            <div>
                <GroupedBarChart data={groupData} barTypes={barTypes} className='px-6 pr-28'/>
            </div>
        </div>
        <div className="rounded-2xl p-6 border border-[#625339] space-y-6">
            <TransactionSummary />
        </div>
    </div>
  )
}

export default Transactions