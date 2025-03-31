import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export default function Programs() {
  const programs = [
    {
      title: 'Technical Training',
      description: 'Develop your technical skills with specialized drills.',
      icon: '⚽'
    },
    {
      title: 'Tactical Strategies',
      description: 'Learn to read the game and make smart decisions on the field.',
      icon: '🎯'
    },
    {
      title: 'Physical Conditioning',
      description: 'Improve your fitness to perform at the highest level.',
      icon: '🏋️'
    }
  ]

  return (
    <section id="programs" className="bg-gradient-to-br from-secondary via-secondary/95 to-black py-20">
  <div className="container mx-auto px-4">
    <motion.div className="text-center">
      <h2 className="mb-12 font-heading text-4xl font-bold text-white md:text-5xl">
        Programs & Services
      </h2>
      
      <div className="grid gap-8 md:grid-cols-3">
        {programs.map((program, index) => (
          <motion.div
            key={program.title}
            className="rounded-lg bg-white/10 backdrop-blur-sm p-6 shadow-lg border border-white/10"
          >
            <div className="mb-4 text-4xl">{program.icon}</div>
            <h3 className="mb-4 font-heading text-xl font-bold text-white">
              {program.title}
            </h3>
            <p className="text-gray-300">{program.description}</p>
          </motion.div>
        ))}
      </div>

      <Link to="pre-registration" smooth={true} duration={500} offset={-80}>
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 inline-block cursor-pointer rounded-full bg-primary px-8 py-4 font-bold text-white border border-white/10 hover:bg-primary/90"
        >
          Pre-Register Now
        </motion.span>
      </Link>
    </motion.div>
  </div>
</section>
  )
}