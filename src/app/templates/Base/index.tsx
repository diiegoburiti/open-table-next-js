import { ReactNode } from 'react'
import { NavBar } from 'components/NavBar'

export type BaseProps = {
  children: ReactNode
}

export const Base = ({ children }: BaseProps) => (
  <main className="bg-gray-100 min-h-screen w-screen">
    <main className="max-w-screen-2xl m-auto bg-white">
      <NavBar />
      {children}
    </main>
  </main>
)
