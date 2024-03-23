"use client";
import CompleteButton from "./completeButton"
import React, { useState } from "react"

interface Task {
    text: string;
    isCompleted: boolean;
}

export default function CreateBox() {
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            text: {value: string};
        }
        const task : Task = {
            text: target.text.value,
            isCompleted: isCompleted
        }
        alert(JSON.stringify(task));
        setIsCompleted(false);
        target.text.value = "";
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="bg-white rounded-[5px] p-4 flex items-center gap-3">
                <CompleteButton isCompleted={isCompleted} setIsCompleted={setIsCompleted}/>
                <input placeholder="Create a new todo..." type="text" name="text" className="text-[12px] text-grayish font-normal flex-1 outline-none" />
            </form>
        </>
    )
}