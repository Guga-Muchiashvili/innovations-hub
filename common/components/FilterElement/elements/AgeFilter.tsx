import React from "react";

const MultiSelectAgeCategory = ({
  selectedAges,
  setSelectedAges,
}: {
  selectedAges: string[];
  setSelectedAges: (ages: string[]) => void;
}) => {
  const ageRanges = ["18-24", "25-34", "35-44", "45+"];

  const toggleAgeSelection = (ageRange: string) => {
    // Update the selected ages directly
    if (selectedAges.includes(ageRange)) {
      setSelectedAges(selectedAges.filter((age) => age !== ageRange));
    } else {
      setSelectedAges([...selectedAges, ageRange]);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-5">
      <div className="flex gap-4 justify-center flex-wrap">
        {ageRanges.map((ageRange) => (
          <div
            key={ageRange}
            className={`flex items-center gap-3 p-3 border rounded-3xl px-5 cursor-pointer hover:shadow-lg transition-all ${
              selectedAges.includes(ageRange) ? "bg-blue-100" : "bg-transparent"
            }`}
            onClick={() => toggleAgeSelection(ageRange)}
          >
            <input
              type="checkbox"
              checked={selectedAges.includes(ageRange)}
              onChange={() => toggleAgeSelection(ageRange)}
              className="h-5 w-5 accent-blue-500 cursor-pointer"
            />
            <span className="text-lg">{ageRange}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectAgeCategory;
