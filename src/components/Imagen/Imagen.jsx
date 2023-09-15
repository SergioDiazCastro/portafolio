import perfil from '../Imagen/Images/perfil.png'
 
export const Imagen = () => {
  return (
    <div className='flex justify-center flex-col items-center w-1/2'>
      <img className='w-[50%] rounded-full border-8  border-[#3A4F50] bg-white' src={perfil}  />
    </div>
  )
}
