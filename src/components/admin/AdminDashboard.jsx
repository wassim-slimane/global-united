import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

export default function AdminDashboard() {
  const { isDarkMode, toggleTheme } = useTheme()

  // Classes conditionnelles basées sur le thème
  const bgClass = isDarkMode 
    ? 'bg-gradient-to-b from-admin-dark to-admin-dark-lighter' 
    : 'bg-admin-light-darker'
  
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
            <h1 className={`text-xl font-semibold ${textClass}`}>Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className={`text-sm ${textMutedClass} hover:${textClass}`}
            >
              Retour au site
            </Link>
            <button className={`rounded-admin px-3 py-1.5 text-sm ${buttonClass}`}>
              Déconnexion
            </button>
            <button 
              onClick={toggleTheme}
              className={`rounded-admin p-2 ${buttonClass}`}
              aria-label="Changer de thème"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Stats Cards */}
          <div className={`rounded-admin ${cardBgClass} p-6 shadow-admin`}>
            <h3 className={`mb-2 text-lg font-medium ${textClass}`}>Pré-inscriptions</h3>
            <p className={`text-3xl font-bold ${textClass}`}>0</p>
            <p className={`mt-2 text-sm ${textMutedClass}`}>En attente de validation</p>
          </div>

          <div className={`rounded-admin ${cardBgClass} p-6 shadow-admin`}>
            <h3 className={`mb-2 text-lg font-medium ${textClass}`}>Membres actifs</h3>
            <p className={`text-3xl font-bold ${textClass}`}>0</p>
            <p className={`mt-2 text-sm ${textMutedClass}`}>Membres inscrits</p>
          </div>

          <div className={`rounded-admin ${cardBgClass} p-6 shadow-admin`}>
            <h3 className={`mb-2 text-lg font-medium ${textClass}`}>Programmes</h3>
            <p className={`text-3xl font-bold ${textClass}`}>0</p>
            <p className={`mt-2 text-sm ${textMutedClass}`}>Programmes actifs</p>
          </div>

          <Link to="/admin-schools" className={`rounded-admin ${cardBgClass} p-6 shadow-admin transition-transform hover:scale-105`}>
            <h3 className={`mb-2 text-lg font-medium ${textClass}`}>Schools</h3>
            <p className={`text-3xl font-bold ${textClass}`}>0</p>
            <p className={`mt-2 text-sm ${textMutedClass}`}>Clients actifs</p>
          </Link>
        </motion.div>

        {/* Recent Activity Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-8 rounded-admin ${cardBgClass} shadow-admin`}
        >
          <div className="p-6">
            <h2 className={`mb-4 text-xl font-semibold ${textClass}`}>Activités récentes</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${isDarkMode ? 'border-admin-dark-accent' : 'border-admin-light-accent'}`}>
                    <th className={`py-3 text-left text-sm font-medium ${textMutedClass}`}>Date</th>
                    <th className={`py-3 text-left text-sm font-medium ${textMutedClass}`}>Action</th>
                    <th className={`py-3 text-left text-sm font-medium ${textMutedClass}`}>Utilisateur</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`py-4 text-sm ${textClass}`}>Aucune activité</td>
                    <td className={`py-4 text-sm ${textClass}`}>-</td>
                    <td className={`py-4 text-sm ${textClass}`}>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 