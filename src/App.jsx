import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './Blogs/Blogs'
import Header from './Header/Header'

function App() {

  return (
    <>
      <div>
          <Header></Header>
          <Blogs></Blogs>
      </div>
    </>
  )
}

export default App
