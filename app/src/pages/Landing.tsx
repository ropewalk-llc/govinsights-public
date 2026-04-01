import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            GovInsights
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-medium mb-6">
            Making local government decisions visible.
          </p>
          <p className="text-base md:text-lg text-blue-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            We compile public records into clear timelines so citizens can see how their
            government's decisions connect — and what those decisions mean for their taxes,
            their communities, and their future.
          </p>
          <Link
            to="/chowan/school-debt-timeline"
            className="inline-block bg-white text-blue-800 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-blue-50 hover:shadow-lg transition-all"
          >
            Read Our First Report: Chowan County School Debt Timeline
          </Link>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Public Records, Organized</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We read BOC minutes, deeds, SOS filings, and IRS 990s so you don't have to.
                Every claim is sourced.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Follow the Money</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                County budgets are complex. We trace the chain from decisions to dollars
                to your tax bill.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Ask Better Questions</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Informed citizens ask better questions at public hearings. We give you the
                facts to bring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First Report */}
      <section className="bg-slate-50 py-16 md:py-20 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 md:p-12">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
              First Report
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              The School Debt Timeline: Chowan County, NC
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              How an $85 million school was built after voters said no — and what it means
              for your property taxes.
            </p>
            <Link
              to="/chowan/school-debt-timeline"
              className="inline-block bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 hover:shadow-md transition-all"
            >
              Read the full timeline
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
