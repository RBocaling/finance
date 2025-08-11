import React, { useState } from "react";
import { formatNumber } from "../utils/formatNumber";

export type GroupedBarData = {
  label: string;
  [key: string]: string | number; // value1, value2, etc.
};

export type BarTypeConfig = {
  key: string;
  label: string;
  color: string;
};

type GroupedBarChartProps = {
  data: GroupedBarData[];
  barTypes: BarTypeConfig[];
  className?: string
};

const GroupedBarChart: React.FC<GroupedBarChartProps> = ({ data, barTypes, className }) => {
  const [hovered, setHovered] = useState<{ group: number; bar: number } | null>(null);

  const allValues = data.flatMap((d) =>
    barTypes.map((type) => Number(d[type.key]))
  );
  const maxValue = Math.max(...allValues);
  const adjustedMax = maxValue * 1.2;

  return (
    <div className="w-full text-white/80 space-y-6">
      <div className="flex">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between h-[280px] pr-1 text-xs">
          <span>{Math.round(adjustedMax)}</span>
          <span>{Math.round(adjustedMax * 0.75)}</span>
          <span>{Math.round(adjustedMax * 0.5)}</span>
          <span>{Math.round(adjustedMax * 0.25)}</span>
          <span>0</span>
        </div>

        {/* Grid + bars */}
        <div className="relative w-full">
          <div className="relative h-[280px] border border-dotted border-[#D9D9FF40]">
            {/* Horizontal grid */}
            {[0.25, 0.5, 0.75].map((fraction, i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 w-full border-t border-dotted border-[#D9D9FF40]"
                style={{ bottom: `${fraction * 100}%` }}
              />
            ))}

            {/* Vertical grid lines */}
            {Array.from({ length: data.length + 1 }).map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 h-full border-l border-dotted border-[#D9D9FF40]"
                style={{ left: `${(i * 100) / data.length}%` }}
              />
            ))}

            {/* Bars */}
            <div className={`relative z-10 flex items-end justify-between h-full  ${className}`}>
              {data.map((item, groupIndex) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center"
                  style={{ width: "80px" }}
                >
                  <div
                    className="relative flex items-end justify-between w-full gap-1"
                    style={{ height: "100%" }}
                  >
                    {barTypes.map((barType, barIndex) => {
                      const val = Number(item[barType.key]);
                      const height = Math.max((val / adjustedMax) * 280, 10);
                      const isHovered =
                        hovered?.group === groupIndex &&
                        hovered?.bar === barIndex;

                      return (
                        <div
                          key={barIndex}
                          className="relative flex justify-center"
                        >
                          {/* Tooltip */}
                          {isHovered && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm z-20">
                              {formatNumber(val)}
                            </div>
                          )}

                          {/* Shadow */}
                          <div className="absolute bottom-0 w-[30px] h-[280px] bg-[#D6DBED14]" />

                          {/* Bar */}
                          <div
                            className="relative z-10 transition-all duration-300 opacity-70 hover:opacity-80"
                            style={{
                              width: "30px",
                              height: `${height}px`,
                              backgroundColor: barType.color,
                              cursor: "default",
                              ...(isHovered && { opacity: 0.9 }),
                            }}
                            onMouseEnter={() =>
                              setHovered({ group: groupIndex, bar: barIndex })
                            }
                            onMouseLeave={() => setHovered(null)}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between items-start px-14 mt-2 h-6">
                {data.map((item, index) => {
                    const groupTotal =
                    Number(item.value1 || 0) +
                    Number(item.value2 || 0) +
                    Number(item.value3 || 0) +
                    Number(item.value4 || 0);

                    return (
                    <div
                        key={index}
                        className="flex flex-col text-xs text-center"
                        style={{ width: "80px" }}
                    >
                        {item.label}
                        <span>$({formatNumber(groupTotal)})</span>
                    </div>
                    );
                })}
            </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {barTypes.map((bar, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: bar.color }}
            />
            <span>{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GroupedBarChart;
