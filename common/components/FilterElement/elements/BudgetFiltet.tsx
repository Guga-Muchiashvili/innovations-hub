import React from "react";

const BudgetSelector = ({
  selectedBudget,
  setselectedBudget,
}: {
  selectedBudget: string[];
  setselectedBudget: (ages: string[]) => void;
}) => {
  const ageRanges = [
    "დაფინანსებული",
    "ნახევრად დაფინანსებული",
    "დაუფინანსებელი",
  ];

  const toggleAgeSelection = (ageRange: string) => {
    if (selectedBudget.includes(ageRange)) {
      setselectedBudget(selectedBudget.filter((age) => age !== ageRange));
    } else {
      setselectedBudget([...selectedBudget, ageRange]);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl p-5">
      <div className="flex gap-4 justify-center flex-wrap">
        {ageRanges.map((ageRange) => (
          <div
            key={ageRange}
            className={`flex items-center gap-3 p-1 py-2 border rounded-3xl px-5 cursor-pointer hover:shadow-lg transition-all ${
              selectedBudget.includes(ageRange)
                ? "bg-blue-100"
                : "bg-transparent"
            }`}
            onClick={() => toggleAgeSelection(ageRange)}
          >
            <input
              type="checkbox"
              checked={selectedBudget.includes(ageRange)}
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

export default BudgetSelector;
