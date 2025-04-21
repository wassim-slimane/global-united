import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Vérification simple des identifiants
    if (username === 'admin' && password === 'admin') {
      // Redirection vers le dashboard
      navigate('/admin-dashboard')
    } else {
      setError('Identifiants incorrects')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-black via-secondary/95 to-secondary py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-lg bg-white/10 backdrop-blur-sm p-8 shadow-lg border border-white/10"
      >
        <h2 className="mb-8 text-center font-heading text-3xl font-bold text-white">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="mb-2 block font-bold text-white">
              User
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Entrez votre nom d'utilisateur"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block font-bold text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>

          {error && (
            <p className="text-center text-red-400">{error}</p>
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-full bg-primary py-4 font-bold text-white border border-white/10 hover:bg-primary/90 transition-colors"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
} 