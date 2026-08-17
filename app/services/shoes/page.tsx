"use client"
import { useState } from "react"

export default function MyButton() {
    const [name, setName] = useState("Abood");

    return (
        <div>
            <button onClick={() => {
                if(name === "Abood") {
                    setName("Khaled")
                } else {
                    setName("Abood")
                }
            }}>Switch Name</button>
            <h2>{name}</h2>
        </div>
    )
}