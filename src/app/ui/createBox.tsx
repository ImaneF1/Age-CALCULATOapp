import CompleteButton from "./completeButton"

export default function CreateBox() {
    return (
        <>
            <div className="bg-white rounded-[5px] p-4 flex items-center gap-3">
                <CompleteButton initValue={false}/>
                <input placeholder="Create a new todo..." className="text-[12px] text-grayish font-normal flex-1 outline-none"></input>
            </div>
        </>
    )
}