import { useRef } from 'react'
import ResponsiveTable from '../components/ResponsiveTable'
import Quote from '../components/Quote'
import EditorialNote from '../components/EditorialNote'

/* ------------------------------------------------------------------ */
/*  Visual Timeline Component                                          */
/* ------------------------------------------------------------------ */

interface TimelineEvent {
  date: string
  title: string
  color: 'blue' | 'amber' | 'red'
}

const timelineEvents: TimelineEvent[] = [
  { date: 'Nov 2018', title: 'Voters reject bond', color: 'red' },
  { date: 'May 2020', title: 'COVID cancels 2nd referendum', color: 'blue' },
  { date: 'Aug 2020', title: 'Ott says no referendum needed for USDA', color: 'red' },
  { date: 'Apr 2021', title: '$50M project approved 7-0', color: 'amber' },
  { date: 'Jan-Aug 2021', title: '$404K paid to Kahn before BOC vote', color: 'red' },
  { date: 'Sep 2021', title: 'Kahn/LS3P approved 7-0 (no selection process documented)', color: 'amber' },
  { date: 'Jun 2022', title: 'Project expands to $75M', color: 'red' },
  { date: 'Jun 2022', title: 'Rate set above RNR, $1.15M from fund balance', color: 'amber' },
  { date: 'Aug 2022', title: 'Reappraisal cycle shortened to 4 years', color: 'amber' },
  { date: 'Feb 2023', title: 'Vincent Valuations $947K', color: 'amber' },
  { date: 'Sep 2023', title: 'Kirby discloses brother\'s subcontract, $82.4M GMP approved', color: 'red' },
  { date: 'Nov 2023', title: 'PNC financing at 9% floor', color: 'red' },
  { date: 'Sep 2025', title: 'Reappraisal presented, 15-161% increases', color: 'red' },
  { date: 'Jan 2026', title: 'Reappraisal takes effect, 38-42% county-wide', color: 'red' },
]

const colorMap = {
  blue: { dot: 'bg-blue-500', ring: 'ring-blue-200', label: 'bg-blue-50 text-blue-800 border-blue-200' },
  amber: { dot: 'bg-amber-500', ring: 'ring-amber-200', label: 'bg-amber-50 text-amber-800 border-amber-200' },
  red: { dot: 'bg-red-500', ring: 'ring-red-200', label: 'bg-red-50 text-red-800 border-red-200' },
}

function VisualTimeline() {
  return (
    <div className="my-6">
      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 text-xs">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full bg-blue-500" /> Procedural
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full bg-amber-500" /> Financial
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full bg-red-500" /> Key decision point
        </span>
      </div>

      {/* Vertical timeline */}
      <div className="relative pl-6 border-l-2 border-slate-300 space-y-6">
        {timelineEvents.map((evt, idx) => {
          const c = colorMap[evt.color]
          return (
            <div key={idx} className="relative">
              {/* Dot on the line */}
              <span
                className={`absolute -left-[calc(0.75rem+1px)] top-1 w-4 h-4 rounded-full ${c.dot} ring-4 ${c.ring}`}
              />
              <div className="ml-4">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  {evt.date}
                </span>
                <p className={`mt-0.5 text-sm font-medium border rounded px-2 py-1 inline-block ${c.label}`}>
                  {evt.title}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */

export default function SchoolDebtTimeline() {
  const timelineRef = useRef<HTMLElement>(null)
  const pivotRef = useRef<HTMLElement>(null)
  const detailRef = useRef<HTMLElement>(null)
  const feeRef = useRef<HTMLElement>(null)
  const taxRef = useRef<HTMLElement>(null)
  const actionRef = useRef<HTMLElement>(null)

  return (
    <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      {/* ============================================================ */}
      {/* HEADER                                                        */}
      {/* ============================================================ */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
          The School Debt Timeline: How Chowan County Built an $85 Million School After Voters Said No
        </h1>
        <p className="text-slate-600 leading-relaxed mb-2">
          An analysis of public minutes and documents from the Chowan County Board of Commissioners.
          All minutes are publicly available at{' '}
          <a
            href="https://www.chowancounty-nc.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 underline"
          >
            chowancounty-nc.gov
          </a>.
        </p>
        <p className="text-xs text-slate-500 italic">
          All quotes are verbatim from official Chowan County Board of Commissioner meeting minutes.
        </p>
      </header>

      {/* ============================================================ */}
      {/* A. SUMMARY                                                    */}
      {/* ============================================================ */}
      <section className="mb-10 print:break-before-page">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          Summary
        </h2>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4 text-slate-800 leading-relaxed mb-6">
          <p>
            When your property tax bill arrives, it can be hard to understand why it changed. The
            decisions that determine your taxes are spread across years of board meetings, budget votes,
            and financing agreements. Each one may seem routine on its own, but together they form a
            chain that directly affects what you pay.
          </p>

          <p>
            This report traces that chain for Chowan County. It follows the sequence of decisions
            surrounding the new John A. Holmes High School &mdash; from the 2018 bond referendum
            through the 2026 property reappraisal &mdash; using the county's own meeting minutes
            and budget documents. These decisions may appear unconnected, but they are directly
            linked when it comes to how much debt the county carries and how that debt is paid for
            through your property taxes.
          </p>

          <p>
            The goal is clarity. County budgets are complex, and most residents do not have time to
            read seven years of board minutes. This analysis does that work and presents the documented
            sequence so that citizens can ask informed questions at budget hearings and understand what
            is driving changes to their tax bills.
          </p>

          <p className="text-sm text-blue-800 font-medium">
            Informed citizens make up the backbone of local governance. Access to factual information
            about how public resources are used produces measurably better governance outcomes.
            That is the entire premise of GovInsights.
          </p>
        </div>

        <h3 className="text-lg font-semibold text-slate-800 mb-3">Detailed Findings</h3>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-4 text-slate-700 leading-relaxed">
          <p>
            In November 2018, Chowan County voters rejected a bond referendum for a new John A. Holmes
            High School. Under the North Carolina Constitution, general obligation bonds require voter
            approval, and the voters said no. A second referendum was planned for 2020 but cancelled
            due to COVID-19. The Board subsequently approved USDA installment financing under G.S.
            160A-20, which does not require voter approval. The guidance that no referendum was needed
            came not from the county attorney or the Local Government Commission, but from Rick Ott
            of M.B. Kahn Construction &mdash; a firm that was already working on the project and
            receiving county payments at the time.
          </p>

          <p>
            County expenditure records show that M.B. Kahn received $404,171 in eight payments from
            county Fund 45 between January and August 2021 &mdash; before the Board of Commissioners
            voted on the Kahn contract on September 20, 2021. Who authorized these pre-vote payments
            is not documented in the 480 BOC documents reviewed for this report. Under NC G.S.
            &sect;159-28, county expenditures require prior authorization. No hiring resolution, contract
            award, or qualifications-based selection process (as required for CMAR under G.S.
            143-128.1) was found in any BOC document. Total payments to Kahn through August 2023
            reached $1,407,511.
          </p>

          <p>
            The project, originally scoped at $50 million with a Davenport &amp; Associates projection
            of "no impact on current tax rate," grew to approximately $85 million through a series of
            Board-approved scope and budget changes. M.B. Kahn's Construction Manager at Risk (CMAR)
            fee was set at 3.5% of construction cost, originally scoped on a $40 million base ($1.4
            million). As costs grew, the fee grew with it. Chair Kirby confronted Kahn on record about
            the fee increase; Kahn's representative responded that the original commitment referred to
            the percentage, not the dollar amount. LS3P's architect fee was 5.75% of construction cost.
          </p>

          <p>
            Since the project was approved, the county has never adopted a revenue-neutral tax rate
            after a reappraisal. The Board adopted 4.7% above revenue-neutral in 2022 and raised the
            rate again in 2024. In 2022, the Board also shortened the reappraisal cycle from 8 years to
            4 years. The 2026 reappraisal, which took effect January 1, 2026, increased property values
            county-wide by an estimated 38-42%, with individual increases ranging from 15% to 161%.
          </p>

          <p>
            Based on the Board's documented pattern of setting rates above revenue-neutral, homeowners
            can expect a cumulative tax increase of approximately 18-30% since FY2021-22. All claims in
            this report are sourced to official Chowan County Board of Commissioner meeting minutes
            and agenda packets, with supporting data from the U.S. Census Bureau, NC Department of
            Public Instruction, NC Department of Revenue, and the UNC School of Government. No claim
            is based on anonymous sources or speculation.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* B. VISUAL TIMELINE                                            */}
      {/* ============================================================ */}
      <section ref={timelineRef} className="mb-10 print:break-before-page">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          Timeline of Key Events
        </h2>
        <p className="text-slate-600 text-sm mb-4">
          A chronological overview of the decisions that shaped the school project and its fiscal impact.
        </p>
        <VisualTimeline />
      </section>

      {/* ============================================================ */}
      {/* C. THE AUGUST 26, 2020 MEETING (FEATURED)                     */}
      {/* ============================================================ */}
      <section ref={pivotRef} className="mb-10 print:break-before-page">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          The August 26, 2020 Meeting
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          This is the meeting where the path shifted from voter-approved bonds to installment
          financing that required no referendum.
        </p>

        <div className="bg-slate-700 text-slate-100 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">The Pivot Meeting</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            Special meeting, August 26, 2020. Mr. Ott (M.B. Kahn), architect Paul Boney, County
            Manager Howard, and Superintendent Dr. Sasscer present school construction plans. All
            seven commissioners present.
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-slate-300 text-sm mb-1">
                <strong className="text-white">Mr. Ott highlights the risk of the bond referendum path, using Camden County as an example:</strong>
              </p>
              <blockquote className="border-l-4 border-blue-400 bg-slate-600 rounded-r-lg px-4 py-3">
                <p className="text-slate-100 italic text-sm leading-relaxed">
                  "He noted that if their bond referendum does not pass, Camden County will have to return those monies to the State."
                </p>
                <footer className="mt-1 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Mr. Ott</span>{' '}
                  (August_26_Minutes.pdf, line 88)
                </footer>
              </blockquote>
              <p className="text-xs text-slate-400 mt-1">
                Context: Ott was illustrating that the bond referendum path carried risk of voter
                rejection (as Chowan had already experienced in 2018). This framed USDA installment
                financing (which requires no voter approval) as the safer alternative.
              </p>
            </div>

            <div>
              <p className="text-slate-300 text-sm mb-1">
                <strong className="text-white">Architect Boney ties timeline to referendum:</strong>
              </p>
              <blockquote className="border-l-4 border-blue-400 bg-slate-600 rounded-r-lg px-4 py-3">
                <p className="text-slate-100 italic text-sm leading-relaxed">
                  "He stated this pushes the Board more closely to the date they are looking for (closer to the bond referendum)."
                </p>
                <footer className="mt-1 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Architect Boney</span>{' '}
                  (August_26_Minutes.pdf, line 190)
                </footer>
              </blockquote>
            </div>

            <div>
              <p className="text-slate-300 text-sm mb-1">
                <strong className="text-white">Dr. Sasscer confirms referendum timeline:</strong>
              </p>
              <blockquote className="border-l-4 border-blue-400 bg-slate-600 rounded-r-lg px-4 py-3">
                <p className="text-slate-100 italic text-sm leading-relaxed">
                  "He stated that the bond referendum is scheduled for November of 2022."
                </p>
                <footer className="mt-1 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Dr. Sasscer</span>{' '}
                  (August_26_Minutes.pdf, lines 196-197)
                </footer>
              </blockquote>
            </div>

            <div>
              <p className="text-slate-300 text-sm mb-1">
                <strong className="text-white">Mr. Ott presents USDA as alternative:</strong>
              </p>
              <blockquote className="border-l-4 border-blue-400 bg-slate-600 rounded-r-lg px-4 py-3">
                <p className="text-slate-100 italic text-sm leading-relaxed">
                  "discussed the potential for borrowing the monies from USDA or the County repaying itself in the bond referendum."
                </p>
                <footer className="mt-1 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Mr. Ott</span>{' '}
                  (August_26_Minutes.pdf, line 168)
                </footer>
              </blockquote>
            </div>

            <div>
              <p className="text-slate-300 text-sm mb-1">
                <strong className="text-white">Commissioner McLaughlin on the tax rate:</strong>
              </p>
              <blockquote className="border-l-4 border-blue-400 bg-slate-600 rounded-r-lg px-4 py-3">
                <p className="text-slate-100 italic text-sm leading-relaxed">
                  "stated he was encouraged with this progress but stated he wanted to reemphasize the need to move on construction in 2023 to try not to impact the tax rate."
                </p>
                <footer className="mt-1 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Commissioner McLaughlin</span>{' '}
                  (August_26_Minutes.pdf, lines 170-171)
                </footer>
              </blockquote>
            </div>

            <div>
              <p className="text-slate-300 text-sm mb-1">
                <strong className="text-white">County Manager Howard on existing debt:</strong>
              </p>
              <blockquote className="border-l-4 border-blue-400 bg-slate-600 rounded-r-lg px-4 py-3">
                <p className="text-slate-100 italic text-sm leading-relaxed">
                  "noted the largest part of the County's debt is to be paid off in 2024."
                </p>
                <footer className="mt-1 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">County Manager Howard</span>{' '}
                  (August_26_Minutes.pdf, line 163)
                </footer>
              </blockquote>
            </div>

            {/* The final four lines */}
            <div className="mt-6 pt-4 border-t border-slate-500">
              <h4 className="text-base font-semibold text-white mb-3">
                The Final Four Lines Before Adjournment
              </h4>
              <p className="text-slate-300 text-sm mb-3">
                Then, in the final four lines before adjournment, the path shifts:
              </p>

              <blockquote className="border-l-4 border-red-400 bg-slate-600 rounded-r-lg px-4 py-3 mb-3">
                <p className="text-slate-100 italic text-sm leading-relaxed">
                  "stated the Commissioners intention is to move forward but the time frame needs to be slid a little bit. He asked if a referendum is needed to apply for USDA loan."
                </p>
                <footer className="mt-1 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Commissioner Kirby</span>{' '}
                  (August_26_Minutes.pdf, lines 201-202)
                </footer>
              </blockquote>

              <blockquote className="border-l-4 border-red-400 bg-slate-600 rounded-r-lg px-4 py-3 mb-3">
                <p className="text-slate-100 italic text-sm leading-relaxed">
                  "stated no that is not required."
                </p>
                <footer className="mt-1 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Mr. Ott (Construction Manager, M.B. Kahn, the private firm later hired to build the school)</span>{' '}
                  (August_26_Minutes.pdf, line 203)
                </footer>
              </blockquote>

              <blockquote className="border-l-4 border-red-400 bg-slate-600 rounded-r-lg px-4 py-3 mb-3">
                <p className="text-slate-100 italic text-sm leading-relaxed">
                  "noted all of this has to be approved by the LGC."
                </p>
                <footer className="mt-1 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Commissioner Kirby</span>{' '}
                  (August_26_Minutes.pdf, line 204)
                </footer>
              </blockquote>

              <div className="bg-slate-600 rounded-lg px-4 py-3 text-sm text-slate-300 italic">
                Meeting adjourned.
              </div>
            </div>
          </div>
        </div>

        <EditorialNote>
          <strong>Note:</strong> No commissioner asked a follow-up question. No one asked the county
          attorney to verify. The guidance that no referendum was needed came from the project's own
          construction contractor — not from independent legal counsel, not from the county attorney,
          and not from the Local Government Commission. Under NC law (G.S. 160A-20), installment
          financing such as USDA loans does not require voter approval. The legal statement was
          accurate — but the source of the guidance was the party that stood to benefit from the
          project proceeding.
        </EditorialNote>
      </section>

      {/* ============================================================ */}
      {/* D. THE DETAILED RECORD                                        */}
      {/* ============================================================ */}
      <section ref={detailRef} className="mb-10 print:break-before-page">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          The Detailed Record
        </h2>

        {/* --- 2018 --- */}
        <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3 border-b border-slate-200 pb-1">
          2018 — Voters Reject the School Bond
        </h3>
        <p className="text-slate-700 leading-relaxed">
          <strong>November 2018</strong> — Chowan County voters reject a bond referendum for a new
          John A. Holmes High School. Under the NC Constitution (Art. V, Sec. 4), general obligation
          bonds require voter approval. The voters said no.
        </p>

        {/* --- 2019 --- */}
        <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3 border-b border-slate-200 pb-1">
          2019 — The County Prepares to Try Again
        </h3>
        <p className="text-slate-700 leading-relaxed">
          <strong>November 18, 2019</strong> — Board approves Davenport &amp; Company (up to $30,000)
          and Parker Poe (~$20,000) to prepare for a 2020 bond referendum. Commissioner McLaughlin
          objects that the process "seems rushed."
        </p>

        {/* --- 2020 --- */}
        <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3 border-b border-slate-200 pb-1">
          2020 — COVID Stops the Second Referendum, a New Path Emerges
        </h3>

        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>May 4-18, 2020</strong> — Board abandons 2020 bond referendum due to COVID-19.
        </p>

        <Quote
          text="due to the impact of COVID 19, we would no longer pursue a bond referendum for 2020."
          speaker="Chair Kersey"
          source=""
        />

        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>August 26, 2020</strong> — The pivot meeting. See the{' '}
          <button
            onClick={() => pivotRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className="text-blue-700 hover:text-blue-900 underline cursor-pointer"
          >
            featured section above
          </button>{' '}
          for the full verbatim record of this meeting.
        </p>

        {/* --- 2021 --- */}
        <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3 border-b border-slate-200 pb-1">
          2021 — The Board Chooses USDA Over Referendum
        </h3>

        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>March 2, 2021</strong> — Board retreat: "Board members indicated their preference
          to inquire about financing with USDA funds."
        </p>

        <p className="text-slate-700 leading-relaxed mb-2">
          <strong>March 22, 2021</strong> — Davenport &amp; Associates presents analysis to Joint
          School Committee:
        </p>
        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-4">
          <li>County's existing debt: $7,035,501 — scheduled to be fully paid off by 2025</li>
          <li>Debt-to-assessed-value ratio: 0.47% (policy limit: 2.0%)</li>
          <li>Project Case 1 ($35M USDA + $15M state grant = $50M): "No impact on current tax rate"</li>
        </ul>

        <EditorialNote>
          <strong>Note:</strong> This "no impact" projection was based on $50M. The project ultimately
          cost approximately $85M. Whether Davenport updated its analysis is not documented in public
          minutes.
        </EditorialNote>

        <p className="text-slate-700 leading-relaxed mb-2 mt-4">
          <strong>April 19, 2021</strong> — Board approves $50M school project with USDA financing,
          7-0. Chair Kirby:
        </p>
        <Quote
          text="the current revaluation will also allow the county to realize an increase in property values but this will also result in an increase for tax payers. He stated that the County may have to adjust the rate to meet its obligations."
          speaker="Chair Kirby"
          source=""
        />

        <p className="text-slate-700 leading-relaxed mb-2">
          Commissioner Kehayes raises concern about debt ratio. County Manager Howard:
        </p>
        <Quote
          text="he thinks this should be addressed at the revaluation."
          speaker="County Manager Howard"
          source=""
        />

        <p className="text-slate-700 leading-relaxed mb-2">
          <strong>June 21, 2021</strong> — Board approves USDA loan application, 6-0. Chair Kirby:
        </p>
        <Quote
          text="the upcoming revaluation may allow for room in the budget to approve salary increases."
          speaker="Chair Kirby"
          source=""
        />

        <p className="text-slate-700 leading-relaxed mb-2">
          <strong>September 2021</strong> — M.B. Kahn (CMAR) and LS3P (architect) approved for the
          Holmes High School project. No competitive RFP was conducted for either selection.
        </p>

        {/* --- 2022 --- */}
        <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3 border-b border-slate-200 pb-1 print:break-before-page">
          2022 — Reappraisal, Rate Setting, and Cycle Change
        </h3>

        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>January 1, 2022</strong> — 2022 reappraisal takes effect. Tax base increases 22.2%
          ($1.49B to $1.82B). Conducted by Vincent Valuations ($378,400 contract).
        </p>

        <p className="text-slate-700 leading-relaxed mb-2">
          <strong>June 9, 2022</strong> — Board sets tax rate. Revenue-neutral rate was $0.635.
          County Manager Howard proposed $0.73. Board adopted $0.665 — using $1.15M from fund
          balance. Howard advises:
        </p>
        <Quote
          text="if they spend fund balance in the next fiscal year, these monies will have to be located in the budget next fiscal year."
          speaker="County Manager Howard"
          source=""
        />

        <p className="text-slate-700 leading-relaxed mb-2">
          <strong>August 15, 2022</strong> — Board votes 7-0 to shorten reappraisal cycle from 8
          years to 4 years. No public hearing on the cycle change. Tax Administrator Radke:
        </p>
        <Quote
          text="by doing this would benefit taxpayers as the valuation would better follow the market and reduce sticker shock."
          speaker="Tax Administrator Radke"
          source=""
        />

        <EditorialNote>
          <strong>Note:</strong> This cycle change was adopted 5 months after the 2022 reappraisal
          and 14 months after the USDA loan. A 4-year cycle in a rising market accelerates tax base
          growth — which directly benefits a county carrying new debt. The Board's discussion contains
          no mention of school debt, USDA loan, or revenue needs.
        </EditorialNote>

        {/* --- 2023 --- */}
        <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3 border-b border-slate-200 pb-1">
          2023 — Costs Rise, GMP Approved
        </h3>

        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>February 2023</strong> — Vincent Valuations contracted for the 2026 reappraisal
          at $947,000 (combined with Perquimans County). This is in addition to the $378,400 paid
          for the 2022 reappraisal.
        </p>

        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>September 2023</strong> — Chair Kirby discloses that his brother has a subcontract
          on the Holmes High School project. The Board approves the $82.4 million Guaranteed Maximum
          Price (GMP) with M.B. Kahn.
        </p>

        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>November 2023</strong> — PNC financing approved with a 9% interest rate floor.
        </p>

        {/* --- 2024-2025 --- */}
        <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3 border-b border-slate-200 pb-1">
          2024-2025 — Costs Rise, Rate Climbs
        </h3>

        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>By January 2024</strong> — NC Dept of Revenue measures Chowan County's median
          assessment ratio at 76.16% — below the 90% statutory minimum. Values had already fallen
          24% below market in just two years.
        </p>

        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>June 2024</strong> — Tax rate raised 3 cents to $0.695. School project now at
          approximately $85M — 70% above the original $50M.
        </p>

        <p className="text-slate-700 leading-relaxed">
          <strong>June 2025</strong> — Board avoids another rate increase by using $670K in Timbermill
          wind farm revenue and additional fund balance. Fund balance at 25.24% — barely above the
          25% policy minimum. Howard's 2022 advisement about fund balance spending has materialized.
        </p>

        {/* --- 2026 --- */}
        <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3 border-b border-slate-200 pb-1">
          2026 — The Reappraisal Arrives
        </h3>

        <p className="text-slate-700 leading-relaxed mb-2">
          <strong>September 15, 2025</strong> — 2026 reappraisal presented. Increases range from 15%
          to 161%.
        </p>
        <Quote
          text="the market will cause those who live on a fixed income and are not buying or selling to be priced out of their homes."
          speaker="Commissioner Cummings"
          source=""
        />

        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>October 20, 2025</strong> — Schedule of Values adopted. Zero public comments.
          Passed 6-0.
        </p>

        <p className="text-slate-700 leading-relaxed">
          <strong>January 1, 2026</strong> — Reappraisal takes effect. County-wide increase estimated
          at 38-42%.
        </p>
      </section>

      {/* ============================================================ */}
      {/* E. M.B. KAHN FEE & COST ESCALATION                           */}
      {/* ============================================================ */}
      <section ref={feeRef} className="mb-10 print:break-before-page">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          M.B. Kahn Fee &amp; Project Cost Changes
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          M.B. Kahn was selected as the Construction Manager at Risk (CMAR) for the Holmes High
          School project. Their fee was set at 3.5% of construction cost. As the project scope grew,
          the fee grew with it:
        </p>

        <ResponsiveTable
          headers={['Metric', 'Value']}
          rows={[
            ['CMAR fee rate', '3.5% of construction cost'],
            ['Original scope (3.5% of $40M)', '$1,400,000'],
            ['At $50M approved (3.5% of $50M)', '$1,750,000'],
            ['At $64M expanded (3.5% of $64M)', '$2,240,000'],
            ['Sasscer proposal: cap fee at $50M base', '$1,750,000'],
            ['Howard proposal: cap at $50M', 'Under discussion'],
            ['Final GMP (Sep 2023)', '$82.4 million'],
          ]}
        />

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">
          The Fee Confrontation (June 9, 2022)
        </h3>
        <p className="text-slate-700 leading-relaxed mb-2">
          Chair Kirby confronted M.B. Kahn on record about the fee increase:
        </p>
        <Quote
          text="Mr. Ott stated that at the time negotiating the construction manager at risk contract that the fee would not change. He stated now the fee has changed."
          speaker="Chair Kirby"
          source="BOC June 9, 2022 Special 9am Meeting Minutes"
        />

        <p className="text-slate-700 leading-relaxed mb-2">
          M.B. Kahn's representative, Mr. Cram, responded:
        </p>
        <Quote
          text="Mr. Ott was referring to the fee percentage not absolute dollar cash cost"
          speaker="Mr. Cram (M.B. Kahn)"
          source="BOC June 9, 2022 Special 9am Meeting Minutes"
        />

        <EditorialNote>
          <strong>Note:</strong> The distinction matters. A 3.5% fee on $40M is $1.4M. A 3.5% fee on
          $82.4M is $2.88M. The percentage stayed the same; the dollar cost more than doubled.
          Sasscer and Howard both attempted to cap the fee at the original $50M base, but the final
          GMP was approved at $82.4M.
        </EditorialNote>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">
          LS3P Architect Fee
        </h3>
        <p className="text-slate-700 leading-relaxed mb-2">
          LS3P's architect fee was set at 5.75% of construction cost. LS3P indicated willingness to
          honor the contract fee at the $40M level, but additional charges for auditorium upgrades
          and scope additions were billed at $245/hour.
        </p>
        <p className="text-xs text-slate-500">
          Source: BOC June 9, 2022 Special 9am Meeting Minutes.
        </p>
      </section>

      {/* ============================================================ */}
      {/* By the Numbers                                                */}
      {/* ============================================================ */}
      <section className="mb-10 print:break-before-page">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          By the Numbers
        </h2>
        <ResponsiveTable
          headers={['What Changed', 'Before', 'After']}
          rows={[
            ['School project cost', '$50 million (2021)', '~$85 million'],
            ['Voter approval?', 'Yes (bond, rejected 2018)', 'No (USDA installment)'],
            ['County debt (pre-Holmes)', '$7M (retiring by 2025)', 'Retired'],
            ['Holmes HS project', '$50M (approved Apr 2021)', '~$85M (reported cost)'],
            ['Holmes HS annual debt service', '~$2M/yr (Davenport projection at $50M)', '~$3.4 million/year'],
            ['School as % of property tax', '\u2014', '58.7% of $14M levy'],
            ['Tax rate', '$0.755 (2021-22)', '$0.695 (2025-26)'],
            ['Tax base', '$1.49 billion', '$2.00 billion'],
            ['Property tax revenue', '~$11.2M', '~$14.0M (+25%)'],
            ['Fund balance', '27.53% (2022)', '29.50% (Finance Officer, Feb 2026) / 58.13% (FY2024-25 audit)'],
            ['Reappraisal cycle', '8 years', '4 years'],
          ]}
        />
      </section>

      {/* ============================================================ */}
      {/* Where Did the Guidance Come From?                             */}
      {/* ============================================================ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          Where Did the Guidance Come From?
        </h2>
        <ResponsiveTable
          headers={['Decision', 'Guidance Source', 'What They Said', 'Their Interest']}
          rows={[
            ['No referendum needed', 'Rick Ott, M.B. Kahn (contractor)', '"no that is not required"', 'Kahn was hired to build the school'],
            ['"No impact on tax rate"', 'Davenport & Associates (advisor)', 'Based on $50M', 'Paid up to $30K for the engagement'],
            ['"Reduce sticker shock"', 'Tax Administrator Radke', '"benefit taxpayers"', 'Presented after USDA loan approved'],
            ['Values are accurate', 'Vincent Valuations (contractor)', 'Median 99.04%', 'Paid $378K (2022) and $365K (2026)'],
          ]}
        />
        <EditorialNote>
          <strong>Note:</strong> The Board relied on these sources when making decisions that
          committed the county to decades of debt without voter approval. The question is whether the
          Board received independent analysis of the long-term fiscal impact — particularly after
          costs grew from $50M to $85M through Board-approved changes.
        </EditorialNote>
      </section>

      {/* ============================================================ */}
      {/* F. TAX IMPACT SECTION                                         */}
      {/* ============================================================ */}
      <section ref={taxRef} className="mb-10 print:break-before-page">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          What the Reappraisal Means for Your Tax Rate
        </h2>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">
          What Has Already Happened to Your Tax Bill
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Before looking at 2026 scenarios, here is what has already happened since the last 8-year
          reappraisal cycle. This example uses a home that was assessed at $200,000 before the 2022
          reappraisal:
        </p>

        <ResponsiveTable
          headers={['Year', 'Assessed Value', 'Tax Rate', 'Annual Bill', 'Change from FY2021-22']}
          rows={[
            ['FY2021-22 (before reappraisal)', '$200,000', '$0.755', '$1,510', '\u2014'],
            ['FY2022-23 (after 2022 reappraisal)', '$244,400', '$0.665', '$1,625', '+$115 (+7.6%)'],
            ['FY2024-25 (rate increase, no reappraisal)', '$244,400', '$0.695', '$1,699', '+$189 (+12.5%)'],
          ]}
        />

        <p className="text-xs text-slate-500 mt-2 mb-4">
          Sources: BOC June 9, 2022 Minutes (rate adoption); BOC June 2024 budget. Tax base increase
          of 22.2% applied uniformly for illustration. Individual properties varied.
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          Your bill has already increased 12.5% since FY2021-22 — even though the rate dropped from
          $0.755 to $0.695. The rate went down, but the assessed value went up more. This is the
          pattern the Board has followed: the rate appears to drop after a reappraisal, but total
          revenue (and your bill) increases.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">
          2026 Scenarios: What Comes Next
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Now add the 2026 reappraisal (estimated 40% increase on the 2022 values). The same home
          goes from $244,400 to approximately $342,000. These scenarios are based on the Board's
          actual rate-setting pattern, not extremes:
        </p>

        <ResponsiveTable
          forceCards
          highlightRow={2}
          headers={['Scenario', 'Rate', 'Your Annual Bill', 'Change from today ($1,699)', 'Cumulative since FY2021-22 ($1,510)']}
          rows={[
            ['Revenue-neutral (RNR)', '~$0.498', '~$1,704', '+$5 (about the same)', '+$194 (+13%)'],
            ['Board pattern: 5% above RNR', '~$0.523', '~$1,789', '+$91 (+5%)', '+$279 (+18%)'],
            [
              <span className="flex items-center gap-2">
                Board pattern: 10% above RNR
                <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-300 rounded px-1.5 py-0.5">
                  Likely scenario based on Board's documented pattern
                </span>
              </span>,
              '~$0.548', '~$1,874', '+$176 (+10%)', '+$364 (+24%)'
            ],
            ['Manager pattern: 15% above RNR', '~$0.573', '~$1,960', '+$261 (+15%)', '+$450 (+30%)'],
          ]}
        />

        <p className="text-xs text-slate-500 mt-2 mb-4">
          These scenarios are based on the Board's documented behavior. In 2022, the Board adopted a
          rate 4.7% above revenue-neutral (RNR was $0.635, adopted $0.665). County Manager Howard
          proposed 15% above RNR ($0.73). The Board has never adopted a revenue-neutral rate after a
          reappraisal. Sources: BOC June 9, 2022 Minutes; BOC April 17, 2019 Minutes.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
          <p className="text-slate-800 leading-relaxed text-sm font-medium">
            Based on the Board's past pattern (5-15% above revenue-neutral), a homeowner who was
            paying $1,510 in FY2021-22 can expect to pay approximately $1,789 to $1,960 after the
            2026 reappraisal — a cumulative increase of $279 to $450 (+18% to +30%) across two
            reappraisal cycles. Even the revenue-neutral scenario shows a cumulative 13% increase
            since FY2021-22, because the Board adopted above revenue-neutral in 2022 and raised the
            rate again in 2024.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">
          How Does This Compare to Other NC Counties?
        </h3>
        <p className="text-slate-700 leading-relaxed mb-2">
          A 2024 UNC School of Government study examined 200 reappraisals across all 100 NC counties
          (2008-2023) and found:
        </p>
        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-4">
          <li><strong>67% of NC counties</strong> adopted rates above revenue-neutral after reappraisals.</li>
          <li>When tax bases grew, <strong>92% adopted above revenue-neutral</strong> — averaging 6% above.</li>
          <li>Chowan County adopted 4.7% above revenue-neutral in 2022.</li>
          <li>County Manager Howard confirmed in April 2019 that the Board also chose not to go revenue-neutral after the 2014 reappraisal.</li>
        </ul>
        <p className="text-slate-700 leading-relaxed mb-2">
          <strong>Chowan County has never adopted a revenue-neutral rate after a reappraisal</strong>,
          based on the documented record. The statewide data shows this is common but not universal —
          33% of counties do adopt revenue-neutral.
        </p>
        <p className="text-xs text-slate-500 mb-4">
          Sources: UNC School of Government, McLaughlin (2024); BOC April 17, 2019 Minutes (Howard
          statement on 2014 rate).
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
          <p className="text-slate-800 leading-relaxed text-sm font-medium">
            Every cent above revenue-neutral is a tax increase the Board is choosing to impose. The
            revenue-neutral rate has not been published. It is required by law (G.S. 159-11(e)) to
            be included in the proposed budget.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Understanding Your Assessment                                 */}
      {/* ============================================================ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          Understanding Your Assessment
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
          <li>Home values going up is not the county's doing. Values are set by the market.</li>
          <li>Reappraisals are generally accurate (99.04% median sales ratio).</li>
          <li>Your assessment going up 40% does NOT mean taxes go up 40%. It depends on the rate.</li>
          <li>If your assessment is accurate, an appeal will not succeed.</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">When to Appeal</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-4">
          <li>Wrong property data (square footage, lot size, features)</li>
          <li>Specific conditions reducing value</li>
          <li>Evidence of lower comparable sales</li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Appeals are NOT the place to contest the tax rate. That's the budget hearing (May/June 2026).
        </p>
      </section>

      {/* ============================================================ */}
      {/* G. WHAT YOU CAN DO                                            */}
      {/* ============================================================ */}
      <section ref={actionRef} className="mb-10 print:break-before-page">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          What You Can Do
        </h2>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">
            Before May 11, 2026 (5:00 PM) — If Your Assessment Contains Errors
          </h3>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Review your assessment notice for data errors</li>
            <li>File appeal with Board of Equalization and Review if evidence supports it</li>
            <li>Bring: comparable sales, private appraisal, photos, error documentation</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">
            Before the Budget Hearing (May/June 2026) — This Is Where the Rate Is Set
          </h3>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Ask county to publish the revenue-neutral rate</li>
            <li>Attend and speak during public comment</li>
            <li>Ask: How much of the rate goes to school debt?</li>
            <li>Ask: What would the rate be without the school debt?</li>
            <li>Ask: Was the Davenport analysis updated when costs went from $50M to $85M?</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
          <p className="text-slate-800 leading-relaxed text-sm font-medium">
            "Zero public comments were received at both the 2022 and 2026 Schedule of Values hearings."
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Tax Relief Programs                                           */}
      {/* ============================================================ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          Tax Relief Programs
        </h2>
        <p className="text-slate-700 leading-relaxed mb-3">
          If you are 65 or older, disabled, or on a fixed income:
        </p>
        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-4">
          <li><strong>Elderly/Disabled Exclusion</strong> (G.S. 105-277.1)</li>
          <li><strong>Circuit Breaker</strong> (G.S. 105-277.1B)</li>
          <li><strong>Tax Deferral</strong> (G.S. 105-277.1C)</li>
        </ul>
        <p className="text-slate-700">
          Visit{' '}
          <a
            href="https://www.chowancounty-nc.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 underline"
          >
            chowancounty-nc.gov
          </a>{' '}
          for contact information.
        </p>
      </section>

      {/* ============================================================ */}
      {/* J. APPENDIX: WHO'S WHO (moved to end)                         */}
      {/* ============================================================ */}
      <section className="mb-10 print:break-before-page">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          Appendix: Key Figures Referenced in This Report
        </h2>
        <ResponsiveTable
          headers={['Name', 'Role', 'Relevance']}
          rows={[
            [<strong>Patti Kersey</strong>, 'Chair, Chowan County BOC (2019-2020)', 'Presided over referendum cancellation and early USDA discussions'],
            [<strong>Bob Kirby</strong>, 'Commissioner (2019-2020), then Chair (2021-present)', 'Asked if referendum was needed; linked revaluation to debt capacity; confronted Kahn on fee increase'],
            [<strong>Kevin Howard</strong>, 'Chowan County Manager', 'Proposed budgets; advised about fund balance use; stated debt ratio would be "addressed at the revaluation"'],
            [<strong>Rick Ott</strong>, 'Construction Manager, M.B. Kahn', 'Told the Board no referendum was needed for USDA (this guidance came from the project\'s own contractor)'],
            [<strong>Ron Cummings</strong>, 'Commissioner', 'Raised concern about fixed-income residents being "priced out of their homes"'],
            [<strong>Larry McLaughlin</strong>, 'Commissioner', 'Objected that the 2019 bond process "seems rushed"'],
            [<strong>Commissioner Kehayes</strong>, 'Commissioner', 'Raised concern about debt-to-assessed-value ratio'],
            [<strong>Chris Hill</strong>, 'Chowan County Tax Administrator', 'Presented reappraisal data'],
            [<strong>Ryan Vincent</strong>, 'Owner, Vincent Valuations', 'Conducted 2022 and 2026 reappraisals'],
            [<strong>Radke</strong>, 'Former Tax Administrator', 'Presented the resolution to shorten reappraisal cycle'],
            [<><strong>Davenport</strong> &amp; <strong>Associates</strong></>, 'County\'s financial advisor', 'Modeled school debt; projected "no impact on current tax rate" for $50M project'],
            [<strong>Cathy Smith</strong>, 'Chowan County Finance Officer', 'Presented budget and financial data'],
            [<strong>Mr. Cram</strong>, 'M.B. Kahn representative', 'Responded to fee confrontation; distinguished fee percentage from dollar amount'],
            [<strong>Dr. Sasscer</strong>, 'Superintendent', 'Confirmed referendum timeline; proposed capping Kahn fee at $50M base'],
          ]}
        />
      </section>

      {/* ============================================================ */}
      {/* SCOPE OF REVIEW                                               */}
      {/* ============================================================ */}
      <section className="mb-10 print:break-before-page">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          Scope of Review
        </h2>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-3">What Was Reviewed</h3>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4">
          <ul className="list-disc pl-6 text-slate-700 space-y-2 text-sm leading-relaxed">
            <li><strong>480 documents</strong> from the Chowan County Board of Commissioners, including meeting minutes, agenda packets (with expenditure ledgers), retreat minutes, special meeting minutes, CIP Committee minutes, and Joint Committee minutes.</li>
            <li><strong>Coverage period:</strong> 2019 through March 2026.</li>
            <li><strong>Source:</strong> All documents downloaded from chowancounty-nc.gov (Agendas &amp; Minutes page and Archives 2003-2025 page).</li>
            <li><strong>Verification:</strong> Every document in the collection has been SHA-256 hashed at time of acquisition for integrity verification. The full hash log is available upon request.</li>
            <li><strong>Completeness:</strong> The collection was verified against the county website on April 2, 2026. Only 2 documents were found to be absent and were subsequently downloaded. The collection is complete relative to what the county has made publicly available.</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-3">Records Needed to Complete This Analysis</h3>
        <p className="text-slate-700 text-sm mb-3">
          The following records are referenced in BOC minutes but were not attached to any publicly posted agenda packet or minutes document. These records are needed to complete this analysis. Without them, the public record does not contain the information necessary to fully evaluate certain decisions documented in this report.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
          <ul className="list-disc pl-6 text-slate-700 space-y-3 text-sm leading-relaxed">
            <li>
              <strong>Board of Education meeting minutes</strong> — Maintained separately by Edenton-Chowan Public Schools (ecps.us). The BOE is a separate elected body. BOC minutes reference that Kahn was presented as a "request from Edenton-Chowan Board of Education" (April 18, 2022). The BOE minutes may contain the Kahn hiring authorization and selection process.
              <span className="block text-amber-700 text-xs mt-1">NC Public Records Request required to: Edenton-Chowan Board of Education</span>
            </li>
            <li>
              <strong>M.B. Kahn CMAR contract</strong> — The executed Construction Manager at Risk agreement, including fee schedule, scope, amendments, and change orders. BOC minutes reference the contract but the document itself is not publicly posted.
              <span className="block text-amber-700 text-xs mt-1">NC Public Records Request required to: Chowan County Manager's Office</span>
            </li>
            <li>
              <strong>Kahn qualifications-based selection records</strong> — Under G.S. 143-128.1, CMAR contracts use qualifications-based selection. No RFQ, selection committee records, scoring criteria, or evaluation summaries were found in any of the 480 BOC documents. If a competitive selection process occurred, it is not documented in the publicly available BOC record.
              <span className="block text-amber-700 text-xs mt-1">NC Public Records Request required to: Chowan County Manager's Office and/or Edenton-Chowan Board of Education</span>
            </li>
            <li>
              <strong>USDA loan agreement and amortization schedule</strong> — The USDA Rural Development loan terms, approved amount, interest rate, repayment schedule, and any conditions or covenants. The BOC approved the application (June 21, 2021) but the executed agreement is not publicly posted.
              <span className="block text-amber-700 text-xs mt-1">NC Public Records Request required to: Chowan County Manager's Office. Also available via USDA Rural Development, Raleigh NC office.</span>
            </li>
            <li>
              <strong>Davenport &amp; Associates updated financial projections</strong> — Davenport projected "no impact on current tax rate" based on a $50M project (March 22, 2021). The project reached approximately $85M. Whether Davenport updated its analysis when costs increased 70% is not documented in any publicly available BOC minutes or agenda packet.
              <span className="block text-amber-700 text-xs mt-1">NC Public Records Request required to: Chowan County Manager's Office</span>
            </li>
            <li>
              <strong>PNC Bank financing selection records</strong> — The PNC Bank financing ($34,998,500 at a 9% rate floor) was presented in the November 20, 2023 agenda packet. No competitive quotes from other financial institutions are documented. Truist offered a 2.26% competitive rate in August 2021.
              <span className="block text-amber-700 text-xs mt-1">NC Public Records Request required to: Chowan County Manager's Office</span>
            </li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-3">Note on County Audits</h3>
        <p className="text-slate-700 text-sm leading-relaxed">
          The county's annual financial audit verifies that dollar amounts are correctly recorded.
          It does not audit processes or programs. The procedural questions raised in this
          report &mdash; such as expenditure authorization and contractor selection &mdash; are
          outside the scope of a financial statement audit.
        </p>
      </section>

      {/* ============================================================ */}
      {/* I. SOURCE MATERIALS PACKAGE                                   */}
      {/* ============================================================ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          Source Materials Package
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Media and researchers can request the complete source materials package, which includes:
          all 480 original BOC meeting minute and agenda packet PDFs, SHA-256 integrity hashes,
          and the provenance log documenting acquisition source and date for every document.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          Request source materials
        </a>
      </section>

      {/* ============================================================ */}
      {/* H. TERMS OF SERVICE                                           */}
      {/* ============================================================ */}
      <section className="mb-10 print:break-before-page">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          Terms of Service
        </h2>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
          <ul className="list-disc pl-6 text-slate-700 space-y-2 text-sm leading-relaxed">
            <li>
              This analysis is produced from public records and is provided for informational
              purposes only.
            </li>
            <li>
              It does not constitute legal, financial, or tax advice.
            </li>
            <li>
              Information is provided "as is" without warranty of any kind.
            </li>
            <li>
              If any information is found to be inaccurate, it will be updated to match official
              records upon notification.
            </li>
            <li>
              Use of this information is at your own risk.
            </li>
            <li>
              Source materials are available upon request for verification by news organizations
              or the public.
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER                                                        */}
      {/* ============================================================ */}
      <footer className="border-t-2 border-slate-200 pt-6 mt-12">
        <p className="text-xs text-slate-500 leading-relaxed mb-2">
          All data sourced from official Chowan County Board of Commissioner meeting minutes
          and agenda packets, with supporting data from the U.S. Census Bureau, NC Department of
          Public Instruction, NC Department of Revenue, UNC School of Government, and NC General
          Statutes. Full documentation available at request.{' '}
          <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">
            Contact us
          </a>.
        </p>
        <p className="text-xs text-slate-500 leading-relaxed mb-2">
          If any information in this document is incorrect, it will be corrected promptly upon
          notification.
        </p>
        <p className="text-xs text-slate-500 leading-relaxed mb-2">
          This document was prepared with the assistance of AI for data compilation and formatting.
          All factual claims are sourced to government records.
        </p>
        <p className="text-xs text-slate-600 font-medium">
          Prepared by Ropewalk Technologies LLC.{' '}
          <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">
            Contact us
          </a>
        </p>
      </footer>
    </article>
  )
}
