

export default function SideBar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-gray-200"
        
        >
            <h2 className="font-bold mb-6 text-2xl">Navigation</h2>
            <ul className="flex flex-col gap-2">
                <li className="rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-900">Dashboard</li>
                <li className="rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-900">All Tasks</li>
                <li className="rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-900">Completed</li>
                <li className="rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-900">Pending</li>
            </ul>
        </aside>
    )
}