import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 font-heading text-4xl font-bold text-secondary md:text-5xl">
            About the Club
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Global United FC is dedicated to helping young amateur players develop their skills, 
            compete at higher levels, and gain visibility for potential recruitment.
          </p>
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
              className="inline-block cursor-pointer rounded-full bg-primary px-8 py-4 font-bold text-white transition-colors hover:bg-primary/90"
            >
              Pre-Register Now
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}