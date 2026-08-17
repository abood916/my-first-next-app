"use client"

type FilterProps = {
    filter: string,
    setFilter: (value: string) => void;
};

export default function Filter({
    filter, setFilter
}: FilterProps) {

    return (
        <div>
            <select 
            className="rounded-lg px-4 py-2 mb-3 outline-none border border-gray-300 bg-white focus:border-blue-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            >
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="High">High Priority</option>
            </select>
        </div>
    )
}