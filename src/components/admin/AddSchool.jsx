import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

export default function AddSchool() {
  const navigate = useNavigate()
  const { isDarkMode } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    area: '',
    recap: '',
    contacted: new Date().toISOString().split('T')[0]
  })

  // Classes conditionnelles basées sur le thème
  const bgClass = isDarkMode 
    ? 'bg-gradient-to-b from-admin-dark to-admin-dark-lighter' 
    : 'bg-gradient-to-b from-admin-light to-admin-light-darker'
  
  const cardBgClass = isDarkMode 
    ? 'bg-admin-dark-lighter' 
    : 'bg-admin-light'
  
  const textClass = isDarkMode 
    ? 'text-admin-text' 
    : 'text-admin-textLight'
  
  const textMutedClass = isDarkMode 
    ? 'text-admin-text-muted' 
    : 'text-admin-textLight-muted'
  
  const headerBgClass = isDarkMode 
    ? 'bg-admin-dark-lighter border-admin-dark-accent' 
    : 'bg-admin-light border-admin-light-accent'
  
  const buttonClass = isDarkMode 
    ? 'bg-admin-dark-accent text-admin-text hover:bg-admin-dark-accent2' 
    : 'bg-admin-light-accent text-admin-textLight hover:bg-admin-light-accent2'
  
  const inputClass = isDarkMode
    ? 'bg-admin-dark-lighter border-admin-dark-accent text-admin-text'
    : 'bg-admin-light border-admin-light-accent text-admin-textLight'

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implémenter la logique d'ajout d'une école
    navigate('/admin-schools')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className={`min-h-screen ${bgClass} font-admin`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b ${headerBgClass} px-6 py-4`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={isDarkMode ? "/assets/logo-white.png" : "/assets/logo-black.png"} 
              alt="Global United FC" 
              className="h-8 w-auto"
            />
            <h1 className={`text-xl font-semibold ${textClass}`}>Ajouter une école</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/admin-schools')}
              className={`rounded-admin px-3 py-1.5 text-sm ${buttonClass}`}
            >
              Annuler
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className={`rounded-admin ${cardBgClass} p-6 shadow-admin`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium ${textClass}`}>
                Nom de l'établissement
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`mt-1 block w-full rounded-admin border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-admin-accent ${inputClass}`}
              />
            </div>

            <div>
              <label htmlFor="area" className={`block text-sm font-medium ${textClass}`}>
                Zone géographique
              </label>
              <input
                type="text"
                id="area"
                name="area"
                value={formData.area}
                onChange={handleChange}
                required
                className={`mt-1 block w-full rounded-admin border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-admin-accent ${inputClass}`}
              />
            </div>

            <div>
              <label htmlFor="recap" className={`block text-sm font-medium ${textClass}`}>
                Récapitulatif
              </label>
              <textarea
                id="recap"
                name="recap"
                value={formData.recap}
                onChange={handleChange}
                required
                rows={4}
                className={`mt-1 block w-full rounded-admin border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-admin-accent ${inputClass}`}
              />
            </div>

            <div>
              <label htmlFor="contacted" className={`block text-sm font-medium ${textClass}`}>
                Date du dernier contact
              </label>
              <input
                type="date"
                id="contacted"
                name="contacted"
                value={formData.contacted}
                onChange={handleChange}
                required
                className={`mt-1 block w-full rounded-admin border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-admin-accent ${inputClass}`}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate('/admin-schools')}
                className={`rounded-admin px-4 py-2 text-sm ${buttonClass}`}
              >
                Annuler
              </button>
              <button
                type="submit"
                className={`rounded-admin px-4 py-2 text-sm ${buttonClass}`}
              >
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
} 