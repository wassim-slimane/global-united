import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Programs from './components/sections/Programs'
import Pricing from './components/sections/Pricing'
import PreRegistration from './components/sections/PreRegistration'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'

function App() {
  return (
    <div className="min-h-screen">
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
    </div>
  )
}

export default App