
interface CompleteButtonProps {
    isCompleted: boolean;
    setIsCompleted: (params: boolean) => void;
}

export default function CompleteButton({ isCompleted, setIsCompleted } : CompleteButtonProps ) {
    return (
        <>
            <div className={`rounded-full flex items-center justify-center ${isCompleted ? "bg-gradient-to-br from-cyan-300 to-purple-500" : "border border-gray-400"} w-[20px] h-[20px]`} onClick={() => setIsCompleted(!isCompleted)}>
                {isCompleted && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                    <path stroke="white" stroke-width="1.8" fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                )}
            </div>
        </>
    );
}