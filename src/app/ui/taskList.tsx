"use client";
import React, { useState, useContext, useEffect, use } from "react"
import Task from "./task";
import { ThemeContext } from "../themeContext";
import { useRouter } from "next/navigation";
import CreateBox from "./createBox";
export interface Task {
    id: number;
    text: string;
    isCompleted: boolean;
}
interface TaskListProps {
    taskList: Array<Task>;
    setTaskList: (params: Array<Task>) => void;
}

type Status = "ALL" | "ACTIVE" | "COMPLETED";
export default function TaskList() {
    const router = useRouter();

    const [taskList, setTaskList] = useState<Array<Task>>([]);
    useEffect(() => {
        fetch('/api/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((tasks) => {
                setTaskList(tasks);
            })
            .catch((error) => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    const deleteTask = async (id: number) => {
        const response = await fetch(`/api/tasks`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        if (response.ok) {
            const result = await response.json();
            fetch('/api/tasks', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((tasks) => {
                    setTaskList(tasks);
                })
            console.log('Task deleted:', result);
        } else {
            console.error('Failed to delete task');
        }
    }

    const modifyTask = async (id: number) => {
        const response = await fetch(`/api/tasks`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        if (response.ok) {
            const result = await response.json();
            fetch('/api/tasks', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((tasks) => {
                    setTaskList(tasks);
                })
            console.log('Task updated:', result);
        } else {
            console.error('Failed to update task ');
        }

    }
    const clearCompleted = () => {
        const newList = [...taskList].filter(task => !task.isCompleted)
        setTaskList(newList);
    }

    const [status, setSatus] = useState<Status>("ALL");
    const theme = useContext(ThemeContext);
    return (
        <>
            <div>
                <CreateBox setTaskList={setTaskList} />
            </div>
            <>
                <ul className="rounded-[5px] flex gap-[1px] flex-col shadow-xl overflow-hidden">
                    {[...taskList].filter((task) => {
                        switch (status) {
                            case "COMPLETED":
                                return task.isCompleted;
                            case "ACTIVE":
                                return task.isCompleted === false;
                            default:
                                return true;
                        }
                    }).map((task: Task, index: number) => {
                        return (
                            <li key={task.id}>
                                <Task taskData={task} deleteTask={() => deleteTask(task.id)} modifyTask={() => modifyTask(task.id)} />
                            </li>
                        )
                    })}
                    <div className={`${theme ? "bg-white" : "bg-darkBlue"} p-4 flex items-center justify-between gap-3 rounded-[5px]`}>
                        <p className={`${theme ? "text-grayish" : "text-darkFade"}`}>{[...taskList].filter((task) => !task.isCompleted).length} items left</p>
                        {/* /    <p onClick={() => clearCompleted()} className={`${theme ? "text-grayish" : "text-darkFade"} cursor-pointer`}>Clear Completed</p> */}
                    </div>
                </ul>

                <div className={`${theme ? "bg-white text-grayish" : "bg-darkBlue text-darkFade"} p-4 shadow-lg rounded-[5px] font-bold`}>
                    <div className="flex gap-5 justify-center items-center">
                        <p className={`cursor-pointer ${status === "ALL" && "text-active"}`} onClick={() => setSatus("ALL")}>All</p>
                        <p className={`cursor-pointer ${status === "ACTIVE" && "text-active"}`} onClick={() => setSatus("ACTIVE")}>Active</p>
                        <p className={`cursor-pointer ${status === "COMPLETED" && "text-active"}`} onClick={() => setSatus("COMPLETED")}>Completed</p>
                    </div>
                </div>
            </>
        </>

    )
}