import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import EmployeeCard from './components/EmployeeCard'
import './App.css'

function App() {

  const employee = {

      EmployeePhoto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D",
      FullName: "John kumar",
      JobPosition: "Manager",
      Department: "Sales and marketing",
      Email: "Johnkumar123@gmail.com",

  }
 

  return (
    <>
    <div>
      <EmployeeCard {...employee}/>
    </div>

    </>
  )
}

export default App
