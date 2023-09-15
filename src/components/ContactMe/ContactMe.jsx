import email from '../ContactMe/images/email.png'
import ubicacion from '../ContactMe/images/ubicacion.png'
import telefono from '../ContactMe/images/telefono.png'
import facebook from '../ContactMe/images/facebook.png'
import insta from '../ContactMe/images/instagram.png'
import github from '../ContactMe/images/github.png'

export const ContactMe = () => {
  return (
    <div className='flex justify-around pt-28 pb-32 pl-16 pr-16'>
        <div className='self-center'>
            <div className='flex flex-col gap-8'>
                <div className='flex'>
                    <img className='w-10' src={email} />
                    <p>sydiazcastro@gmail.com</p>
                </div>
                <div className='flex'>
                    <img className='w-10' src={ubicacion} alt="" />
                    <p className='font-sans'>Castilla Grande Mz8 #3</p>
                </div>
                <div className='flex'>
                    <img className='w-11' src={telefono} alt="" />
                    <p>+57 310 2202521</p>
                </div>
            </div>
            <div className='flex flex-col  pt-10 gap-6'>
                <h1 className='text-3xl font-sans font-medium text-[#F4FEFD]'>Sigueme</h1>
                <div className='flex gap-6 self-center'>
                   <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'><img  className='w-20'  src={facebook}/></a>
                   <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'><img className='w-20' src={insta}/></a>
                   <a href="https://github.com/SergioDiazCastro" target='_blank' rel='noreferrer'><img className='w-20' src={github} alt="" /></a>
                </div>
            </div>
            </div>
        <div className='flex flex-col bg-[#3A4F50] p-10'>
            <h1 className='text-3xl font-sans font-medium text-[#F4FEFD] pb-6'>Formulario de contacto</h1>
            <form className='flex flex-col gap-4' action="">
                <input className='h-10 bg-white rounded-md text-black' type="text" placeholder='Nombre' />
                <input className='h-10 bg-white rounded-md text-black' type="email" placeholder='Email' />
                <input className='h-10 bg-white rounded-md text-black' type="text" placeholder='Asunto' />
                <input className='h-36 bg-white rounded-md text-black' type="text" placeholder='Mensaje' />
                <button className='bg-[#0EF6CC] rounded-md w-[30%] text-[#1B2223] font-medium h-8 self-end hover:bg-white hover:duration-300'>Enviar</button>
            </form>
        </div>
    </div>
  )
}
