import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { Projects } from '../pages/Projects'
import { Header } from './Header'

export const MainPageContent = () => {
  return (
    <div>
        <Header/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  )
}
