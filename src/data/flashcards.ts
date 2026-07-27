import type { Flashcard } from './types'
import { cemap1Unit2Flashcards } from './cemap1Unit2Remaining'
import { cemap2RemainingFlashcards } from './cemap2Remaining'

let n = 0
function fc(module: 'cemap1'|'cemap2'|'cemap3', unitKey: string, topicKey: string, category: string, front: string, back: string, source: string): Flashcard {
  n += 1
  return { id: `fc-${n}`, module, unitKey, topicKey, category, front, back, source }
}

const baseFlashcards: Flashcard[] = [
  // CeMAP 1 Unit 1 Topic 1
  fc('cemap1','unit1','t1','Definitions','What are the two core functions of money?', 'A unit of account and a medium of exchange.', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Definitions','Name the 4 main asset classes.', 'Cash, fixed interest securities & money market instruments, and equities (with property often added as a fourth in practice).', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Processes','What is "maturity transformation"?', 'Taking short-term deposits and using them to fund longer-term loans (e.g. instant-access savings funding 25-year mortgages).', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Regulations','What body sits inside the Bank of England since the 2016 Act?', 'The Prudential Regulation Authority (PRA).', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Processes','Who sets the Bank of England Base Rate, and how often do they meet?', 'The Monetary Policy Committee (MPC), 9 members, meeting 8 times a year.', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Regulations','What is the main UK anti-money laundering statute?', 'The Proceeds of Crime Act 2002.', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Common exam traps','Is cash truly "risk free"?', 'Its nominal value cannot fall, but inflation erodes its real (purchasing power) value — so it carries inflation risk.', 'CeMAP 1, Unit 1 Topic 1'),

  // CeMAP 1 Unit 1 Topic 2a
  fc('cemap1','unit1','t2a','Definitions','What is fiscal policy?', 'Government decisions on taxation and public spending.', 'CeMAP 1, Unit 1 Topic 2 Part 1'),
  fc('cemap1','unit1','t2a','Definitions','What is monetary policy?', 'Interest rate policy, set by the Bank of England\u2019s MPC.', 'CeMAP 1, Unit 1 Topic 2 Part 1'),
  fc('cemap1','unit1','t2a','Regulations','What inflation target does the MPC aim for, and using which index?', '2%, measured by the Consumer Prices Index (CPI).', 'CeMAP 1, Unit 1 Topic 2 Part 1'),
  fc('cemap1','unit1','t2a','Regulations','What must the Bank\u2019s Governor do if inflation is more than 1% off target?', 'Write an open letter to the Chancellor of the Exchequer explaining why, and what action will be taken.', 'CeMAP 1, Unit 1 Topic 2 Part 1'),
  fc('cemap1','unit1','t2a','Common exam traps','What is the key difference between an EU Regulation and an EU Directive?', 'A Regulation is binding in its entirety; a Directive binds states to an outcome but leaves the method up to each state.', 'CeMAP 1, Unit 1 Topic 2 Part 1'),
  fc('cemap1','unit1','t2a','Calculations','How do you estimate the real interest rate?', 'Real rate ≈ nominal interest rate − inflation rate.', 'CeMAP 1, Unit 1 Topic 2 Part 1'),
  fc('cemap1','unit1','t2a','Definitions','What is disinflation, as distinct from deflation?', 'Disinflation is prices still rising, but more slowly than before. Deflation is a general fall in prices.', 'CeMAP 1, Unit 1 Topic 2 Part 1'),

  // CeMAP 1 Unit 1 Topic 2b - Taxation
  fc('cemap1','unit1','t2b','Regulations','How many days in a tax year make someone automatically UK tax resident?', '183 days or more.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Definitions','What is the difference between earned and unearned income?', 'Earned = employment/self-employment/pension income. Unearned = savings interest, dividends, rental and trust income.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Processes','What is PAYE?', '"Pay As You Earn" — the system where employers deduct income tax at source and pay it to HMRC on the employee\u2019s behalf.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Regulations','Which NIC class applies to the self-employed on their annual profits?', 'Class 4 (paid alongside income tax via self-assessment).', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Common exam traps','What CGT deduction trap is commonly tested?', 'Repair/maintenance costs are NOT deductible, but improvement (enhancement) costs ARE.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Regulations','When must CGT on UK residential property gains be paid?', 'Within 60 days of completion (rather than the usual 31 January following the tax year).', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Regulations','How long must a donor survive a gift for it to become fully exempt from IHT (a PET)?', '7 years.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Common exam traps','Can the IHT annual gift exemption be carried forward more than one year?', 'No — it can only be carried forward one year if unused, not accumulated indefinitely.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Regulations','Who is liable for IHT on a person\u2019s death?', 'The deceased\u2019s estate, administered by the personal representatives.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Products','Name three assets that are exempt from CGT.', 'Any three of: main residence, gilts/most corporate bonds, cars for normal use, chattels below the threshold, ISAs/NS&I/Premium Bonds, personal-use foreign currency, original owner\u2019s life assurance gains.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),

  // CeMAP 2 Unit 2 Topic 1 — Mortgage Repayment Methods
  fc('cemap2','unit2','t1','Products','What are the only two mortgage repayment methods?', 'Capital (repayment) and interest-only.', 'CeMAP 2&3, MRT2 Topic 1'),
  fc('cemap2','unit2','t1','Common exam traps','Are early or late repayment mortgage payments mostly interest?', 'EARLY payments are mostly interest; payments shift to being mostly capital LATER in the term.', 'CeMAP 2&3, MRT2 Topic 1'),
  fc('cemap2','unit2','t1','Regulations','What repayment strategies are NOT acceptable for an interest-only mortgage?', 'Speculative strategies such as relying on house price inflation or a hoped-for inheritance.', 'CeMAP 2&3, MRT2 Topic 1'),
  fc('cemap2','unit2','t1','Processes','Which interest calculation method is most common today, and why do borrowers like it?', 'Daily rest — because overpayments reduce the balance (and interest charged) immediately.', 'CeMAP 2&3, MRT2 Topic 1'),
  fc('cemap2','unit2','t1','Processes','Which interest method neither rewards early payment nor penalises late payment within the year?', 'Annual rest.', 'CeMAP 2&3, MRT2 Topic 1'),
  fc('cemap2','unit2','t1','Common exam traps','Name two costs EXCLUDED from the APRC calculation.', 'Any two of: early repayment charges, life assurance premiums, default charges.', 'CeMAP 2&3, MRT2 Topic 1'),
  fc('cemap2','unit2','t1','Calculations','How do you work out capital repaid in year one on an annual-rest repayment mortgage?', 'Annual (capital+interest) payment minus (loan amount × interest rate) = capital repaid.', 'CeMAP 2&3, MRT2 Topic 1'),
  fc('cemap2','unit2','t1','Processes','What is the usual maximum annual overpayment allowed without an early repayment charge?', 'Up to 10% of the outstanding balance per year (varies by lender).', 'CeMAP 2&3, MRT2 Topic 1'),

  // CeMAP 3 Protection
  fc('cemap3','unit1','t1','Products','Which type of term assurance is cheapest and matches a repayment mortgage?', 'Decreasing term assurance (its cover reduces in line with the falling mortgage balance).', 'CeMAP 2&3, CeMAP 3 Protection'),
  fc('cemap3','unit1','t1','Products','Which term assurance type suits an interest-only mortgage, where the debt doesn\u2019t reduce?', 'Level term assurance (level sum assured, level premiums).', 'CeMAP 2&3, CeMAP 3 Protection'),
  fc('cemap3','unit1','t1','Products','What makes convertible term assurance different — and why is it more expensive?', 'It can be converted to an endowment or whole-of-life plan later without new medical evidence — the flexibility makes it the most expensive term assurance type.', 'CeMAP 2&3, CeMAP 3 Protection'),
  fc('cemap3','unit1','t1','Products','How does critical illness cover differ from income protection insurance?', 'CIC pays a one-off tax-free lump sum on diagnosis of a specified illness. IPI pays an ongoing replacement income while unable to work.', 'CeMAP 2&3, CeMAP 3 Protection'),
  fc('cemap3','unit1','t1','Common exam traps','How many times can a standard (non-combined) CIC policy pay out?', 'Once only — the policy ceases once the sum assured is paid.', 'CeMAP 2&3, CeMAP 3 Protection'),
  fc('cemap3','unit1','t1','Processes','What is a "deferred period" on an income protection policy?', 'The waiting period before benefit payments start after a claim — the longer it is, the cheaper the premium.', 'CeMAP 2&3, CeMAP 3 Protection'),
  fc('cemap3','unit1','t1','Customer circumstances','What is the typical maximum income protection benefit as a % of pre-illness income?', 'Around 50-65%.', 'CeMAP 2&3, CeMAP 3 Protection'),
  fc('cemap3','unit1','t1','Regulations','What is the legal difference between "assignment" and "deposit" of a life policy to a lender?', 'Assignment transfers legal ownership to the lender; deposit only gives the lender an equitable right to the proceeds.', 'CeMAP 2&3, CeMAP 3 Protection'),
  fc('cemap3','unit1','t1','Products','Does whole of life assurance guarantee a payout?', 'Yes — since death is certain to occur eventually, a claim is guaranteed (unlike term assurance, which can simply expire).', 'CeMAP 2&3, CeMAP 3 Protection'),

  // CeMAP 1 Unit 1 Topic 3 — State Benefits
  fc('cemap1','unit1','t3','Regulations','Which six legacy benefits did Universal Credit replace for new claims?', 'Income Support, income-based JSA, income-related ESA, Working Tax Credit, Child Tax Credit, and Housing Benefit.', 'CeMAP 1, Unit 1 Topic 3'),
  fc('cemap1','unit1','t3','Calculations','How many qualifying NIC years give the maximum new state pension, and how few give none?', '35 years for the maximum; fewer than 10 years gives no state pension at all.', 'CeMAP 1, Unit 1 Topic 3'),
  fc('cemap1','unit1','t3','Common exam traps','Is Child Benefit means-tested?', 'No — it isn\u2019t means-tested for eligibility, but a tax charge can claw it back if a partner\u2019s income exceeds the threshold.', 'CeMAP 1, Unit 1 Topic 3'),
  fc('cemap1','unit1','t3','Products','What is the "triple lock" for the state pension?', 'Annual uprating by the highest of average earnings growth, 2.5%, or CPI inflation.', 'CeMAP 1, Unit 1 Topic 3'),
  fc('cemap1','unit1','t3','Regulations','How long is new style JSA payable, maximum?', '6 months.', 'CeMAP 1, Unit 1 Topic 3'),

  // CeMAP 1 Unit 1 Topic 4a — Protection
  fc('cemap1','unit1','t4a','Regulations','Is there insurable interest between a parent and child?', 'No — there is no automatic insurable interest between parents and children in either direction.', 'CeMAP 1, Unit 1 Topic 4 Part 1'),
  fc('cemap1','unit1','t4a','Common exam traps','Can an insurer cancel an income protection policy if the policyholder claims often?', 'No — IPI cannot be cancelled by the insurer as long as premiums are paid, regardless of claims. ASU (a different product) CAN be cancelled, being annually renewable.', 'CeMAP 1, Unit 1 Topic 4 Part 1'),
  fc('cemap1','unit1','t4a','Processes','What is the hierarchy of financial needs, in order?', 'Living for today, protection, income protection, pension, savings, investment.', 'CeMAP 1, Unit 1 Topic 4 Part 1'),
  fc('cemap1','unit1','t4a','Products','When is a joint-life second-death policy typically used?', 'Almost exclusively for inheritance tax planning, since it only pays out on the second death.', 'CeMAP 1, Unit 1 Topic 4 Part 1'),
  fc('cemap1','unit1','t4a','Products','How many times can a standard critical illness policy pay out?', 'Once only — the policy ceases once a claim is paid.', 'CeMAP 1, Unit 1 Topic 4 Part 1'),

  // CeMAP 1 Unit 1 Topic 4b — Savings & Investments
  fc('cemap1','unit1','t4b','Common exam traps','Are unit trusts single-priced or dual-priced?', 'Dual-priced (offer price to buy, bid price to sell) — OEICs are typically single-priced instead.', 'CeMAP 1, Unit 1 Topic 4 Part 2'),
  fc('cemap1','unit1','t4b','Products','Which collective investment structure can "gear" (borrow to invest)?', 'Investment trusts — being close-ended companies, uniquely among the three main collective structures.', 'CeMAP 1, Unit 1 Topic 4 Part 2'),
  fc('cemap1','unit1','t4b','Calculations','If market interest rates rise above a bond\u2019s fixed coupon, what happens to its resale price?', 'It falls, since new buyers can get a better rate elsewhere and will only buy at a discount.', 'CeMAP 1, Unit 1 Topic 4 Part 2'),
  fc('cemap1','unit1','t4b','Regulations','What minimum % of income must an investment trust distribute as dividends?', '85%.', 'CeMAP 1, Unit 1 Topic 4 Part 2'),
  fc('cemap1','unit1','t4b','Products','What tax relief do VCTs and EIS both offer?', '30% income tax relief on the qualifying investment (clawed back if sold too early — 5 years for VCTs, 3 years for EIS).', 'CeMAP 1, Unit 1 Topic 4 Part 2'),

  // CeMAP 1 Unit 1 Topic 4c — Retirement & Borrowing
  fc('cemap1','unit1','t4c','Regulations','What is the auto-enrolment minimum contribution split?', '4% employee, 3% employer, 1% government tax relief (8% total).', 'CeMAP 1, Unit 1 Topic 4 Part 3'),
  fc('cemap1','unit1','t4c','Regulations','What is the personal pension tax relief contribution limit?', 'The greater of £3,600 or earned income, subject to the annual allowance.', 'CeMAP 1, Unit 1 Topic 4 Part 3'),
  fc('cemap1','unit1','t4c','Common exam traps','Which sector now mostly has Defined Benefit schemes, and which mostly has Defined Contribution?', 'Defined Benefit is now mainly public sector; Defined Contribution now dominates the private sector.', 'CeMAP 1, Unit 1 Topic 4 Part 3'),
  fc('cemap1','unit1','t4c','Regulations','How is mortgage charge priority on a property determined?', 'By the order of registration at the Land Registry, not by who claims first.', 'CeMAP 1, Unit 1 Topic 4 Part 3'),
  fc('cemap1','unit1','t4c','Regulations','Which sourcebook regulates secured lending, and which regulates unsecured lending?', 'MCOB for secured lending; CONC for unsecured lending.', 'CeMAP 1, Unit 1 Topic 4 Part 3'),

  // CeMAP 1 Unit 1 Topic 5 — Legal Principles
  fc('cemap1','unit1','t5','Common exam traps','Does an Ordinary Power of Attorney remain valid if the donor loses mental capacity?', 'No — it automatically ends. A Lasting Power of Attorney is specifically designed to remain (or take) effect after loss of capacity.', 'CeMAP 1, Unit 1 Topic 5'),
  fc('cemap1','unit1','t5','Regulations','How long does bankruptcy last in the UK?', '1 year, since the Enterprise Act 2002 (both England/Wales and Scotland).', 'CeMAP 1, Unit 1 Topic 5'),
  fc('cemap1','unit1','t5','Regulations','What debt threshold lets a creditor petition for someone\u2019s bankruptcy?', '£5,000 (an individual can petition for their own bankruptcy at any debt level).', 'CeMAP 1, Unit 1 Topic 5'),
  fc('cemap1','unit1','t5','Processes','What is the Consumer Insurance Act 2012\u2019s "reasonable care" test outcome if misrepresentation is careless but the insurer would still have covered the risk (at a higher premium)?', 'The claim is paid, but proportionately reduced to reflect the careless misrepresentation.', 'CeMAP 1, Unit 1 Topic 5'),
  fc('cemap1','unit1','t5','Definitions','What is the difference between "actual authority" and "apparent authority" in agency law?', 'Actual authority is power genuinely granted; apparent authority is where the principal\u2019s conduct would lead a reasonable person to believe authority was granted, even without an explicit grant.', 'CeMAP 1, Unit 1 Topic 5'),
  fc('cemap1','unit1','t5','Definitions','What is the key difference between a joint tenancy and a tenancy in common?', 'Joint tenancy: no defined share, passes automatically to survivor. Tenancy in common: defined share, passes via will/intestacy.', 'CeMAP 1, Unit 1 Topic 5'),

  // CeMAP 1 Unit 1 Topic 6 — Wills, Intestacy & Trusts
  fc('cemap1','unit1','t6','Regulations','How many days must a spouse survive the deceased to inherit under intestacy?', '28 days.', 'CeMAP 1, Unit 1 Topic 6'),
  fc('cemap1','unit1','t6','Common exam traps','What happens if a beneficiary (or their spouse) witnesses the will that benefits them?', 'They forfeit their gift, but the will itself remains valid.', 'CeMAP 1, Unit 1 Topic 6'),
  fc('cemap1','unit1','t6','Processes','Within how long of death must a Deed of Variation be made, and who must agree to it?', 'Within 2 years of death; only beneficiaries adversely affected by the change need to agree.', 'CeMAP 1, Unit 1 Topic 6'),
  fc('cemap1','unit1','t6','Products','What\u2019s the key difference between a lifetime IIP trust and an immediate post-death interest trust for IHT?', 'A lifetime gift into an IIP trust is a Chargeable Lifetime Transfer (20% charge on the excess); a post-death interest trust created by will is taxed as a normal legacy instead.', 'CeMAP 1, Unit 1 Topic 6'),
  fc('cemap1','unit1','t6','Common exam traps','Does divorce revoke a will?', 'No — unlike marriage, divorce doesn\u2019t revoke a will, but the ex-spouse is treated as having predeceased the testator by default.', 'CeMAP 1, Unit 1 Topic 6'),
  fc('cemap1','unit1','t6','Products','What automatically creates a Married Women\u2019s Property Act (1882) trust?', 'Taking out a life policy on your own life specifically for the benefit of a spouse/civil partner or children.', 'CeMAP 1, Unit 1 Topic 6'),

  // CeMAP 1 Unit 1 Topic 7 — Development of UK Regulation
  fc('cemap1','unit1','t7','Regulations','What is the UK financial services regulatory timeline?', 'Banking regulated 1998 → most services Dec 2001 (FSMA) → mortgages Oct 2004 → insurance Jan 2005 → twin peaks (PRA/FCA) April 2013.', 'CeMAP 1, Unit 1 Topic 7'),
  fc('cemap1','unit1','t7','Regulations','What was the "tripartite system" and why was it replaced?', 'Bank of England, FSA and Treasury sharing regulatory responsibility — criticised after the 2007-08 crisis (esp. Northern Rock) for unclear accountability, leading to the twin peaks model.', 'CeMAP 1, Unit 1 Topic 7'),
  fc('cemap1','unit1','t7','Processes','Where does an occupational pension scheme complaint go first, and where next if unresolved?', 'The scheme trustees (via the IDRP, 4 months to respond), then the Pensions Ombudsman.', 'CeMAP 1, Unit 1 Topic 7'),
  fc('cemap1','unit1','t7','Common exam traps','Is the Pensions Regulator responsible for pension mis-selling complaints?', 'No — that\u2019s a common trap; it oversees scheme administration, security and governance, not mis-selling or underperformance.', 'CeMAP 1, Unit 1 Topic 7'),
  fc('cemap1','unit1','t7','Regulations','What does the Information Commissioner\u2019s Office enforce?', 'The Data Protection Act 2018 and the Freedom of Information Act 2000.', 'CeMAP 1, Unit 1 Topic 7'),

  // CeMAP 1 Unit 1 Topic 8a — PRA & FCA Approach (Part 1)
  fc('cemap1','unit1','t8a','Regulations','What are the PRA\u2019s 4 statutory objectives?', 'Promote safety/soundness of firms; protect insurance policyholders; facilitate effective competition; facilitate UK international competitiveness.', 'CeMAP 1, Unit 1 Topic 8 Part 1'),
  fc('cemap1','unit1','t8a','Regulations','How many strategic objectives does the FCA have, and how many operational objectives?', 'One strategic objective (markets function well), supported by three operational objectives.', 'CeMAP 1, Unit 1 Topic 8 Part 1'),
  fc('cemap1','unit1','t8a','Processes','What are the FCA\u2019s three supervision pillars?', 'Proactive, Reactive, Thematic.', 'CeMAP 1, Unit 1 Topic 8 Part 1'),
  fc('cemap1','unit1','t8a','Common exam traps','Which FCA enforcement actions need a court order, and which don\u2019t?', 'Need court: injunction, restitution, redress. Don\u2019t need court: varying permissions, withdrawing approval, disciplinary action.', 'CeMAP 1, Unit 1 Topic 8 Part 1'),
  fc('cemap1','unit1','t8a','Regulations','What do MCOB, ICOB and BCOB stand for/cover?', 'Conduct of Business Sourcebooks for mortgages (MCOB), insurance (ICOB) and banking (BCOB).', 'CeMAP 1, Unit 1 Topic 8 Part 1'),

  // CeMAP 1 Unit 1 Topic 8b — PRA & FCA Approach (Part 2)
  fc('cemap1','unit1','t8b','Regulations','What is the de minimis threshold for dormant client money before a firm must attempt contact before paying it away?', '£25 for retail clients, £100 for other clients.', 'CeMAP 1, Unit 1 Topic 8 Part 2'),
  fc('cemap1','unit1','t8b','Common exam traps','Who certifies fitness and propriety under the Certification Regime vs the Senior Managers Regime?', 'Certification Regime: the firm itself certifies (annually). Senior Managers Regime: the FCA/PRA personally vet and approve.', 'CeMAP 1, Unit 1 Topic 8 Part 2'),
  fc('cemap1','unit1','t8b','Regulations','What are the 3 SM&CR firm categories?', 'Limited scope, Core, Enhanced.', 'CeMAP 1, Unit 1 Topic 8 Part 2'),
  fc('cemap1','unit1','t8b','Regulations','Who is exempt from the Code of Conduct rules?', 'Only purely ancillary staff — security, IT support, reception, transport.', 'CeMAP 1, Unit 1 Topic 8 Part 2'),
  fc('cemap1','unit1','t8b','Regulations','What are the three components of the fit and proper test?', 'Honesty/integrity/reputation, competence/capability, and financial soundness.', 'CeMAP 1, Unit 1 Topic 8 Part 2')
  ,

  // CeMAP 1 Unit 2 Topic 1 - Advice Process & Adviser Skills
  fc('cemap1','unit2','t1','Processes','What should initial disclosure explain before business begins?', 'The firm and its regulatory status, the service offered, communications, charges, complaints arrangements and relevant compensation information.', 'CeMAP 1, Unit 2 Topic 1, p.149'),
  fc('cemap1','unit2','t1','Definitions','What is a durable medium?', 'A medium that lets the customer store information addressed to them and retrieve it unchanged for future reference, such as paper or a suitable email attachment.', 'CeMAP 1, Unit 2 Topic 1, p.149-150'),
  fc('cemap1','unit2','t1','Regulations','When is a client agreement normally required?', 'When the firm carries on designated investment business for a client; it records the parties’ rights and obligations and discloses charges.', 'CeMAP 1, Unit 2 Topic 1, p.150'),
  fc('cemap1','unit2','t1','Common exam traps','Is a client agreement normally required for an ordinary repayment-mortgage enquiry?', 'No. The source associates the specific agreement with designated investment business, not an ordinary repayment-mortgage enquiry.', 'CeMAP 1, Unit 2 Topic 1, p.150 and Topic Test Q18'),
  fc('cemap1','unit2','t1','Processes','What is the purpose of a fact-find?', 'To collect hard and soft facts so the adviser can understand circumstances, needs, priorities, affordability and objectives before giving suitable advice.', 'CeMAP 1, Unit 2 Topic 1, p.150-152'),
  fc('cemap1','unit2','t1','Definitions','How do attitude to risk and capacity for loss differ?', 'Attitude to risk is willingness to accept risk; capacity for loss is the financial ability to absorb loss without an unacceptable effect on living standards.', 'CeMAP 1, Unit 2 Topic 1, p.151'),
  fc('cemap1','unit2','t1','Suitability','What factors should be considered when developing a recommendation?', 'Needs and priorities, affordability, tax, risk, timescale, current arrangements, state provision and whether income, capital or both are required.', 'CeMAP 1, Unit 2 Topic 1, p.152'),
  fc('cemap1','unit2','t1','Conduct','What should a recommendation presentation cover?', 'Purpose, relevant benefits, risks and limitations, costs and charges, and why the solution is being recommended.', 'CeMAP 1, Unit 2 Topic 1, p.153'),
  fc('cemap1','unit2','t1','Regulations','What must an insurance applicant do under the disclosure approach described in the source?', 'Answer the questions asked honestly and accurately; the applicant is not required to volunteer information that was not requested.', 'CeMAP 1, Unit 2 Topic 1, p.154'),
  fc('cemap1','unit2','t1','Definitions','What is the purpose of a suitability report?', 'To record the customer’s situation and objectives, the recommendation, why it is suitable, and any disadvantages.', 'CeMAP 1, Unit 2 Topic 1, p.155'),
  fc('cemap1','unit2','t1','Regulations','What suitability-report deadlines are tested in this topic?', 'Life policy: normally before conclusion; personal pension: no later than 14 days after conclusion; unit trust/investment trust/OEIC: as soon as possible after execution.', 'CeMAP 1, Unit 2 Topic 1, p.155 and Topic Test'),
  fc('cemap1','unit2','t1','Definitions','What is an execution-only transaction?', 'A transaction specified by the customer without a personal recommendation; the customer is responsible for the decision.', 'CeMAP 1, Unit 2 Topic 1, p.156'),
  fc('cemap1','unit2','t1','Common exam traps','How does an insistent customer differ from an execution-only customer?', 'An insistent customer has received advice but chooses to act against it. Execution-only begins without a recommendation.', 'CeMAP 1, Unit 2 Topic 1, p.156'),
  fc('cemap1','unit2','t1','Regulations','When can an appropriateness test be required?', 'For specified complex products bought without advice, to assess whether the customer has enough knowledge and experience to understand the risks.', 'CeMAP 1, Unit 2 Topic 1, p.156'),
  fc('cemap1','unit2','t1','Adviser skills','What are closed, open, probing and hypothetical questions used for?', 'Closed questions obtain facts; open questions invite explanation; probing questions explore an answer; hypothetical questions help the customer imagine a future situation.', 'CeMAP 1, Unit 2 Topic 1, p.156-157'),
  fc('cemap1','unit2','t1','Adviser skills','Why should an adviser summarise during a meeting?', 'To demonstrate listening, check understanding and allow the customer to correct a misunderstanding.', 'CeMAP 1, Unit 2 Topic 1, p.157')
]

export const flashcards: Flashcard[] = [...baseFlashcards, ...cemap1Unit2Flashcards, ...cemap2RemainingFlashcards]
