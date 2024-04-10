import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col items-center mt-20'>
      { children }
    </div>
  )
}
