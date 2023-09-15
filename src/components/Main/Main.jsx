import React from 'react'
import { Info } from '../Information/Info'
import { Imagen } from '../Imagen/Imagen'

export const Main = () => {
  return (
    <div className='flex justify-around items-center px-6 h-[42rem]'>
        <Info></Info>
        <Imagen></Imagen>
    </div>
  )
}
