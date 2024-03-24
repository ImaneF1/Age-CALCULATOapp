import { useEffect, useRef } from "react";

interface Task {
    id: number;
    text: string;
    isCompleted: boolean;
}

interface TaskCounterProps {
    tasks: Array<Task>;
}


export default function TaskCounter({tasks}: TaskCounterProps) {
    const activeTaskCount = useRef([...tasks].filter(task => !task.isCompleted).length);
    useEffect(() => {
        const activeTasks = [...tasks].filter(task => !task.isCompleted);
        activeTaskCount.current = activeTasks.length;
    }, [tasks])
    return (<span>{activeTaskCount.current}</span>)
}