'use client'
import { Header } from '@/components/Header'
import { Body } from '@/components/Body'
import { Footer } from '@/components/Footer'
import { UserNameCtxProvider } from '@/contexts/UserNameCTX'
const AppChat = () => {
  return (
    <main className="w-full h-screen bg-gray-700 flex flex-col justify-between">
      <Header />
      <UserNameCtxProvider>
        <Body />
      </UserNameCtxProvider>
      <Footer />
    </main>
  )
}
export default AppChat;