import { useState, useMemo } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import * as XLSX from 'xlsx'

// Données simulées
const mockData = [
  {
    id: 1,
    name: 'École Primaire Jean Moulin',
    area: 'Paris 15ème',
    recap: 'Intéressé par nos programmes de football pour les 6-10 ans',
    contacted: '2024-03-15'
  },
  {
    id: 2,
    name: 'Collège Victor Hugo',
    area: 'Lyon 3ème',
    recap: 'Demande d\'information sur les programmes compétitifs',
    contacted: '2024-03-10'
  },
  // Ajoutez plus de données simulées ici
]

export default function AdminSchools() {
  const { isDarkMode } = useTheme()
  const [showExportModal, setShowExportModal] = useState(false)
  const [exportCount, setExportCount] = useState(10)

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

  const columns = useMemo(
    () => [
      {
        Header: 'Nom',
        accessor: 'name',
      },
      {
        Header: 'Zone',
        accessor: 'area',
      },
      {
        Header: 'Récapitulatif',
        accessor: 'recap',
      },
      {
        Header: 'Dernier contact',
        accessor: 'contacted',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: mockData,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useSortBy,
    usePagination
  )

  const handleExport = () => {
    const dataToExport = exportCount === 'all' 
      ? mockData 
      : mockData.slice(0, parseInt(exportCount))

    const ws = XLSX.utils.json_to_sheet(dataToExport)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Schools')
    XLSX.writeFile(wb, 'schools.xlsx')
    setShowExportModal(false)
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
            <h1 className={`text-xl font-semibold ${textClass}`}>Gestion des écoles</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/admin-dashboard" 
              className={`text-sm ${textMutedClass} hover:${textClass}`}
            >
              Retour au tableau de bord
            </Link>
            <button 
              onClick={() => setShowExportModal(true)}
              className={`rounded-admin px-3 py-1.5 text-sm ${buttonClass}`}
            >
              Exporter en Excel
            </button>
            <Link 
              to="/admin-schools/add"
              className={`rounded-admin px-3 py-1.5 text-sm ${buttonClass}`}
            >
              Ajouter une école
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`rounded-admin ${cardBgClass} shadow-admin`}
        >
          <div className="p-6">
            <div className="overflow-x-auto">
              <table {...getTableProps()} className="w-full">
                <thead>
                  {headerGroups.map(headerGroup => (
                    <tr 
                      {...headerGroup.getHeaderGroupProps()}
                      className={`border-b ${isDarkMode ? 'border-admin-dark-accent' : 'border-admin-light-accent'}`}
                    >
                      {headerGroup.headers.map(column => (
                        <th
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                          className={`py-3 text-left text-sm font-medium ${textMutedClass}`}
                        >
                          {column.render('Header')}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? ' 🔽'
                                : ' 🔼'
                              : ''}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map(row => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map(cell => (
                          <td
                            {...cell.getCellProps()}
                            className={`py-4 text-sm ${textClass}`}
                          >
                            {cell.render('Cell')}
                          </td>
                        ))}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className={`mt-4 flex items-center justify-between ${textClass}`}>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                  className={`rounded-admin px-3 py-1 text-sm ${buttonClass} disabled:opacity-50`}
                >
                  {'<<'}
                </button>
                <button
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                  className={`rounded-admin px-3 py-1 text-sm ${buttonClass} disabled:opacity-50`}
                >
                  {'<'}
                </button>
                <button
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  className={`rounded-admin px-3 py-1 text-sm ${buttonClass} disabled:opacity-50`}
                >
                  {'>'}
                </button>
                <button
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                  className={`rounded-admin px-3 py-1 text-sm ${buttonClass} disabled:opacity-50`}
                >
                  {'>>'}
                </button>
              </div>
              <span>
                Page{' '}
                <strong>
                  {pageIndex + 1} sur {pageOptions.length}
                </strong>
              </span>
              <select
                value={pageSize}
                onChange={e => {
                  setPageSize(Number(e.target.value))
                }}
                className={`rounded-admin ${buttonClass} px-3 py-1 pr-6 text-sm`}
                
              >
                {[10, 20, 30, 40, 50].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    Afficher {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Export Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className={`rounded-admin ${cardBgClass} p-6 shadow-admin`}>
            <h2 className={`mb-4 text-xl font-semibold ${textClass}`}>Exporter les données</h2>
            <div className="mb-4">
              <label className={`block mb-2 ${textClass}`}>Nombre de lignes à exporter :</label>
              <select
                value={exportCount}
                onChange={(e) => setExportCount(e.target.value)}
                className={`w-full rounded-admin ${buttonClass} px-3 py-2`}
              >
                <option value="10">10 lignes</option>
                <option value="20">20 lignes</option>
                <option value="50">50 lignes</option>
                <option value="all">Toutes les lignes</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowExportModal(false)}
                className={`rounded-admin px-4 py-2 text-sm ${buttonClass}`}
              >
                Annuler
              </button>
              <button
                onClick={handleExport}
                className={`rounded-admin px-4 py-2 text-sm ${buttonClass}`}
              >
                Exporter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 