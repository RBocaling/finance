import { useState, useRef, useEffect } from "react";
import ArrowDown from "./icons/ArrowDown";

function isSameDate(a: Date, b: Date): boolean {
  return (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
  );
}

function isInRange(date: Date, start: Date, end: Date) {
  return date > start && date < end;
}

const DateRangePicker = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const getDaysInMonth = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days: Date[] = [];

    const firstDayIndex = date.getDay();
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(new Date(NaN));
    }

    const lastDate = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= lastDate; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const handleDayClick = (day: Date) => {
    if (isNaN(day.getTime())) return;

    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (startDate && day < startDate) {
      setStartDate(day);
    } else {
      setEndDate(day);
    }
  };

  const handleMonthChange = (dir: "prev" | "next") => {
    if (dir === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear((y) => y - 1);
      } else {
        setCurrentMonth((m) => m - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear((y) => y + 1);
      } else {
        setCurrentMonth((m) => m + 1);
      }
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const formatDate = (date: Date | null) =>
    date?.toLocaleDateString("en-US") || "—";

  const days = getDaysInMonth(currentYear, currentMonth);
  const monthName = new Date(currentYear, currentMonth).toLocaleString("default", {
    month: "long",
  });

  return (
    <div className="relative w-fit text-black" ref={pickerRef}>
      {/* Trigger input */}
        <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="border border-[#DCA955] text-base leading-8 px-2.5 py-2 rounded-lg w-72 text-left shadow-sm bg-white hover:border-blue-400"
        >
            {startDate && endDate ? (
                <div className="flex justify-between font-medium items-center w-full">
                    <span>{formatDate(startDate)}</span>
                    <span className="text-gray-400">—</span>
                    <span>{formatDate(endDate)}</span>
                </div>
            ) : (
                <div className="flex justify-between items-center w-full">
                    <span>Select date range</span>
                    <ArrowDown className="w-5 h-5 text-black" />
                </div>
            )}
        </button>

      {/* Dropdown calendar */}
      {isOpen && (
        <div className="absolute z-50 mt-2 p-2 w-72 bg-white border rounded shadow-lg">
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={() => handleMonthChange("prev")}
              className="text-sm px-2 py-1 hover:text-blue-500"
            >
              ‹
            </button>
            <h2 className="text-md font-medium">
              {monthName} {currentYear}
            </h2>
            <button
              onClick={() => handleMonthChange("next")}
              className="text-sm px-2 py-1 hover:text-blue-500"
            >
              ›
            </button>
          </div>

          {/* Days header */}
          <div className="grid grid-cols-7 text-xs font-semibold text-center text-gray-500 mb-1">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, i) => {
              const isSelected =
                (startDate && isSameDate(day, startDate)) ||
                (endDate && isSameDate(day, endDate));
              const isBetween =
                startDate && endDate && isInRange(day, startDate, endDate);
              const isInactive = isNaN(day.getTime());

              return (
                <div
                  key={i}
                  onClick={() => handleDayClick(day)}
                  className={`text-sm text-center py-1 rounded cursor-pointer transition
                    ${isInactive ? "invisible" : "hover:bg-[#DCA955]/75"}
                    ${isSelected ? "bg-[#DCA955] text-white" : ""}
                    ${isBetween ? "bg-[#DCA955]/75" : ""}
                  `}
                >
                  {!isInactive && day.getDate()}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
