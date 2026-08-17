"use client"
import { useState } from "react"
type taskModalProps = {
    onClose: () => void
}

export default function TaskModal({onClose}: taskModalProps) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    function handleAddTask() {
        if(title.trim() === "") {
            setError("Title Is Required")
        }
        const task = {
            title: title,
            description: description,
        }
        localStorage.setItem("Tasks", JSON.stringify(task));
    }

    return (
        <div className="
        fixed inset-0 m-auto h-fit w-full
        max-w-md rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold">Add New Task</h2>

            <input 
            className="
            w-full mb-3 px-4 py-2 
            rounded-lg border border-gray-300
            outline-none focus:border-blue-500"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
                setTitle(e.target.value);
                setError("");
            }} 
            />
            {error && <p className="mb-3 text-sm text-red-500">{error}</p>}

            <textarea className="
            mb-5 min-h-28 w-full px-4 py-2
            rounded-lg focus:border-blue-500 
            outline-none border border-gray-300 resize-none"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />

            <button onClick={handleAddTask}
            className="mr-3 bg-blue-500 px-4 py-2 text-white rounded-lg hover:bg-blue-700"
            >Add Task</button>
            <button onClick={onClose}
            className="ml-3 bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-700"
            >Close</button>
        </div>
    )
}