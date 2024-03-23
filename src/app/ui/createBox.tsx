"use client";
import CompleteButton from "./completeButton"
import { useState } from "react"

export default function CreateBox() {
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    return (
        <>
            <form className="bg-white rounded-[5px] p-4 flex items-center gap-3">
                <CompleteButton isCompleted={isCompleted} setIsCompleted={setIsCompleted}/>
                <input placeholder="Create a new todo..." className="text-[12px] text-grayish font-normal flex-1 outline-none" />
            </form>
        </>
    )
}