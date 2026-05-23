import React, { createContext, useContext, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Spectacles from './pages/Spectacles'
import Equipe from './pages/Equipe'
import Medias from './pages/Medias'
import Contact from './pages/Contact'

export const LangContext = createContext('fr')
export const useLang = () => useContext(LangContext)

export default function App() {
  const [lang, setLang] = useState('fr')

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spectacles" element={<Spectacles />} />
          <Route path="/archives" element={<Navigate to="/spectacles#historique" replace />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/medias" element={<Medias />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </LangContext.Provider>
  )
}
