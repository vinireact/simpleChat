type MsgBotType = { botText: string }

export const MsgBot = ({ botText }: MsgBotType) => {
    return (
        <div className="flex">
            <div className=" bg-gray-800 shadow-md rounded-md flex flex-col items-start p-3">
                <h1>Bot:</h1>
                <p>{botText}</p>
            </div>
            <div className="flex-1"></div>
        </div>
    )
}