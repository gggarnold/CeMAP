import type { Lesson } from './types'
import { cemap1Unit2Lessons } from './cemap1Unit2Remaining'
import { cemap2RemainingLessons } from './cemap2Remaining'

// All lessons below are original revision text written from the concepts in the supplied
// PDFs — not copied passages. Each cites the source topic/page range it was derived from.
// Figures that change year-to-year (tax rates, allowances) are flagged dateSensitive: true.

const baseLessons: Lesson[] = [
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t1',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't1',
    title: 'The Role and Structure of Financial Markets',
    intro: 'Before you can understand regulation, you need the basic map of the financial system: what money is, the main asset classes, who the Bank of England is and what it does, and how banks actually make money moving cash from savers to borrowers.',
    sections: [
      {
        heading: 'What money is for',
        bullets: [
          'Money does two core jobs: it is a unit of account (a way of pricing things) and a medium of exchange (something people will accept in payment).',
          'To work as a medium of exchange, money must be acceptable to everyone, available in enough quantity, divisible into small units, and portable.',
          'Money also stores value over time — but inflation erodes that stored value, so cash is never truly "risk free" in real terms even though its face value never falls.'
        ]
      },
      {
        heading: 'The four main asset classes',
        bullets: [
          'Cash — liquid and accessible, nominal value can\u2019t fall, but purchasing power is eroded by inflation.',
          'Fixed interest securities (bonds) — loans to governments or companies, usually 5–30 years, paying a fixed coupon and returning the par value at redemption.',
          'Money market instruments — short-term (up to 12 months) wholesale loans such as commercial paper, certificates of deposit and Treasury bills.',
          'Equities (shares) — represent part-ownership of a company, never mature, and can pay dividends and/or grow in capital value.',
          'Property (residential and commercial) sits alongside these — returns come from rent plus potential capital growth, but it is illiquid.'
        ]
      },
      {
        heading: 'The Bank of England\u2019s roles',
        bullets: [
          'Banker to the banks and banker/adviser to the government.',
          'Sole issuer of banknotes in England and Wales.',
          'Sets the Bank of England Base Rate through its Monetary Policy Committee (MPC) — 9 members, meeting 8 times a year, targeting 2% CPI inflation.',
          'Lender of last resort — steps in to keep confidence in the banking system (e.g. Northern Rock, 2007).',
          'Since the Bank of England and Financial Services Act 2016, the Prudential Regulation Authority (PRA) sits inside the Bank of England.',
          'Manages the UK\u2019s foreign currency and gold reserves.'
        ]
      },
      {
        heading: 'How banks make money: intermediation',
        bullets: [
          'Banks aggregate lots of small deposits and turn them into fewer, larger loans — this is why a bank can lend £200,000 for a mortgage from thousands of small savings deposits.',
          'Maturity transformation: banks take short-term deposits (instant access savings) and lend long-term (25-year mortgages) — this is a core banking function and a core banking risk.',
          'Retail vs wholesale: banks borrow wholesale (from other institutions, often via the interbank market) and lend retail to customers at a margin.',
          'Secured lending (e.g. a mortgage) gives the lender rights over an asset if the borrower defaults; unsecured lending is riskier for the lender because there is no asset to fall back on.'
        ]
      },
      {
        heading: 'Financial crime basics',
        bullets: [
          'Fraud offences: Fraud Act 2006 and Theft Act 1968.',
          'Anti-money laundering: Proceeds of Crime Act 2002 is the main piece of legislation.',
          'Bribery and corruption: Bribery Act 2010 — the FCA acts against firms that pay or fail to prevent bribes.',
          'FATF (Financial Action Task Force), created in 1989, is the international body coordinating the fight against money laundering.'
        ]
      }
    ],
    workedExample: {
      title: 'Spotting maturity transformation in an exam question',
      body: [
        'If a question describes a bank taking many small, easy-access deposits and using them to fund a small number of large, long-term loans, that is maturity transformation — not just "aggregation" (aggregation is only about combining deposits, not about the mismatch in term length).'
      ]
    },
    examTraps: [
      'Don\u2019t confuse the PRA (prudential regulation — financial soundness) with the FCA (conduct regulation) — Topic 1 only needs you to know the PRA sits inside the Bank of England since 2016.',
      'The MPC sets the Bank Rate to hit the government\u2019s inflation target — it does not set fiscal policy (tax and spending), which is a government/Treasury responsibility.',
      'Cash is not "risk free" in real terms — its nominal value is protected, but inflation risk remains.'
    ],
    remember: [
      'Bank of England: issuer of notes, banker to banks and government, sets Bank Rate via the MPC, lender of last resort, houses the PRA.',
      '4 asset classes: cash, fixed interest securities, money market instruments, equities (plus property as a further asset class in practice).',
      'Maturity transformation = short-term deposits funding long-term loans.'
    ],
    knowledgeCheck: [
      {
        question: 'A bank takes thousands of instant-access savings deposits and uses them to fund 25-year mortgages. This is best described as:',
        options: ['Aggregation only', 'Maturity transformation', 'Disintermediation', 'Risk transformation'],
        correctIndex: 1,
        explanation: 'Turning short-term deposits into long-term lending is maturity transformation — the defining function (and risk) of banking.'
      },
      {
        question: 'Which body sits within the Bank of England following the Bank of England and Financial Services Act 2016?',
        options: ['The FCA', 'The PRA', 'The Financial Ombudsman Service', 'The Payment Systems Regulator'],
        correctIndex: 1,
        explanation: 'The Prudential Regulation Authority (PRA) was fully integrated into the Bank of England by this Act.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 1, p.7-20'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t2a',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't2a',
    title: 'The Role of Government',
    intro: 'The government manages the economy using fiscal policy (tax and spending) and, via the Bank of England, monetary policy (interest rates). You need to recognise which tool does what, and the key vocabulary examiners like to test.',
    sections: [
      {
        heading: 'The economic cycle and macroeconomic objectives',
        bullets: [
          'Economies move through four phases: recovery/expansion, boom, contraction/slowdown, recession.',
          'A recession is technically defined as GDP declining for two successive quarters.',
          'Government objectives: price stability (low inflation), low unemployment, balance of payments equilibrium, and satisfactory economic growth — note "100% employment" is NOT a realistic objective; a small amount of unemployment/job movement is considered healthy.'
        ]
      },
      {
        heading: 'Fiscal policy',
        bullets: [
          'Fiscal policy = government taxation and spending decisions.',
          'Three possible budget outcomes: balanced budget, budget surplus (tax revenue > spending), budget deficit (spending > tax revenue).',
          'A budget deficit creates the Public Sector Net Cash Requirement (PSNCR), funded by government borrowing (gilts, Treasury bills) rather than politically unpopular tax rises.',
          'Expansionary fiscal policy (cut taxes/raise spending) stimulates growth but risks inflation; contractionary fiscal policy (raise taxes/cut spending) cools an overheating, high-inflation economy.'
        ]
      },
      {
        heading: 'Monetary policy',
        bullets: [
          'Monetary policy = interest rate policy, set by the Bank of England\u2019s Monetary Policy Committee (MPC) to target 2% CPI inflation.',
          'If inflation is running more than 1% above or below target, the Bank\u2019s Governor must write an open letter to the Chancellor explaining why and what will be done.',
          'Raising the Bank Rate: makes borrowing dearer and saving more attractive, cools spending, reduces inflationary pressure. Cutting the Bank Rate does the opposite.',
          'Quantitative easing (QE) — the Bank effectively creates money to stimulate spending and investment when demand is weak; the trade-off is a risk of higher-than-planned inflation.'
        ]
      },
      {
        heading: 'Money supply, inflation & real returns',
        bullets: [
          'M0 ("narrow money") = notes and coins in circulation. M4 ("broad money") = bank/building society deposits plus money created through lending — rapid M4 growth is a classic inflation warning sign.',
          'Inflation = rising general prices / falling purchasing power. Disinflation = prices still rising but more slowly than before. Deflation = a general fall in prices.',
          'Real interest rate ≈ nominal interest rate minus inflation. This is a favourite calculation-style question.'
        ]
      },
      {
        heading: 'UK regulation: the four tiers, and EU law post-Brexit',
        bullets: [
          '1st tier: Acts of Parliament. 2nd tier: UK regulators (PRA and FCA). 3rd tier: individual firms\u2019 own compliance policies. 4th tier: ombudsman/arbitration rulings.',
          'EU Regulations are directly binding in their entirety on member states. EU Directives set the required outcome but leave each state to choose how to achieve it — a state cannot simply opt out of either without a specific dispensation.',
          'Passporting (automatic EU market access for UK firms) ended with Brexit. Equivalence can let firms access another market where regulatory standards are judged broadly similar — but it does not cover everything, notably deposit-taking and retail investment business.'
        ]
      }
    ],
    workedExample: {
      title: 'Real interest rate calculation',
      body: [
        'Nominal rate 5%, inflation 3% → approximate real rate = 5% − 3% = 2%.',
        'Exam variant: compare several nominal/inflation pairs and pick the highest real rate — just subtract each pair and compare.'
      ]
    },
    examTraps: [
      'A Directive is NOT binding in its entirety — only the outcome is fixed, the method is for each state to choose. A Regulation IS binding in its entirety. Mixing these two up is a classic wrong-answer trap.',
      '"100% employment" is a distractor answer — it is never a genuine macroeconomic objective.',
      'Don\u2019t mix up fiscal policy (interest rates are NOT part of fiscal policy — that\u2019s monetary policy) with monetary policy.'
    ],
    remember: [
      'Fiscal = tax & spend (government/Treasury). Monetary = interest rates (Bank of England MPC).',
      'Inflation target: 2%, measured by CPI. Letter to Chancellor required if more than 1% off target.',
      'Regulation binding in entirety; Directive binding as to outcome only.'
    ],
    knowledgeCheck: [
      {
        question: 'Prices rose 3% this month, having risen 4% last month. This is best described as:',
        options: ['Reflation', 'Deflation', 'Disinflation', 'Stagflation'],
        correctIndex: 2,
        explanation: 'Prices are still rising (not falling), just more slowly than before — that is disinflation, not deflation.'
      },
      {
        question: 'The European Union issues a new Directive. Each member state must:',
        options: [
          'Implement it in its entirety within a set timescale',
          'Choose whether or not to adopt it',
          'Achieve the required outcome, but can choose the method',
          'Only implement it if part of the Eurozone'
        ],
        correctIndex: 2,
        explanation: 'Directives bind states to an outcome, not a method — unlike Regulations, which are binding in their entirety.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 2 Part 1, p.21-29'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t2b',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't2b',
    title: 'Taxation',
    intro: 'CeMAP tests the principles of UK taxation, not the exact current-year rates and bands — those change every Budget. Focus on who pays what, on which type of income or gain, and the key exemptions and deadlines.',
    dateSensitive: true,
    sections: [
      {
        heading: 'Residence and the basics of income tax',
        bullets: [
          'A person present in the UK for 183 days or more in a tax year is automatically UK tax resident, and is then taxed on worldwide earned and unearned income.',
          'The tax year runs 6 April to 5 April. Double taxation treaties prevent UK residents being taxed twice on the same income/gains in two countries.',
          'Earned income = employment/self-employment/pension income. Unearned income = savings interest, dividends, rental and trust income.',
          'PAYE: employers deduct tax at source for employees. Self-assessment: the self-employed (and anyone with untaxed income) report and pay tax themselves.',
          'Income tax is charged in bands above the personal allowance: basic rate, then higher rate, then additional rate — an individual\u2019s income can span more than one band at once.'
        ]
      },
      {
        heading: 'National Insurance Contributions (NICs)',
        bullets: [
          'NI is an additional tax on employment/self-employment income only — not charged on investment or rental income.',
          'Class 1: paid by employees (above the primary threshold) and employers.',
          'Class 3: flat-rate voluntary contributions to fill gaps in an NI record (e.g. career break) to protect entitlement to benefits like the state pension.',
          'Class 4: additional NICs paid by the self-employed on annual profits, alongside income tax via self-assessment.',
          'Class 2 NICs (flat-rate, self-employed) were abolished from April 2024 — a good example of why CeMAP asks about principles, not fixed figures.'
        ]
      },
      {
        heading: 'Capital Gains Tax (CGT)',
        bullets: [
          'CGT applies to UK residents\u2019 gains on disposal of assets such as shares, most investments, and property other than the main home.',
          'Key exemptions: main residence (principal private residence relief), gilts and most corporate bonds, cars for normal use, chattels below a set value, life assurance gains for the original owner, ISAs/NS&I/Premium Bonds/lottery winnings, personal-use foreign currency.',
          'The annual exempt amount lets an individual realise gains up to a threshold each tax year tax-free.',
          'Losses must first be offset against gains in the same tax year; any unused loss carries forward (but not back).',
          'Allowable deductions from a gain: acquisition costs, enhancement (improvement) costs, disposal costs — but NOT routine repair/maintenance costs.',
          'CGT is normally due by 31 January after the tax year of disposal — except UK residential property gains, which must be reported and paid within 60 days of completion.',
          'No CGT is charged on death, but there is a deemed disposal at market value for the deceased\u2019s estate.'
        ]
      },
      {
        heading: 'Inheritance Tax (IHT) essentials',
        bullets: [
          'IHT is charged against the deceased\u2019s estate (not against individual beneficiaries directly).',
          'Gifts to a spouse/civil partner living together, and gifts to charity, are exempt.',
          'Lifetime gifts to individuals are usually Potentially Exempt Transfers (PETs) — exempt from IHT if the donor survives 7 years.',
          'The annual gift exemption can be carried forward one year only if unused — it is not cumulative beyond that.',
          'A Chargeable Lifetime Transfer (e.g. into most trusts) can trigger an immediate lifetime IHT charge if it exceeds the available nil rate band.',
          'Funeral expenses and outstanding debts are deducted from the estate before calculating IHT.'
        ]
      },
      {
        heading: 'Corporation tax, Stamp Duty and SDLT',
        bullets: [
          'Corporation tax is paid by limited companies on profits. Partnerships, LLPs and sole traders pay income tax instead.',
          'UK-resident companies pay corporation tax on worldwide profits; non-UK-resident companies pay only on UK business profits.',
          'Stamp Duty / Stamp Duty Reserve Tax (SDRT) applies to share transfers; SDRT is deducted automatically for electronic (CREST) transactions.',
          'Stamp Duty Land Tax (SDLT) is paid by the property buyer in England/Northern Ireland (Scotland and Wales use their own land transaction taxes). First-time buyers benefit from a higher SDLT-free threshold.'
        ]
      }
    ],
    workedExample: {
      title: 'Simple CGT calculation',
      body: [
        'Alan (higher-rate taxpayer) bought shares for £50,000 and sold them for £80,000 → gain of £30,000.',
        'He also sold other shares for £10,000 that cost £12,000 → a £2,000 loss.',
        'The loss is offset against the gain in the same tax year: £30,000 − £2,000 = £28,000 net gain, before the annual exempt amount is applied.'
      ]
    },
    examTraps: [
      'CGT exemptions are commonly tested with a "which of these is exempt" question — remember gilts, ISAs, main home, and ordinary vehicles are exempt; a second/holiday home and most shares are NOT.',
      'Repair and maintenance costs cannot be deducted for CGT — but improvement (enhancement) costs can. This distinction is a classic trap.',
      'Residential property CGT has a 60-day payment deadline, not the usual 31 January date — a frequently tested exception.'
    ],
    remember: [
      '183 days = automatic UK tax residence.',
      'CGT loss: offset in the same year first, then carry forward (never back).',
      'IHT is a charge on the estate; PETs become exempt after 7 years; annual exemption carries forward one year only.'
    ],
    knowledgeCheck: [
      {
        question: 'Which of the following is normally exempt from Capital Gains Tax on disposal?',
        options: ['A holiday home', 'Shares in a UK company', 'An individual\u2019s main residence', 'A valuable painting sold at a profit'],
        correctIndex: 2,
        explanation: 'Principal private residence relief exempts an individual\u2019s main home from CGT; the other options are all potentially chargeable.'
      },
      {
        question: 'A capital loss made on disposal of an asset must first be:',
        options: [
          'Carried back to the previous tax year',
          'Offset against gains made in the same tax year it occurred',
          'Ignored for CGT purposes',
          'Carried forward automatically without being used first'
        ],
        correctIndex: 1,
        explanation: 'A loss must be set against gains in the same tax year first; only any unused balance is carried forward to future years.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 2 Part 2, p.30-40. Rates/allowances change each Budget — verify current figures before your exam sitting.'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u2-t1',
    module: 'cemap2', unitKey: 'unit2', topicKey: 't1',
    title: 'Mortgage Repayment Methods',
    intro: 'There are only two mortgage repayment methods: capital (repayment) and interest-only. Understanding how each behaves over time — and how lenders calculate interest — is the foundation for the calculation-style questions in this topic.',
    sections: [
      {
        heading: 'Capital (repayment) mortgages',
        bullets: [
          'Also called capital & interest or repayment mortgages — each monthly payment includes both interest and capital.',
          'Early in the term, most of the payment is interest; this gradually shifts so that, later in the term, most of the payment is capital.',
          'If every payment is made, the loan is guaranteed to be repaid in full by the end of the term.',
          'Downside: no built-in life cover — borrowers typically add decreasing term assurance separately, since the outstanding debt reduces over time.'
        ]
      },
      {
        heading: 'Interest-only mortgages',
        bullets: [
          'The borrower pays only interest each month; none of the capital is repaid during the term.',
          'Capital must be repaid at the end of the term via a separate repayment vehicle (e.g. ISA, pension) or another credible strategy such as downsizing.',
          'Speculative repayment strategies — relying on house price inflation or a hoped-for inheritance — are not considered acceptable under current rules.',
          'Once the mortgage has started, the lender must contact the borrower at least once during the term to check the repayment strategy is still on track.',
          '"Pure" interest-only (no dedicated repayment vehicle at all) is only allowed in narrow circumstances, e.g. very low loan-to-value, or for a high-net-worth borrower, or on a business buy-to-let mortgage.'
        ]
      },
      {
        heading: 'Overpayments',
        bullets: [
          'Most lenders allow overpayments up to 10% of the outstanding balance per year without triggering an early repayment charge.',
          'On a capital repayment mortgage, an overpayment can shorten the term or reduce the monthly payment.',
          'On an interest-only mortgage, an overpayment reduces the capital debt (and therefore the monthly interest charged) but does not change the agreed term.'
        ]
      },
      {
        heading: 'How lenders calculate interest',
        bullets: [
          'Annual rest (least common): a full year\u2019s interest is calculated and debited up front. Doesn\u2019t reward early repayment or penalise late payment within the year.',
          'Monthly rest: interest debited monthly — borrowers benefit the following month from any capital repaid.',
          'Daily rest (most common today): interest is calculated daily — this is the most responsive to overpayments (benefits borrowers) but also the quickest to penalise a late payment. It is the least profitable method for the lender of the three.'
        ]
      },
      {
        heading: 'APRC (Annual Percentage Rate of Charge)',
        bullets: [
          'APRC replaced APR following the Mortgage Credit Directive.',
          'Included: total interest payable, arrangement/admin fees, valuation fees, related conveyancing fees, higher lending charges, linked insurance premiums.',
          'Excluded: early repayment charges, life assurance premiums, default charges.',
          'A second APRC must be shown for variable-rate regulated mortgages, illustrating the impact of a potential rate rise.'
        ]
      }
    ],
    workedExample: {
      title: 'Capital repaid in year one (annual rest)',
      body: [
        'Bob borrows £60,000 over 20 years at 5%, with a quoted rate of £7.30 per £1,000 borrowed.',
        'Step 1 — total annual payment: £7.30 × 60 = £438.00/month × 12 = £5,256.',
        'Step 2 — annual interest: £60,000 × 5% = £3,000.',
        'Step 3 — capital repaid = £5,256 − £3,000 = £2,256 in the first year.',
        'The higher the interest rate, the smaller the capital repaid in the early years — because more of the fixed monthly payment is absorbed by interest.'
      ]
    },
    examTraps: [
      'Don\u2019t reverse the early/late-term balance: EARLY payments are mostly interest; LATE payments are mostly capital — the opposite is a very common wrong-answer distractor.',
      'Life assurance premiums and early repayment charges are excluded from APRC — a frequently tested exclusion.',
      'A speculative repayment strategy (house price inflation, inheritance) is not acceptable evidence of a credible interest-only repayment plan.'
    ],
    remember: [
      'Only 2 repayment methods exist: capital (repayment) and interest-only.',
      'Daily rest = most common, most overpayment-friendly, least profitable to lender.',
      'APRC includes fees and charges linked to the mortgage; excludes ERCs and life cover premiums.'
    ],
    knowledgeCheck: [
      {
        question: 'Which interest calculation method is most common today and most responsive to overpayments?',
        options: ['Annual rest', 'Monthly rest', 'Daily rest', 'Fixed rest'],
        correctIndex: 2,
        explanation: 'Daily rest recalculates interest every day, so an overpayment reduces the balance — and the interest charged — immediately.'
      },
      {
        question: 'On a capital repayment mortgage, in the final years of the term, monthly payments are mostly made up of:',
        options: ['Interest', 'Capital', 'An even 50/50 split throughout', 'Arrangement fees'],
        correctIndex: 1,
        explanation: 'The interest/capital balance flips over the term — early payments are mostly interest, later payments are mostly capital.'
      }
    ],
    source: 'CeMAP 2&3, Unit 2 (MRT2) Topic 1, p.135-141'
  },
  // ---------------------------------------------------------------
  {
    id: 'c3-u1-t1',
    module: 'cemap3', unitKey: 'unit1', topicKey: 't1',
    title: 'Protection Needs & Financial Protection Products',
    intro: 'CeMAP 3 tests your ability to apply protection product knowledge to realistic client scenarios. Know the differences between the life assurance types and between critical illness cover and income protection — these distinctions drive most case-study questions.',
    sections: [
      {
        heading: 'Term assurance — the family',
        bullets: [
          'Decreasing term assurance (mortgage protection assurance): sum assured reduces over time to mirror a reducing repayment mortgage balance. The cheapest type of life cover.',
          'Level term assurance: sum assured and premiums both stay level throughout — suits an interest-only mortgage where the debt doesn\u2019t reduce. Costs slightly more than decreasing term.',
          'Convertible term assurance: level term with the option to convert to an endowment or whole-of-life plan later, without new medical evidence — the most expensive type of term assurance (around 10-15% more).',
          'All term assurance has no surrender value if the policyholder survives the term — it is pure protection, no investment element.'
        ]
      },
      {
        heading: 'Whole of life assurance',
        bullets: [
          'Pays out whenever death occurs — a guaranteed claim, unlike term assurance which can simply expire with no payout.',
          'Commonly used for family protection and to cover an expected inheritance tax bill on the estate.',
          'Generally too expensive to use as a mortgage repayment vehicle compared with a term policy.'
        ]
      },
      {
        heading: 'Critical illness cover (CIC)',
        bullets: [
          'Pays a tax-free lump sum on diagnosis of a specified serious illness — the illness need not be terminal.',
          'A survival period (commonly 14-28 days) must be survived following diagnosis before payment is made.',
          'ABI minimum-standard "core" conditions include heart attack, stroke and cancer (each subject to a minimum severity definition) — full policy wording still varies between insurers.',
          'Can be arranged level, decreasing or increasing, and stand-alone or combined with life cover — a combined ("first claim basis") policy typically ends life cover once a CIC claim is paid.',
          'The policy pays out only once — it cannot be claimed against again after payment.'
        ]
      },
      {
        heading: 'Income protection insurance (IPI)',
        bullets: [
          'Pays a long-term replacement income (typically 50-65% of pre-illness income) if the policyholder cannot work due to accident or sickness, potentially up to state retirement age.',
          'Requires a chosen deferred period (e.g. 4, 8, 13, 26 or 52 weeks) before payments start — the longer the deferred period, the cheaper the premium.',
          '"Own occupation" cover is more generous (pays if unable to do your specific job) than "any occupation" cover (pays only if unable to do any job you are suited to).',
          'The insurer cannot cancel a guaranteed-premium policy regardless of the number of claims made.'
        ]
      },
      {
        heading: 'Assignment vs deposit of a policy to a lender',
        bullets: [
          'Assignment: the policyholder signs a deed transferring legal ownership of the policy to the lender.',
          'Deposit: the policy document is simply lodged with the lender, giving them an equitable (not legal) right to the proceeds — a lighter-touch alternative to assignment.'
        ]
      }
    ],
    examTraps: [
      'Critical illness cover pays a lump sum on diagnosis; income protection pays a replacement income over time — case studies often test whether you\u2019ve matched the right product to the client\u2019s stated need (e.g. "wants ongoing income if unable to work" = income protection, not CIC).',
      'A pension plan cannot normally be used sensibly as a mortgage repayment vehicle by someone who is not yet close to retirement age or in the right tax position — watch for scenario questions probing this.',
      'Decreasing term assurance suits a repayment mortgage; level term suits interest-only — matching the wrong cover type to the wrong mortgage structure is a common distractor.'
    ],
    remember: [
      'Decreasing term = cheapest, matches a reducing (repayment) mortgage balance.',
      'CIC = lump sum on diagnosis of specified illness, one claim only. IPI = ongoing replacement income, deferred period applies.',
      'Assignment = legal ownership transferred to lender; deposit = equitable right only.'
    ],
    knowledgeCheck: [
      {
        question: 'A client wants an ongoing replacement income if they are unable to work long-term due to illness. Which product best fits this need?',
        options: ['Critical illness cover', 'Income protection insurance', 'Decreasing term assurance', 'Whole of life assurance'],
        correctIndex: 1,
        explanation: 'Income protection insurance is specifically designed to replace lost income over an extended period, unlike the one-off lump sum paid by CIC.'
      },
      {
        question: 'Which type of term assurance is generally the cheapest, and best suits a repayment mortgage?',
        options: ['Level term assurance', 'Convertible term assurance', 'Decreasing term assurance', 'Whole of life assurance'],
        correctIndex: 2,
        explanation: 'Decreasing term assurance\u2019s sum assured falls in line with a reducing repayment mortgage balance, and is the cheapest form of term cover.'
      }
    ],
    source: 'CeMAP 2&3, CeMAP 3 — Protection Issues, p.224-232'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t3',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't3',
    title: 'State Benefits',
    intro: 'State benefits interact with financial planning in two ways: they provide a safety-net floor, and means-testing can mean a "successful" financial plan actually reduces a client\u2019s entitlement. Know which benefits are means-tested, which are based on National Insurance contributions, and the key numbers examiners like to test.',
    sections: [
      {
        heading: 'Universal Credit',
        bullets: [
          'A means-tested benefit for working-age people on low/no income, replacing six "legacy" benefits for new claims: Income Support, income-based Jobseeker\u2019s Allowance, income-related Employment and Support Allowance, Working Tax Credit, Child Tax Credit, and Housing Benefit.',
          'Claimants must commit to looking for work (subject to circumstances) or face reduced/withdrawn benefit; carers, single parents of under-1s, and those with limited capability for work are not expected to.',
          'Support for Mortgage Interest (SMI) is available to Universal Credit/Pension Credit recipients — it\u2019s now a loan secured as a second charge on the property, repaid when the property is sold.'
        ]
      },
      {
        heading: 'Benefits outside Universal Credit',
        bullets: [
          'New style Jobseeker\u2019s Allowance (JSA): based on Class 1 NICs, paid at a fixed rate regardless of income/savings, taxable, paid for a maximum of 6 months.',
          'Statutory Maternity Pay (SMP): requires 26 weeks with the same employer (including the qualifying week, 15 weeks before the due date), paid by the employer, maximum 39 weeks, taxable.',
          'Maternity Allowance: for those who can\u2019t claim SMP (e.g. self-employed), maximum 39 weeks, paid by DWP, tax-free, lower rate than SMP.',
          'Child Benefit: tax-free, payable to age 16 (19 if in full-time non-advanced education), not based on NICs — but subject to a High Income Child Benefit tax charge if a partner\u2019s income exceeds a threshold (the benefit itself is still claimable regardless of the number of eligible children).',
          'Statutory Sick Pay (SSP): for employees off sick 4+ days, paid via payroll, taxable, maximum 28 weeks.',
          'New style Employment and Support Allowance (ESA): for those under state pension age unable to work through illness/disability, based on NICs, taxable, not means-tested.',
          'Attendance Allowance and Personal Independence Payment (PIP): both tax-free, not based on NICs, not means-tested — AA is for those at/over state pension age, PIP for disabilities starting between 16 and state pension age (can continue after).',
          'Carer\u2019s Allowance: for carers aged 16+ giving 35+ hours/week care to someone on qualifying benefits; not means-tested, not based on NICs, but is taxable.'
        ]
      },
      {
        heading: 'State Pension',
        bullets: [
          'The "new" state pension (for those reaching state pension age on/after 6 April 2016) is a single flat-rate benefit based purely on NIC record — no spousal-based element.',
          'Maximum benefit requires 35 qualifying years of NICs; fewer than 10 years gives no state pension at all.',
          'Carers are credited with NICs for time spent caring — this can still lead to a full pension despite career breaks.',
          'The "triple lock" increases the state pension each year by the highest of: average earnings growth, 2.5%, or CPI inflation.',
          'Pension Credit tops up pension income to a guaranteed minimum (Guarantee Credit); a Savings Credit element exists for those who reached state pension age before April 2016. Both are tax-free.'
        ]
      }
    ],
    examTraps: [
      'Child Benefit is NOT means-tested in terms of eligibility — high earners can still claim it, but face a tax charge that can cancel it out. Don\u2019t confuse "claimable" with "keeps all of it".',
      'New style JSA and new style ESA are both based on NICs and are taxable — but JSA has a hard 6-month cut-off, while ESA does not.',
      'Full-time non-advanced education (like A-levels) still counts for Child Benefit purposes up to a later age than just 16 — don\u2019t assume it stops at 16.'
    ],
    remember: [
      'Universal Credit replaced 6 legacy means-tested benefits: Income Support, income-based JSA, income-related ESA, Working Tax Credit, Child Tax Credit, Housing Benefit.',
      'New state pension: 35 years NICs for maximum, under 10 years = nothing, triple lock uprating.',
      'AA, PIP and Carer\u2019s Allowance are not means-tested and not based on NICs (though Carer\u2019s Allowance is taxable).'
    ],
    knowledgeCheck: [
      {
        question: 'Which of these benefits has NOT been replaced by Universal Credit?',
        options: ['Income Support', 'Income-based Jobseeker\u2019s Allowance', 'Working Tax Credit', 'Attendance Allowance'],
        correctIndex: 3,
        explanation: 'Attendance Allowance sits outside Universal Credit entirely — it\u2019s for those at/over state pension age needing care and isn\u2019t one of the six legacy benefits replaced.'
      },
      {
        question: 'How many qualifying years of NICs are needed for the maximum new state pension?',
        options: ['10 years', '25 years', '30 years', '35 years'],
        correctIndex: 3,
        explanation: 'The new state pension requires 35 qualifying years for the maximum amount, and fewer than 10 years gives no pension at all.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 3, p.41-49'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t4a',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't4a',
    title: 'Protection',
    intro: 'This topic covers meeting customer protection needs across the financial life cycle, insurable interest, the main life assurance structures, and the ill-health protection products (CIC, IPI, ASU) — a heavily tested area given how easily the product types get confused with each other.',
    sections: [
      {
        heading: 'The financial life cycle and hierarchy of needs',
        bullets: [
          'Needs shift by life stage: young adults prioritise short-term savings; young families need income protection for the main earner; established families balance protection, retirement funding and capital building; mature households focus on retirement and IHT planning; retirees convert capital into income.',
          'The hierarchy of financial needs (in order): living for today, protection, income protection, pension, savings, investment — there\u2019s little point addressing later needs if earlier ones aren\u2019t met.',
          'The Consumer Duty\u2019s three cross-cutting obligations: acting in good faith, avoiding foreseeable harm, and enabling/supporting customers to pursue their financial objectives — plus four outcomes: consumer understanding, products and services, customer service, and price and value.'
        ]
      },
      {
        heading: 'Insurable interest',
        bullets: [
          'Insurable interest means the applicant would suffer directly and financially from the insured event — a principle from the Life Assurance Act 1774.',
          'Individuals have unlimited insurable interest in their own life; spouses/civil partners have unlimited insurable interest in each other.',
          'There is NO insurable interest between parents and children (in either direction).',
          'A creditor has insurable interest in a debtor up to the debt value; an employer in an employee up to the value of their services; business partners in each other up to their buy-out value.'
        ]
      },
      {
        heading: 'Life cover structures and term assurance types',
        bullets: [
          'Life cover can be arranged single life own benefit, life of another, joint-life first death, or joint-life second death (used almost exclusively for IHT planning, since it pays only on the second death).',
          'Term assurance: cheapest life cover, no cash value, pays only on death within the term. Level term suits fixed debts (interest-only mortgages); decreasing term (mortgage protection) suits reducing debts (repayment mortgages) and is cheaper than level term as the insurer\u2019s risk falls over time.',
          'Family income benefit (FIB) is a form of decreasing term that pays a tax-free income (not a lump sum) from death until the end of the term.',
          'Whole of life assurance pays out whenever death occurs — guaranteed, not "if" but "when" — making it unsuitable for covering a fixed-term debt (too expensive relative to term assurance) but well suited to IHT and legacy planning.'
        ]
      },
      {
        heading: 'Ill-health protection products',
        bullets: [
          'Critical illness cover (CIC): tax-free lump sum on diagnosis of a specified serious illness (survival period applies for standalone plans); does not require inability to work; a standard policy pays out once only.',
          'Income protection insurance (IPI): replacement income (typically 50-65% of pre-disability income) until recovery, end of term, or death; cannot be cancelled by the insurer if premiums are paid; deferred periods from 4 to 104 weeks — the longer the deferred period, the lower the premium.',
          'Accident, Sickness and Unemployment insurance (ASU): similar to IPI but an annually renewable contract (can be cancelled by the insurer), benefit usually 60-65% of income, deferred period typically 30 days, benefits usually cease after 1-2 years.',
          'Mortgage payment protection insurance (MPPI) is a form of ASU limited to mortgage payments (plus limited related costs).'
        ]
      }
    ],
    examTraps: [
      'IPI cannot be cancelled by the insurer while premiums are paid, regardless of claims — ASU is an annually renewable contract that CAN be cancelled by the insurer. This distinction is frequently tested.',
      'There is no insurable interest between parents and children — a common wrong-answer trap assumes family relationships always create insurable interest.',
      'Joint-life second death policies are used almost exclusively for IHT planning — not general family protection, since nothing is paid on the first death.'
    ],
    remember: [
      'Hierarchy of needs: living today → protection → income protection → pension → savings → investment.',
      'Decreasing term = cheapest, matches reducing debt. Level term = fixed debt. Whole of life = guaranteed payout, used for IHT/legacy, not fixed-term debt.',
      'CIC = lump sum, one claim only. IPI = ongoing income, insurer can\u2019t cancel. ASU = ongoing income, insurer CAN cancel, shorter benefit period.'
    ],
    knowledgeCheck: [
      {
        question: 'Which of these arrangements does NOT represent a valid insurable interest?',
        options: [
          'A person taking a policy on the life of someone who owes them money',
          'A person taking a policy on their spouse\u2019s life',
          'A person taking a policy on their parent\u2019s life',
          'A business partner taking a policy on their co-partner\u2019s life'
        ],
        correctIndex: 2,
        explanation: 'There is no automatic insurable interest between parents and children — the other three examples all involve a recognised, quantifiable financial interest.'
      },
      {
        question: 'What is the key difference between income protection insurance and ASU (accident, sickness and unemployment) insurance?',
        options: [
          'ASU provides a lump sum, IPI provides an income',
          'IPI is annually renewable and can be cancelled by the insurer, ASU cannot',
          'ASU is annually renewable and can be cancelled by the insurer, IPI cannot',
          'There is no meaningful difference between the two'
        ],
        correctIndex: 2,
        explanation: 'IPI cannot be cancelled by the insurer as long as premiums are paid; ASU is an annually renewable contract that the insurer can choose not to renew or can cancel.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 4 Part 1, p.50-63'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t4b',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't4b',
    title: 'Savings & Investments',
    intro: 'This topic covers the main savings and investment vehicles clients use, how bond pricing and yields move with interest rates, and the collective investment structures (unit trusts, OEICs, investment trusts) — a common source of "which price is which" and "who can borrow/gear" style questions.',
    sections: [
      {
        heading: 'Deposits, gilts and bonds',
        bullets: [
          'Savings accounts: capital not at risk (beyond inflation erosion), interest paid gross but potentially taxable, up to £85,000 per person per institution protected by the FSCS.',
          'Structured deposits: return linked to an index (e.g. FTSE 100), fixed term (typically 3-5 years), initial capital normally guaranteed back — but with lower potential reward than direct equity investment.',
          'Gilts (UK government bonds) and corporate bonds pay a fixed coupon and return face value at redemption. Corporate bonds carry more default risk than gilts, so typically pay higher rates.',
          'Bond prices move inversely to prevailing interest rates: if market rates rise above a bond\u2019s coupon, its resale price falls (and vice versa) — because buyers can get a better rate elsewhere, so they\u2019ll only buy the bond at a discount.'
        ]
      },
      {
        heading: 'Shares (equities)',
        bullets: [
          'Shareholders have no liability for company debts beyond their investment, and receive the residual "equity" if the company winds up after debts are settled.',
          'Dividends aren\u2019t guaranteed. Share prices can be volatile short-term; shares are best seen as a longer-term holding.',
          'Diversification (spreading investment across companies/sectors/countries) reduces company-specific risk, but cannot protect against a general market-wide fall.',
          'Dividends are subject to income tax at dividend rates; gains on sale are subject to CGT.'
        ]
      },
      {
        heading: 'Collective investments: unit trusts, OEICs, investment trusts',
        bullets: [
          'Unit trusts: dual-priced — offer price (what you pay to buy) and bid price (what you get selling back), the gap being the "bid-offer spread". A cancellation price (below the bid price) is rarely used, mainly in falling markets. Open-ended: the manager creates/cancels units in response to demand and must buy back on request.',
          'OEICs: typically single-priced (buy and sell at the same price), with charges often taken separately as an initial charge; also open-ended.',
          'Investment trusts: NOT trusts — actually listed companies. Shares trade at a single price. Close-ended (fixed number of shares) and uniquely allowed to "gear" (borrow to invest), which amplifies both gains and losses. At least 85% of income must be passed to shareholders as dividends.',
          'All three (unit trusts, OEICs, investment trusts) have a 14-day cooling-off/cancellation period, and investors are potentially liable to CGT only when they actually sell and realise a gain.',
          'Collectives suit the average investor better than direct share investment because of: spread of risk, economies of scale on charges, and professional management.'
        ]
      },
      {
        heading: 'Tax wrappers: ISAs, VCTs and EIS',
        bullets: [
          'ISAs: tax-free growth/income, an annual subscription limit but no cap on total value held; cash ISAs, stocks & shares ISAs, Junior ISAs (under 18), Lifetime ISAs (age 18-40, for a first home or later life). Joint ISAs don\u2019t exist.',
          'Venture Capital Trusts (VCT): high-risk, invests in listed VCT companies which then fund start-ups; 30% income tax relief (clawed back if sold within 5 years); no CGT on encashment.',
          'Enterprise Investment Schemes (EIS): direct shares in smaller high-risk companies; 30% tax relief (clawed back if sold within 3 years); CGT exemption if held 3+ years.'
        ]
      }
    ],
    workedExample: {
      title: 'Bond price movement with changing rates',
      body: [
        'You hold a bond paying a fixed 3% coupon on £100 face value.',
        'Market interest rates rise to 5% — new buyers can get 5% elsewhere, so they will only buy your 3% bond at a discount to face value.',
        'Result: your bond\u2019s resale price falls below £100, even though the coupon itself never changes.'
      ]
    },
    examTraps: [
      'Investment trusts are companies, not trusts — and they\u2019re the only one of the three collective structures that can "gear" (borrow to invest).',
      'Unit trusts are dual-priced (offer/bid); OEICs are typically single-priced — mixing these up is a classic distractor.',
      'The offer price is what you PAY to buy units; the bid price is what the manager pays when you CASH IN — "get rid at the bid" is a useful memory aid.'
    ],
    remember: [
      'Bond prices fall when market rates rise above the coupon, and rise when market rates fall below the coupon.',
      'Unit trusts/OEICs are open-ended (units created/cancelled on demand); investment trusts are close-ended (fixed share count) and can gear.',
      'All three collectives: 14-day cooling-off period; CGT only arises on an actual, realised gain.'
    ],
    knowledgeCheck: [
      {
        question: 'A bond was issued with a 3% coupon. Market interest rates have since risen to 5%. What is the most likely effect on the bond\u2019s resale price?',
        options: ['No effect — the price stays at face value', 'The price will rise above face value', 'The price will fall below face value', 'The coupon rate will automatically increase to 5%'],
        correctIndex: 2,
        explanation: 'Since new buyers can get 5% elsewhere, they will only buy the 3% bond at a discount, so its market price falls below face value.'
      },
      {
        question: 'Which of the three main collective investment structures is able to "gear" (borrow to invest)?',
        options: ['Unit trusts', 'OEICs', 'Investment trusts', 'None of them'],
        correctIndex: 2,
        explanation: 'Investment trusts, being close-ended companies rather than open-ended funds, are uniquely able to borrow to enhance returns — though this also increases risk in a falling market.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 4 Part 2, p.64-75'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t4c',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't4c',
    title: 'Retirement & Borrowing',
    intro: 'This topic covers pension basics (contribution limits, auto-enrolment, defined benefit vs defined contribution), the two mortgage repayment methods and mortgage charge priority, and estate/tax planning tools like trusts and offshore accounts.',
    sections: [
      {
        heading: 'Pension contributions and types',
        bullets: [
          'Any UK resident under 75 can get tax relief on personal pension contributions. Total contributions eligible for relief are limited to the greater of £3,600 or earned income, subject to the annual allowance.',
          'A lifetime allowance caps total pension savings before extra tax charges apply on withdrawal.',
          'Up to 25% of pension funds can normally be taken as tax-free cash; the rest provides taxable income.',
          'Defined Contribution (DC): contributions fixed, final benefit depends on investment performance — risk sits with the employee. Defined Benefit (DB): pension is a guaranteed fraction of final/career-average salary — risk sits with the employer; now mainly found in the public sector.',
          'Auto-enrolment: applies to employees aged 22+ earning over £10,000 (not sole traders without staff); minimum 8% total contribution split 4% employee / 3% employer / 1% government tax relief; employees can opt out only after being enrolled.'
        ]
      },
      {
        heading: 'Borrowing and mortgage charge priority',
        bullets: [
          'Secured loans give the lender rights over an asset (usually property) via a legal charge; unsecured loans rely purely on the borrower\u2019s promise to repay and carry higher rates as a result.',
          'Multiple mortgages can exist on one property, ranked by registration date at the Land Registry: the first-registered charge has first claim on any repossession proceeds, with surplus passed down to subsequent charges in order, and any final surplus to the borrower.',
          'Repayment mortgages are lower risk (guaranteed to clear by end of term if all payments made); interest-only mortgages are higher risk (rely on a separate investment or eventual sale to clear the capital) — a "pure" interest-only mortgage has no dedicated repayment vehicle at all.',
          'Bridging finance is short-term lending to fund a new purchase before an existing property sells.',
          'Secured lending is regulated under MCOB (Mortgages and Home Finance: Conduct of Business Sourcebook); unsecured lending under CONC (Consumer Credit sourcebook).'
        ]
      },
      {
        heading: 'Estate and tax planning tools',
        bullets: [
          'Estate planning aims to pass wealth to intended beneficiaries efficiently and minimise IHT — using exemptions, potentially exempt gifts, and trusts (which "ring fence" assets outside the settlor\u2019s estate).',
          'Where IHT can\u2019t be avoided, a whole-of-life policy (often written in trust, and on a joint-life second-death basis for couples) can fund the tax bill without itself adding to the taxable estate.',
          'Offshore accounts are savings/investments based in lower-tax jurisdictions (e.g. Channel Islands, Luxembourg, Cayman Islands) — relevant tax treatment can depend on whether someone is emigrating or immigrating relative to the UK.'
        ]
      }
    ],
    examTraps: [
      'Auto-enrolment\u2019s 8% split is 4% employee / 3% employer / 1% government — question-writers love swapping these percentages around as distractors.',
      'On a repossession with multiple charges, the surplus flows in order of registration priority, not order of who claims first — the first-charge lender is repaid in full before any surplus passes down the chain.',
      'Defined Benefit schemes now dominate in the PUBLIC sector; Defined Contribution now dominates in the PRIVATE sector — this is commonly tested in reverse.'
    ],
    remember: [
      'Personal pension tax relief limit: greater of £3,600 or earned income, subject to the annual allowance.',
      'Auto-enrolment threshold: age 22+, earning over £10,000; minimum 8% total (4% employee / 3% employer / 1% government).',
      'Mortgage charge priority follows Land Registry registration order, not claim order.'
    ],
    knowledgeCheck: [
      {
        question: 'Under automatic enrolment, what is the typical minimum total contribution split?',
        options: [
          '4% employee, 3% employer, 1% government tax relief',
          '3% employee, 4% employer, 1% government tax relief',
          '4% employee, 4% employer, no government contribution',
          '2% employee, 2% employer, 4% government tax relief'
        ],
        correctIndex: 0,
        explanation: 'The standard minimum 8% total contribution splits as 4% from the employee, 3% from the employer, and 1% government tax relief.'
      },
      {
        question: 'A property has a first and second mortgage charge. On repossession and sale, how is any surplus distributed?',
        options: [
          'Split equally between both lenders',
          'The first-charge lender is repaid in full first, with any surplus passed to the second-charge lender',
          'The second-charge lender is repaid first',
          'The surplus goes straight to the borrower regardless of charge order'
        ],
        correctIndex: 1,
        explanation: 'Charge priority follows Land Registry registration order — the first-registered charge is repaid in full before any surplus passes to subsequent charge-holders, with any final surplus going to the borrower.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 4 Part 3, p.75-86'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t5',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't5',
    title: 'Legal Principles',
    intro: 'This topic covers legal persons (companies, partnerships, LLPs, trustees), powers of attorney, the law of contract (including the Consumer Insurance Act\u2019s "reasonable care" test), the law of agency, joint property ownership, and bankruptcy/insolvency — all frequently tested through short scenario questions.',
    sections: [
      {
        heading: 'Legal persons and liability',
        bullets: [
          'Limited companies are separate legal entities — shareholders aren\u2019t personally liable for company debts. PLCs can list shares publicly; private "Ltd" companies can\u2019t.',
          'Sole traders are NOT separate legal persons — personally liable for all business debts.',
          'Partnerships are not separate legal entities; partners are "jointly and severally liable" — one partner can be pursued for all the firm\u2019s debts if others can\u2019t/won\u2019t pay.',
          'An LLP limits each partner\u2019s liability to their investment, must register with Companies House, needs at least 2 designated partners, and its partners are taxed as self-employed (income tax, not corporation tax).'
        ]
      },
      {
        heading: 'Powers of Attorney',
        bullets: [
          'An Ordinary Power of Attorney lets the attorney act while the donor still has mental capacity — it automatically ends if the donor loses capacity, dies, becomes bankrupt, or a time limit expires.',
          'A Lasting Power of Attorney (LPA) only comes into force once the donor loses capacity, and remains valid (unlike an ordinary PoA). LPAs must be registered with the Office of the Public Guardian and can cover finance/property AND health/personal welfare (an old-style Enduring PoA only covered finance/property).',
          'Without a valid LPA in place, a Court of Protection application (to appoint a deputy) is needed if someone loses capacity — slower and more costly.',
          'An LPA can be revoked by the donor at any time while they have capacity.'
        ]
      },
      {
        heading: 'Contract law and the Consumer Insurance Act',
        bullets: [
          'A valid contract needs: capacity (18+ and sound mind, or 16 in Scotland with extra protection), offer and acceptance, consideration, intent to create legal relations, and legality.',
          'The Consumer Insurance (Disclosure and Representations) Act 2012 replaced pure "utmost good faith" with a duty on the customer to take reasonable care in answering the insurer\u2019s questions truthfully — not to volunteer everything unprompted.',
          'If a misrepresentation was honest and reasonable (i.e. reasonable care was taken), the insurer cannot refuse the claim.',
          'If careless (not reckless) and the insurer would have declined cover entirely had the truth been known: claim can be rejected, but premiums must be refunded.',
          'If careless and the insurer would still have covered them (at a higher premium/lower benefit): claim is paid, but proportionately reduced.',
          'If reckless: the insurer can reject the claim and keep the premiums.'
        ]
      },
      {
        heading: 'Law of agency',
        bullets: [
          'An agent acts on behalf of a principal; in law, the agent\u2019s authorised actions are treated as the principal\u2019s own.',
          '"Actual authority" is the power genuinely granted. "Apparent authority" is where the principal\u2019s conduct would lead a reasonable person to believe authority was granted, even if it wasn\u2019t explicitly.',
          '"Ratification" is where the principal accepts/approves an agent\u2019s action that exceeded their actual authority.',
          'Tied advisers act as agents of the product provider; independent financial advisers act as agents of the customer.'
        ]
      },
      {
        heading: 'Joint property ownership',
        bullets: [
          'Joint tenancy: no defined individual share; on death, the deceased\u2019s share passes automatically to survivor(s) by survivorship — a will cannot override this.',
          'Tenancy in common: each owner has a defined (not necessarily equal) beneficial share, which passes via their will/intestacy on death — but legal title is still registered as a joint tenancy, with a Land Registry restriction preventing sale by a sole surviving legal owner until a new trustee is appointed.',
          'Up to 4 people can be registered as legal owners of a property.'
        ]
      },
      {
        heading: 'Insolvency and bankruptcy',
        bullets: [
          'Bankruptcy currently lasts 1 year (reduced from 3 by the Enterprise Act 2002) in both England/Wales and Scotland.',
          'An individual can petition for their own bankruptcy for any debt amount; a creditor needs at least £5,000 owed to petition.',
          'An undischarged bankrupt can only borrow nominal amounts and must disclose bankruptcy on future credit/mortgage applications even after discharge.',
          'An Individual Voluntary Arrangement (IVA) needs agreement from creditors holding 75% of the debt, and credit remains impaired even after it ends.',
          'A Debt Relief Order (DRO) suits those with minimal disposable income/assets — debts are written off after 12 months if terms are met.'
        ]
      }
    ],
    examTraps: [
      'An Ordinary Power of Attorney ENDS if the donor loses mental capacity; a Lasting Power of Attorney is specifically designed to continue (indeed, only take effect) after loss of capacity — this is the exact opposite of what many candidates assume.',
      'Joint tenancy: legal owners cannot leave their share via a will — it always passes by survivorship. Only tenancy in common allows a share to be left by will.',
      'Careless vs reckless misrepresentation under the Consumer Insurance Act lead to very different outcomes (proportionate payment/refund of premium vs straight refusal) — read scenario questions carefully for which one applies.'
    ],
    remember: [
      'Sole trader/partnership = no separate legal personality, personal liability. Limited company/LLP = separate legal personality, limited liability.',
      'Ordinary PoA ends on loss of capacity; Lasting PoA is designed to continue (and only takes effect on loss of capacity).',
      'Bankruptcy lasts 1 year; creditor petition threshold is £5,000; IVA needs 75% creditor agreement by value.'
    ],
    knowledgeCheck: [
      {
        question: 'What is the key difference between an Ordinary Power of Attorney and a Lasting Power of Attorney?',
        options: [
          'An LPA can be revoked at any time; an ordinary PoA cannot',
          'An ordinary PoA becomes invalid if the donor loses mental capacity, whereas a Lasting PoA remains effective',
          'A Lasting PoA can be agreed verbally; an ordinary PoA must be registered',
          'An ordinary PoA remains valid after loss of capacity, whereas a Lasting PoA does not'
        ],
        correctIndex: 1,
        explanation: 'An ordinary Power of Attorney automatically ends if the donor loses mental capacity; a Lasting Power of Attorney is specifically designed to take effect and continue once that happens.'
      },
      {
        question: 'Walter and Winnie own their house as joint tenants. If Walter dies, what happens to his share?',
        options: [
          'It passes automatically to Winnie by survivorship',
          'It passes according to Walter\u2019s will',
          'Winnie must buy Walter\u2019s share from his estate',
          'It is split between Winnie and Walter\u2019s named beneficiaries'
        ],
        correctIndex: 0,
        explanation: 'Under a joint tenancy, there is no individual share to leave by will — ownership automatically passes to the surviving joint tenant(s).'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 5, p.87-100'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t6',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't6',
    title: 'Wills, Intestacy & Trusts',
    intro: 'This topic covers how to make a valid will, what happens under the intestacy rules when there isn\u2019t one, deeds of variation, and the main trust types — an area full of specific numeric rules (statutory legacy, 28-day survivorship, 2-year variation window) that examiners test directly.',
    sections: [
      {
        heading: 'Making a valid will',
        bullets: [
          'Must be 18+ in England (16 in Scotland) to make a will. Must be in writing/typed, signed by the testator, and witnessed by 2 people aged 18+ with capacity — the testator must also witness the witnesses signing.',
          'A will does NOT legally need to be dated, though undated wills can cause problems establishing which of multiple wills is the latest.',
          'A witness (or their spouse/civil partner) who is also a beneficiary forfeits their inheritance — the will itself stays valid, just that person\u2019s gift is void.',
          'Marriage automatically revokes an earlier will UNLESS it was made in contemplation of that marriage. Divorce does NOT revoke a will, but the ex-spouse is automatically treated as having predeceased the testator for inheritance purposes (unless the will says otherwise).'
        ]
      },
      {
        heading: 'Intestacy rules (dying without a valid will)',
        bullets: [
          'Spouse, no children: spouse receives the entire estate absolutely.',
          'Spouse and children: spouse receives personal chattels + a statutory legacy (a fixed first amount) absolutely, plus half of anything above that; the other half above the statutory legacy goes to the children.',
          'Children, no spouse: shared equally among the children.',
          'Neither spouse nor children: to parents, or siblings (including half-siblings) if parents are dead; ultimately to the Crown if no blood relative can be found.',
          'A surviving spouse must survive the deceased by 28 days to inherit under intestacy.',
          'Children can only inherit absolutely from age 18 — until then, assets are held in trust for them. Stepchildren/foster children have no automatic intestacy rights.'
        ]
      },
      {
        heading: 'Wills, deeds of variation and disclaimers',
        bullets: [
          'Mirror wills: near-identical wills, typically leaving everything to each other, then to other beneficiaries. Can be freely changed by the survivor.',
          'Mutual wills: similar terms PLUS a binding agreement that the survivor cannot change their will after taking a benefit under the first death — this locks in the arrangement (e.g. prevents a surviving spouse who remarries from redirecting the estate).',
          'A Deed of Variation lets beneficiaries redirect their inheritance (often for tax reasons), within 2 years of death. Only beneficiaries who are adversely affected (losing out) need to agree — those unaffected have no say.',
          'A beneficiary can also simply reject a gift via a written disclaimer, sending it back into the estate for redistribution.'
        ]
      },
      {
        heading: 'Trusts',
        bullets: [
          'Parties: settlor (creates the trust, sets terms), trustees (legal owners, manage per the trust deed), beneficiaries (who benefit).',
          'Once gifted into trust (with no reservation of benefit), assets fall outside the settlor\u2019s estate for IHT after 7 years survival, and future growth is immediately outside the estate.',
          'Bare (absolute) trust: beneficiary absolutely entitled, can demand assets at 18. Gifts are PETs (exempt after 7 years).',
          'Interest in possession (IIP) trust: a "life tenant" gets income/use for life or until a contingency; "remaindermen" benefit after. Setting one up in lifetime is a Chargeable Lifetime Transfer (20% charge on any excess over the nil rate band, payable immediately).',
          'Immediate post-death interest trust: functions like an IIP trust but is created by will — since the gift happens on death (not lifetime), it\u2019s taxed as a normal legacy, NOT as a chargeable lifetime transfer.',
          'Discretionary trust: trustees choose which named/category beneficiaries benefit and by how much — useful when no single beneficiary is decided on. Also a chargeable lifetime transfer (20% on the excess over the nil rate band).',
          'Married Women\u2019s Property Act 1882 trust: automatically created when someone takes out a life policy for the specific benefit of a spouse/civil partner/children — keeps proceeds outside the policyholder\u2019s estate and away from creditors, despite the name it can apply to anyone.'
        ]
      }
    ],
    workedExample: {
      title: 'Intestacy: spouse and children',
      body: [
        'A man dies intestate leaving a wife and children, with an estate of £522,000 (statutory legacy assumed £322,000 for this example).',
        'Wife receives: £322,000 (statutory legacy) + half of the remaining £200,000 = £322,000 + £100,000 = £422,000.',
        'Children share the other half of the excess: £100,000 between them.'
      ]
    },
    examTraps: [
      'A Chargeable Lifetime Transfer 20% charge applies to LIFETIME gifts into most trusts (IIP, discretionary) — but a gift into an "immediate post-death interest" trust made VIA A WILL is taxed as a normal legacy, not as a CLT. This distinction (lifetime vs on-death creation) is a common trap.',
      'Divorce does NOT revoke a will — it only removes the ex-spouse as a beneficiary by default. Many candidates wrongly assume divorce cancels the whole will, like marriage does.',
      'A Deed of Variation only needs agreement from beneficiaries who LOSE OUT — unaffected beneficiaries have no veto, even if they disagree in principle.'
    ],
    remember: [
      'Witness who is also a beneficiary (or their spouse) loses their gift, but the will stays valid.',
      'Surviving spouse must survive 28 days to inherit under intestacy.',
      'Deed of Variation: within 2 years of death, only adversely-affected beneficiaries need to agree.',
      'Mutual wills = binding on survivor after first death; mirror wills = not binding, can be changed freely.'
    ],
    knowledgeCheck: [
      {
        question: 'John made a will and then divorced Katrina. What happens to the will?',
        options: [
          'The will is automatically revoked, as with marriage',
          'The will remains valid, but Katrina is treated as having predeceased John unless the will says otherwise',
          'The will remains valid with no changes at all',
          'The will becomes invalid only if Katrina remarries'
        ],
        correctIndex: 1,
        explanation: 'Unlike marriage, divorce does not revoke a will — but the ex-spouse is automatically excluded from benefiting unless the will explicitly provides otherwise.'
      },
      {
        question: 'A gift is made during the settlor\u2019s lifetime into a discretionary trust, exceeding the available nil rate band. What is the immediate IHT position?',
        options: [
          'No tax is due unless the settlor dies within 7 years',
          'A 20% charge is due immediately on the excess over the nil rate band',
          'A 40% charge is due immediately on the whole gift',
          'Tax is only due if the trust is later wound up'
        ],
        correctIndex: 1,
        explanation: 'A lifetime gift into a discretionary trust is a Chargeable Lifetime Transfer, triggering an immediate 20% charge on any amount above the nil rate band.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 6, p.101-114'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t7',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't7',
    title: 'Development of UK Regulation',
    intro: 'This topic covers why financial services are regulated, the historical journey from self-regulation to the current "twin peaks" model, and the wider regulatory landscape beyond the PRA/FCA (CMA, Pensions Regulator, Information Commissioner) — mostly tested through dates, bodies, and "which regulator does what" questions.',
    sections: [
      {
        heading: 'Why regulate, and the road to today',
        bullets: [
          'Three core objectives of regulation: sustain systemic stability, protect consumers (who suffer from "asymmetric information" versus well-informed firms), and maintain the safety/soundness of institutions.',
          'Financial Services Act 1986: introduced an element of self-regulation, which proved too fragmented by the mid-1990s.',
          'Financial Services and Markets Act 2000 (FSMA): created the single-regulator Financial Services Authority (FSA). Regulatory timeline: banking regulated by FSA from June 1998; most of financial services from December 2001 (when FSMA became law); mortgages from October 2004; insurance from January 2005.',
          'The pre-2013 "tripartite system" (Bank of England, FSA, Treasury) was heavily criticised after the 2007-08 crisis (notably Northern Rock) for unclear accountability.',
          'Financial Services Act 2012: introduced the current "twin peaks" model from April 2013 — the PRA (part of the Bank of England, prudential regulation of significant firms) and the FCA (conduct regulation of all firms).',
          'Bank of England and Financial Services Act 2016: moved the PRA fully inside the Bank of England (under the new Prudential Regulation Committee) and extended the Senior Managers and Certification Regime to all financial services sectors.'
        ]
      },
      {
        heading: 'Post-Brexit regulatory framework',
        bullets: [
          'European Union (Withdrawal) Act 2018: retained EU law in the UK as it stood pre-Brexit, with powers to correct "deficiencies"; major changes still need Parliament\u2019s consent.',
          'Financial Services and Markets Act 2023: established the Future Regulatory Framework Review, repealing/replacing various retained EU rules with UK-specific ones, and gave the FCA/PRA a secondary objective to facilitate international competitiveness and growth of the UK economy.'
        ]
      },
      {
        heading: 'Other regulatory and oversight bodies',
        bullets: [
          'Competition and Markets Authority (CMA): promotes competition, investigates mergers and anti-competitive behaviour, protects consumers from unfair trading — separate from FCA/PRA.',
          'The Pensions Regulator: oversees work-based pension schemes (security, value for money, good governance) — but is NOT responsible for underperformance or mis-selling of pensions. Occupational pension complaints go first to the scheme trustees under the Internal Dispute Resolution Procedure (IDRP — 4 months for a formal response), then to the Pensions Ombudsman if unresolved.',
          'Information Commissioner\u2019s Office: enforces the Data Protection Act 2018 and Freedom of Information Act 2000 — failing to notify the Commissioner about holding personal data, or ignoring an enforcement notice, is a criminal offence.',
          'Oversight roles: external auditors (independent review of published accounts), internal auditors (review risk management/controls from within), trustees (ensure trust property is managed per the trust deed), and compliance officers (ensure ongoing regulatory compliance within a firm).'
        ]
      }
    ],
    examTraps: [
      'The regulatory timeline dates are frequently tested directly: banking (1998) → most financial services (Dec 2001, FSMA) → mortgages (Oct 2004) → insurance (Jan 2005) → twin peaks (April 2013).',
      'The Pensions Regulator does NOT handle mis-selling or underperformance complaints — that distinction is a common trap. Pension complaints about scheme administration go to trustees (IDRP) first, then the Pensions Ombudsman.',
      'External auditors review published accounts; internal auditors review internal risk/controls — these two roles are easy to mix up in scenario questions.'
    ],
    remember: [
      'Regulatory timeline: banking 1998, most services Dec 2001 (FSMA), mortgages Oct 2004, insurance Jan 2005, twin peaks April 2013.',
      'Twin peaks: PRA (prudential, inside Bank of England) + FCA (conduct, all firms).',
      'Occupational pension complaint route: scheme trustees (IDRP, 4 months) → Pensions Ombudsman.'
    ],
    knowledgeCheck: [
      {
        question: 'Which piece of legislation led to the creation of the PRA and FCA under the "twin peaks" model?',
        options: ['Financial Services Act 1986', 'Financial Services and Markets Act 2000', 'Financial Services Act 2012', 'Bank of England and Financial Services Act 2016'],
        correctIndex: 2,
        explanation: 'The Financial Services Act 2012 introduced the twin peaks model (PRA and FCA), which took effect from April 2013.'
      },
      {
        question: 'A member of an occupational pension scheme has a complaint about how the scheme is being administered. Where should this be raised first?',
        options: ['The Pensions Ombudsman', 'The Pensions Regulator', 'The scheme trustees, under the Internal Dispute Resolution Procedure', 'The FCA'],
        correctIndex: 2,
        explanation: 'Occupational pension complaints must go to the scheme trustees first via the IDRP, with the Pensions Ombudsman only available once that process is exhausted.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 7, p.115-126'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t8a',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't8a',
    title: 'PRA & FCA Approach to Regulation (Part 1)',
    intro: 'This topic goes deeper into how the PRA and FCA actually supervise firms day-to-day: their statutory objectives, supervision categories, the FCA\u2019s 3-pillar model, enforcement powers, and the structure of the FCA Handbook.',
    sections: [
      {
        heading: 'PRA and FCA objectives',
        bullets: [
          'PRA\u2019s 4 statutory objectives: promote safety and soundness of firms; protect insurance policyholders appropriately; facilitate effective competition; facilitate UK international competitiveness.',
          'FCA\u2019s single strategic objective: ensure relevant markets function well — supported by 3 operational objectives: protect consumers, protect market integrity, promote effective competition in consumers\u2019 interests.',
          'Prudential regulation (PRA) = financial soundness/stability. Conduct regulation (FCA) = how firms market to and treat customers.'
        ]
      },
      {
        heading: 'Supervision categories and the FCA\u2019s 3 pillars',
        bullets: [
          'Fixed portfolio firms: large banking/insurance groups with huge retail customer numbers — highest supervision level, continuous assessment, a named supervisor.',
          'Flexible portfolio firms: smaller firms/most intermediaries — supervised by a general FCA team rather than a dedicated one.',
          'The FCA\u2019s 3-pillar supervision model: Pillar 1 Proactive (pre-emptive review to spot harm early), Pillar 2 Reactive (dealing with emerging/actual issues), Pillar 3 Thematic (wider diagnostic work where harm is a common theme across several firms).',
          'For firms it regulates prudentially, the FCA categorises by risk: P1 "prudentially critical" (most intense supervision), P2 "prudentially significant", P3 "prudentially non-significant".'
        ]
      },
      {
        heading: 'FCA enforcement powers',
        bullets: [
          'Varying a firm\u2019s permissions (removing a specific permission), withdrawal of an approved person\u2019s status, criminal prosecution, and disciplinary action (private warning, statement of misconduct, financial penalty) can all be done WITHOUT going to court.',
          'Seeking an injunction, restitution (forcing forfeiture of ill-gotten profit to the FCA), or redress (forcing return of gains to affected clients) all require a court application.',
          'The FCA can ban misleading financial promotions immediately, without a full enforcement process (firms retain a right of appeal).'
        ]
      },
      {
        heading: 'The FCA Handbook structure',
        bullets: [
          '"Rules" create binding obligations; "guidance" merely explains rules and isn\u2019t itself binding — but following guidance is presumed to mean the underlying rule was followed.',
          'High Level Standards: threshold conditions, Statements of Principle/Fit & Proper Test, Principles for Businesses, systems & controls, training & competence.',
          'Prudential Standards: financial soundness of solely FCA-regulated firms.',
          'Business Standards: the Conduct of Business Sourcebooks — MCOB (mortgages), ICOB (insurance), BCOB (banking) — plus the Market Conduct Sourcebook (investment markets, insider dealing).'
        ]
      }
    ],
    examTraps: [
      'Restitution and redress both need a COURT order; varying permissions, withdrawing approval, and disciplinary action do NOT — this "needs court vs doesn\u2019t" distinction is directly tested.',
      'The FCA\u2019s single STRATEGIC objective (markets function well) is often confused with its three OPERATIONAL objectives (protect consumers, protect integrity, promote competition) — know there\u2019s exactly one strategic objective.',
      'MCOB = mortgages, ICOB = insurance, BCOB = banking — mixing these sourcebook abbreviations up is a common wrong-answer trap.'
    ],
    remember: [
      'PRA: 4 objectives (safety/soundness, policyholder protection, competition, international competitiveness). FCA: 1 strategic objective (markets function well) + 3 operational objectives.',
      '3 pillars: Proactive, Reactive, Thematic.',
      'Restitution/redress need a court order; varying permissions/withdrawing approval/disciplinary action do not.'
    ],
    knowledgeCheck: [
      {
        question: 'How many primary strategic objectives does the FCA have?',
        options: ['None', 'One', 'Two', 'Three'],
        correctIndex: 1,
        explanation: 'The FCA has a single strategic objective (ensuring relevant markets function well), supported by three operational objectives.'
      },
      {
        question: 'Which FCA enforcement action requires an application to the court?',
        options: ['Varying a firm\u2019s permissions', 'Withdrawal of an approved person\u2019s status', 'Seeking restitution', 'Issuing a private warning'],
        correctIndex: 2,
        explanation: 'Restitution (and redress, and injunctions) require a court order; the other actions listed can be taken directly by the FCA.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 8 Part 1, p.127-136'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t8b',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't8b',
    title: 'PRA & FCA Approach to Regulation (Part 2)',
    intro: 'This topic covers training & competence requirements, client money rules (CASS), the Senior Managers and Certification Regime (SM&CR) in detail, the Code of Conduct rules, the fit and proper test, and appointed representatives — a dense, detail-heavy topic that rewards learning the specific thresholds.',
    sections: [
      {
        heading: 'Client money rules (CASS)',
        bullets: [
          'Client money must be held in a separate client account, set up as a trust, distinct from the firm\u2019s own money.',
          'Money/assets received must be used for the transaction immediately, or banked into the client account by close of business the following day.',
          'Firms may "pay away" money with no activity for 6 years (12 years for assets) to a registered charity — but must first make reasonable attempts (3 contacts) to reach the client if the balance is above the de minimis threshold (£25 retail / £100 other clients); below that, a shorter process applies.'
        ]
      },
      {
        heading: 'Senior Managers and Certification Regime (SM&CR)',
        bullets: [
          '3 firm categories: Limited scope (e.g. sole traders — exempt from baseline requirements), Core (majority of firms — must meet baseline requirements), Enhanced (large/complex firms — additional requirements).',
          'Senior Managers Regime: senior managers must be personally vetted and approved by the FCA/PRA for each senior management function (SMF) they hold, backed by a "statement of responsibilities" and a firm-wide "responsibilities map".',
          'Senior managers have a statutory "duty of responsibility" — to face action, the regulator must prove (on balance of probability) the firm breached rules, the individual was a senior manager at the time, was responsible for the relevant area, and failed to take reasonable steps to prevent the breach.',
          'Certification Regime: covers "significant harm" roles below senior management (e.g. mortgage/investment advisers, material risk takers) — the FIRM certifies fitness and propriety annually; the FCA/PRA doesn\u2019t directly vet these individuals.',
          'A sole trader themselves is not covered by the Certification Regime, though their employees may be.'
        ]
      },
      {
        heading: 'The Code of Conduct',
        bullets: [
          'Applies to all staff at authorised firms EXCEPT purely ancillary roles (security, IT support, reception, transport).',
          'Tier 1 individual conduct rules (all covered staff): act with integrity; act with skill, care and diligence; be open and cooperative with regulators; pay due regard to customers and treat them fairly; observe proper market conduct standards; act to deliver good outcomes for retail customers.',
          'Tier 2 senior manager conduct rules (additional, for senior managers only): take reasonable steps to control the business effectively; ensure regulatory compliance; ensure delegation is appropriate and overseen; disclose relevant information to the regulator.',
          'Firms must report disciplinary action against a senior manager within 7 days; for other staff, an annual report suffices.'
        ]
      },
      {
        heading: 'The fit and proper test',
        bullets: [
          'Three areas assessed: honesty/integrity/reputation (criminal record, disciplinary history, complaints, insolvency, past dismissals); competence and capability (training and competence requirements); financial soundness (current position, past bankruptcies, credit rating).',
          'Appointed representatives (ARs) undertake regulated activities as a contractual agent of an authorised "principal" firm — the AR itself is not authorised by the FCA, but the principal is ultimately responsible and accountable for the AR\u2019s activities and must assess the AR\u2019s fitness and propriety.'
        ]
      }
    ],
    examTraps: [
      'The de minimis threshold for "paying away" dormant client money to charity is £25 for retail clients (not £100 — that\u2019s the "other clients" threshold) — question-writers often swap these.',
      'The Certification Regime is FIRM-led (self-certification, annual) — the Senior Managers Regime is REGULATOR-led (FCA/PRA personally vet and approve). Mixing up who does the approving is a common trap.',
      'Only ancillary staff (security, IT, reception, transport) are exempt from the Code of Conduct — almost everyone else, including junior customer-facing staff, is covered.'
    ],
    remember: [
      'Dormant client money: pay away after 6 years (12 for assets); de minimis £25 retail / £100 other clients.',
      'SM&CR firm categories: Limited scope, Core, Enhanced.',
      'Fit and proper test: honesty/integrity/reputation, competence/capability, financial soundness.'
    ],
    knowledgeCheck: [
      {
        question: 'An adviser has identified £50 with no activity for several years in a client account. What must the firm do before "paying it away" to charity?',
        options: [
          'Nothing — the amount is below the threshold for any check',
          'Take reasonable steps to contact the client first, since £50 is above the £25 retail de minimis',
          'Wait a further 12 years before any action can be taken',
          'Transfer it directly to the FCA rather than a charity'
        ],
        correctIndex: 1,
        explanation: 'The de minimis threshold for retail clients is £25 — since £50 exceeds this, the firm must make reasonable attempts (typically three) to contact the client before paying the money away.'
      },
      {
        question: 'Under the Certification Regime, who is responsible for assessing an individual\u2019s fitness and propriety?',
        options: ['The FCA directly', 'The PRA directly', 'The employing firm', 'An independent professional body'],
        correctIndex: 2,
        explanation: 'Unlike the Senior Managers Regime (where the regulator vets and approves), under the Certification Regime it is the firm itself that certifies fitness and propriety, reassessed annually.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 8 Part 2, p.137-143'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u2-t1',
    module: 'cemap1', unitKey: 'unit2', topicKey: 't1',
    title: 'Advice Process & Adviser Skills',
    intro: 'Good advice is a documented sequence: explain the service, understand the customer, assess needs and risk, recommend a suitable solution, provide the required product information, and keep evidence of what happened. Adviser communication skills support every stage.',
    sections: [
      {
        heading: 'Initial disclosure and client agreements',
        bullets: [
          'Before business begins, the customer should receive information about the firm, its service, regulatory status, communication arrangements, charges, complaints process and compensation arrangements.',
          'Required information may be supplied on paper, as an email attachment or through another durable medium that lets the customer store and retrieve it. A website can be used only where the relevant conditions are met.',
          'A written client agreement is used for designated investment business. It records the rights and responsibilities of both parties and explains charges, communications and conflicts of interest.',
          'A client agreement is associated with direct, higher-risk investment activity and discretionary management. It is not normally required merely because a customer buys a packaged product or seeks an ordinary repayment mortgage.',
          'Client-agreement records are retained for the relationship; records connected with pension transfers, opt-outs and FSAVCs are retained indefinitely.'
        ]
      },
      {
        heading: 'Fact-finding, risk and capacity for loss',
        bullets: [
          'The fact-find gathers hard facts such as income, spending, assets and liabilities, alongside softer facts such as priorities, hopes, preferences and willingness to act.',
          'An adviser analyses current and future needs, whether the customer can afford to meet them and how important each need is.',
          'Attitude to risk is the customer’s willingness to accept uncertainty or loss in pursuit of reward. Capacity for loss is different: it is the customer’s financial ability to withstand loss without an unacceptable effect on living standards.',
          'Risk labels are only a starting point. A couple may have different attitudes, and the recommended risk must remain consistent with the objective, term, knowledge, experience and capacity for loss.',
          'A gap analysis compares the customer’s objective with existing provision. It is particularly useful for quantifying protection shortfalls.'
        ]
      },
      {
        heading: 'Analysis, recommendation and informed decisions',
        bullets: [
          'After prioritising the customer’s needs, the adviser assesses affordability, tax position, existing arrangements, timescale, state provision and whether income, capital or both are required.',
          'A recommendation should match the right amount and form of provision to the customer’s circumstances and timing.',
          'The presentation should explain the purpose, relevant benefits, risks, limitations, costs and reasons for recommending the solution. Plain language and regular understanding checks help the customer make an informed decision.',
          'If an adviser completes an application for the customer, the customer should check it before signing. Insurance application questions must be answered honestly and accurately; the customer is not expected to volunteer information that was not requested.',
          'An insistent customer chooses to proceed against advice. The adviser should document the position clearly and obtain evidence that the customer understands they are departing from the recommendation.'
        ]
      },
      {
        heading: 'Product disclosure and suitability reports',
        bullets: [
          'Key product information and an illustration are normally provided before an application is made and the sale is completed.',
          'Long-term insurance and pension information is commonly presented through key-features material. A Key Information Document applies to relevant packaged retail and insurance-based investment products and is designed to be short and understandable.',
          'A suitability report explains the customer’s circumstances and objectives, the recommendation, why it is suitable and any disadvantages.',
          'For the source material covered here: a life-policy suitability report is normally provided before conclusion; a pension report no later than 14 days after conclusion; and a unit trust, investment trust or OEIC report as soon as possible after execution.',
          'Record-retention periods in the source distinguish indefinite pension-transfer/opt-out/FSAVC records, five years for specified life/pension and MiFID business, and three years for other products including mortgages. Treat these periods as regulation-sensitive and verify against the syllabus edition used for the exam.'
        ]
      },
      {
        heading: 'Execution-only business and appropriateness',
        bullets: [
          'In an execution-only transaction, the customer specifies the product and provider without receiving a recommendation. The customer is responsible for the decision.',
          'The firm still supplies enough product information for an informed choice and should retain clear evidence that the transaction was execution-only.',
          'Execution-only is not the same as an insistent-customer case: the latter follows advice that the customer decides not to follow.',
          'For certain complex investments, the firm must assess whether the customer has enough knowledge and experience to understand the risks. This is an appropriateness test, not a full suitability assessment.'
        ]
      },
      {
        heading: 'Questioning, listening and communication',
        bullets: [
          'Closed questions obtain a fact or a short answer. They are efficient but can feel like an interrogation when overused.',
          'Open questions encourage explanation. Probing questions explore an earlier answer, while hypothetical questions invite the customer to imagine a future situation.',
          'Effective listening means concentrating on meaning, acknowledging what was heard and responding appropriately.',
          'Summarising confirms understanding, gives the customer a chance to correct errors and creates a natural transition between subjects.',
          'An adviser should avoid jargon, adapt spoken and written language to the customer, and notice non-verbal signals without treating body language as a substitute for clear evidence.'
        ]
      }
    ],
    workedExample: {
      title: 'Separating willingness and ability to take risk',
      body: [
        'A customer says they enjoy taking investment risk, suggesting a high attitude-to-risk score.',
        'Their emergency savings are small and a fall in capital would prevent them meeting essential spending.',
        'Their capacity for loss is therefore low even though their stated willingness is high.',
        'The recommendation must reflect the financial constraint; the attitude label alone cannot justify a high-risk solution.'
      ]
    },
    examTraps: [
      'Capacity for loss is financial resilience, not the customer’s feelings about risk.',
      'Execution-only means no recommendation. An insistent customer has received advice but chooses a different course.',
      'Appropriateness asks whether a customer can understand the risks of specified complex execution-only products; suitability asks whether a recommendation fits the customer.',
      'The timing of suitability reports differs by product. Do not apply the pension deadline to life policies or collective investments.',
      'Closed questions are useful for facts, but excessive use can frustrate the customer and damage rapport.'
    ],
    remember: [
      'Disclose the service first; fact-find; analyse; recommend; disclose the product; document suitability; retain evidence.',
      'Attitude to risk = willingness. Capacity for loss = ability to absorb loss.',
      'Client agreement: designated investment business, rights and obligations, charges.',
      'Execution-only: customer chooses the transaction and bears responsibility; complex products may still require an appropriateness assessment.'
    ],
    knowledgeCheck: [
      {
        question: 'Which description best captures capacity for loss?',
        options: ['How adventurous the customer feels', 'How much loss the customer can withstand without harming their living standard', 'The largest fall a fund has experienced', 'The customer’s preferred investment term'],
        correctIndex: 1,
        explanation: 'Capacity for loss is an objective financial constraint: the effect a loss would have on the customer’s circumstances and standard of living.'
      },
      {
        question: 'A customer rejects the adviser’s recommendation and asks to buy a different product. What type of case is this?',
        options: ['Execution-only from the outset', 'An insistent customer', 'A discretionary-management agreement', 'A simplified-advice case'],
        correctIndex: 1,
        explanation: 'Advice has already been given, so this is an insistent-customer situation. The departure from advice should be clearly documented.'
      },
      {
        question: 'Why does an adviser summarise during a fact-find?',
        options: ['To shorten the regulatory retention period', 'To confirm understanding and allow correction', 'To turn an open question into execution-only business', 'To avoid recording soft facts'],
        correctIndex: 1,
        explanation: 'Summarising demonstrates listening and lets the customer correct a misunderstanding before the adviser relies on it.'
      }
    ],
    source: 'CeMAP 1, Unit 2 Topic 1, p.149-157; topic test p.159-162',
    dateSensitive: true
  }
]

export const lessons: Lesson[] = [...baseLessons, ...cemap1Unit2Lessons, ...cemap2RemainingLessons]
