import Table from '../../../components/Table'

const columns = [
  { key: "month", label: "Month" },
  { key: "transactionVolume", label: "Transaction Volume" },
  { key: "registered", label: "Registered" },
  { key: "verifiedUsers", label: "Verified Users" },
  { key: "transactionUser", label: "Transaction to User Ratio" },
];

const sameColumns = [
  { key: "month", label: "Month" },
  { key: "verified", label: "Verified Users" },
  { key: "transaction", label: "Transactions" },
  { key: "conversionRatio", label: "Conversion Ratio" },
];

const sameMockData = [
  {
    month: "January",
    verified: 105,
    transaction: 1000,
    conversionRatio: "5.41%",
  },
  {
    month: "February",
    verified: 105,
    transaction: 1000,
    conversionRatio: "5.41%",
  },
  {
    month: "March",
    verified: 105,
    transaction: 1000,
    conversionRatio: "5.41%",
  },
  {
    month: "April",
    verified: 105,
    transaction: 1000,
    conversionRatio: "5.41%",
  },
  {
    month: "May",
    verified: 105,
    transaction: 1000,
    conversionRatio: "5.41%",
  },
  {
    month: "June",
    verified: 105,
    transaction: 1000,
    conversionRatio: "5.41%",
  },
  {
    month: "July",
    verified: 105,
    transaction: 1000,
    conversionRatio: "5.41%",
  },
  {
    month: "August",
    verified: 105,
    transaction: 1000,
    conversionRatio: "5.41%",
  },
  {
    month: "September",
    verified: 105,
    transaction: 1000,
    conversionRatio: "5.41%",
  },
  {
    month: "October",
    verified: 105,
    transaction: 1000,
    conversionRatio: "5.41%",
  },
  {
    month: "November",
    verified: 105,
    transaction: 1000,
    conversionRatio: "5.41%",
  },
  {
    month: "December",
    verified: 105,
    transaction: 1000,
    conversionRatio: "5.41%",
  },
];

const mockData = [
  {
    month: "January",
    transactionVolume: "89",
    registered: 10500,
    verifiedUsers: 8800,
    transactionUser: "5.41%",
  },
  {
    month: "February",
    transactionVolume: "89",
    registered: 9800,
    verifiedUsers: 8600,
    transactionUser: "5.41%"
  },
  {
    month: "March",
    transactionVolume: "89",
    registered: 11200,
    verifiedUsers: 9300,
    transactionUser: "5.41%"
  },
  {
    month: "April",
    transactionVolume: "89",
    registered: 11000,
    verifiedUsers: 9100,
    transactionUser: "5.41%"
  },
  {
    month: "May",
    transactionVolume: "89",
    registered: 12000,
    verifiedUsers: 9800,
    transactionUser: "5.41%"
  },
  {
    month: "June",
    transactionVolume: "89",
    registered: 12500,
    verifiedUsers: 10000,
    transactionUser: "5.41%"
  },
  {
    month: "July",
    transactionVolume: "89",
    registered: 13000,
    verifiedUsers: 10500,
    transactionUser: "5.41%"
  },
  {
    month: "August",
    transactionVolume: "89",
    registered: 13000,
    verifiedUsers: 10500,
    transactionUser: "5.41%"
  },
  {
    month: "September",
    transactionVolume: "89",
    registered: 13000,
    verifiedUsers: 10500,
    transactionUser: "5.41%"
  },
  {
    month: "October",
    transactionVolume: "89",
    registered: 13000,
    verifiedUsers: 10500,
    transactionUser: "5.41%"
  },
  {
    month: "November",
    transactionVolume: "89",
    registered: 13000,
    verifiedUsers: 10500,
    transactionUser: "5.41%"
  },
  {
    month: "December",
    transactionVolume: "89",
    registered: 13000,
    verifiedUsers: 10500,
    transactionUser: "5.41%"
  },
];

const StatsAndAnalytics = () => {
  return (
    <div className="space-y-8">
        <div className="rounded-2xl p-6 border border-[#625339] space-y-6">
            <div className="flex justify-between items-center">
                <h1 className='text-xl leading-8 font-semibold text-[#DCA955]'>User Statistics Month to Month View</h1>
            </div>
            <div>
                <Table data={mockData} columns={columns} />
            </div>
        </div>
        <div className="rounded-2xl p-6 border border-[#625339] space-y-6">
            <div className="flex justify-between items-center">
                <h1 className='text-xl leading-8 font-semibold text-[#DCA955]'>Same Month Registered and Transaction</h1>
            </div>
            <div>
                <Table data={sameMockData} columns={sameColumns} />
            </div>
            
        </div>
    </div>
  )
}

export default StatsAndAnalytics