import CompleteButton from "./completeButton"
import React, { useState } from "react"
import Task from "./task";

interface Task {
    id: number;
    text: string;
    isCompleted: boolean;
}
interface TaskListProps {
    taskList: Array<Task>;
    setTaskList: (params: Array<Task>) => void;
}


export default function TaskList({ taskList, setTaskList }: TaskListProps) {
    const deleteTask = (index: number) => {
        if (index < taskList.length) {
            setTaskList([...taskList.slice(index, 1)]);
        }
    }

    return (
        <>
            <ul className="rounded-[5px] flex gap-[1px] flex-col shadow-xl">
                {[...taskList].map((task: Task, index: number) => {
                    return (
                        <li key={task.id} className="rounded-[5px]">
                            <Task taskData={task} deleteTask={() => deleteTask(index)}/>
                        </li>
                    )
                })}
                <div className="bg-white p-4 flex items-center justify-between gap-3 rounded-[5px]">
                    <p className="text-grayish">{taskList.length} items left</p>
                    <p className="text-grayish">Clear Completed</p>
                </div>
            </ul>

            <div className="bg-white p-4 shadow-lg rounded-[5px] font-bold text-grayish">
                <div className="flex gap-5 justify-center items-center">
                    <p className="cursor-pointer">All</p>
                    <p className="cursor-pointer">Active</p>
                    <p className="cursor-pointer">Completed</p>
                </div>
             </div>
        </>
    )
}