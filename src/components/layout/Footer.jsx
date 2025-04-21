import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img 
              src="/assets/logo-white.png" 
              alt="Global United FC" 
              className="h-12 w-auto"
            />
            <p className="mt-4 text-gray-400">
              Elevate Your Game. Shape Your Future.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="mb-4 font-heading text-lg font-bold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  className="cursor-pointer text-gray-400 hover:text-primary"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="programs"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  className="cursor-pointer text-gray-400 hover:text-primary"
                >
                  Programs
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="pricing"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  className="cursor-pointer text-gray-400 hover:text-primary"
                >
                  Pricing
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="pre-registration"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  className="cursor-pointer text-gray-400 hover:text-primary"
                >
                  Pre-Registration
                </ScrollLink>
              </li>
              <li>
                <RouterLink 
                  to="/admin-login" 
                  className="cursor-pointer text-gray-400 hover:text-primary"
                >
                  Admin
                </RouterLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="mb-4 font-heading text-lg font-bold">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@globalunitedfc.com</li>
              <li>+1 (555) 123-4567</li>
              <li>New York, USA</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1">
            <h3 className="mb-4 font-heading text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-primary"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-primary"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Global United FC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}