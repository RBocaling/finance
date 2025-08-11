import React from 'react';
import { formatNumber } from '../utils/formatNumber';

type PieChartProps = {
  data: {
    label: string;
    value: number;
    color: string;
  }[];
  size?: number; // diameter in px
};

const PieChart: React.FC<PieChartProps> = ({ data, size = 200 }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  let cumulativePercent = 0;

  const getCoordinatesForPercent = (percent: number) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  const slices = data.map((slice, index) => {
    const valuePercent = slice.value / total;
    const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
    cumulativePercent += valuePercent;
    const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

    const largeArcFlag = valuePercent > 0.5 ? 1 : 0;

    const pathData = [
      `M 0 0`,
      `L ${startX} ${startY}`,
      `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
      `Z`,
    ].join(' ');

    return (
      <path
        key={index}
        d={pathData}
        fill={slice.color}
        stroke="#000"
        strokeWidth="0.0001"
        transform="scale(100)" // scale up the unit circle to 200px diameter
      />
    );
  });

  return (
    <div className="flex flex-col items-center space-y-6 w-full">
        <div className='py-[4.5rem]'>
            <svg
                viewBox="-1 -1 2 2"
                width={size}
                height={size}
                preserveAspectRatio="xMidYMid meet"
                className="transform -rotate-90 rounded-full"
            >
                {slices}
            </svg>
        </div>
      
        <div className="space-y-2 w-full">
            {data.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center gap-2 p-4 border border-[#4C4C4C] rounded-lg text-sm">
                    <div className='flex gap-2 items-center'>
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className='text-sm leading-6'>{item.label}</span>
                    </div>
                    <span className='text-base leading-6 font-bold'>${formatNumber(item.value)}</span>
                </div>
            ))} 
        </div>
    </div>
  );
};

export default PieChart;
