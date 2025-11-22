import React from "react";

export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li
      className={task.completed ? "completed" : ""}
      onClick={() => onToggle(task.id)}
    >
      {task.text}
      <button
        className="delete"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(task.id);
        }}
      >
        ✖
      </button>
    </li>
  );
}
