import { useState } from 'react'
import { Home } from './components/layouts/Home/Home'
import { Projects } from './components/layouts/Projects/Projects'
import './App.css'
import { Product } from './components/Product/Product'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from './components/NotFound/NotFound'
import { Contact } from './components/layouts/Contact/Contact'
<Routes><Route /></Routes>

function App() {
  return (
    <>
      {/*<Product></Product>*/}
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Projects' element={<Projects/>}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
