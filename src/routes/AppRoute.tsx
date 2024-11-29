import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { TransactionsPage } from '../pages/TransactionsPage'
import { BudgetPlannerPage } from '../pages/BudgetPlannerPage'
import { DashboardPage } from '../pages/DashboardPage'

export const AppRoute = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<DashboardPage/>} />    
            <Route path='/budgetPlanner' element={<BudgetPlannerPage/>} />    
            <Route path='/Transactions' element={<TransactionsPage/>} />    
        </Routes>    
    </>
  )
}
