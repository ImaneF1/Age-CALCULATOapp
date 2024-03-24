"use client";
import Image from "next/image";
import lightBg from '../../public/bg-desktop-light.jpg';
import CreateBox from "./ui/createBox";
import TaskList from "./ui/taskList";
import { useState } from "react";

interface Task {
  id: number;
  text: string;
  isCompleted: boolean
}

export default function Home() {
  const tasks: Array<Task> = [
      {
          id: 1,
          text: "Bonjour j'ai faim",
          isCompleted: false
      },
      {
          id: 2,
          text: "It's done",
          isCompleted: true
      },
  ];
  const [taskList, setTaskList] = useState<Array<Task>>(tasks);

  return (
    <>
      <div className="relative h-[200px]">
        <Image className="object-cover" fill src={lightBg} alt="background image of montaignes" />
      </div>
      <main className="flex flex-col gap-5 px-5 w-full absolute top-10 left-1/2 transform -translate-x-1/2 pb-10">
        <div className="flex justify-between mb-2 items-baseline">
          <p className="text-white text-title tracking-[15px] font-semibold">TODO</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
        </div>
        <CreateBox taskList={taskList} setTaskList={setTaskList}/>
        <TaskList taskList={taskList} setTaskList={setTaskList}/>
      </main>
    </>
  );
}
