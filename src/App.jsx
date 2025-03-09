import React from 'react'
import './App.css'
import Header from './components/Header/index'
import Main from './components/Main/index'

export default function App() {
  return (
      <main className='flex'>
        <Header />
        <Main />
      </main> 
  )
}