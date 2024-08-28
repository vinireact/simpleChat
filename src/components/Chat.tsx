import { MsgUser } from '@/components/MsgUser'
import { MsgBot } from '@/components/MsgBot'
import { useContext, useState } from 'react'
import { UserNameCTX } from '@/contexts/UserNameCTX'

type MainListType = { id: string, text: string }

export const Chat = () => {
    const aux = useContext(UserNameCTX)
    const [mainList, setMainList] = useState<MainListType[]>([{ id: 'Bot', text: `Olá ${aux?.name}, Como posso ajudar?` }])
    const [inputBot, setInputBot] = useState('')
    const [inputUser, setInputUser] = useState('')
    const userSend = () => {
        if (inputUser !== '') {
            const aux: MainListType = { id: 'User', text: inputUser }
            setMainList([...mainList, aux])
            setInputUser('')
        }
    }
    const botSend = () => {
        if (inputBot !== '') {
            const aux: MainListType = { id: 'Bot', text: inputBot }
            setMainList([...mainList, aux])
            setInputBot('')
        }
    }
    return (
        <div className="w-1/3 h-5/6 border border-gray-800 rounded-md flex flex-col justify-between">
            <div className={`w-full h-full flex flex-col gap-3 p-3 ${mainList.length > 6 ? 'overflow-y-scroll' : ''}`}>
                {mainList.map((e) => e.id === 'Bot' ? <MsgBot botText={e.text} /> : <MsgUser name={aux?.name} UserText={e.text} />)}
            </div>
            <div className="w-full h-20 flex flex-col">
                <div className="flex justify-between items-center border-y border-gray-800">
                    <input
                        type="text"
                        placeholder="Mensagens do Bot"
                        maxLength={60}
                        className="w-full h-10 bg-transparent py-2 px-3 outline-none"
                        value={inputBot}
                        onChange={(e) => setInputBot(e.target.value)}
                    />
                    <button onClick={botSend} className="mx-4 hover:text-green-300">Send</button>
                </div>
                <div className="flex justify-between items-center">
                    <input
                        type="text"
                        placeholder={`Mensagens de ${aux?.name}`}
                        maxLength={60}
                        className="w-full h-10 bg-transparent rounded-md py-2 px-3 outline-none"
                        value={inputUser}
                        onChange={(e) => setInputUser(e.target.value)}
                    />
                    <button onClick={userSend} className="mx-4 hover:text-green-300">Send</button>
                </div>
            </div>
        </div>
    )
}