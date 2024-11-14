import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const AppRoute = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<h1>HOME</h1>} />    
        </Routes>    
    </>
  )
}
