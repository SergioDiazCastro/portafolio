import html from '../Information/images/html-5.png'
import css from '../Information/images/css.png'
import js from '../Information/images/js.png'
import java from '../Information/images/java.png'

export const Info = () => {
  return (
    <div className='w-[35%] bg-[#3a4f50] p-[20px] rounded-lg'>
      <div className="pb-10">
        <h1 className='m-auto text-left text-[35px] text-[#0EF6CC] font-bold'>Sergio Diaz Castro</h1>
        <p className='text-[15px] text-left font-sans text-[#F4FEFD]'>Hola! Mi nombre es Sergio Diaz y tengo 21 años, soy
        aprendiz de desarrollo de software en el Sena. Apasionado por la tecnologia, me gusta indagar mucho por internet y 
        descubrir nuevas cosas y aprender de ellas. </p>
      </div>
      <div>
        <h1 className='m-auto text-left text-[35px] text-[#0EF6CC] font-bold pb-2'>Tecnologias que he usado</h1>
        <div className='flex  gap-4 '>
          <img className='w-10' src={html} alt="" />
          <img className='w-10' src={css} alt="" />
          <img className='w-10' src={js} alt="" />
          <img className='w-10' src={java} alt="" />
        </div>
      </div>
    </div>
  )
}
