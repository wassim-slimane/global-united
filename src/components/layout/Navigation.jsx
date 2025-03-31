import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

export default function Navigation({ isScrolled, isMobile = false, onItemClick }) {
  const navItems = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Programs', href: 'programs' },
    { name: 'Pricing', href: 'pricing' },
  ]

  return (
    <nav className={isMobile ? "w-full" : "hidden md:block"}>
      <ul className={`${isMobile ? 'space-y-4' : 'flex space-x-8'}`}>
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.href}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              className={`cursor-pointer font-bold transition-colors ${
                isMobile
                  ? 'block text-secondary hover:text-primary'
                  : isScrolled
                  ? 'text-secondary hover:text-primary'
                  : 'text-white hover:text-primary'
              }`}
              onClick={onItemClick}
            >
              {item.name}
            </Link>
          </li>
        ))}
        {isMobile && (
          <li>
            <Link
              to="pre-registration"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              onClick={onItemClick}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full cursor-pointer rounded-full bg-primary px-6 py-2 font-bold text-white"
              >
                Pre-Register
              </motion.span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}