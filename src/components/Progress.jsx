import React from "react";

const Progress = ({ progress = 0, status }) => {
  const getColor = () => {
    switch (status) {
      case "In Progress":
        return "bg-cyan-500";
      case "Completed":
        return "bg-blue-500";
      default:
        return "bg-violet-500";
    }
  };

  const safeProgress = Math.min(Math.max(progress || 0, 0), 100);

  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5">
      <div
        className={`${getColor()} h-1.5 rounded-full transition-all duration-300`}
        style={{ width: `${safeProgress}%` }}
      />
    </div>
  );
};

export default Progress;
