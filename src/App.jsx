// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './styles/style.scss'
// import ArticleCard from './components/ArticleCard'
// import Button from './components/Button'
// import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Create from './screens/Create'
import Dailys from './screens/Dailys'
import UserPage from './screens/UserPage'
import FullPost from './screens/FullPost';
// import 'tailwindcss/dist/tailwind.css';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create" element={<Create />} />
      <Route path="/daily-digest" element={<Dailys />} />
      <Route path="/user-page" element={<UserPage />} />
      <Route path="/single-post" element={<FullPost />} />
    </Routes>
 
    </BrowserRouter>
  )
}

export default App

