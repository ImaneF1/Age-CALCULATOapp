"use client";
import { ThemeContext } from "../page";
import CompleteButton from "./completeButton"
import React, { useContext, useEffect, useState } from "react"

interface Task {
    id: number;
    text: string;
    isCompleted: boolean;
}

interface TaskProps {
    taskData: Task;
    deleteTask: (params: void) => void;
    modifyTask: (params: void) => void;
}

export default function Task({taskData, deleteTask, modifyTask} : TaskProps) {
    const [isCompleted, setIsCompleted] = useState<boolean>(taskData.isCompleted);
    const handleDelete = (e: React.SyntheticEvent) => {
        e.stopPropagation()
        deleteTask()
    }
    const handleModification = () => {
        setIsCompleted(!isCompleted);
        modifyTask();
    }
    const theme = useContext(ThemeContext);
    return (
        <>
            <div className={`${theme ? "bg-white" : "bg-darkBlue"} p-4 lg:p-5 flex items-center gap-3`}>
                <CompleteButton isCompleted={isCompleted} modifyTask={handleModification}/>
                <p className={`text-regular ${theme ? "text-dark" : isCompleted ? "text-darkFade" : "text-darkLight"} font-normal flex-1 ${isCompleted && (theme ? "line-through text-lightGray" : "line-through text-darkFade")}`} >{taskData.text}</p>
                <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${theme ? "text-grayish" : "text-dark"}`}>
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
            </div>
            <hr className={`${theme ? "border-grayLine": "border-darkLine"}`}/>
        </>
    )
}
