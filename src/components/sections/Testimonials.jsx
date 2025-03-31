import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Global United FC has helped me improve tremendously as a player.",
      author: "Thomas D.",
      role: "U17 Player"
    },
    {
      quote: "The coaches are very professional and attentive to each player's development.",
      author: "Marie L.",
      role: "Parent"
    },
    {
      quote: "An excellent structure to develop your potential.",
      author: "Lucas M.",
      role: "U15 Player"
    }
  ]

  return (
    <section id="testimonials" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-12 font-heading text-4xl font-bold text-secondary md:text-5xl">
            Testimonials
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="rounded-lg bg-white p-6 shadow-lg"
              >
                <div className="mb-4 text-4xl text-primary">"</div>
                <p className="mb-4 text-gray-600">{testimonial.quote}</p>
                <div className="font-bold text-secondary">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}