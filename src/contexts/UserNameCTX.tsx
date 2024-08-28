import { createContext, ReactNode, useState } from "react";

type UserNameCtxType = { name: string, setName: (e: string) => void }
export const UserNameCTX = createContext<UserNameCtxType | null>(null)
type ChildrenProvider = { children: ReactNode }
export const UserNameCtxProvider = ({ children }: ChildrenProvider) => {
    const [userName, setUserName] = useState('')
    return (
        <UserNameCTX.Provider value={{ name: userName, setName: setUserName }} >{children}</UserNameCTX.Provider>
    )
}
