"use client"

import { useState } from "react"
import type { Metadata } from "next"

export default function About() {
    const [count, stateCount] = useState(0);
    return (
        <>
            <h1>About Page</h1> 
            <h2>{ count }</h2>
            <button onClick={() => {
                stateCount(count + 1);
            }}>Increase</button>
        </>
       
    )
}