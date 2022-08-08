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
            <Route path="/portfolio/" element={<Home/>}/>
            <Route path="/portfolio/projects" element={<Projects/>}/>
            <Route path="/portfolio/contact" element={<Contact/>}/>
        </Routes>
    </div>
  )
}
