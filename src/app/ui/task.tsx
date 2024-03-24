"use client";
import CompleteButton from "./completeButton"
import React, { useState } from "react"

interface Task {
    id: number;
    text: string;
    isCompleted: boolean;
}

interface TaskProps {
    taskData: Task;
    deleteTask: (params: void) => void;
}

export default function Task({taskData, deleteTask} : TaskProps) {
    const [isCompleted, setIsCompleted] = useState<boolean>(taskData.isCompleted);
    const handleDelete = (e: React.SyntheticEvent) => {
        e.stopPropagation()
        deleteTask()
    }

    return (
        <>
            <div className="bg-white p-4 flex items-center gap-3 rounded-t-[5px] border-b-2">
                <CompleteButton isCompleted={isCompleted} setIsCompleted={setIsCompleted}/>
                <p className={`text-regular text-dark font-normal flex-1 ${isCompleted && "line-through text-lightGray"}`} >{taskData.text}</p>
                <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-grayish">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
            </div>
        </>
    )
}
