"use client";
import CompleteButton from "./completeButton"
import React, { useState } from "react"

export default function CreateBox() {
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            title: {value: string};
        }
        const res = {
            text: target.title.value,
            isCompleted: isCompleted
        }
        alert(JSON.stringify(res));
        setIsCompleted(false);
        target.title.value = "";
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="bg-white rounded-[5px] p-4 flex items-center gap-3">
                <CompleteButton isCompleted={isCompleted} setIsCompleted={setIsCompleted}/>
                <input placeholder="Create a new todo..." type="text" name="title" className="text-[12px] text-grayish font-normal flex-1 outline-none" />
            </form>
        </>
    )
}