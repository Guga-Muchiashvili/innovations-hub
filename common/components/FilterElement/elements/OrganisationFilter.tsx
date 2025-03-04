import { Dispatch, SetStateAction } from "react";

const organizations = [
  { name: "Erasmus", logo: "🌍" },
  { name: "AIESEC", logo: "🤝" },
  { name: "USAID", logo: "🇺🇸" },
  { name: "UNICEF", logo: "👶" },
  { name: "WHO", logo: "🏥" },
  { name: "World Bank", logo: "💰" },
  { name: "Red Cross", logo: "❤️" },
  { name: "Greenpeace", logo: "🌱" },
  { name: "Amnesty International", logo: "🕊️" },
  { name: "Oxfam", logo: "🌾" },
  { name: "Doctors Without Borders", logo: "🩺" },
  { name: "UNHCR", logo: "🧳" },
];

interface OrganizationSelectorProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  selectedOrganizations: string[];
  setSelectedOrganizations: Dispatch<SetStateAction<string[]>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const OrganizationSelector = ({
  currentPage,
  setCurrentPage,
  selectedOrganizations,
  setSelectedOrganizations,
  searchQuery,
  setSearchQuery,
}: OrganizationSelectorProps) => {
  const itemsPerPage = 6;
  const filteredOrganizations = organizations.filter((organization) =>
    organization.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedOrganizations = filteredOrganizations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (
      page < 1 ||
      page > Math.ceil(filteredOrganizations.length / itemsPerPage)
    )
      return;
    setCurrentPage(page);
  };

  const toggleOrganizationSelection = (organization: string) => {
    const newSelection = selectedOrganizations.includes(organization)
      ? selectedOrganizations.filter((o) => o !== organization)
      : [...selectedOrganizations, organization];

    setSelectedOrganizations(newSelection);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-5">
      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="🔍 Search Organization..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-lg"
        />
      </div>

      {/* Organization List */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {paginatedOrganizations.map((organization) => (
          <div
            key={organization.name}
            className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:shadow-lg transition-all ${
              selectedOrganizations.includes(organization.name)
                ? "bg-blue-100"
                : ""
            }`}
            onClick={() => toggleOrganizationSelection(organization.name)}
          >
            <input
              type="checkbox"
              checked={selectedOrganizations.includes(organization.name)}
              onChange={() => toggleOrganizationSelection(organization.name)}
              className="h-5 w-5 accent-blue-500 cursor-pointer"
            />
            <span className="text-2xl">{organization.logo}</span>
            <span className="text-lg">{organization.name}</span>
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
            currentPage ===
            Math.ceil(filteredOrganizations.length / itemsPerPage)
          }
          className="px-3 py-2 border rounded-md disabled:opacity-50"
        >
          »
        </button>
      </div>
    </div>
  );
};

export default OrganizationSelector;
