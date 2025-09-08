// import  { type BarTypeConfig } from "../../../components/GroupedBarChart"
import TreasurySummary from "./TreasurySummary";

// const sampleData = [
//     {
//         title: "Gross",
//         value: 7472873.74,
//     },
//     {
//         title: "Transaction Fee",
//         value: 1663.67,
//     },
//     {
//         title: "USDT Received",
//         value: 448273.47,
//     },
//     {
//         title: "USDT Released",
//         value: 446522.99,
//     },
// ]

// const barTypes: BarTypeConfig[] = [
//   { key: "value1", label: "Gross", color: "#8979FF" },
//   { key: "value2", label: "Fee", color: "#FF928A" },
//   { key: "value3", label: "USDT Received", color: "#3CC3DF" },
//   { key: "value4", label: "USDT Released", color: "#FFAE4C" },
// ];

// const groupData = [
//   {
//     label: "Jan 2025",
//     value1: 5060692.1,
//     value2: 4060692.2,
//     value3: 3060692.3,
//     value4: 2060692.4,
//   },
//   {
//     label: "Feb 2025",
//     value1: 5060692.5,
//     value2: 4060692.6,
//     value3: 3060692.7,
//     value4: 2060692.8,
//   },
//   {
//     label: "Mar 2025",
//     value1: 5060692.9,
//     value2: 4060692.1,
//     value3: 3060692.11,
//     value4: 2060692.12,
//   },
//   {
//     label: "Apr 2025",
//     value1: 5060692.13,
//     value2: 4060692.14,
//     value3: 3060692.15,
//     value4: 2060692.16,
//   },
//   {
//     label: "May 2025",
//     value1: 5060692.17,
//     value2: 4060692.18,
//     value3: 3060692.19,
//     value4: 2060692.2,
//   },
//   {
//     label: "Jun 2025",
//     value1: 5060692.21,
//     value2: 4060692.22,
//     value3: 3060692.23,
//     value4: 2060692.24,
//   },
// ];

const TreasuryWallet = () => {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl p-6 border border-[#625339] space-y-6">
        <TreasurySummary />
      </div>
    </div>
  );
};

export default TreasuryWallet;
