import useGetFinance from "../../../hooks/useGetFinance";
import { formatNumber } from "../../../utils/formatNumber";

const TransactionSummary = () => {
  const { data } = useGetFinance();

  const overviewData = [
    {
      title: "Completed",
      value: Number(
        data?.transactionStatusSummary?.transactionStatus?.Completed ?? 0
      ),
    },
    {
      title: "Endorse to finance",
      value: Number(
        data?.transactionStatusSummary?.transactionStatus?.Endorse_to_finance ??
          0
      ),
    },
    {
      title: "On Process",
      value: Number(
        data?.transactionStatusSummary?.transactionStatus?.On_process ?? 0
      ),
    },
    {
      title: "Open",
      value: Number(
        data?.transactionStatusSummary?.transactionStatus?.Open ?? 0
      ),
    },
    {
      title: "Pending",
      value: Number(
        data?.transactionStatusSummary?.transactionStatus?.Pending ?? 0
      ),
    },
    {
      title: "Request for Termination",
      value: Number(
        data?.transactionStatusSummary?.transactionStatus
          ?.Request_for_Termination ?? 0
      ),
    },
  ];

  return (
    <>
      <h1 className="text-base leading-6 text-[#DCA955] font-semibold">
        Transaction Status Overview
      </h1>
      <div className="flex justify-between gap-6 w-full">
        <div className="flex flex-col space-y-4 w-full">
          <div className="space-y-2">
            {overviewData.map((item, key) => (
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
        <div className="flex flex-col   space-y-4 w-full">
          {data?.transactionStatusSummary?.expectedTermination?.map(
            (item: any, index: number) => (
              <div className=" px-4 rounded-lg border border-[#4C4C4C] ">
                <div className="flex py-7 justify-between border-b border-[#4C4C4C]">
                  <span className="text-sm leading-6">{item?.type}</span>
                  <div className="flex flex-col text-end ">
                    <span className="text-base leading-6 font-bold">
                      {item?.locked}
                    </span>
                    <span className="text-base leading-6">
                      = ${item?.expected}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between py-4">
                  <span className="text-sm leading-6">
                    Expected Termination
                  </span>
                  <span className="text-base leading-6 font-bold">
                    ${item?.expected_termination}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default TransactionSummary;
