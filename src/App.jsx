import React from 'react'
import './App.css'
import Header from './global/Header/index'
import Main from './global/Main/index'

export default function App() {
  return (
      <main className='flex'>
        <Header />
        <Main />
      </main> 
  )
}