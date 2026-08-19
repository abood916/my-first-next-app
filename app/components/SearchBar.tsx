"use client"

type searchBarProps = {
    searchTerm: string,
    setSearchTerm: (value: string) => void
};

export default function SearchBar({
    searchTerm, setSearchTerm
}: searchBarProps) {
    return (
        <div>
            
            <input 
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:border-blue-400 outline-none bg-white text-black dark:bg-gray-900 dark:text-white"
            />
        </div>
    )
}