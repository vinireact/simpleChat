type MsgUserProp = { name?: string, UserText: string }

export const MsgUser = ({ name, UserText }: MsgUserProp) => {
    return (
        <div className="flex">
            <div className="flex-1"></div>
            <div className=" bg-neutral-800 shadow-md rounded-md flex flex-col items-end p-3">
                <h1>{name}:</h1>
                <p>{UserText}</p>
            </div>
        </div>
    )
}