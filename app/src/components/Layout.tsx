import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <nav className="bg-blue-800 text-white no-print">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight hover:text-blue-200 transition-colors">
            GovInsights
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link to="/chowan/school-debt-timeline" className="hover:text-blue-200 transition-colors">
              Chowan County
            </Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-slate-100 border-t border-slate-200 no-print">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center">
          <p className="text-sm text-slate-600">
            GovInsights is a project of <strong>Ropewalk Technologies LLC</strong>
          </p>
          <p className="text-sm text-slate-500 mt-1">
            <Link to="/contact" className="text-blue-700 hover:text-blue-900 underline">Contact us</Link>
          </p>
          <p className="text-xs text-slate-400 mt-3">
            All data sourced from government records.
          </p>
        </div>
      </footer>
    </div>
  )
}
