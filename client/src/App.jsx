import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, CreatePost } from './pages'
import { logo } from './assets'

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between 
      items-center bg-white sm:px-8 px-4 py-4 border-b 
      border-b-[hsl(219,39%,93%)]'>
        <Link to='/'>
          <img src={logo} alt='logo'
            className='w-28 object-contain' />
        </Link>
        <Link to='create-post'
          className='font-inter font-medium bg-[hsl(238,100%,70%)]
        text-white px-4 py-2 rounded-md'>Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[hsl(228,71%,99%)] 
      min-h-[calc(100hv - 73px)]'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create-post' element={<CreatePost />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App