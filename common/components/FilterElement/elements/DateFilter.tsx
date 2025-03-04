import React from "react";

const DatePeriodSelector = ({
  selectedPeriods,
  setselectedPeriods,
}: {
  selectedPeriods: string[];
  setselectedPeriods: (ages: string[]) => void;
}) => {
  const ageRanges = ["ამ კვირაში", "ამ თვეში", "ამ სემესტრში", "ამ წელს"];

  const toggleAgeSelection = (ageRange: string) => {
    if (selectedPeriods.includes(ageRange)) {
      setselectedPeriods(selectedPeriods.filter((age) => age !== ageRange));
    } else {
      setselectedPeriods([...selectedPeriods, ageRange]);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl p-5">
      {/* Age Category List */}
      <div className="flex gap-4 justify-center flex-wrap">
        {ageRanges.map((ageRange) => (
          <div
            key={ageRange}
            className={`flex items-center gap-3 p-1 py-2 border rounded-3xl px-5 cursor-pointer hover:shadow-lg transition-all ${
              selectedPeriods.includes(ageRange)
                ? "bg-blue-100"
                : "bg-transparent"
            }`}
            onClick={() => toggleAgeSelection(ageRange)}
          >
            <input
              type="checkbox"
              checked={selectedPeriods.includes(ageRange)}
              onChange={() => toggleAgeSelection(ageRange)}
              className="h-5 w-5 accent-blue-500 cursor-pointer"
            />
            <span className="">{ageRange}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePeriodSelector;
