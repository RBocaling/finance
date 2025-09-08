import DashboardCard from './DashboardCard'
import Request from './Request'
import PieChart from '../../components/PieChart'
import BarChart, { type BarData } from '../../components/BarChart'
import TreasuryWallet from './treasury-wallet/TreasuryWallet'
import AUPLogo from "../../assets/AUPLogo.svg"
import Transactions from './transactions/Transactions'
import StatsAndAnalytics from './stats-analytics/StatsAndAnalytics'
import useGetFinance from "../../hooks/useGetFinance";
import { useERC20Balance } from "../../hooks/useERC20Balance";

const Dashboard = () => {
  const { data } = useGetFinance();

  const total = Object?.values(data?.volumeByTransactionType ?? {})?.reduce(
    (sum: any, value) => sum + value,
    0
  );
  const totalUserAverage = data?.transactionData?.reduce(
    (acc: number, i: any) => acc + Number(i?.usd_amount),
    0
  );

  const totalBookingNote = data?.transactionData?.reduce(
    (acc: number, i: any) => acc + Number(i?.booking_note),
    0
  );
  const totalBookingCompleted = data?.transactionData
    ?.filter((item: any) => item?.transaction_status == "Completed")
    ?.reduce((acc: number, i: any) => acc + Number(i?.booking_note), 0);

  const { balance: mainBalance, loading: mainLoading } = useERC20Balance(
    "0xBDFeD1F6786bb5e568C1cE30324acB2Bb7285590"
  );
  const { balance: gcaBalance, loading: gcaLoading } = useERC20Balance(
    "0x93408e44DD2863f16bbaab8fb4B7BfEB2572a5e4"
  );
  const totalBalance =
    !mainLoading && !gcaLoading
      ? (Number(mainBalance || 0) + Number(gcaBalance || 0)).toFixed(2)
      : "Loading...";
  console.log("totalBookingCompleted", { mainBalance, gcaBalance });

  const Cards = [
    {
      title: "Total AUP Transactions",
      value: data?.transactionData?.length,
    },
    {
      title: "Total Locked QMGT",
      value: `$${Number(totalBookingNote - totalBookingCompleted)?.toFixed(2)}`,
    },
    {
      title: "Avg. Transaction/User",
      value: `$${Number(totalUserAverage)?.toFixed(2)}`,
    },
    {
      title: "Total Gross",
      value: `$${Number(total)?.toFixed(2)}`,
    },
    {
      title: "USDT Balance",
      value: `$${totalBalance}`,
    },
  ];

  const sampleData: BarData[] = [
    {
      label: "GCA",
      value: Number(data?.volumeByTransactionType?.gca ?? 0),
      color: "#FFAE4C",
    },
    {
      label: "GAE",
      value: Number(data?.volumeByTransactionType?.gae ?? 0),
      color: "#FFAE4C",
    },
    {
      label: "GAE PH",
      value: Number(data?.volumeByTransactionType?.gaePh ?? 0),
      color: "#FFAE4C",
    },
    {
      label: "Buy",
      value: Number(data?.volumeByTransactionType?.buy ?? 0),
      color: "#FFAE4C",
    },
    {
      label: "Sell",
      value: Number(data?.volumeByTransactionType?.sell ?? 0),
      color: "#FFAE4C",
    },
  ];

  const pieData = [
    {
      label: "Total USDT/USDC",
      value: Number(data?.volumeByCurrency?.totalUsdtUsdc ?? 0),
      color: "#FFD700",
    },
    {
      label: "Total Fiat Received (in USD)",
      value: Number(data?.volumeByCurrency?.totalFiatReceivedUSD ?? 0),
      color: "#FFA500",
    },
    {
      label: "Total QMGT Received",
      value: Number(data?.volumeByCurrency?.totalQmgtReceived ?? 0),
      color: "#FF8C00",
    },
    {
      label: "Total USDAU",
      value: Number(data?.volumeByCurrency?.totalUsdau ?? 0),
      color: "#DAA520",
    },
  ];
  return (
    <div className="py-10 px-[6.5rem] space-y-7 text-white">
      <h1 className="text-4xl leading-[3.375rem] font-semibold">Dashboard</h1>
      <div className="flex flex-wrap gap-8">
        <DashboardCard card={Cards} />
      </div>
      {/* <Request /> */}
      <div className="flex gap-8">
        <div className="space-y-6 p-6 border border-[#625339] bg-[#242424] rounded-2xl w-full">
          <h1 className="text-xl leading-8 font-semibold text-[#DCA955]">
            Currency Volume Summary
          </h1>
          <PieChart data={pieData} size={320} />
        </div>
        <div className="space-y-6 p-6 border border-[#625339] bg-[#242424] rounded-2xl w-full">
          <h1 className="text-xl leading-8 font-semibold text-[#DCA955]">
            Volume By Transaction Type
          </h1>
          <BarChart initialData={sampleData} />
        </div>
      </div>
      <div className="space-y-7 pt-[1.375rem]">
        <h1 className="text-4xl leading-[3.375rem] font-semibold">
          Treasury Wallet
        </h1>
        <div>
          <TreasuryWallet />
        </div>
      </div>
      <div className="space-y-7 pt-[1.375rem]">
        <h1 className="text-4xl leading-[3.375rem] font-semibold">
          Transactions
        </h1>
        <div>
          <Transactions data={data} />
        </div>
      </div>
      <div className="space-y-7 pt-[1.375rem]">
        <h1 className="text-4xl leading-[3.375rem] font-semibold">
          User Statistics & Analytics
        </h1>
        <div>
          <StatsAndAnalytics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;








