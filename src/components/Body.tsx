import { UserName } from '@/components/UserName'
import { Chat } from '@/components/Chat'
import { UserNameCTX } from '@/contexts/UserNameCTX'
import { useContext } from 'react'

export const Body = () => {
    const aux = useContext(UserNameCTX)
    return (
        <div className="w-full h-full bg-transparent text-white flex justify-center items-center overflow-y-scroll">
            {
                aux?.name === '' ? < UserName /> : <Chat />
            }
        </div>
    )
}