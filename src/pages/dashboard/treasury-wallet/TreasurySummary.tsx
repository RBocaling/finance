import useGetFinance from "../../../hooks/useGetFinance";
import { formatNumber } from "../../../utils/formatNumber";

const TreasurySummary = () => {
  const { data } = useGetFinance();

  const usdtData = [
    {
      title: "Total Received USDT",
      value: Number(data?.treasuryWallet?.totalReceivedUSDT ?? 0),
    },
    {
      title: "Transaction Fee",
      value: Number(data?.treasuryWallet?.transactionFee ?? 0),
    },
    {
      title: "Total Release USDT",
      value: Number(data?.treasuryWallet?.totalReleaseUSDT ?? 0),
    },
    {
      title: "Total Treasury Balance",
      value: Number(data?.treasuryWallet?.totalTreasuryBalance ?? 0),
    },
    {
      title: "Pending USDT Request",
      value: Number(data?.treasuryWallet?.pendingUSDTRequest ?? 0),
    },
  ];

  const depositData = [
    {
      title: "GCA",
      value: Number(data?.directDepositWallet?.gca?.php),
      total: Number(data?.directDepositWallet?.gca?.usd),
    },
    {
      title: "GAE",
      value: Number(data?.directDepositWallet?.gae?.php),
      total: Number(data?.directDepositWallet?.gae?.usd),
    },
    {
      title: "Buy",
      value: Number(data?.directDepositWallet?.buy?.php),
      total: Number(data?.directDepositWallet?.buy?.usd),
    },
  ];

  const usdauData = [
    {
      title: "Buy",
      value: Number(data?.usdauWallet?.buy?.fee),
      total: Number(data?.usdauWallet?.buy?.usd),
    },
    {
      title: "GAE",
      value: Number(data?.usdauWallet?.gae?.fee),
      total: Number(data?.usdauWallet?.gae?.usd),
    },
    {
      title: "GAE PH",
      value: Number(data?.usdauWallet?.gaePh?.fee),
      total: Number(data?.usdauWallet?.gaePh?.usd),
    },
    {
      title: "Gold Convert",
      value: Number(data?.usdauWallet?.goldConvert?.fee),
      total: Number(data?.usdauWallet?.goldConvert?.usd),
    },
  ];
  return (
    <div className="flex justify-between gap-6 w-full">
      <div className="flex flex-col space-y-4 w-full">
        <h1 className="text-base leading-6 text-[#DCA955] font-semibold">
          USDT
        </h1>
        <div className="space-y-2">
          {usdtData.map((item, key) => (
            <div
              key={key}
              className="flex justify-between items-center p-4 rounded-lg border border-[#4C4C4C] "
            >
              <span className="text-sm leading-6">{item.title}</span>
              <span className="text-base leading-6 font-bold">
                ${formatNumber(item.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <h1 className="text-base leading-6 text-[#DCA955] font-semibold">
          Direct Deposit Wallet
        </h1>
        <div className="space-y-2">
          {depositData.map((item, key) => (
            <div
              key={key}
              className="flex justify-between items-center p-4 rounded-lg border border-[#4C4C4C] "
            >
              <span className="text-sm leading-6">{item.title}</span>
              <div className="flex flex-col">
                <span className="text-base leading-6 font-bold">
                  PHP{formatNumber(item.value)}
                </span>
                <span className="text-sm leading-6 text-white/75 text-end">
                  =${formatNumber(item.total)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <h1 className="text-base leading-6 text-[#DCA955] font-semibold">
          USDAU Wallet
        </h1>
        <div className="space-y-2">
          {usdauData.map((item, key) => (
            <div
              key={key}
              className="flex justify-between items-center p-4 rounded-lg border border-[#4C4C4C] "
            >
              <div className="flex gap-2">
                <span className="text-sm leading-6">{item.title}</span>
                <span className="text-sm leading-6 text-[#DCA955]">
                  (${item.total})
                </span>
              </div>
              <span className="text-base leading-6 font-bold">
                ${formatNumber(item.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreasurySummary;
