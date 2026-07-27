import type { Flashcard, GlossaryTerm, Lesson, Question } from './types'

type Spec = {
  unitKey: string
  topicKey: string
  title: string
  pages: string
  intro: string
  facts: string[]
  traps: string[]
  terms: [string, string][]
}

const specs: Spec[] = [
  {
    unitKey: 'unit1', topicKey: 't1', title: 'Property and Mortgage Markets', pages: 'p.7-14',
    intro: 'Housing and mortgage activity respond to credit supply, confidence, employment, interest rates, demographics and government intervention.',
    facts: [
      'Securitisation converts pools of mortgage cash flows into securities, giving lenders funding but also transferring and spreading credit risk.',
      'The credit crisis showed how weak underwriting, highly leveraged institutions and opaque securitised debt can reduce liquidity and lending.',
      'Higher borrowing costs generally weaken affordability and demand; lower costs can support demand, although rates are never the only influence.',
      'Loan-to-value compares the mortgage with the property value. A lower LTV normally gives the lender a larger equity cushion.',
      'First-time buyers, movers, remortgagors and buy-to-let borrowers have different objectives, constraints and market effects.',
      'Supply is slow to respond because land, planning, construction capacity and property type/location constrain new housing.',
      'Economic indicators should be interpreted together: employment, earnings, inflation, transactions and arrears can point in different directions.'
    ],
    traps: ['Do not treat Bank Rate as the only influence on mortgage pricing.','Securitisation transfers funding and risk; it does not remove the underlying borrower risk.','A national house-price trend may not describe a particular property or region.'],
    terms: [['Securitisation','Pooling mortgage cash flows and issuing securities backed by them.'],['Loan-to-value','Mortgage amount expressed as a percentage of property value.'],['Sub-prime lending','Lending to borrowers with materially weaker credit characteristics.']]
  },
  {
    unitKey: 'unit1', topicKey: 't2_3', title: 'Mortgage Regulation and Types of Borrower', pages: 'p.15-31',
    intro: 'Mortgage regulation depends on the security, property use, borrower and transaction, while borrower legal form affects liability and underwriting.',
    facts: [
      'A regulated mortgage contract is determined by the regulatory definition, including security over relevant land and occupation conditions.',
      'Business buy-to-let and consumer buy-to-let should not be assumed to receive identical treatment.',
      'A sole trader is legally the business owner and normally has unlimited personal liability for business debts.',
      'Partners can bind a partnership within their authority and may have personal liability; limited-liability structures change that exposure.',
      'Companies are separate legal persons. Lenders assess accounts, directors, ownership, security and often guarantees.',
      'Trustees hold and manage property for beneficiaries within the trust powers; the trust deed and trustee authority matter to lending.',
      'Mortgage advice and arranging permissions, disclosure and conduct obligations depend on the activity and transaction.'
    ],
    traps: ['Not every loan secured on property is automatically a regulated mortgage contract.','Limited liability of a company does not prevent a lender asking for a personal guarantee.','A trust is not analysed in the same way as an individual owner.'],
    terms: [['Regulated mortgage contract','A mortgage meeting the applicable regulatory definition and occupation/security conditions.'],['Personal guarantee','An individual promise to meet another borrower’s debt if that borrower defaults.'],['Consumer buy-to-let','A buy-to-let transaction receiving the specific consumer buy-to-let treatment.']]
  },
  {
    unitKey: 'unit1', topicKey: 't4', title: 'Principles of Mortgage and Property Law', pages: 'p.32-41',
    intro: 'Property rights, ownership form and priority of interests determine what can be mortgaged and how lender security operates.',
    facts: [
      'Freehold ownership is generally indefinite; leasehold ownership lasts for the lease term and is subject to its covenants and charges.',
      'Joint tenants own together with survivorship; tenants in common hold distinct beneficial shares that can pass under a will or intestacy.',
      'Legal ownership and beneficial ownership can differ, particularly with trusts and co-ownership.',
      'A mortgage creates security rather than transferring everyday ownership to the lender.',
      'Charges are ranked by priority, so an earlier-ranking charge is normally repaid before a later one from sale proceeds.',
      'Easements, restrictive covenants and other third-party rights can affect value, use and marketability.',
      'Land-registration and title investigation provide evidence of ownership, charges and relevant rights.'
    ],
    traps: ['Survivorship applies to joint tenancy, not a tenancy in common.','Leasehold is ownership for a term, not merely a rental description.','A second charge is not repaid ahead of a first charge simply because it has a higher interest rate.'],
    terms: [['Joint tenancy','Co-ownership with survivorship and no distinct beneficial shares.'],['Tenancy in common','Co-ownership in distinct beneficial shares without automatic survivorship.'],['Easement','A right benefiting one piece of land over another.']]
  },
  {
    unitKey: 'unit1', topicKey: 't5', title: 'Property and Mortgage Law', pages: 'p.42-50',
    intro: 'A valid mortgage depends on borrower capacity, good title, effective security and compliance with the relevant legal process.',
    facts: [
      'The borrower covenants to repay and comply with mortgage conditions; the lender receives enforceable security over the property.',
      'A legal charge is registered against title and restricts dealings without the charge holder being addressed.',
      'Undue influence or misrepresentation can undermine consent, particularly where one person provides security for another’s borrowing.',
      'Independent legal advice helps demonstrate that a guarantor or third-party chargor understood the transaction and acted freely.',
      'Priority searches protect the period between completion and registration.',
      'Restrictions and notices on title may require consent or evidence before registration or sale.',
      'The lender’s remedies remain subject to law, regulation and fair treatment; security is not unrestricted power.'
    ],
    traps: ['A signature alone may not resolve undue-influence concerns.','A guarantee and a charge over property are related but legally distinct commitments.','Registration matters to priority and enforceability.'],
    terms: [['Legal charge','Registered security over property for repayment of a debt.'],['Undue influence','Improper pressure that prevents a person exercising free and informed judgement.'],['Priority search','A pre-completion search protecting an application’s priority for a limited period.']]
  },
  {
    unitKey: 'unit1', topicKey: 't6', title: 'Buying a Property: An Overview', pages: 'p.51-61',
    intro: 'A purchase coordinates budget, mortgage advice, offer, legal work, valuation, contract, completion and post-completion registration.',
    facts: [
      'The buyer should budget for deposit, tax, legal work, valuation/survey, mortgage fees, insurance, moving and initial repairs.',
      'An agreement in principle is an early lending indication, not a binding mortgage offer.',
      'The estate agent acts for the seller even when communicating extensively with the buyer.',
      'A conveyancer investigates title, searches, contract terms, enquiries, funding and completion arrangements.',
      'The lender values for security; the buyer chooses whether to obtain a more detailed survey for their own protection.',
      'Exchange normally makes the transaction legally binding and fixes the completion obligations.',
      'At completion, funds are transferred, keys released and ownership/security registration follows.'
    ],
    traps: ['A valuation is not a full survey.','An accepted offer is not always the point of legal commitment.','The seller’s estate agent does not become the buyer’s adviser.'],
    terms: [['Agreement in principle','A preliminary indication of potential lending, subject to full underwriting and property assessment.'],['Exchange of contracts','The stage at which the sale contract normally becomes legally binding.'],['Completion','The stage when purchase funds are transferred and the buyer becomes entitled to possession.']]
  },
  {
    unitKey: 'unit1', topicKey: 't7_8', title: 'The Legal Side of Property Purchase', pages: 'p.62-77',
    intro: 'Conveyancing identifies title and transaction risks, coordinates the contract and mortgage, and differs across UK legal systems.',
    facts: [
      'The conveyancer checks title, boundaries, rights, covenants, lease terms and registered charges.',
      'Searches provide information not always visible from inspection, including local-authority, water/drainage and environmental matters.',
      'Pre-contract enquiries clarify occupation, disputes, alterations, guarantees, fixtures and other property-specific issues.',
      'The mortgage deed creates the lender’s security and the conveyancer normally gives undertakings concerning funds and registration.',
      'Leasehold purchases require review of remaining term, ground rent, service charge, management information and planned expenditure.',
      'A chain makes transactions interdependent and can create timing and funding risk.',
      'Scottish terminology and stages differ from England and Wales; advisers should not merge the systems.'
    ],
    traps: ['Searches do not replace inspection or survey.','A short lease can affect both value and mortgageability.','Legal systems and commitment points differ across the UK.'],
    terms: [['Conveyancing','Legal work transferring property ownership and creating lender security.'],['Restrictive covenant','A title promise restricting how land may be used.'],['Property chain','Linked transactions in which one completion depends on another.']]
  },
  {
    unitKey: 'unit1', topicKey: 't9_10', title: 'The Role of the Mortgage Adviser', pages: 'p.78-91',
    intro: 'Mortgage advice translates objectives and evidence into an affordable, suitable recommendation with clear disclosure and a defensible record.',
    facts: [
      'Initial disclosure explains the firm, service scope, remuneration, complaints arrangements and regulatory status.',
      'The fact-find covers applicants, dependants, income, spending, credit commitments, assets, liabilities, objectives and future change.',
      'Affordability considers verified income and committed/essential expenditure under stressed conditions, not only an income multiple.',
      'The adviser assesses term, repayment method, rate risk, flexibility, deposit/equity, fees, early-repayment terms and foreseeable changes.',
      'A recommendation should explain why the selected mortgage meets needs and why material alternatives were not preferred.',
      'Evidence quality matters: payslips, accounts, tax information, bank statements and credit data may need reconciliation.',
      'The record should show customer understanding, risks explained and any limitations or assumptions.'
    ],
    traps: ['Eligibility is not the same as suitability.','The lowest headline rate may not have the lowest overall cost.','A lender decision does not replace the adviser’s suitability assessment.'],
    terms: [['Affordability assessment','Evaluation of whether repayments remain sustainable after income, expenditure and stress are considered.'],['Mortgage illustration','Prescribed information showing key features, costs and risks of a proposed mortgage.'],['Suitability','The fit between a recommendation and the customer’s needs and circumstances.']]
  },
  {
    unitKey: 'unit1', topicKey: 't11_12', title: 'Credit Status & Suitability', pages: 'p.92-104',
    intro: 'Credit assessment combines identity, borrowing history, current commitments, stability, deposit and explanation of adverse information.',
    facts: [
      'Credit-reference data can show accounts, searches, electoral information and public records, but the lender applies its own policy and scoring.',
      'A credit score is a lender’s risk tool, not a universal rating shared identically by all lenders.',
      'Missed payments, defaults, county court judgments, insolvency and high utilisation can affect eligibility and pricing differently.',
      'Applicants should check accuracy and may add an explanatory notice, but accurate adverse data is not removed simply because it is inconvenient.',
      'Suitability considers the customer’s ability and willingness to accept payment, rate, term and property risks.',
      'Debt consolidation can lower immediate payments while increasing total cost and converting unsecured debt into debt secured on the home.',
      'A larger deposit may improve LTV but must not leave the customer without adequate resilience.'
    ],
    traps: ['Credit-reference agencies do not make the lending decision.','A lower monthly payment does not prove lower total cost.','Passing a lender score does not prove the recommendation is suitable.'],
    terms: [['Credit scoring','A lender’s statistical assessment of application risk.'],['Default','A serious failure to meet contractual payment obligations.'],['Debt consolidation','Replacing multiple debts with one new borrowing arrangement.']]
  },
  {
    unitKey: 'unit1', topicKey: 't13_14', title: 'Property Assessment, Valuations & Surveys', pages: 'p.105-120',
    intro: 'The lender assesses security value and condition, while the buyer decides what survey and specialist investigation are needed.',
    facts: [
      'A lender valuation estimates whether the property is adequate security; it is not commissioned as a comprehensive buyer report.',
      'A more detailed survey can identify defects, repair needs and matters requiring specialist investigation.',
      'Comparable evidence, location, condition, tenure, construction, demand and lease terms influence valuation.',
      'Retention withholds part of the advance until specified work is completed; a down-valuation can change the effective LTV and funding gap.',
      'Non-standard construction, subsidence, damp, invasive plants, contamination and flood risk can affect mortgageability and insurance.',
      'New-build incentives and limited comparable sales require careful treatment because headline price may not equal sustainable value.',
      'For leasehold property, term, service obligations and building management can materially affect security.'
    ],
    traps: ['A lender valuation gives the buyer limited protection.','Market value is an informed estimate, not a guaranteed future sale price.','A retention is not the same as declining the whole loan.'],
    terms: [['Mortgage valuation','A security-focused valuation commissioned for the lender.'],['Retention','Part of a mortgage advance withheld pending required work or evidence.'],['Down-valuation','A valuation below the agreed purchase price.']]
  },
  {
    unitKey: 'unit1', topicKey: 't15', title: 'Other Factors Affecting the Lending Decision', pages: 'p.121-134',
    intro: 'Final underwriting also considers insurance, occupancy, legal restrictions, environmental issues, fraud controls and transaction structure.',
    facts: [
      'Buildings insurance normally protects the mortgaged structure from required risks from the relevant point in the transaction.',
      'Title defects, planning breaches, access problems and onerous lease provisions may require correction, indemnity or rejection.',
      'Occupancy by adults who are not borrowers can create rights, so lenders may require consent or postponement documentation.',
      'Gifted deposits require evidence of source, terms and whether the donor expects ownership, repayment or occupation.',
      'Property use, letting, home business and multiple occupation can change mortgage and insurance requirements.',
      'Fraud and financial-crime controls require identity, source-of-funds and transaction checks.',
      'Environmental and location risks can affect value, insurability and future saleability.'
    ],
    traps: ['A gifted deposit is not treated as unexplained cash.','Buildings insurance and life assurance protect different risks.','Permission for residential occupation does not automatically permit every letting or business use.'],
    terms: [['Gifted deposit','Deposit money given by a third party, with its source and terms disclosed to lender and conveyancer.'],['Occupier consent','A document postponing certain occupier rights to the lender’s security.'],['Indemnity insurance','Insurance addressing specified legal-title risk rather than repairing a physical defect.']]
  },
  {
    unitKey: 'unit2', topicKey: 't2', title: 'Repayment Vehicles for Interest-Only Mortgages', pages: 'p.145-158',
    intro: 'An interest-only mortgage needs a credible capital repayment strategy that is monitored rather than assumed.',
    facts: [
      'Monthly mortgage payments cover interest but do not reduce capital; the full balance remains due at term end.',
      'A repayment strategy may use investments, pensions where appropriate, savings, sale of another asset or sale of the mortgaged property where acceptable.',
      'Investment-based strategies carry contribution, performance, charge, tax and timing risk.',
      'Endowment, ISA and pension-linked strategies have different tax and access features and must not be treated as guaranteed.',
      'Regular reviews compare projected proceeds with the outstanding mortgage and allow contributions or strategy to change.',
      'A shortfall must be addressed early through increased saving, partial capital repayment, term/risk changes or another suitable solution.',
      'Relying on future inheritance or uncertain growth is not a robust strategy merely because it is possible.'
    ],
    traps: ['Interest-only does not mean payment-free.','A repayment vehicle is not guaranteed unless its contract genuinely guarantees the required amount.','Pension access and tax treatment constrain pension-linked repayment.'],
    terms: [['Repayment vehicle','An arrangement intended to accumulate or release capital to repay an interest-only mortgage.'],['Projected shortfall','Expected repayment proceeds below the mortgage balance due.'],['Interest-only mortgage','A mortgage where scheduled payments do not normally reduce capital.']]
  },
  {
    unitKey: 'unit2', topicKey: 't3', title: 'Interest Rate Options', pages: 'p.159-168',
    intro: 'Rate choice allocates payment risk between borrower and lender and must be assessed with fees, reversion rate and flexibility.',
    facts: [
      'A fixed rate provides payment certainty for a period but may carry early-repayment charges and can become uncompetitive if market rates fall.',
      'A tracker moves by a stated relationship to an external reference rate; the payable rate can rise or fall.',
      'A discount applies a reduction to a lender-controlled variable rate, so the payment can change even if Bank Rate does not.',
      'A capped rate limits the payable rate for a period; a collar or floor can limit how far it falls.',
      'The reversion rate after an incentive period can materially change payments.',
      'Total cost includes arrangement fees, valuation/legal incentives, account fees and early-repayment terms, not only the initial rate.',
      'Suitable choice reflects budget resilience, plans to move or repay, desired certainty and attitude to rate risk.'
    ],
    traps: ['A discounted rate is not the same as a tracker.','Fixed means fixed for the stated period, not necessarily the whole mortgage term.','The lowest initial rate may have a higher total cost.'],
    terms: [['Tracker rate','A variable rate linked by a stated margin to an external reference rate.'],['Discount rate','A reduction from a lender’s variable rate for a specified period.'],['Capped rate','A variable rate subject to a maximum during the cap period.']]
  },
  {
    unitKey: 'unit2', topicKey: 't4_5', title: 'Mortgage Products and Schemes', pages: 'p.169-182',
    intro: 'Product features and support schemes solve different affordability or flexibility needs and create distinct risks.',
    facts: [
      'Flexible mortgages can permit overpayments, underpayments, payment holidays or borrowing back, subject to terms and affordability.',
      'Offset mortgages link savings to the mortgage balance for interest calculation while retaining the savings account structure.',
      'Current-account mortgages combine mortgage and transaction balances, requiring disciplined cash-flow management.',
      'Shared ownership combines purchase of a share with rent on the remainder and may include service charges and staircasing rules.',
      'Equity-loan or shared-equity structures introduce a second interest whose repayment may track property value or scheme terms.',
      'Guarantor and family-assist arrangements expose supporting parties or their savings/property to risk.',
      'Suitability depends on total cost, control, exit route, legal terms and what happens when circumstances change.'
    ],
    traps: ['Offset savings do not usually earn ordinary credit interest because their benefit is reduced mortgage interest.','Shared ownership still involves rent and often service charges.','Family support can put the supporter’s assets at risk.'],
    terms: [['Offset mortgage','A mortgage where linked savings reduce the balance used to calculate interest.'],['Shared ownership','Purchase of a property share with rent paid on the unowned share.'],['Staircasing','Buying additional shares in a shared-ownership property.']]
  },
  {
    unitKey: 'unit2', topicKey: 't6', title: 'Raising Additional Funds for Property', pages: 'p.183-196',
    intro: 'Additional funds can come from further advance, second charge, remortgage or other borrowing, each with different cost and security consequences.',
    facts: [
      'A further advance is additional borrowing from the existing first-charge lender under that lender’s terms.',
      'A second-charge mortgage leaves the first charge in place and ranks behind it for repayment from security proceeds.',
      'A remortgage replaces the existing first charge, potentially raising funds but also triggering fees or early-repayment charges.',
      'The comparison should include the cost of the whole refinanced balance, not only the new money.',
      'Purpose, affordability, LTV, term, age, credit profile and property value affect availability and suitability.',
      'Securing short-lived expenditure over a long mortgage term can greatly increase total cost.',
      'Debt consolidation increases the risk to the home and may re-extend debts unless spending causes are addressed.'
    ],
    traps: ['A lower rate on a remortgage does not guarantee a cheaper transaction after fees and ERCs.','Second charge means lower priority, not necessarily lower interest.','Compare total cost over the relevant period.'],
    terms: [['Further advance','Additional borrowing from the existing mortgage lender.'],['Second-charge mortgage','A secured loan ranking behind the first mortgage charge.'],['Remortgage','Replacing the existing mortgage with a new mortgage without moving home.']]
  },
  {
    unitKey: 'unit2', topicKey: 't7', title: 'Transferring Mortgages', pages: 'p.197-208',
    intro: 'Moving home, changing borrowers or switching property requires fresh assessment even where an existing product can be ported.',
    facts: [
      'Portability normally means the product terms may transfer; it does not guarantee approval of a new loan or property.',
      'The lender reassesses affordability, credit, LTV, term and the new security.',
      'Borrowing more can produce a separate product part with different rate and early-repayment terms.',
      'Borrowing less may trigger an early-repayment charge on the amount repaid.',
      'A transfer of equity changes ownership and possibly borrower liability, requiring lender consent and legal work.',
      'Adding or removing a borrower changes affordability, rights and responsibility for the whole mortgage.',
      'Bridging finance can address timing gaps but is short term, higher risk and dependent on a credible exit.'
    ],
    traps: ['Portable does not mean automatically transferable.','Removing an owner does not automatically release them from mortgage liability.','A bridge needs a clear and realistic exit route.'],
    terms: [['Porting','Applying to transfer an existing mortgage product to borrowing on another property.'],['Transfer of equity','A legal change to the ownership shares or names on a property.'],['Bridging finance','Short-term secured borrowing intended to be repaid from a defined exit event.']]
  },
  {
    unitKey: 'unit2', topicKey: 't8_9', title: 'Arrears and Lenders’ Legal Rights and Remedies', pages: 'p.209-223',
    intro: 'Arrears management should identify causes, engage the borrower and consider sustainable alternatives before possession.',
    facts: [
      'Early contact and an accurate income-and-expenditure assessment help distinguish temporary difficulty from an unsustainable mortgage.',
      'Options can include payment arrangement, term extension, temporary product change, capitalisation or assisted sale where suitable and permitted.',
      'Capitalising arrears adds them to the balance and can increase future payments and total interest.',
      'Interest-only or reduced-payment concessions can postpone rather than solve a structural affordability problem.',
      'Possession is a last resort after required process and consideration of alternatives.',
      'After sale, costs and secured debts are paid by priority; the borrower can remain liable for a shortfall.',
      'Customers should be directed to appropriate free debt support and treated fairly, particularly where vulnerability is present.'
    ],
    traps: ['Capitalising arrears does not erase them.','Giving up possession does not guarantee the debt is cleared.','A short-term arrangement should not conceal long-term unaffordability.'],
    terms: [['Mortgage arrears','Overdue contractual mortgage payments.'],['Capitalisation of arrears','Adding arrears to the mortgage balance and recalculating payments.'],['Mortgage shortfall','Debt remaining after security sale proceeds are insufficient.']]
  },
  {
    unitKey: 'unit1', topicKey: 't2', title: 'Case Study Practice', pages: 'p.237-258',
    intro: 'CeMAP 3 case studies test integrated mortgage advice: identify facts, calculate carefully, prioritise needs and select the most suitable answer rather than a merely possible one.',
    facts: [
      'Read the whole case before answering and separate stated facts from assumptions.',
      'Identify applicants, objectives, income, expenditure, debts, deposit, property, term, risk preferences and protection gaps.',
      'Calculate only from the figures and method supplied; label loan amount, LTV, fees and monthly costs clearly.',
      'Distinguish eligibility, affordability and suitability.',
      'Look for linked questions: a product choice may affect protection, repayment strategy, fees or future flexibility.',
      'Use tax, regulatory and benefit figures only when the case or verified syllabus provides them.',
      'Review every option and explain why the best answer fits the facts more closely than plausible alternatives.'
    ],
    traps: ['Do not import facts from one case study into another.','Do not choose a product solely because its initial payment is lowest.','Recheck whether a question asks for an amount, percentage, product or next action.'],
    terms: [['Case study','A set of linked questions based on one customer scenario.'],['Eligibility','Whether lender or product rules permit an application.'],['Integrated advice','Considering mortgage, repayment, protection, risk and customer circumstances together.']]
  }
]

function lesson(spec: Spec): Lesson {
  const module = spec.title === 'Case Study Practice' ? 'cemap3' : 'cemap2'
  return {
    id: `${module === 'cemap3' ? 'c3' : 'c2'}-${spec.unitKey}-${spec.topicKey}`, module,
    unitKey: spec.unitKey, topicKey: spec.topicKey, title: spec.title, intro: spec.intro,
    sections: [
      { heading: 'Core principles', bullets: spec.facts.slice(0, 4) },
      { heading: 'Application and suitability', bullets: spec.facts.slice(4) },
      { heading: 'Important definitions', bullets: spec.terms.map(([term, definition]) => `${term}: ${definition}`) }
    ],
    workedExample: { title: 'Apply the topic method', body: ['Identify the customer objective and relevant evidence.','Apply the topic principles without adding unstated assumptions.','Compare total cost, risk and flexibility where relevant.','Record why the selected answer is more suitable than the alternatives.'] },
    examTraps: spec.traps,
    remember: spec.facts.slice(0, 3),
    knowledgeCheck: [
      { question: `Which statement is central to ${spec.title}?`, options: [spec.facts[0], ...spec.traps], correctIndex: 0, explanation: spec.facts[0] },
      { question: 'What is the safest exam approach?', options: ['Assume missing facts','Use only stated facts and verified rules','Choose the lowest payment automatically','Ignore total cost'], correctIndex: 1, explanation: 'CeMAP scenarios require evidence-based suitability rather than assumptions or a single headline figure.' }
    ],
    source: `CeMAP 2-3, ${spec.pages}`, dateSensitive: true
  }
}

export const cemap2RemainingLessons = specs.map(lesson)

export const cemap2RemainingFlashcards: Flashcard[] = specs.flatMap(spec =>
  spec.terms.map(([term, definition], index) => ({
    id: `fc-${spec.unitKey}-${spec.topicKey}-${index + 1}`,
    module: spec.title === 'Case Study Practice' ? 'cemap3' as const : 'cemap2' as const,
    unitKey: spec.unitKey, topicKey: spec.topicKey, category: 'Definitions',
    front: `What is ${term}?`, back: definition, source: `CeMAP 2-3, ${spec.pages}`
  }))
)

export const cemap2RemainingGlossary: GlossaryTerm[] = specs.flatMap(spec =>
  spec.terms.map(([term, definition], index) => ({
    id: `gl-${spec.unitKey}-${spec.topicKey}-${index + 1}`, term, definition,
    module: [spec.title === 'Case Study Practice' ? 'cemap3' as const : 'cemap2' as const],
    relatedLessonIds: [`${spec.title === 'Case Study Practice' ? 'c3' : 'c2'}-${spec.unitKey}-${spec.topicKey}`]
  }))
)

export const cemap2RemainingQuestions: Question[] = specs.flatMap(spec => {
  const isCasePractice = spec.title === 'Case Study Practice'
  return spec.facts.map((fact, factIndex) =>
    ({
      id: `q-${spec.unitKey}-${spec.topicKey}-${factIndex + 1}`,
      module: isCasePractice ? 'cemap3' as const : 'cemap2' as const,
      unitKey: spec.unitKey, topicKey: spec.topicKey,
      text: `Which statement correctly applies to ${spec.title}?`,
      options: [fact, ...spec.traps], correctIndex: [0],
      explanation: fact,
      incorrectExplanations: ['Correct.', ...spec.traps.map(trap => `This is a caution or exam trap, not the correct principle: ${trap}`)],
      difficulty: factIndex > 3 ? 'advanced' as const : 'intermediate' as const,
      source: `CeMAP 2-3, ${spec.pages}`, origin: 'generated' as const,
      dateSensitive: true
    })
  )
})
