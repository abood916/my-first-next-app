import TaskCard from "./TaskCard";


type Task = {
  title: string;
  description: string;
  priority: string;
  status: string;
  dueDate: string;
};


export default function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task, index) => (
        <div  
        key={index} 
        draggable
        onDragStart={() => console.log(index)}
        >
          <TaskCard
          task={task}
        />
        </div>
      ))}
    </div>
  );
}