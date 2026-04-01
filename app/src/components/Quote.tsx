interface QuoteProps {
  text: string
  speaker: string
  source: string
}

export default function Quote({ text, speaker, source }: QuoteProps) {
  return (
    <blockquote className="my-4 border-l-4 border-blue-300 bg-slate-50 rounded-r-lg px-5 py-4">
      <p className="text-slate-700 italic leading-relaxed">"{text}"</p>
      <footer className="mt-2 text-xs text-slate-500">
        <span className="font-medium text-slate-600">{speaker}</span>
        {source && <span className="ml-1">({source})</span>}
      </footer>
    </blockquote>
  )
}
