import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Programs from './components/sections/Programs'
import Pricing from './components/sections/Pricing'
import PreRegistration from './components/sections/PreRegistration'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import AdminLogin from './components/admin/AdminLogin'
import AdminDashboard from './components/admin/AdminDashboard'
import AdminSchools from './components/admin/AdminSchools'
import AddSchool from './components/admin/AddSchool'
import { ThemeProvider } from './context/ThemeContext'

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Pricing />
        <PreRegistration />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-schools" element={<AdminSchools />} />
          <Route path="/admin-schools/add" element={<AddSchool />} />
        </Routes>
      </ThemeProvider>
    </Router>
  )
}

export default App