import type { ReactNode } from 'react'

interface EditorialNoteProps {
  children: ReactNode
}

export default function EditorialNote({ children }: EditorialNoteProps) {
  return (
    <div className="my-4 border-l-4 border-amber-400 bg-amber-50 rounded-r-lg px-5 py-4">
      <div className="text-sm text-amber-900 leading-relaxed">
        {children}
      </div>
    </div>
  )
}
