import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from './Navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Taille augmentée */}
          <div className="flex-shrink-0">
            <img 
              src= {isScrolled ? "/assets/logo-black.png" : "/assets/logo-white.png" }  
              alt="Global United FC" 
              className="h-16 w-auto md:h-20" // Augmentation de la taille
            />
          </div>

          {/* Desktop Navigation */}
          <Navigation isScrolled={isScrolled} />

          {/* Pre-registration Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden rounded-full bg-primary px-6 py-2 font-bold text-white transition-colors hover:bg-primary/90 md:block"
          >
            Pre-Register
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block h-0.5 w-6 bg-${isScrolled ? 'secondary' : 'white'} transition-transform duration-300`} />
            <span className={`mt-1.5 block h-0.5 w-6 bg-${isScrolled ? 'secondary' : 'white'}`} />
            <span className={`mt-1.5 block h-0.5 w-6 bg-${isScrolled ? 'secondary' : 'white'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 w-full bg-white px-4 py-4 shadow-lg md:hidden">
          <Navigation 
            isScrolled={isScrolled} 
            isMobile={true}
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}
    </header>
  )
}