import { Dispatch, SetStateAction } from "react";

const countries = [
  { name: "ამერიკა", flag: "🇺🇸" },
  { name: "ესპანეთი", flag: "🇪🇸" },
  { name: "შვეიცარია", flag: "🇨🇭" },
  { name: "ბრიტანეთი", flag: "🇬🇧" },
  { name: "საფრანგეთი", flag: "🇫🇷" },
  { name: "იტალია", flag: "🇮🇹" },
  { name: "გერმანია", flag: "🇩🇪" },
  { name: "ნორვეგია", flag: "🇳🇴" },
  { name: "შვედეთი", flag: "🇸🇪" },
  { name: "ფინეთი", flag: "🇫🇮" },
  { name: "პორტუგალია", flag: "🇵🇹" },
  { name: "ნიდერლანდები", flag: "🇳🇱" },
];

interface CountrySelectorProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  selectedCountries: string[];
  setSelectedCountries: Dispatch<SetStateAction<string[]>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const CountrySelector = ({
  currentPage,
  setCurrentPage,
  selectedCountries = [],
  setSelectedCountries,
  searchQuery,
  setSearchQuery,
}: CountrySelectorProps) => {
  const itemsPerPage = 6;
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > Math.ceil(filteredCountries.length / itemsPerPage))
      return;
    setCurrentPage(page);
  };

  const toggleCountrySection = (organization: string) => {
    const newSelection = selectedCountries.includes(organization)
      ? selectedCountries.filter((o) => o !== organization)
      : [...selectedCountries, organization];

    setSelectedCountries(newSelection);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-5">
      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="🔍 Search Countries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-lg"
        />
      </div>

      {/* Organization List */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {paginatedCountries.map((Country: { name: string; flag: string }) => (
          <div
            key={Country.name}
            className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:shadow-lg transition-all ${
              selectedCountries.includes(Country.name) ? "bg-blue-100" : ""
            }`}
            onClick={() => toggleCountrySection(Country.name)}
          >
            <input
              type="checkbox"
              checked={selectedCountries.includes(Country.name)}
              onChange={() => toggleCountrySection(Country.name)}
              className="h-5 w-5 accent-blue-500 cursor-pointer"
            />
            <span className="text-2xl">{Country.flag}</span>
            <span className="text-lg">{Country.name}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-2 mt-5">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 border rounded-md disabled:opacity-50"
        >
          «
        </button>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredCountries.length / itemsPerPage)
          }
          className="px-3 py-2 border rounded-md disabled:opacity-50"
        >
          »
        </button>
      </div>
    </div>
  );
};

export default CountrySelector;
