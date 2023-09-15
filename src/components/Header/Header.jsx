
import { Navbar } from '../Navbar/Navbar'
import { Logo } from '../Logo/Logo'

export const Header = () => {
  return (
    <div className='flex justify-around flex-row p-2 bg-[#3A4F50]'>
        <Logo></Logo>
        <h1 className='self-center text-5xl text-[#F4FEFD] font-bold'>Portafolio</h1>
        <Navbar></Navbar>
        
    </div>
  )
}

