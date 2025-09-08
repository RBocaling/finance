import Table from '../../../components/Table'
import useGetFinance from "../../../hooks/useGetFinance";

const columns = [
  { key: "month", label: "Month" },
  { key: "transactionVolume", label: "Transaction Volume" },
  { key: "registeredUser", label: "Registered" },
  { key: "verifiedUser", label: "Verified Users" },
  { key: "ratio", label: "Transaction to User Ratio" },
];

const sameColumns = [
  { key: "month", label: "Month" },
  { key: "verified", label: "Verified Users" },
  { key: "transaction", label: "Transactions" },
  { key: "ratio", label: "Conversion Ratio" },
];

const StatsAndAnalytics = () => {
  const { data } = useGetFinance();
  return (
    <div className="space-y-8">
      <div className="rounded-2xl p-6 border border-[#625339] space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl leading-8 font-semibold text-[#DCA955]">
            User Statistics Month to Month View
          </h1>
        </div>
        <div>
          <Table data={data?.monthToMonth} columns={columns} />
        </div>
      </div>
      <div className="rounded-2xl p-6 border border-[#625339] space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl leading-8 font-semibold text-[#DCA955]">
            Same Month Registered and Transaction
          </h1>
        </div>
        <div>
          <Table data={data?.sameMonth} columns={sameColumns} />
        </div>
      </div>
    </div>
  );
};

export default StatsAndAnalytics