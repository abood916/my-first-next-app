
type totalTaskProps = {
    totalTask: number,
    completedTasks: number,
    pendingTasks: number,
    highPriorityTasks: number
};

export default function Stats({
    totalTask, completedTasks, pendingTasks, highPriorityTasks
}: totalTaskProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-5 rounded-lg shadow">
                <h2 className="text-gray-500">Total Task</h2>
                <p className="font-bold text-3xl mt-2">{totalTask}</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow">
                <h2 className="text-gray-500">Completed</h2>
                <p className="font-bold text-3xl mt-2">{completedTasks}</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow">
                <h2 className="text-gray-500">Pending</h2>
                <p className="font-bold text-3xl mt-2">{pendingTasks}</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow">
                <h2 className="text-gray-500">High Priority</h2>
                <p className="font-bold text-3xl mt-2">{highPriorityTasks}</p>
            </div>
            

        </div>
    )
}