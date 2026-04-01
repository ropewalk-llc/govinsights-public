import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, open mailto with form data. Replace with API endpoint when backend is ready.
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    const mailto = `mailto:contact@govinsights.io?subject=${encodeURIComponent(form.subject || 'GovInsights Contact')}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSubmitted(true)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Contact Us</h1>
      <p className="text-slate-600 mb-8">
        Have a question, correction, or tip? We want to hear from you. If any information
        in our reports is incorrect, we will correct it promptly.
      </p>

      {submitted ? (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-blue-800 font-medium text-lg mb-2">Thank you for reaching out.</p>
          <p className="text-blue-600 text-sm">
            Your email client should have opened with your message. If it didn't,
            please try again or reach out through the Chowan County community channels.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
            className="mt-4 text-sm text-blue-700 hover:text-blue-900 underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
              Subject
            </label>
            <select
              id="subject"
              value={form.subject}
              onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="">Select a topic</option>
              <option value="Correction">Correction — something in a report is inaccurate</option>
              <option value="Question">Question — about a report or our data</option>
              <option value="Tip">Tip — public record information we should review</option>
              <option value="Media">Media inquiry</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-blue-800 hover:bg-blue-900 text-white font-medium rounded-lg transition-colors text-sm"
          >
            Send Message
          </button>

          <p className="text-xs text-slate-400 mt-2">
            This form opens your email client. Your message is not stored on our servers.
          </p>
        </form>
      )}

      <div className="mt-12 pt-8 border-t border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900 mb-3">Our Commitment</h2>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>If any information in our reports is incorrect, we will correct it promptly upon notification.</li>
          <li>All corrections will be noted in the report with the original and corrected information.</li>
          <li>We do not publish anonymous tips without independent verification from public records.</li>
        </ul>
      </div>
    </div>
  )
}
