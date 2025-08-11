import DateRangePicker from "../../../components/DateRangePicker"
import GroupedBarChart, { type BarTypeConfig } from "../../../components/GroupedBarChart"
import TreasuryCard from "./TreasuryCard"
import TreasurySummary from "./TreasurySummary";

const sampleData = [
    {
        title: "Gross",
        value: 7472873.74,
    },
    {
        title: "Transaction Fee",
        value: 1663.67,
    },
    {
        title: "USDT Received",
        value: 448273.47,
    },
    {
        title: "USDT Released",
        value: 446522.99,
    },
]

const barTypes: BarTypeConfig[] = [
  { key: "value1", label: "Gross", color: "#8979FF" },
  { key: "value2", label: "Fee", color: "#FF928A" },
  { key: "value3", label: "USDT Received", color: "#3CC3DF" },
  { key: "value4", label: "USDT Released", color: "#FFAE4C" },
];

const groupData = [
  {
    label: "Jan 2025",
    value1: 5060692.09,
    value2: 4060692.09,
    value3: 3060692.09,
    value4: 2060692.09,
  },
  {
    label: "Feb 2025",
    value1: 5060692.09,
    value2: 4060692.09,
    value3: 3060692.09,
    value4: 2060692.09,
  },
  {
    label: "Mar 2025",
    value1: 5060692.09,
    value2: 4060692.09,
    value3: 3060692.09,
    value4: 2060692.09,
  },
  {
    label: "Apr 2025",
    value1: 5060692.09,
    value2: 4060692.09,
    value3: 3060692.09,
    value4: 2060692.09,
  },
  {
    label: "May 2025",
    value1: 5060692.09,
    value2: 4060692.09,
    value3: 3060692.09,
    value4: 2060692.09,
  },
  {
    label: "Jun 2025",
    value1: 5060692.09,
    value2: 4060692.09,
    value3: 3060692.09,
    value4: 2060692.09,
  },
];

const TreasuryWallet = () => {
  return (
    <div className="space-y-8">
        <div className="rounded-2xl p-6 border border-[#625339] space-y-6">
            <div className="flex justify-between items-center">
                <h1 className='text-xl leading-8 font-semibold text-[#DCA955]'>USDT Month to Month View</h1>
                <DateRangePicker />
            </div>
            <div className="flex justify-center rounded-2xl bg-[#2C2C2C] p-4">
                <TreasuryCard
                    data={sampleData}
                />
            </div>
            <div>
                <GroupedBarChart data={groupData} barTypes={barTypes} className="px-8 pr-20" />
            </div>
        </div>
        <div className="rounded-2xl p-6 border border-[#625339] space-y-6">
            <TreasurySummary />
        </div>
    </div>
  )
}

export default TreasuryWallet