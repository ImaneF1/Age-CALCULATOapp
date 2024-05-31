"use client";
//import CompleteButton from "./CompleteButton"
import React, { useState, useContext } from "react"
import { ThemeContext } from "../themeContext";
import { Task } from "./taskList";


interface CreateBoxProps {
    setTaskList: (params: Array<Task>) => void;
}

export default function CreateBox({  setTaskList }: CreateBoxProps) { 
    const theme = useContext(ThemeContext);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [text, setText] = useState<string>();
    
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            text: { value: string };
        }
        if (target.text.value !== "") {
            const task: { text: string; } = {
                text: target.text.value,
            }
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
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
                console.log('Task created:', result);
            } else {
                console.error('Failed to create task');
            }

        }
        target.text.value = '';
    }



    return (
    

<>
            <form onSubmit={handleSubmit} className={`${theme ? "bg-white" : "bg-darkBlue"} rounded-[5px] p-4 lg:p-5 flex items-center gap-3`}>
           
                <input placeholder="Create a new todo..." type="text" name="text" className={`${!theme && "bg-darkBlue text-darkGray"} text-regular text-grayish font-normal flex-1 outline-none`} />
            </form>

        </>
    )


}