"use client"

import { get } from "http";
import { json } from "stream/consumers"

export default function LocalTest() {
    function addTask() {
        const task = {
            title: "Learn Next.js",
            priority: "High",
        };
        localStorage.setItem("task", JSON.stringify(task));
    }

    function editTask() {
        const savedTask = localStorage.getItem("task");
        if(savedTask) {
            const task = JSON.parse(savedTask);
            task.title = "Learn JavaScript";
            localStorage.setItem("task", JSON.stringify(task));
        }
    }

    function readTask() {
        const savedTask = localStorage.getItem("task");
        if(savedTask) {
            const task = JSON.parse(savedTask);
            console.log(task)
        }
    }

    function deleteTask() {
        localStorage.removeItem("task");
    }

        return (
            <html>
                <body>
                    <div>
                        <button onClick={addTask}>Add Task</button>
                        <button onClick={editTask}>Edit Task</button>
                        <button onClick={readTask}>Read Task</button>
                        <button onClick={deleteTask}>Delete Task</button>
                    </div>        
                </body>
            </html>
            
        )
}