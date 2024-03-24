"use client";
import CompleteButton from "./completeButton"
import React, { useState } from "react"

interface Task {
    id: number;
    text: string;
    isCompleted: boolean;
}
interface CreateBoxProps {
    taskList: Array<Task>;
    setTaskList: (params: Array<Task>) => void;
}

export default function CreateBox({taskList, setTaskList}: CreateBoxProps) {
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            text: {value: string};
        }
        if (target.text.value !== "") {
            const task : Task = {
                id : taskList.length + 1,
                text: target.text.value,
                isCompleted: isCompleted
            }
            setTaskList([task, ...taskList])
            setIsCompleted(false);
            target.text.value = "";
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="bg-white rounded-[5px] p-4 flex items-center gap-3">
                <CompleteButton isCompleted={isCompleted} setIsCompleted={setIsCompleted}/>
                <input placeholder="Create a new todo..." type="text" name="text" className="text-regular text-grayish font-normal flex-1 outline-none" />
            </form>
        </>
    )
}