import { useContext, useState } from "react"
import { UserNameCTX } from '@/contexts/UserNameCTX'

export const UserName = () => {
    const aux = useContext(UserNameCTX)
    const [inputValue, setInputValue] = useState('')
    const StartChat = () => {
        if (inputValue !== '') {
            aux?.setName(inputValue)
            setInputValue('')
        } else {
            alert("Digite seu nome no campo abaixo.")
        }
    }
    return (
        <div className="border border-gray-800 rounded-md px-4 py-3">
            <input
                className="px-3 py-2 rounded-sm text-gray-800 outline-none" type="text" placeholder="Digite seu nome aqui"
                maxLength={36}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={StartChat} className="ml-3 hover:text-green-300" >StartChat</button>
        </div>
    )
}