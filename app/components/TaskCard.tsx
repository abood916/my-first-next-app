
type Task = {
    title: string;
    description: string;
    priority: string;
    status: string;
    dueDate: string;
}

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white p-5 rounded-lg shadow-md mb-4 space-y-2 ">
      <h2 className="text-xl font-bold mb-2">
        {task.title}
      </h2>

      <p className="text-gray-600 mb-3">
        {task.description}
      </p>

      <p className="mb-1">
        Priority: {task.priority}
      </p>

      <p className="mb-1">
        Status: {task.status}
      </p>

      <p>
        Due Date: {task.dueDate}
      </p>
    </div>
  );
}