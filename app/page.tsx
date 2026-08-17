
"use client"

import "./globals.css";
import SideBar from "./components/Sidebar"
import Header from "./components/Header "
import TaskList from "./components/TaskList"
import TaskModal from "./components/TaskModal"
import SearchBar from "./components/SearchBar"
import Filter from "./components/Filter"
import Stats from "./components/Stats"
import { useState } from "react"



export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  const tasks = [
    {
      title: "Build Login Page ",
      description: "Create Login UI",
      priority: "High",
      status: "Pending",
      dueDate: "2026-08-05",
    },
      
    {
      title: "Create Header",
      description: "Build dashboard header",
      priority: "Medium",
      status: "Completed",
      dueDate: "2026-08-10",
    }
  ]

const filteredTask = tasks.filter((task) => {
  const matchesSearch = task.title.toLowerCase().includes(searchTerm);
  const matchesFilter = 
  filter === "All" ||
  (filter === "Completed" && task.status === "Completed") ||
  (filter === "Pending" && task.status === "Pending") ||
  (filter === "High" && task.priority === "High");
  
  return matchesFilter && matchesSearch;
})

const totalTask = tasks.length;

const completedTasks = tasks.filter((task) => {
 return task.status === "Completed"
}).length;

const pendingTasks = tasks.filter((task) => {
return task.status === "Pending";
}).length

const highPriorityTasks = tasks.filter((task) => {
 return task.priority === "High"
}).length; 


  return (
    <html>
      <body>
        <div className="bg-gray-100">
      

          <div>
            
            <header />
            
          <SideBar />
          

          
            <main className="p-6 ml-64">
              <h1 className="text-3xl font-bold mb-6">Mini Task Dashboard</h1>
              <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
              <SearchBar 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              
              />

              <Filter 
              filter={filter}
              setFilter={setFilter}
              />

              <Stats 
              totalTask={totalTask}
              completedTasks={completedTasks}
              pendingTasks={pendingTasks}
              highPriorityTasks={highPriorityTasks}

              
              />

              <TaskList tasks={filteredTask}/>

              <button onClick={() => setShowModal(true)}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                >Add Task</button>
              
              {showModal && (
                <TaskModal 
                onClose={() => setShowModal(false)}
                />
              )}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
