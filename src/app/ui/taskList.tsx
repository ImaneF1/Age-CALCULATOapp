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

type Status = "ALL" | "ACTIVE" | "COMPLETED";

export default function TaskList({ taskList, setTaskList }: TaskListProps) {
    const deleteTask = (index: number) => {
        if (index >= 0 && index < taskList.length) {
            const newList = taskList;
            newList.splice(index,1);
            setTaskList([...newList]);
        }
    }

    const modifyTask = (index: number) => {
        if (index >= 0 && index < taskList.length) {
            const newList = taskList;
            newList[index].isCompleted = !taskList[index].isCompleted;
            setTaskList([...newList]);
        }
    }

    const [status, setSatus] = useState<Status>("ALL");
    return (
        <>
            <ul className="rounded-[5px] flex gap-[1px] flex-col shadow-xl">
                {[...taskList].filter((task) => {
                    switch(status) {
                        case "COMPLETED":
                            return task.isCompleted;
                        case "ACTIVE":
                            return task.isCompleted === false;
                        default:
                            return true;
                    }
                }).map((task: Task, index: number) => {
                    return (
                        <li key={task.id} className="rounded-[5px]">
                            <Task taskData={task} deleteTask={() => deleteTask(index)} modifyTask={() => modifyTask(index)}/>
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
                    <p className={`cursor-pointer ${status === "ALL" && "text-active"}`} onClick={() => setSatus("ALL")}>All</p>
                    <p className={`cursor-pointer ${status === "ACTIVE" && "text-active"}`} onClick={() => setSatus("ACTIVE")}>Active</p>
                    <p className={`cursor-pointer ${status === "COMPLETED" && "text-active"}`} onClick={() => setSatus("COMPLETED")}>Completed</p>
                </div>
             </div>
        </>
    )
}