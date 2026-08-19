"use client";

import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <html>
        <body>
                <div
      className={
        dark
          ? "dark min-h-screen bg-gray-900 text-white"
          : "min-h-screen bg-white text-black"
      }
    >
      {/* زر تغيير الوضع */}
      <button
        onClick={() => setDark(!dark)}
        className="m-5 rounded-lg bg-gray-200 px-4 py-2 text-black"
      >
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* المحتوى */}
      <main className="p-10">

        <h1 className="text-4xl font-bold">
          My Website
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          أهلاً وسهلاً في موقعي
        </p>

        {/* Card */}
        <div className="mt-10 rounded-xl bg-gray-100 p-6 text-black dark:bg-gray-800 dark:text-white">

          <h2 className="text-2xl font-bold">
            My Card
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            هذا الكارد يتغير مع الـ Dark Mode.
          </p>

        </div>

      </main>
    </div>        
        </body>
    </html>
    
  );
}