import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function PreRegistration() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [submitStatus, setSubmitStatus] = useState({ loading: false, error: null, success: false })

  const onSubmit = async (data) => {
    setSubmitStatus({ loading: true, error: null, success: false })
    
    try {
      const response = await fetch('https://global-unitedfc.com/mailer/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire')
      }

      setSubmitStatus({ loading: false, error: null, success: true })
      reset() // Réinitialise le formulaire après un envoi réussi
    } catch (error) {
      setSubmitStatus({ loading: false, error: error.message, success: false })
    }
  }

  return (
    <section id="pre-registration" className="bg-gradient-to-tr from-black via-secondary/95 to-secondary py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="mb-8 text-center font-heading text-4xl font-bold text-white md:text-5xl">
            Pre-Registration
          </h2>

          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-lg bg-white/10 backdrop-blur-sm p-8 shadow-lg border border-white/10"
          >
            <div className="mb-6">
              <label htmlFor="fullName" className="mb-2 block font-bold text-white">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter your full name"
                {...register('fullName', { required: 'This field is required' })}
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-400">{errors.fullName.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="age" className="mb-2 block font-bold text-white">
                Age
              </label>
              <input
                type="number"
                id="age"
                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter your age"
                {...register('age', { 
                  required: 'This field is required',
                  min: { value: 8, message: 'Minimum age is 8 years' },
                  max: { value: 18, message: 'Maximum age is 18 years' }
                })}
              />
              {errors.age && (
                <p className="mt-1 text-sm text-red-400">{errors.age.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block font-bold text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter your email address"
                {...register('email', { 
                  required: 'This field is required',
                  pattern: { 
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="mb-2 block font-bold text-white">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter your phone number"
                {...register('phone', { required: 'This field is required' })}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
              )}
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="mb-2 block font-bold text-white">
                Message (Optional)
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Any additional information you'd like to share"
                {...register('message')}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitStatus.loading}
              className="w-full rounded-full bg-primary py-4 font-bold text-white border border-white/10 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitStatus.loading ? 'Envoi en cours...' : 'Soumettre la pré-inscription'}
            </motion.button>

            {submitStatus.error && (
              <p className="mt-4 text-center text-red-400">{submitStatus.error}</p>
            )}

            {submitStatus.success && (
              <p className="mt-4 text-center text-green-400">Votre pré-inscription a été envoyée avec succès !</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}