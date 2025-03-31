import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-12 font-heading text-4xl font-bold text-secondary md:text-5xl">
            Pricing
          </h2>

          <div className="rounded-2xl bg-background p-8 shadow-lg">
            <h3 className="mb-2 font-heading text-2xl font-bold text-secondary">
              Training Program
            </h3>
            <div className="mb-6 text-5xl font-bold text-primary">
              $160
              <span className="text-lg text-gray-600">/month</span>
            </div>
            <ul className="mb-8 space-y-4 text-left text-gray-600">
              <li className="flex items-center">
                <svg className="mr-2 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Technical training
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Physical conditioning
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Competition access
              </li>
            </ul>
            <Link
              to="pre-registration"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 inline-block cursor-pointer rounded-full bg-primary px-8 py-4 font-bold text-white transition-colors hover:bg-primary/90"
              >
                Pre-Register Now
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}