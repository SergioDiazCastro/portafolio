import React from 'react'
const imgProduct = "https://i.blogs.es/e32e91/trucos-enfocar-fotografia-paisaje-01/1366_2000.jpg"

export const Product = () => {
  return (
    <div className='bg-gray-200 p-3 flex justify-center w-80'>
      <div className='bg-white w-80 h-80 rounded-lg relative' >
        <div className='flex flex-col'>
        <img className='w-full rounded-t-lg' src={imgProduct} alt="" />
        <button className='bg-white rounded-full w-8 h-8 text-blue-700 absolute top-4 right-2 text-2xl'>+</button>
        </div>
        <p className=' text-indigo-900 text-xl h-20 flex items-center'>Electronics</p>
            <div className='flex justify-between bg-zinc-200' >
              <p className='text-pink-500 text-xl'>Fantastic Soft Computer</p>
              <p className='text-fuchsia-800 text-xl'>594</p>
            </div>    
        </div>
        </div>
  
  )
}
