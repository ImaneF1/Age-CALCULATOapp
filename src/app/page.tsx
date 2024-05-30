"use client";
import Image from "next/image";
import lightBg from '../../public/bg-desktop-light.jpg';
import darkBg from '../../public/bg-desktop-dark.jpg';
import CreateBox from "./ui/createBox";
import TaskList from "./ui/taskList";
import { useState } from "react";
import { ThemeContext } from "./themeContext";

export interface Task {
    id: number ;
    text: string;
    isCompleted: boolean
    createdAt?: Date
    updatedAt?: Date
}


export default function Home() {

    const [theme, setTheme] = useState<boolean>(true);
    const taskId = 'some-task-id';
    const switchTheme = () => {
        setTheme(!theme);
    }

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <div className="flex flex-col h-full">
                    <div className="relative h-[200px] sm:h-[35vh]">
                        <Image className="object-cover" fill src={theme ? lightBg : darkBg} alt="background image of montaignes" />
                        <main className={`flex flex-col gap-5 px-5 w-full absolute top-10 sm:top-16 lg:top-20 xl:top-24 left-1/2 transform -translate-x-1/2 pb-10 max-w-[580px]`}>
                            <div className="flex justify-between mb-2 items-center">
                                <p className="text-white text-title xl:text-[3rem] tracking-[10px] xl:tracking-[15px] font-semibold md:font-extrabold">TODO</p>
                                <div className="cursor-pointer" onClick={switchTheme}>
                                    {theme ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-[1.8rem] h-[1.8rem]">
                                            <path fill="#FFF" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFF" className="text-white w-[1.8rem] h-[1.8rem]">
                                            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                                        </svg>
                                    )}
                                </div>
                                
                            </div>
                            
                            <TaskList />
                        </main>
                    </div>
                    <div className={`flex-1 ${!theme && "bg-dark"}`}>
                    </div>
                </div>
            </ThemeContext.Provider>
        </>
    );
}