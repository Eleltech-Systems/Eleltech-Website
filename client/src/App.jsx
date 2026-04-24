import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { LanguageProvider } from './components/LanguageContext'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  )
}
