import ResponsiveTable from '../components/ResponsiveTable'
import Quote from '../components/Quote'
import EditorialNote from '../components/EditorialNote'

export default function SchoolDebtTimeline() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
          The School Debt Timeline: How Chowan County Built an $85 Million School After Voters Said No
        </h1>
        <p className="text-slate-600 leading-relaxed mb-2">
          A verbatim record compiled from official Chowan County Board of Commissioner meeting
          minutes. All minutes are publicly available at{' '}
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

      {/* Who's Who */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          Who's Who
        </h2>
        <ResponsiveTable
          headers={['Name', 'Role', 'Relevance']}
          rows={[
            [<strong>Patti Kersey</strong>, 'Chair, Chowan County BOC (2019-2020)', 'Presided over referendum cancellation and early USDA discussions'],
            [<strong>Bob Kirby</strong>, 'Commissioner (2019-2020), then Chair (2021-present); Secretary of ECP (2024 IRS filing)', 'Asked if referendum was needed; linked revaluation to debt capacity'],
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
          ]}
        />
      </section>

      {/* 2018 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          2018 — Voters Reject the School Bond
        </h2>
        <p className="text-slate-700 leading-relaxed">
          <strong>November 2018</strong> — Chowan County voters reject a bond referendum for a new
          John A. Holmes High School. Under the NC Constitution (Art. V, Sec. 4), general obligation
          bonds require voter approval. The voters said no.
        </p>
      </section>

      {/* 2019 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          2019 — The County Prepares to Try Again
        </h2>
        <p className="text-slate-700 leading-relaxed">
          <strong>November 18, 2019</strong> — Board approves Davenport &amp; Company (up to $30,000)
          and Parker Poe (~$20,000) to prepare for a 2020 bond referendum. Commissioner McLaughlin
          objects that the process "seems rushed."
        </p>
      </section>

      {/* 2020 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          2020 — COVID Stops the Second Referendum, a New Path Emerges
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>May 4-18, 2020</strong> — Board abandons 2020 bond referendum due to COVID-19.
        </p>

        <Quote
          text="due to the impact of COVID 19, we would no longer pursue a bond referendum for 2020."
          speaker="Chair Kersey"
          source=""
        />

        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>August 26, 2020</strong> — Special meeting. Mr. Ott (M.B. Kahn), architect Paul
          Boney, County Manager Howard, and Superintendent Dr. Sasscer present school construction
          plans. All seven commissioners present.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Key Verbatim Exchanges</h3>

        <p className="text-slate-700 leading-relaxed mb-2">
          <strong>Mr. Ott highlights the risk of the bond referendum path, using Camden County as an example:</strong>
        </p>
        <Quote
          text="He noted that if their bond referendum does not pass, Camden County will have to return those monies to the State."
          speaker="Mr. Ott"
          source="August_26_Minutes.pdf, line 88"
        />
        <p className="text-xs text-slate-500 -mt-2 mb-4">
          Context: Ott was illustrating that the bond referendum path carried risk of voter rejection
          (as Chowan had already experienced in 2018). This framed USDA installment financing (which
          requires no voter approval) as the safer alternative.
        </p>

        <p className="text-slate-700 leading-relaxed mb-2">
          <strong>Architect Boney ties timeline to referendum:</strong>
        </p>
        <Quote
          text="He stated this pushes the Board more closely to the date they are looking for (closer to the bond referendum)."
          speaker="Architect Boney"
          source="August_26_Minutes.pdf, line 190"
        />

        <p className="text-slate-700 leading-relaxed mb-2">
          <strong>Dr. Sasscer confirms referendum timeline:</strong>
        </p>
        <Quote
          text="He stated that the bond referendum is scheduled for November of 2022."
          speaker="Dr. Sasscer"
          source="August_26_Minutes.pdf, lines 196-197"
        />

        <p className="text-slate-700 leading-relaxed mb-2">
          <strong>Mr. Ott presents USDA as alternative:</strong>
        </p>
        <Quote
          text="discussed the potential for borrowing the monies from USDA or the County repaying itself in the bond referendum."
          speaker="Mr. Ott"
          source="August_26_Minutes.pdf, line 168"
        />

        <p className="text-slate-700 leading-relaxed mb-2">
          <strong>Commissioner McLaughlin on the tax rate:</strong>
        </p>
        <Quote
          text="stated he was encouraged with this progress but stated he wanted to reemphasize the need to move on construction in 2023 to try not to impact the tax rate."
          speaker="Commissioner McLaughlin"
          source="August_26_Minutes.pdf, lines 170-171"
        />

        <p className="text-slate-700 leading-relaxed mb-2">
          <strong>County Manager Howard on existing debt:</strong>
        </p>
        <Quote
          text="noted the largest part of the County's debt is to be paid off in 2024."
          speaker="County Manager Howard"
          source="August_26_Minutes.pdf, line 163"
        />

        <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-4">
          The Final Four Lines Before Adjournment
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Then, in the final four lines before adjournment, the path shifts:
        </p>

        <Quote
          text="stated the Commissioners intention is to move forward but the time frame needs to be slid a little bit. He asked if a referendum is needed to apply for USDA loan."
          speaker="Commissioner Kirby"
          source="August_26_Minutes.pdf, lines 201-202"
        />

        <Quote
          text="stated no that is not required."
          speaker="Mr. Ott (Construction Manager, M.B. Kahn, the private firm later hired to build the school)"
          source="August_26_Minutes.pdf, line 203"
        />

        <Quote
          text="noted all of this has to be approved by the LGC."
          speaker="Commissioner Kirby"
          source="August_26_Minutes.pdf, line 204"
        />

        <div className="my-4 bg-slate-100 rounded-lg px-5 py-4 text-sm text-slate-700 italic">
          Meeting adjourned.
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

      {/* 2021 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          2021 — The Board Chooses USDA Over Referendum
        </h2>

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
      </section>

      {/* 2022 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          2022 — Reappraisal and Cycle Change
        </h2>

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
      </section>

      {/* 2024-2025 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          2024-2025 — Costs Rise, Rate Climbs
        </h2>

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
      </section>

      {/* 2026 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-200 pb-2">
          2026 — The Reappraisal Arrives
        </h2>

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

      {/* By the Numbers */}
      <section className="mb-10">
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
            ['School as % of property tax', '—', '58.7% of $14M levy'],
            ['Tax rate', '$0.755 (2021-22)', '$0.695 (2025-26)'],
            ['Tax base', '$1.49 billion', '$2.00 billion'],
            ['Property tax revenue', '~$11.2M', '~$14.0M (+25%)'],
            ['Fund balance', '27.53% (2022)', '29.50% (Finance Officer, Feb 2026) / 58.13% (FY2024-25 audit)'],
            ['Reappraisal cycle', '8 years', '4 years'],
          ]}
        />
      </section>

      {/* Where Did the Guidance Come From? */}
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
          costs escalated from $50M to $85M.
        </EditorialNote>
      </section>

      {/* Tax Rate Scenarios */}
      <section className="mb-10">
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
            ['FY2021-22 (before reappraisal)', '$200,000', '$0.755', '$1,510', '—'],
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
            ['Board pattern: 10% above RNR', '~$0.548', '~$1,874', '+$176 (+10%)', '+$364 (+24%)'],
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

      {/* Understanding Your Assessment */}
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

      {/* What You Can Do */}
      <section className="mb-10">
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

      {/* Tax Relief Programs */}
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
          Contact: Chowan County Tax Office{' '}
          <a href="tel:2524828486" className="text-blue-700 hover:text-blue-900 underline">
            (252) 482-8486
          </a>
        </p>
      </section>

      {/* Sources Footer */}
      <footer className="border-t-2 border-slate-200 pt-6 mt-12">
        <p className="text-xs text-slate-500 leading-relaxed mb-2">
          All data sourced from official Chowan County Board of Commissioner meeting minutes, Chowan
          County GIS, U.S. Census Bureau, NC Department of Revenue, and NC General Statutes. Full
          documentation available at request. Contact:{' '}
          <a href="mailto:kim@ropewalk.io" className="text-blue-600 hover:text-blue-800 underline">
            kim@ropewalk.io
          </a>
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
          Prepared by Ropewalk Technologies LLC. Contact:{' '}
          <a href="mailto:kim@ropewalk.io" className="text-blue-600 hover:text-blue-800 underline">
            kim@ropewalk.io
          </a>
        </p>
      </footer>
    </article>
  )
}
