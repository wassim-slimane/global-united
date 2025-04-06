import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/assets/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container px-4"
        >
          <h1 className="mb-8 font-heading text-5xl font-bold text-white md:text-7xl">
            Elevate Your Game.<br />Shape Your Future.
          </h1>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block cursor-pointer rounded-full bg-primary px-8 py-4 font-bold text-white transition-colors hover:bg-primary/90"
            >
              Discover the Club
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}