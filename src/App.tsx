import React, { useState } from 'react';
import BrowserTab from "./components/atoms/BrowserTab";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={`bg-amber-300`}>
      <h1>Electron + React + TypeScript</h1>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      {/*<BrowserTab title={"OKok"} isActive={true}/>*/}
        <div
            className={`flex items-center gap-2 px-4 py-2 rounded-t-xl border font-mono ${true ? "bg-[#111827] border-[#374151]" : "bg-[#0f1626] border-[#1f2937] opacity-60"}`}
        >
            {/* Circle Icon */}
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>

            {/* Title */}
            <span className="text-white text-sm whitespace-nowrap">
         {`OKOKOKOK`}
            </span>
        </div>
    </div>
  );
}

export default App;