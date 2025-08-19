import React from "react";

export default function ChecklistButton() {
  return (
    <button
      className="
      w-auto h-auto
      flex-shrink-0
      opacity-100
      bg-transparent
      rounded-[9px]
      flex items-center justify-center
      border-0 outline-none appearance-none cursor-pointer
      hover:brightness-110 hover:scale-110 hover:drop-shadow-lg active:brightness-95 transition-all duration-200 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/70
      p-0 m-0
      absolute
      "
      style={{
        top: "666px",
        left: "1220px",
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <img
        src="/src/assets/checklist.png"
        alt="Checklist"
        className="w-auto h-auto max-w-full max-h-full"
      />
    </button>
  );
}
