import React from 'react'
import { UserProvider } from './context/UserProvider'
import { Header } from './Header'
import { Footer } from './Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainCard } from './MainCard'
import { PageNotFound } from '../common-comps/PageNotFound'

export const MainApp = () => {
  return (
    <UserProvider>
        <Header/>
            <Routes>
                <Route path='/' element={<MainCard/>}/>
                <Route path='/notFound' element={<PageNotFound/>}/>

                <Route path='/*' element={<Navigate to="/notFound"/>} />
            </Routes>
        <Footer/>
    </UserProvider>
  )
}
