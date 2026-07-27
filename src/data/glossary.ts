import type { GlossaryTerm } from './types'

let n = 0
function term(t: string, def: string, module: ('cemap1'|'cemap2'|'cemap3')[]): GlossaryTerm {
  n += 1
  return { id: `gl-${n}`, term: t, definition: def, module }
}

export const glossary: GlossaryTerm[] = [
  term('Maturity transformation', 'Using short-term deposits to fund longer-term lending (e.g. instant-access savings funding a 25-year mortgage).', ['cemap1']),
  term('Aggregation', 'Combining many small deposits into a smaller number of larger loans, without necessarily changing the term/maturity.', ['cemap1']),
  term('Fiscal policy', 'Government decisions on taxation and public spending, used to influence the economy.', ['cemap1']),
  term('Monetary policy', 'Interest rate policy, set in the UK by the Bank of England\u2019s Monetary Policy Committee (MPC).', ['cemap1']),
  term('Disinflation', 'A situation where prices are still rising, but at a slower rate than previously.', ['cemap1']),
  term('Deflation', 'A general and sustained fall in the level of prices.', ['cemap1']),
  term('EU Regulation', 'EU law that is binding in its entirety and directly applicable to all member states (where applicable).', ['cemap1']),
  term('EU Directive', 'EU law binding member states to an outcome/objective, but leaving the method of achieving it to each state.', ['cemap1']),
  term('Personal allowance', 'The amount of income an individual can receive each tax year before income tax becomes payable.', ['cemap1']),
  term('Capital Gains Tax (CGT)', 'Tax charged on the profit (gain) made when certain assets are disposed of.', ['cemap1']),
  term('Annual exempt amount', 'The level of capital gains an individual can realise in a tax year before CGT applies.', ['cemap1']),
  term('Potentially Exempt Transfer (PET)', 'A lifetime gift to an individual that becomes fully exempt from IHT if the donor survives 7 years.', ['cemap1']),
  term('Chargeable Lifetime Transfer (CLT)', 'A lifetime gift (typically into most trusts) that can trigger an immediate IHT charge.', ['cemap1']),
  term('Nil rate band', 'The threshold up to which an estate can pass free of Inheritance Tax.', ['cemap1']),
  term('Capital repayment mortgage', 'A mortgage where each payment includes both interest and capital, guaranteeing full repayment by the end of the term.', ['cemap2']),
  term('Interest-only mortgage', 'A mortgage where only interest is paid monthly; the capital is repaid at the end of the term via a separate repayment vehicle.', ['cemap2']),
  term('Decreasing term assurance', 'Life cover with a sum assured that reduces over time, typically matched to a reducing repayment mortgage balance.', ['cemap2','cemap3']),
  term('Level term assurance', 'Life cover with a sum assured and premiums that stay level throughout the policy term.', ['cemap2','cemap3']),
  term('APRC', 'Annual Percentage Rate of Charge — the total cost of a mortgage expressed as an annual rate, including most linked fees.', ['cemap2']),
  term('Daily rest', 'A method of calculating mortgage interest daily, so overpayments reduce the balance (and interest) immediately.', ['cemap2']),
  term('Annual rest', 'A method of calculating mortgage interest once a year up front — the least responsive to over/underpayment during the year.', ['cemap2']),
  term('Overpayment', 'An additional payment above the contractual monthly amount, usually allowed up to a limit without triggering an early repayment charge.', ['cemap2']),
  term('Critical illness cover (CIC)', 'A policy paying a tax-free lump sum on diagnosis of a specified serious illness.', ['cemap3']),
  term('Income protection insurance (IPI)', 'A policy paying an ongoing replacement income if the policyholder cannot work due to accident or sickness.', ['cemap3']),
  term('Deferred period', 'The waiting period before an income protection (or similar) policy starts paying out after a claim.', ['cemap3']),
  term('Whole of life assurance', 'Life cover that guarantees a payout whenever death occurs, however long that is.', ['cemap3']),
  term('Assignment (of a policy)', 'A legal transfer of ownership of a life policy to a lender as security for a loan.', ['cemap3']),
  term('Deposit (of a policy)', 'Lodging a life policy document with a lender, giving them an equitable (not legal) right to the proceeds.', ['cemap3']),
  term('Durable medium', 'A medium that allows information addressed to a customer to be stored and retrieved unchanged for future reference.', ['cemap1']),
  term('Client agreement', 'A written agreement for designated investment business that records the rights and obligations of the firm and client and explains charges.', ['cemap1']),
  term('Fact-find', 'The structured collection of a customer’s hard facts, softer objectives, priorities and preferences before advice is formulated.', ['cemap1']),
  term('Attitude to risk', 'A customer’s willingness to accept uncertainty or potential loss in pursuit of a return.', ['cemap1']),
  term('Capacity for loss', 'A customer’s financial ability to withstand a loss without an unacceptable effect on living standards.', ['cemap1']),
  term('Gap analysis', 'A comparison between a customer’s objective and the provision already in place, used to identify a shortfall.', ['cemap1']),
  term('Suitability report', 'A report recording the customer’s circumstances and objectives, the recommendation, why it is suitable and any disadvantages.', ['cemap1']),
  term('Execution-only transaction', 'A customer-directed transaction completed without a personal recommendation, leaving the customer responsible for the decision.', ['cemap1']),
  term('Insistent customer', 'A customer who receives advice but chooses to proceed in a different way from the adviser’s recommendation.', ['cemap1']),
  term('Appropriateness test', 'An assessment of whether a customer has enough knowledge and experience to understand the risks of specified complex non-advised investments.', ['cemap1'])
]
