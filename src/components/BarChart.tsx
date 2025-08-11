import React, { useState } from "react";
import { formatNumber } from "../utils/formatNumber";

export type BarData = {
  label: string;
  value: number;
  color: string;
};

type BarChartProps = {
  initialData: BarData[];
};

const BarChart: React.FC<BarChartProps> = ({
  initialData,
}) => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const maxValue = Math.max(...initialData.map((item) => item.value));  

  return (
    <div className="w-full text-white/80 space-y-6">

      <div className="flex">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between h-[280px] pr-1 text-xs">
          <span>{Math.round(maxValue * 0.20)}</span>
          <span>{Math.round(maxValue)}</span>
          <span>{Math.round(maxValue * 0.75)}</span>
          <span>{Math.round(maxValue * 0.5)}</span>
          <span>{Math.round(maxValue * 0.25)}</span>
          <span>0</span>
        </div>

        {/* Chart + Grid */}
        <div className="relative w-full">
          {/* Grid box wrapper */}
          <div className="relative h-[280px] border border-dotted border-[#D9D9FF40]">

            {/* Horizontal dotted lines */}
            {[0.25, 0.5, 0.75].map((fraction, i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 w-full border-t border-dotted border-[#D9D9FF40]"
                style={{ bottom: `${fraction * 100}%` }}
              />
            ))}

            {/* Vertical dotted lines — total = bars + 1 */}
            {Array.from({ length: initialData.length + 1 }).map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 h-full border-l border-dotted border-[#D9D9FF40]"
                style={{
                  left: `${(i * 100) / initialData.length}%`,
                }}
              />
            ))}

            {/* Bars */}
            <div className="relative z-10 flex items-end justify-between h-full px-4">
              {initialData.map((item, index) => {
                const adjustedMax = maxValue * 1.2; // adds 20% headroom
                const height = Math.max((item.value / adjustedMax) * 280, 10);
                const isHovered = hoveredBar === index;

                return (
                  <div key={item.label} className="flex flex-col items-center" style={{ width: "80px" }}>
                    <div className="relative flex items-end justify-center" style={{ height: "100%" }}>
                      {isHovered && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm z-20">
                          {item.value}
                        </div>
                      )}

                      {/* Full-height background "shadow" bar */}
                      <div className="absolute bottom-0 w-[50px] h-[280px] bg-[#D6DBED14]" />

                      {/* Actual value bar */}
                      <div
                        className={`relative z-10 transition-all duration-300 opacity-60 ${
                          isHovered ? "opacity-90 shadow-lg" : "hover:opacity-80"
                        }`}
                        style={{
                          width: "50px",
                          height: `${height}px`,
                          minHeight: "10px",
                          cursor: "default",
                          backgroundColor: item.color,
                        }}
                        onMouseEnter={() => setHoveredBar(index)}
                        onMouseLeave={() => setHoveredBar(null)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* X-axis labels (below the grid) */}
          <div className="flex justify-between items-start px-4 mt-2 h-6">
            {initialData.map((item, index) => (
              <div
                key={index}
                className="text-xs text-center"
                style={{ width: "80px" }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col flex-wrap gap-2 justify-center">
        {initialData.map((item) => (
          <div key={item.label} className="flex items-center text-white border border-[#4C4C4C] rounded-lg p-4 justify-between">
            <span className="text-sm leading-6">
              {item.label}
            </span>
            <span className="text-base leading-6 font-bold">
              ${formatNumber(item.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
