
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex self-center'>
    <nav >
        <ul className='flex gap-12 text-2xl font-sans font-semibold text-[#F4FEFD]'>
          <li className='hover:text-[#0EF6CC]'><NavLink to='/'>Inicio</NavLink></li> 
          <li className='hover:text-[#0EF6CC]'><NavLink to='/Projects'>Proyectos</NavLink></li>
          <li className='hover:text-[#0EF6CC]'><NavLink to='/Contact'>Contacto</NavLink></li>
        </ul>
    </nav>
    </div>
  )
}
