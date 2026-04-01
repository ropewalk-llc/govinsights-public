import type { ReactNode } from 'react'

interface ResponsiveTableProps {
  headers: string[]
  rows: (string | ReactNode)[][]
  highlightRow?: number
  caption?: string
  forceCards?: boolean
}

export default function ResponsiveTable({ headers, rows, highlightRow, caption, forceCards }: ResponsiveTableProps) {
  return (
    <div className="my-4">
      {caption && (
        <p className="text-xs text-slate-500 mb-2 italic">{caption}</p>
      )}

      {/* Card layout for mobile (or forced) */}
      <div className={forceCards ? 'block' : 'block md:hidden'}>
        <div className="space-y-3">
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className={`rounded-lg border p-4 ${
                highlightRow === rowIdx
                  ? 'border-blue-400 bg-blue-50'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {row.map((cell, cellIdx) => (
                <div
                  key={cellIdx}
                  className={`${cellIdx > 0 ? 'mt-2 pt-2 border-t border-slate-100' : ''}`}
                >
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    {headers[cellIdx]}
                  </span>
                  <div className="text-sm text-slate-800 mt-0.5">
                    {cell}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Standard table for desktop (hidden when forceCards) */}
      {!forceCards && (
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b-2 border-slate-200">
                {headers.map((header, idx) => (
                  <th
                    key={idx}
                    className="px-4 py-3 text-left font-semibold text-slate-700 text-xs uppercase tracking-wide whitespace-nowrap"
                    style={{ minWidth: '120px' }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className={`border-b border-slate-100 ${
                    highlightRow === rowIdx
                      ? 'bg-blue-50 font-medium'
                      : rowIdx % 2 === 0
                        ? 'bg-white'
                        : 'bg-slate-50/50'
                  }`}
                >
                  {row.map((cell, cellIdx) => {
                    const isNumeric = typeof cell === 'string' && /^[\$~+\-\d]/.test(cell.trim())
                    return (
                      <td
                        key={cellIdx}
                        className={`px-4 py-3 text-slate-700 ${isNumeric ? 'text-right tabular-nums' : 'text-left'}`}
                        style={{ minWidth: '120px' }}
                      >
                        {cell}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
