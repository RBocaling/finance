import DateRangePicker from "../../../components/DateRangePicker";
import TransactionSummary from "./TransactionSummary";

const Transactions = (data: any) => {
  console.log("treasure", data?.data?.monthToMonthView);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl p-6 border border-[#625339] space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl leading-8 font-semibold text-[#DCA955]">
            USDT Month to Month View
          </h1>
          <DateRangePicker />
        </div>

        <div className="rounded-3xl  p-5 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="h-14 border-b border-yellow-500/20 px-3">
                <th className="text-left font-semibold p-3-y">Month</th>
                <th className="text-left font-semibold p-3-y">Grow</th>
                <th className="text-left font-semibold p-3-y">
                  Transaction Fee
                </th>
                <th className="text-left font-semibold p-3-y">USDT Received</th>
                <th className="text-left font-semibold p-3-y">USDT Released</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.monthToMonthView?.map((item: any, index: number) => (
                <tr className="h-14" key={index}>
                  <td className="text-left">{item.month}</td>
                  <td className="text-left">{item.gross}</td>
                  <td className="text-left">{item.transaction_fee}</td>
                  <td className="text-left">{item.usdt_received}</td>
                  <td className="text-left">{item.usdt_released}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl p-6 border border-[#625339] space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl leading-8 font-semibold text-[#DCA955]">
            Transaction Type Month to Month View
          </h1>
          <DateRangePicker />
        </div>

        <div className="rounded-3xl  p-5 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="h-14 border-b border-yellow-500/20 px-3">
                <th className="text-left font-semibold p-3-y">Month</th>
                <th className="text-left font-semibold p-3-y">BUY</th>
                <th className="text-left font-semibold p-3-y">SELL</th>
                <th className="text-left font-semibold p-3-y">GAE</th>
                <th className="text-left font-semibold p-3-y">GAE PH</th>
                <th className="text-left font-semibold p-3-y">Gold Convert</th>
                <th className="text-left font-semibold p-3-y">GrandTotal</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.monthToMonthByTransactionType?.map(
                (item: any, index: number) => (
                  <tr className="h-14" key={index}>
                    <td className="text-left">{item.month}</td>
                    <td className="text-left">{item.Buy}</td>
                    <td className="text-left">{item.Sell}</td>
                    <td className="text-left">{item.GAE}</td>
                    <td className="text-left">{item.GAE_PH}</td>
                    <td className="text-left">{item.Gold_Convert}</td>
                    <td className="text-left">{item.GrandTotal}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl p-6 border border-[#625339] space-y-6">
        <TransactionSummary />
      </div>
    </div>
  );
};

export default Transactions;
