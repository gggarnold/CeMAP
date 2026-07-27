import type { MockExamMeta, Question } from './types'

// Remaining supplied CeMAP 1 specimen papers, independently worded and
// reconciled against the answer tables on PDF pages 267-269.
export const cemap1RemainingSpecimenQuestions: Question[] = [
  {
    id: "c1-u1-specimen-b-q1", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Which part of the FCA Handbook covers the Principles for Businesses?", options: ["Business Standards.", "High Level Standards.", "Prudential Standards.", "Training and Competence."], correctIndex: [1],
    explanation: "The verified answer is B. High Level Standards.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: High Level Standards.", "Correct. The supplied answer table gives B: High Level Standards.", "This is not the verified answer. The keyed answer is: High Level Standards.", "This is not the verified answer. The keyed answer is: High Level Standards."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.217", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q2", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Which types of pension scheme are regulated by The Pensions Regulator?", options: ["Personal pensions only", "stakeholder pensions only", "work based schemes only", "all types of UK pension scheme"], correctIndex: [2],
    explanation: "The verified answer is C. work based schemes only",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: work based schemes only", "This is not the verified answer. The keyed answer is: work based schemes only", "Correct. The supplied answer table gives C: work based schemes only", "This is not the verified answer. The keyed answer is: work based schemes only"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.217", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q3", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Where the FCA is engaging in wider diagnostic remedy work and where there is potential for harm across a number of firms, it is exercising its powers of supervision under which heading?", options: ["Reactive", "Proactive", "Redemptive", "Thematic"], correctIndex: [3],
    explanation: "The verified answer is D. Thematic",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Thematic", "This is not the verified answer. The keyed answer is: Thematic", "This is not the verified answer. The keyed answer is: Thematic", "Correct. The supplied answer table gives D: Thematic"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.217", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q4", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Who owns mutual organisations?", options: ["Members", "Shareholders", "The board of directors", "the government"], correctIndex: [0],
    explanation: "The verified answer is A. Members",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Members", "This is not the verified answer. The keyed answer is: Members", "This is not the verified answer. The keyed answer is: Members", "This is not the verified answer. The keyed answer is: Members"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.217", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q5", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "The three \"cross-cutting\" obligations on a firm resulting from Principle 12 includes all of the following, except that firms must:", options: ["act in good faith", "avoid foreseeable harm to customers", "enable and support customers to pursue their financial objectives", "ensure professional clients are treated the same way as retail customers"], correctIndex: [3],
    explanation: "The verified answer is D. ensure professional clients are treated the same way as retail customers",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: ensure professional clients are treated the same way as retail customers", "This is not the verified answer. The keyed answer is: ensure professional clients are treated the same way as retail customers", "This is not the verified answer. The keyed answer is: ensure professional clients are treated the same way as retail customers", "Correct. The supplied answer table gives D: ensure professional clients are treated the same way as retail customers"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.217", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q6", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "When a public limited company issues shares directly to a shareholder by using a rights issue, this is an example of:", options: ["aggregation", "disintermediation", "maturity transformation", "intermediation"], correctIndex: [1],
    explanation: "The verified answer is B. disintermediation",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: disintermediation", "Correct. The supplied answer table gives B: disintermediation", "This is not the verified answer. The keyed answer is: disintermediation", "This is not the verified answer. The keyed answer is: disintermediation"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.217", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q7", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "For a will to be valid in England, what minimum number of witnesses must it have?", options: ["one", "two", "three", "four"], correctIndex: [1],
    explanation: "The verified answer is B. two",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: two", "Correct. The supplied answer table gives B: two", "This is not the verified answer. The keyed answer is: two", "This is not the verified answer. The keyed answer is: two"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.218", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q8", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Conduct regulation focuses on the way a financial firm:", options: ["holds sufficient funds to cover potential losses", "manages its financial risks", "meets its financial obligations", "markets its products and deals with its customers"], correctIndex: [3],
    explanation: "The verified answer is D. markets its products and deals with its customers",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: markets its products and deals with its customers", "This is not the verified answer. The keyed answer is: markets its products and deals with its customers", "This is not the verified answer. The keyed answer is: markets its products and deals with its customers", "Correct. The supplied answer table gives D: markets its products and deals with its customers"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.218", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q9", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "To which body is the FCA directly accountable?", options: ["HM Treasury", "The Bank of England", "The Financial Ombudsman Service", "The Prudential Regulation Authority"], correctIndex: [0],
    explanation: "The verified answer is A. HM Treasury",
    incorrectExplanations: ["Correct. The supplied answer table gives A: HM Treasury", "This is not the verified answer. The keyed answer is: HM Treasury", "This is not the verified answer. The keyed answer is: HM Treasury", "This is not the verified answer. The keyed answer is: HM Treasury"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.218", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q10", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Ravi is an IFA authorised to hold client money. A client has not made contact or carried out any activity on his account for some time. Ravi is considering ‘paying away’ the cash held in the account to a registered charity. In order to do so, which of the following would apply?", options: ["Ravi must write to or email the client at least twice before the transfer", "Ravi would need FCA permission to make the transfer", "there must be at least £500 in the account", "there must have been no activity on the account for at least 6 years"], correctIndex: [3],
    explanation: "The verified answer is D. there must have been no activity on the account for at least 6 years",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: there must have been no activity on the account for at least 6 years", "This is not the verified answer. The keyed answer is: there must have been no activity on the account for at least 6 years", "This is not the verified answer. The keyed answer is: there must have been no activity on the account for at least 6 years", "Correct. The supplied answer table gives D: there must have been no activity on the account for at least 6 years"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.218", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q11", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Select the option that is not a requirement for a policy arranged under the Married Women's Property Act 1982?", options: ["It must be an own life policy", "It must be for the benefit of the spouse, child or civil partner of the assured", "The policy must be taken out in England and Wales", "The wording in the policy must refer to the Act"], correctIndex: [3],
    explanation: "The verified answer is D. The wording in the policy must refer to the Act",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: The wording in the policy must refer to the Act", "This is not the verified answer. The keyed answer is: The wording in the policy must refer to the Act", "This is not the verified answer. The keyed answer is: The wording in the policy must refer to the Act", "Correct. The supplied answer table gives D: The wording in the policy must refer to the Act"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.218", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q12", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Which oversight group is responsible for providing assurance that a firm’s accounts are free from material mis-statement?", options: ["External auditors", "Internal auditors", "Compliance officers", "Trustees"], correctIndex: [0],
    explanation: "The verified answer is A. External auditors",
    incorrectExplanations: ["Correct. The supplied answer table gives A: External auditors", "This is not the verified answer. The keyed answer is: External auditors", "This is not the verified answer. The keyed answer is: External auditors", "This is not the verified answer. The keyed answer is: External auditors"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.218", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q13", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Disposal of which of the following would not give rise to a capital gains tax (CGT) charge?", options: ["main residence", "Investment trusts", "Shares", "Unit trusts"], correctIndex: [0],
    explanation: "The verified answer is A. main residence",
    incorrectExplanations: ["Correct. The supplied answer table gives A: main residence", "This is not the verified answer. The keyed answer is: main residence", "This is not the verified answer. The keyed answer is: main residence", "This is not the verified answer. The keyed answer is: main residence"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.219", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q14", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Melanie is subject to the FCA’s Certification Regime in a role at a large authorised firm. Which of the following is Melanie MOST likely to be undertaking?", options: ["Chief executive", "Human resources officer", "Non executive director", "Mortgage adviser"], correctIndex: [3],
    explanation: "The verified answer is D. Mortgage adviser",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Mortgage adviser", "This is not the verified answer. The keyed answer is: Mortgage adviser", "This is not the verified answer. The keyed answer is: Mortgage adviser", "Correct. The supplied answer table gives D: Mortgage adviser"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.219", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q15", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Which organisation is working with the financial services sector and other stakeholders to develop a national strategy to improve people’s financial capability?", options: ["MoneyHelper", "Bank of England", "Which?", "The FCA"], correctIndex: [0],
    explanation: "The verified answer is A. MoneyHelper",
    incorrectExplanations: ["Correct. The supplied answer table gives A: MoneyHelper", "This is not the verified answer. The keyed answer is: MoneyHelper", "This is not the verified answer. The keyed answer is: MoneyHelper", "This is not the verified answer. The keyed answer is: MoneyHelper"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.219", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q16", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Select the option that types of investment typically pay regular interest?", options: ["Commercial paper", "Corporate bonds", "Equities", "Treasury bills"], correctIndex: [1],
    explanation: "The verified answer is B. Corporate bonds",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Corporate bonds", "Correct. The supplied answer table gives B: Corporate bonds", "This is not the verified answer. The keyed answer is: Corporate bonds", "This is not the verified answer. The keyed answer is: Corporate bonds"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.219", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q17", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "The DAX is the main stock market of which country?", options: ["China", "France", "Hong Kong", "Germany"], correctIndex: [3],
    explanation: "The verified answer is D. Germany",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Germany", "This is not the verified answer. The keyed answer is: Germany", "This is not the verified answer. The keyed answer is: Germany", "Correct. The supplied answer table gives D: Germany"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.219", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q18", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Where a company has defaulted on some or all of its debt obligations, the company is most likely to have an S&P Global rating of:", options: ["A", "B-", "D", "C"], correctIndex: [2],
    explanation: "The verified answer is C. D",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: D", "This is not the verified answer. The keyed answer is: D", "Correct. The supplied answer table gives C: D", "This is not the verified answer. The keyed answer is: D"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.219", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q19", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Harold pays Class 4 National Insurance. This confirms that he is:", options: ["an employer", "employed only", "making voluntary contributions", "self employed only"], correctIndex: [3],
    explanation: "The verified answer is D. self employed only",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: self employed only", "This is not the verified answer. The keyed answer is: self employed only", "This is not the verified answer. The keyed answer is: self employed only", "Correct. The supplied answer table gives D: self employed only"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.220", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q20", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "The role of the Competition and Markets Authority (CMA) does not include which of the following responsibilities?", options: ["Ensuring that relevant markets function well.", "Investigating corporate mergers between organisations.", "Protecting consumers from unfair trading practices.", "Taking action to prevent anti-competitive behaviour."], correctIndex: [0],
    explanation: "The verified answer is A. Ensuring that relevant markets function well.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Ensuring that relevant markets function well.", "This is not the verified answer. The keyed answer is: Ensuring that relevant markets function well.", "This is not the verified answer. The keyed answer is: Ensuring that relevant markets function well.", "This is not the verified answer. The keyed answer is: Ensuring that relevant markets function well."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.220", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q21", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Which body has an objective of promoting the safety and soundness of the firms it regulates? The:", options: ["PRA", "FCA", "Bank of England", "Pensions Regulator"], correctIndex: [0],
    explanation: "The verified answer is A. PRA",
    incorrectExplanations: ["Correct. The supplied answer table gives A: PRA", "This is not the verified answer. The keyed answer is: PRA", "This is not the verified answer. The keyed answer is: PRA", "This is not the verified answer. The keyed answer is: PRA"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.220", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q22", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "The maximum benefit that generally applies to an individual income protection insurance policy is what percentage of pre-disability earnings?", options: ["Between 30% and 40% of earnings", "Between 50% and 65% of earnings", "Between 65% and 75% of earnings", "Between 80% and 100% of earnings"], correctIndex: [1],
    explanation: "The verified answer is B. Between 50% and 65% of earnings",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Between 50% and 65% of earnings", "Correct. The supplied answer table gives B: Between 50% and 65% of earnings", "This is not the verified answer. The keyed answer is: Between 50% and 65% of earnings", "This is not the verified answer. The keyed answer is: Between 50% and 65% of earnings"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.220", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q23", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Select the option that is most commonly an indicator of an increase in the M4 supply of money?", options: ["Decreasing consumer borrowing", "Decreasing consumer spending", "Increased public confidence", "Increasing rates of inflation"], correctIndex: [3],
    explanation: "The verified answer is D. Increasing rates of inflation",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Increasing rates of inflation", "This is not the verified answer. The keyed answer is: Increasing rates of inflation", "This is not the verified answer. The keyed answer is: Increasing rates of inflation", "Correct. The supplied answer table gives D: Increasing rates of inflation"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.220", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q24", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "James faced a bankruptcy petition in April 2023, having carried out a number of 'prior transactions' in previous years as shown below. Subject to investigation of the circumstances of each transaction, what is the earliest prior transaction the trustee in bankruptcy could have considered attacking?", options: ["April 2013", "April 2016", "April 2018", "April 2021"], correctIndex: [2],
    explanation: "The verified answer is C. April 2018",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: April 2018", "This is not the verified answer. The keyed answer is: April 2018", "Correct. The supplied answer table gives C: April 2018", "This is not the verified answer. The keyed answer is: April 2018"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.220", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q25", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "The Financial Conduct Authority's strategic objective is to:", options: ["ensure that the relevant markets function well.", "protect and enhance the integrity of the UK financial system.", "promote effective competition in the interests of consumers.", "secure an appropriate degree of protection for consumers. Colin and Karen are meeting with their financial adviser, Matthew, to review their respective retirement plans as it is a high priority for them both. Colin has a personal pension, whereas Karen has a defined-benefit scheme with her employer. Colin is earning £30,000 per annum and Karen is earning £35,000 per annum. They have recently repaid their mortgage after it reached its natural end of term. Karen is dissatisfied with conflicting information she has received from her pension scheme recently regarding the earliest date she can withdraw her benefits. She wishes to raise a complaint but is unsure on how to do this."], correctIndex: [0],
    explanation: "The verified answer is A. ensure that the relevant markets function well.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: ensure that the relevant markets function well.", "This is not the verified answer. The keyed answer is: ensure that the relevant markets function well.", "This is not the verified answer. The keyed answer is: ensure that the relevant markets function well.", "This is not the verified answer. The keyed answer is: ensure that the relevant markets function well."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.221", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q26", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Which stage of the financial life cycle are Colin and Karen least likely to be at?", options: ["Established family.", "Mature household.", "Retirement.", "Young adults in employment."], correctIndex: [3],
    explanation: "The verified answer is D. Young adults in employment.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Young adults in employment.", "This is not the verified answer. The keyed answer is: Young adults in employment.", "This is not the verified answer. The keyed answer is: Young adults in employment.", "Correct. The supplied answer table gives D: Young adults in employment."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.221", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q27", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Karen's pension benefits from her employer will ultimately be based upon?", options: ["Her national insurance contribution record.", "Her salary and years' service.", "The growth of the fund.", "The size of her fund."], correctIndex: [1],
    explanation: "The verified answer is B. Her salary and years' service.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Her salary and years' service.", "Correct. The supplied answer table gives B: Her salary and years' service.", "This is not the verified answer. The keyed answer is: Her salary and years' service.", "This is not the verified answer. The keyed answer is: Her salary and years' service."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.221", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q28", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "The earliest age at which Karen can take her pension benefits is the:", options: ["date of Karen's choice.", "normal minimum pension age.", "pension scheme’s defined retirement age", "state pension age"], correctIndex: [1],
    explanation: "The verified answer is B. normal minimum pension age.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: normal minimum pension age.", "Correct. The supplied answer table gives B: normal minimum pension age.", "This is not the verified answer. The keyed answer is: normal minimum pension age.", "This is not the verified answer. The keyed answer is: normal minimum pension age."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.221", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q29", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Should Karen decide to raise a complaint, to whom should she refer the matter? To:", options: ["The Financial Ombudsman scheme.", "The Pensions Ombudsman", "The Pensions Regulator", "the scheme’s trustees"], correctIndex: [3],
    explanation: "The verified answer is D. the scheme’s trustees",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: the scheme’s trustees", "This is not the verified answer. The keyed answer is: the scheme’s trustees", "This is not the verified answer. The keyed answer is: the scheme’s trustees", "Correct. The supplied answer table gives D: the scheme’s trustees"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.221", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q30", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Colin has made a voluntary National Insurance contribution and Karen's employer has paid the appropriate National Insurance contributions. What class of contributions will these be?", options: ["Class 1 and 3 respectively", "Class 3 and 1 respectively", "Class 3 and 4 respectively", "Class 4 and 3 respectively Adam is consulting with his legal adviser and wishes to set up a trust that will provide a regular income for his daughter, Joanna, immediately. His intention is that on Joanna's death, the balance of the trust will be distributed to Joanna's two children, Nathan and Aisha. Adam's legal adviser explains the various options and what each will entail, including any taxation implications. He also explains one option that would mean Joanna becoming the life tenant of the trust."], correctIndex: [1],
    explanation: "The verified answer is B. Class 3 and 1 respectively",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Class 3 and 1 respectively", "Correct. The supplied answer table gives B: Class 3 and 1 respectively", "This is not the verified answer. The keyed answer is: Class 3 and 1 respectively", "This is not the verified answer. The keyed answer is: Class 3 and 1 respectively"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.222", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q31", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Which type of trust is Adam's legal advisor most likely to recommend?", options: ["a discretionary trust", "a will trust", "an absolute trust", "an interest in possession trust"], correctIndex: [3],
    explanation: "The verified answer is D. an interest in possession trust",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: an interest in possession trust", "This is not the verified answer. The keyed answer is: an interest in possession trust", "This is not the verified answer. The keyed answer is: an interest in possession trust", "Correct. The supplied answer table gives D: an interest in possession trust"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.222", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q32", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Who is/are the settlor/s of the trust?", options: ["Joanna", "Nathan and Aisha", "Adam", "The legal adviser"], correctIndex: [2],
    explanation: "The verified answer is C. Adam",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Adam", "This is not the verified answer. The keyed answer is: Adam", "Correct. The supplied answer table gives C: Adam", "This is not the verified answer. The keyed answer is: Adam"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.222", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q33", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "What tax charge, if any, will the trust be subject to when it is created?", options: ["Joanna will be subject to capital gains tax on the total amount transferred to the trust.", "No tax is due as the transfer is designated as a chargeable lifetime transfer.", "Adam may be subject to an inheritance tax IHT charge as it is a chargeable lifetime transfer.", "Adam will be subject to income tax on the transfers he makes."], correctIndex: [2],
    explanation: "The verified answer is C. Adam may be subject to an inheritance tax IHT charge as it is a chargeable lifetime transfer.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Adam may be subject to an inheritance tax IHT charge as it is a chargeable lifetime transfer.", "This is not the verified answer. The keyed answer is: Adam may be subject to an inheritance tax IHT charge as it is a chargeable lifetime transfer.", "Correct. The supplied answer table gives C: Adam may be subject to an inheritance tax IHT charge as it is a chargeable lifetime transfer.", "This is not the verified answer. The keyed answer is: Adam may be subject to an inheritance tax IHT charge as it is a chargeable lifetime transfer."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.222", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q34", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Who is/are the remaindermen of the trust, if at all?", options: ["Joanna", "Nathan and Aisha", "No one", "Adam"], correctIndex: [1],
    explanation: "The verified answer is B. Nathan and Aisha",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Nathan and Aisha", "Correct. The supplied answer table gives B: Nathan and Aisha", "This is not the verified answer. The keyed answer is: Nathan and Aisha", "This is not the verified answer. The keyed answer is: Nathan and Aisha"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.222", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q35", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Who is/are the beneficiaries of the trust?", options: ["Joanna", "Joanna, Nathan and Aisha", "Nathan and Aisha", "Adam Fairfunds Ltd is an asset management company that is very small compared to its competitors. It employs 25 people, including Oliver, the CEO and senior fund manager, Jim, who is the Chief Finance Officer, and Ethan, who is an investment analyst. The Chief of Operations is Gloria, who has been at the firm since it started, nearly 30 years ago. She is finding the role increasingly demanding and is hoping to retire soon. In the meantime, Gloria is delegating an increasing number of her responsibilities to junior members of staff, particularly Jacob, an ambitious trainee fund manager, who joined the firm a few weeks ago but is very keen to make an impression."], correctIndex: [1],
    explanation: "The verified answer is B. Joanna, Nathan and Aisha",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Joanna, Nathan and Aisha", "Correct. The supplied answer table gives B: Joanna, Nathan and Aisha", "This is not the verified answer. The keyed answer is: Joanna, Nathan and Aisha", "This is not the verified answer. The keyed answer is: Joanna, Nathan and Aisha"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.223", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q36", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "In terms of firm classification for the purposes of the Senior Managers and Certification Regime (SM&CR), Fairfunds Ltd is most likely to be a:", options: ["core firm", "enhanced firm", "exempt firm", "reserved firm"], correctIndex: [0],
    explanation: "The verified answer is A. core firm",
    incorrectExplanations: ["Correct. The supplied answer table gives A: core firm", "This is not the verified answer. The keyed answer is: core firm", "This is not the verified answer. The keyed answer is: core firm", "This is not the verified answer. The keyed answer is: core firm"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.223", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q37", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "In order for Oliver, Jim and Gloria to be approved as senior managers under the Senior Managers and Certification Regime (SM&CR), what will have to have been included in each application to the FCA?", options: ["statement of responsibilities.", "An annual audit of their personal finances.", "An annual test of continued competence.", ""], correctIndex: [3],
    explanation: "The verified answer is D. ",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: ", "This is not the verified answer. The keyed answer is: ", "This is not the verified answer. The keyed answer is: ", "Correct. The supplied answer table gives D: "], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.223", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q38", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Gloria is responsible for more than one senior management function, having taken on the roles of other senior managers when they left the firm. In order to comply with FCA rules:", options: ["as the firm's CEO, Oliver is personally responsible for all of Gloria's regulated activities.", "Gloria will need to have been approved by Oliver for each senior management function.", "Gloria will need to have been approved by the FCA for each senior management function.", "Oliver can approve Gloria for any senior management function once she is authorised by the FCA."], correctIndex: [2],
    explanation: "The verified answer is C. Gloria will need to have been approved by the FCA for each senior management function.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Gloria will need to have been approved by the FCA for each senior management function.", "This is not the verified answer. The keyed answer is: Gloria will need to have been approved by the FCA for each senior management function.", "Correct. The supplied answer table gives C: Gloria will need to have been approved by the FCA for each senior management function.", "This is not the verified answer. The keyed answer is: Gloria will need to have been approved by the FCA for each senior management function."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.223", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q39", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Under the Senior Managers and Certification Regime (SM&CR), when fully trained Jacob will be a(n):", options: ["appointed representative", "approved person", "certified person", "competent adviser"], correctIndex: [2],
    explanation: "The verified answer is C. certified person",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: certified person", "This is not the verified answer. The keyed answer is: certified person", "Correct. The supplied answer table gives C: certified person", "This is not the verified answer. The keyed answer is: certified person"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.224", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-b-q40", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-b",
    text: "Gloria was tasked with the job of carrying out the fitness and propriety test for Jacob. Her enquiries revealed that Jacob had previously been a director of a limited company that subsequently became insolvent. Jacob provided an adequate explanation and passed the test, but which element of the fitness and propriety assessment could Jacob have potentially failed?", options: ["capability", "competence", "honesty, integrity and reputation", "Professionalism and respectability"], correctIndex: [2],
    explanation: "The verified answer is C. honesty, integrity and reputation",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: honesty, integrity and reputation", "This is not the verified answer. The keyed answer is: honesty, integrity and reputation", "Correct. The supplied answer table gives C: honesty, integrity and reputation", "This is not the verified answer. The keyed answer is: honesty, integrity and reputation"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.224", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q1", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Identify the process where lenders and borrowers interact directly rather than through an intermediary?", options: ["disintermediation", "netting", "reinsurance", "hedging"], correctIndex: [0],
    explanation: "The verified answer is A. disintermediation",
    incorrectExplanations: ["Correct. The supplied answer table gives A: disintermediation", "This is not the verified answer. The keyed answer is: disintermediation", "This is not the verified answer. The keyed answer is: disintermediation", "This is not the verified answer. The keyed answer is: disintermediation"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.225", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q2", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Select the option that is true of supply and demand in oil markets?", options: ["Equilibrium is the term used when supply and demand are balanced", "Oil producers can increase the market price by increasing production", "Prices fall when demand exceeds supply", "Supply and demand have no impact on prices"], correctIndex: [0],
    explanation: "The verified answer is A. Equilibrium is the term used when supply and demand are balanced",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Equilibrium is the term used when supply and demand are balanced", "This is not the verified answer. The keyed answer is: Equilibrium is the term used when supply and demand are balanced", "This is not the verified answer. The keyed answer is: Equilibrium is the term used when supply and demand are balanced", "This is not the verified answer. The keyed answer is: Equilibrium is the term used when supply and demand are balanced"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.225", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q3", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Select the option that is FALSE in relation to cash? It is suitable for those who:", options: ["have short term saving needs", "are needing to establish an emergency fund", "require income without taking investment risks", "require long term capital growth"], correctIndex: [3],
    explanation: "The verified answer is D. require long term capital growth",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: require long term capital growth", "This is not the verified answer. The keyed answer is: require long term capital growth", "This is not the verified answer. The keyed answer is: require long term capital growth", "Correct. The supplied answer table gives D: require long term capital growth"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.225", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q4", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Select the option that is not a money market instrument?", options: ["certificates of deposit", "commercial paper", "government bonds (gilts)", "treasury bills"], correctIndex: [2],
    explanation: "The verified answer is C. government bonds (gilts)",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: government bonds (gilts)", "This is not the verified answer. The keyed answer is: government bonds (gilts)", "Correct. The supplied answer table gives C: government bonds (gilts)", "This is not the verified answer. The keyed answer is: government bonds (gilts)"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.225", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q5", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "To which of the following is NOT an economic objective of a modern government? To have:", options: ["a balance of payments surplus", "economic growth", "low unemployment", "price stability"], correctIndex: [0],
    explanation: "The verified answer is A. a balance of payments surplus",
    incorrectExplanations: ["Correct. The supplied answer table gives A: a balance of payments surplus", "This is not the verified answer. The keyed answer is: a balance of payments surplus", "This is not the verified answer. The keyed answer is: a balance of payments surplus", "This is not the verified answer. The keyed answer is: a balance of payments surplus"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.225", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q6", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Authorities in one country allow firms in the UK to access their markets for limited services, providing the regulatory standards for the specific activity in both countries are broadly compatible. This describes:", options: ["equality", "equivalence", "parity", "passporting"], correctIndex: [1],
    explanation: "The verified answer is B. equivalence",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: equivalence", "Correct. The supplied answer table gives B: equivalence", "This is not the verified answer. The keyed answer is: equivalence", "This is not the verified answer. The keyed answer is: equivalence"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.225", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q7", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Any unused inheritance tax annual gift exemption:", options: ["cannot be carried forward", "can be carried forward for the following tax year but no further", "can be carried forward to any of the following three tax years", "can be carried forward indefinitely"], correctIndex: [1],
    explanation: "The verified answer is B. can be carried forward for the following tax year but no further",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: can be carried forward for the following tax year but no further", "Correct. The supplied answer table gives B: can be carried forward for the following tax year but no further", "This is not the verified answer. The keyed answer is: can be carried forward for the following tax year but no further", "This is not the verified answer. The keyed answer is: can be carried forward for the following tax year but no further"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.226", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q8", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Select the option that is NOT a role of the Bank of England?", options: ["banker to the banks", "controller of exchange rates", "issuer of bank notes", "lender of last resort"], correctIndex: [1],
    explanation: "The verified answer is B. controller of exchange rates",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: controller of exchange rates", "Correct. The supplied answer table gives B: controller of exchange rates", "This is not the verified answer. The keyed answer is: controller of exchange rates", "This is not the verified answer. The keyed answer is: controller of exchange rates"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.226", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q9", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "A major factor in consumers’ attitudes towards the financial services sector is their:", options: ["high level of satisfaction with their own finances", "impression that products are too simplistic", "lack of understanding of regulation", "limited financial competence"], correctIndex: [3],
    explanation: "The verified answer is D. limited financial competence",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: limited financial competence", "This is not the verified answer. The keyed answer is: limited financial competence", "This is not the verified answer. The keyed answer is: limited financial competence", "Correct. The supplied answer table gives D: limited financial competence"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.226", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q10", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Select the option that is NOT a typical need of a sole trader?", options: ["business banking", "business protection", "mortgages and loans", "shareholder protection"], correctIndex: [3],
    explanation: "The verified answer is D. shareholder protection",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: shareholder protection", "This is not the verified answer. The keyed answer is: shareholder protection", "This is not the verified answer. The keyed answer is: shareholder protection", "Correct. The supplied answer table gives D: shareholder protection"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.226", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q11", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "An applicant deliberately failed to answer the insurer’s questions fully and accurately on a life assurance proposal form. Under the Consumer Insurance Disclosure Act 2012, what is the MOST severe action the insurer is entitled to undertake in the event of a claim?", options: ["deduct the underpaid premiums from any claim", "pay a proportion of the claim related to the actual premiums paid", "recalculate and backdate the premium based on the correct information", "reject the claim and keep the premiums paid"], correctIndex: [3],
    explanation: "The verified answer is D. reject the claim and keep the premiums paid",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: reject the claim and keep the premiums paid", "This is not the verified answer. The keyed answer is: reject the claim and keep the premiums paid", "This is not the verified answer. The keyed answer is: reject the claim and keep the premiums paid", "Correct. The supplied answer table gives D: reject the claim and keep the premiums paid"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.226", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q12", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Roger recently died and left his entire estate under trust for his partner Jeremy to benefit as a life tenant. On Jeremy’s death, the proceeds will pass to Roger’s son. What type of trust is Roger most likely to have used?", options: ["a discretionary trust", "a flexible trust", "an absolute trust", "an interest in possession trust"], correctIndex: [3],
    explanation: "The verified answer is D. an interest in possession trust",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: an interest in possession trust", "This is not the verified answer. The keyed answer is: an interest in possession trust", "This is not the verified answer. The keyed answer is: an interest in possession trust", "Correct. The supplied answer table gives D: an interest in possession trust"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.226", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q13", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Gerd has set up a trust from which he could potentially benefit at some point. Which tax that would normally be avoided by placing assets in trust, would still apply in this case?", options: ["capital gains tax", "corporation tax", "inheritance tax", "withholding tax"], correctIndex: [2],
    explanation: "The verified answer is C. inheritance tax",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: inheritance tax", "This is not the verified answer. The keyed answer is: inheritance tax", "Correct. The supplied answer table gives C: inheritance tax", "This is not the verified answer. The keyed answer is: inheritance tax"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.227", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q14", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Select the option that is NOT exempt from authorisation under the Financial Services and Markets Act 2000?", options: ["an independent financial advisory firm", "trustees", "the Bank of England", "the London Stock Exchange"], correctIndex: [0],
    explanation: "The verified answer is A. an independent financial advisory firm",
    incorrectExplanations: ["Correct. The supplied answer table gives A: an independent financial advisory firm", "This is not the verified answer. The keyed answer is: an independent financial advisory firm", "This is not the verified answer. The keyed answer is: an independent financial advisory firm", "This is not the verified answer. The keyed answer is: an independent financial advisory firm"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.227", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q15", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Select the option that is NOT an operational objective of the FCA? To:", options: ["promote effective competition in the interests of consumers", "protect and enhance the integrity of the UK financial system", "protect consumers from bad conduct", "reduce investment risk for customers"], correctIndex: [3],
    explanation: "The verified answer is D. reduce investment risk for customers",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: reduce investment risk for customers", "This is not the verified answer. The keyed answer is: reduce investment risk for customers", "This is not the verified answer. The keyed answer is: reduce investment risk for customers", "Correct. The supplied answer table gives D: reduce investment risk for customers"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.227", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q16", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Which legislation established the Prudential Regulation Authority and the Financial Conduct Authority as part of a new regulatory framework?", options: ["the Bank of England and the Financial Services Act 2016", "the Financial Services Act 1986", "the Financial Services Act 2012", "the Financial Services and Markets Act 2000"], correctIndex: [2],
    explanation: "The verified answer is C. the Financial Services Act 2012",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: the Financial Services Act 2012", "This is not the verified answer. The keyed answer is: the Financial Services Act 2012", "Correct. The supplied answer table gives C: the Financial Services Act 2012", "This is not the verified answer. The keyed answer is: the Financial Services Act 2012"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.227", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q17", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Which specific body’s main responsibility is the “identification of, monitoring of, and taking of action to remove or reduce, systemic risks with a view to protecting and enhancing the resilience of the UK financial system”?", options: ["HM Treasury", "the Bank of England", "the Financial Policy Committee", "the Prudential Regulation Authority"], correctIndex: [2],
    explanation: "The verified answer is C. the Financial Policy Committee",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: the Financial Policy Committee", "This is not the verified answer. The keyed answer is: the Financial Policy Committee", "Correct. The supplied answer table gives C: the Financial Policy Committee", "This is not the verified answer. The keyed answer is: the Financial Policy Committee"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.227", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q18", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "How many objectives does the PRA have?", options: ["One", "Two", "Three", "Four"], correctIndex: [3],
    explanation: "The verified answer is D. Four",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Four", "This is not the verified answer. The keyed answer is: Four", "This is not the verified answer. The keyed answer is: Four", "Correct. The supplied answer table gives D: Four"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.227", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q19", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Which organisation within the financial services industry makes use of a Proactive Intervention Framework (PIF)?", options: ["the Bank of England", "the FCA", "the FOS", "the PRA"], correctIndex: [3],
    explanation: "The verified answer is D. the PRA",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: the PRA", "This is not the verified answer. The keyed answer is: the PRA", "This is not the verified answer. The keyed answer is: the PRA", "Correct. The supplied answer table gives D: the PRA"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.228", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q20", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Which body has the objective of contributing to securing an appropriate degree of protection for insurance policyholders?", options: ["the Bank of England", "the FCA", "the Pensions Regulator", "the PRA"], correctIndex: [3],
    explanation: "The verified answer is D. the PRA",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: the PRA", "This is not the verified answer. The keyed answer is: the PRA", "This is not the verified answer. The keyed answer is: the PRA", "Correct. The supplied answer table gives D: the PRA"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.228", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q21", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Hassan is a senior manager at a bank, and he is facing investigation under the Senior Managers Regime. Which of the following is FALSE?", options: ["Hassan must prove that he took reasonable steps to prevent the breach of regulations", "The regulator must prove that Hassan was a senior manager at the time of the breach", "The regulator must prove that Hassan was responsible for the department that caused the breach of regulations", "The regulator must prove that the bank has breached the regulations"], correctIndex: [0],
    explanation: "The verified answer is A. Hassan must prove that he took reasonable steps to prevent the breach of regulations",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Hassan must prove that he took reasonable steps to prevent the breach of regulations", "This is not the verified answer. The keyed answer is: Hassan must prove that he took reasonable steps to prevent the breach of regulations", "This is not the verified answer. The keyed answer is: Hassan must prove that he took reasonable steps to prevent the breach of regulations", "This is not the verified answer. The keyed answer is: Hassan must prove that he took reasonable steps to prevent the breach of regulations"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.228", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q22", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Which part of the FCA handbook contains the Principles of Business?", options: ["Business standards", "High level standards", "Prudential standards", "Specialist standards"], correctIndex: [1],
    explanation: "The verified answer is B. High level standards",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: High level standards", "Correct. The supplied answer table gives B: High level standards", "This is not the verified answer. The keyed answer is: High level standards", "This is not the verified answer. The keyed answer is: High level standards"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.228", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q23", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Ethan performs a significant harm function within his authorised firm. With what minimum frequency must his fitness and propriety be assessed by the firm?", options: ["monthly", "every three months", "every six months", "annually"], correctIndex: [3],
    explanation: "The verified answer is D. annually",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: annually", "This is not the verified answer. The keyed answer is: annually", "This is not the verified answer. The keyed answer is: annually", "Correct. The supplied answer table gives D: annually"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.228", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q24", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Which part of the FCA handbook covers senior management arrangements, systems and controls?", options: ["high level standards", "prudential standards", "business standards", "training and competence"], correctIndex: [0],
    explanation: "The verified answer is A. high level standards",
    incorrectExplanations: ["Correct. The supplied answer table gives A: high level standards", "This is not the verified answer. The keyed answer is: high level standards", "This is not the verified answer. The keyed answer is: high level standards", "This is not the verified answer. The keyed answer is: high level standards"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.228", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q4", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Consumer support", options: ["1,2 and 3", "1,2,3 and 4", "1,3 and 4", "2, 3 and 4 Case Study 1 Elena is 25 and engaged to Ethan age 28. She has asked Chloe a financial adviser for advice on a number of issues. • The couple have exchanged contracts on their first house and have a repayment mortgage arranged. Elena is concerned that they have not arranged life cover to protect the mortgage. • Elena recently received an inheritance from her grandmother. After putting aside her share for the house deposit, Alesia put £10,000 in a deposit account to give her funds to cover emergencies and unexpected events. She does not want to take any risks with the money but is not sure if this is the best place for it. • Elena has £50,000 of her inheritance remaining which she intends to invest. Other than growing its value, she has no particular objective at the moment and she does not expect to need the money for another 10 years. It might be useful then to help with school fees should they have children. She realizes that achieving growth will involve an element of risk however Chloe describes Elena having a cautious to balanced attitude to risk. • Elena has read about collective investments and has some areas she would like to clarify for her."], correctIndex: [1],
    explanation: "The verified answer is B. 1,2,3 and 4",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: 1,2,3 and 4", "Correct. The supplied answer table gives B: 1,2,3 and 4", "This is not the verified answer. The keyed answer is: 1,2,3 and 4", "This is not the verified answer. The keyed answer is: 1,2,3 and 4"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.229", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q26", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Identify the most suitable life policy to meet Elena and Ethan’s mortgage concern?", options: ["a single life level term policy on each of them", "a form of decreasing insurance on a joint life first death basis", "level term insurance on a joint life first death basis", "whole of life assurance on a joint life second death basis"], correctIndex: [1],
    explanation: "The verified answer is B. a form of decreasing insurance on a joint life first death basis",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: a form of decreasing insurance on a joint life first death basis", "Correct. The supplied answer table gives B: a form of decreasing insurance on a joint life first death basis", "This is not the verified answer. The keyed answer is: a form of decreasing insurance on a joint life first death basis", "This is not the verified answer. The keyed answer is: a form of decreasing insurance on a joint life first death basis"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.229", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q27", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "The most suitable product for the money Elena has set aside for emergencies would be:", options: ["public limited company shares", "a venture capital trust", "an instant access cash ISA", "a fixed rate building society deposit account"], correctIndex: [2],
    explanation: "The verified answer is C. an instant access cash ISA",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: an instant access cash ISA", "This is not the verified answer. The keyed answer is: an instant access cash ISA", "Correct. The supplied answer table gives C: an instant access cash ISA", "This is not the verified answer. The keyed answer is: an instant access cash ISA"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.230", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q28", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Considering her attitude to risk, which of the following would be least suitable equity based investment to achieve Elena’s need for growth with her £50,000", options: ["enterprise investment scheme", "investment trust", "open ended investment company", "unit trust"], correctIndex: [0],
    explanation: "The verified answer is A. enterprise investment scheme",
    incorrectExplanations: ["Correct. The supplied answer table gives A: enterprise investment scheme", "This is not the verified answer. The keyed answer is: enterprise investment scheme", "This is not the verified answer. The keyed answer is: enterprise investment scheme", "This is not the verified answer. The keyed answer is: enterprise investment scheme"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.230", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q29", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Elena has asked Chloe to explain the cancellation price on unit trusts as it does not make sense to her. Chloe correctly states that the cancellation price is the price Elena:", options: ["would pay to buy the units from the unit trust manager", "is likely to receive if the manger had to buy units back during a dramatic market fall", "would receive if she sold units back to the unit trust manager", "is likely to receive if she cancelled the contract within the cooling off period"], correctIndex: [1],
    explanation: "The verified answer is B. is likely to receive if the manger had to buy units back during a dramatic market fall",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: is likely to receive if the manger had to buy units back during a dramatic market fall", "Correct. The supplied answer table gives B: is likely to receive if the manger had to buy units back during a dramatic market fall", "This is not the verified answer. The keyed answer is: is likely to receive if the manger had to buy units back during a dramatic market fall", "This is not the verified answer. The keyed answer is: is likely to receive if the manger had to buy units back during a dramatic market fall"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.230", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q30", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Elena understand the term ‘gearing’ but is not sure which investment products can benefit from it. Chloe explains that gearing can be used by:", options: ["cash ISAs", "investment trusts", "OEICs", "unit trusts Case Study 2 Adam was divorced 12 years ago and after a long illness has just passed away. He had a valid will in place written 10 years ago, leaving his estate split equally between his three adult children, Michael, Keith and Marianne. Adam had been in a relationship with his partner Nadia for 7 years. Adam was a partner in an engineering business with James and George which has prospered over the years. There is a partnership agreement which states that on the death of one of the partners, the surviving partners will buy the deceased’s share of the business from their estate."], correctIndex: [1],
    explanation: "The verified answer is B. investment trusts",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: investment trusts", "Correct. The supplied answer table gives B: investment trusts", "This is not the verified answer. The keyed answer is: investment trusts", "This is not the verified answer. The keyed answer is: investment trusts"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.230", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q31", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Having been named as the executor in Adam’s will, Marianne will have the legal authority to commence distributing his estate:", options: ["immediately after his death", "once letters of administration have been granted", "once probate has been granted", "once the beneficiaries agree the terms of the will"], correctIndex: [2],
    explanation: "The verified answer is C. once probate has been granted",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: once probate has been granted", "This is not the verified answer. The keyed answer is: once probate has been granted", "Correct. The supplied answer table gives C: once probate has been granted", "This is not the verified answer. The keyed answer is: once probate has been granted"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.231", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q32", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Marianne has noted an additional page attached to Adam’s will expressing his wish to leave his only grandchild, now aged 8, £10,000 to be held in trust. Which of the following is FALSE in relation to the additional sheet?", options: ["as long as certain requirements have been met, it forms part of the original will.", "it confirms the continuing validity of the original will", "it forms a codicil to the will", "Adam’s signature to the page must have been witnessed by at least one person"], correctIndex: [3],
    explanation: "The verified answer is D. Adam’s signature to the page must have been witnessed by at least one person",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Adam’s signature to the page must have been witnessed by at least one person", "This is not the verified answer. The keyed answer is: Adam’s signature to the page must have been witnessed by at least one person", "This is not the verified answer. The keyed answer is: Adam’s signature to the page must have been witnessed by at least one person", "Correct. The supplied answer table gives D: Adam’s signature to the page must have been witnessed by at least one person"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.231", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q33", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Michael feels that Adam would have wanted to provide for Nadia but did not get around to changing his will. He has suggested that each of Adam’s children give up some of their inheritance to provide for her in a way that would also be effective for inheritance tax mitigation. Unfortunately, Keith does not agree. Which of the following statements is TRUE?", options: ["Keith’s objection would not prevent Michael and Marianne doing as Michael suggests.", "The arrangement would have to be executed within one year of Adam’s death to be effective for IHT planning", "The plan cannot go ahead because Keith does not agree", "The plan can only be achieved through a disclaimer."], correctIndex: [0],
    explanation: "The verified answer is A. Keith’s objection would not prevent Michael and Marianne doing as Michael suggests.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Keith’s objection would not prevent Michael and Marianne doing as Michael suggests.", "This is not the verified answer. The keyed answer is: Keith’s objection would not prevent Michael and Marianne doing as Michael suggests.", "This is not the verified answer. The keyed answer is: Keith’s objection would not prevent Michael and Marianne doing as Michael suggests.", "This is not the verified answer. The keyed answer is: Keith’s objection would not prevent Michael and Marianne doing as Michael suggests."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.231", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q34", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Identify the most likely arrangement that would be in place to meet the requirement in the partnership agreement on Adam’s death?", options: ["James and George would have agreed to use personal funds to meet the requirement", "James and George would each have taken out life insurance on Adam", "Adam would have taken out life assurance in trust for James and George", "The agreement would permit James and George to use partnership funds to meet the requirement."], correctIndex: [2],
    explanation: "The verified answer is C. Adam would have taken out life assurance in trust for James and George",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Adam would have taken out life assurance in trust for James and George", "This is not the verified answer. The keyed answer is: Adam would have taken out life assurance in trust for James and George", "Correct. The supplied answer table gives C: Adam would have taken out life assurance in trust for James and George", "This is not the verified answer. The keyed answer is: Adam would have taken out life assurance in trust for James and George"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.231", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q35", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "The difference between Adam’s partnership and a limited liability partnership is:", options: ["only Adam’s partnership requires a partnership agreement", "the extent of the partners’ responsibility for partnership debts", "the minimum number of partners required", "the taxation treatment of profits Case Study 3 Brading Finance is a small firm that describes its services in marketing material as offering independent financial advice. The firm is owned and managed by Miles, a sole trader who employs 3 financial advisers and an administrator. In the last accounting year, the firm had turnover of £400,000 with a net profit of £120,000. The firm is authorised to hold client money or assets on behalf of their clients. Some months ago, during a check on the accounts, the administrator found £120 belonging to a client who had not been in contact with the firm for 8 years. Despite sending 2 letters to the last known address, nothing has been heard from the client."], correctIndex: [1],
    explanation: "The verified answer is B. the extent of the partners’ responsibility for partnership debts",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: the extent of the partners’ responsibility for partnership debts", "Correct. The supplied answer table gives B: the extent of the partners’ responsibility for partnership debts", "This is not the verified answer. The keyed answer is: the extent of the partners’ responsibility for partnership debts", "This is not the verified answer. The keyed answer is: the extent of the partners’ responsibility for partnership debts"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.231", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q36", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "In relation to its responsibility for prudential regulation, the FCA would regard Brading Finance as being in which category of firm?", options: ["P1", "P2", "P3", "The FCA would not have prudential responsibility of Brading Finance"], correctIndex: [2],
    explanation: "The verified answer is C. P3",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: P3", "This is not the verified answer. The keyed answer is: P3", "Correct. The supplied answer table gives C: P3", "This is not the verified answer. The keyed answer is: P3"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.232", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q37", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Who if anyone in Brading Finance would be subject to the FCA Certification regime?", options: ["Miles only", "The three advisers only", "Miles and the three advisers only", "Miles, the three advisers and the administrator"], correctIndex: [1],
    explanation: "The verified answer is B. The three advisers only",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: The three advisers only", "Correct. The supplied answer table gives B: The three advisers only", "This is not the verified answer. The keyed answer is: The three advisers only", "This is not the verified answer. The keyed answer is: The three advisers only"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.232", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q38", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "The FCA’s Senior Managers and Certification Regime would require Brading Finance to appoint a person or people to which senior management function(s)?", options: ["Limited scope function (SMF 29) only", "Compliance Oversight function (SMF 16) only", "Limited scope (SMF 29) and Compliance oversight (SM16)", "Brading Finance would not fall under the Senior managers regime"], correctIndex: [0],
    explanation: "The verified answer is A. Limited scope function (SMF 29) only",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Limited scope function (SMF 29) only", "This is not the verified answer. The keyed answer is: Limited scope function (SMF 29) only", "This is not the verified answer. The keyed answer is: Limited scope function (SMF 29) only", "This is not the verified answer. The keyed answer is: Limited scope function (SMF 29) only"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.232", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q39", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "Miles and his advisers will be included in a directory of certified and assessed persons maintained by the FCA. This directory is contained in the FCA:", options: ["Certification Directory", "Approved Persons Register", "Financial Services Register", "Authorisation Register"], correctIndex: [2],
    explanation: "The verified answer is C. Financial Services Register",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Financial Services Register", "This is not the verified answer. The keyed answer is: Financial Services Register", "Correct. The supplied answer table gives C: Financial Services Register", "This is not the verified answer. The keyed answer is: Financial Services Register"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.232", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u1-specimen-c-q40", module: 'cemap1', unitKey: "unit1", topicKey: "c1-u1-specimen-c",
    text: "The administrator has suggested that the unclaimed client money could be given to charity as the client is obviously not concerned. What is the position regarding this ?", options: ["the firm must hold the money until the client makes contact", "the firm must contact the client once more before giving the money to charity", "the firm must contact the client 3 more times before giving it to charity", "The amount involved is too high to give to charity without permission"], correctIndex: [1],
    explanation: "The verified answer is B. the firm must contact the client once more before giving the money to charity",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: the firm must contact the client once more before giving the money to charity", "Correct. The supplied answer table gives B: the firm must contact the client once more before giving the money to charity", "This is not the verified answer. The keyed answer is: the firm must contact the client once more before giving the money to charity", "This is not the verified answer. The keyed answer is: the firm must contact the client once more before giving the money to charity"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.232", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q1", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Which types of financial advice are types of streamlined advice?", options: ["All regulated advice.", "Focused advice and simplified advice.", "Focused advice only.", "Guidance."], correctIndex: [1],
    explanation: "The verified answer is B. Focused advice and simplified advice.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Focused advice and simplified advice.", "Correct. The supplied answer table gives B: Focused advice and simplified advice.", "This is not the verified answer. The keyed answer is: Focused advice and simplified advice.", "This is not the verified answer. The keyed answer is: Focused advice and simplified advice."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.233", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q2", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "A customer bought 5,000 units in a unit trust at an offer price of £1.00. Seven days later he returned the cancellation notice, at which point the bid price was 85p, the offer price 90p and the cancellation price 83p. How much would he receive back?", options: ["£4,150", "£4,250", "£4,500", "£5,000"], correctIndex: [2],
    explanation: "The verified answer is C. £4,500",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: £4,500", "This is not the verified answer. The keyed answer is: £4,500", "Correct. The supplied answer table gives C: £4,500", "This is not the verified answer. The keyed answer is: £4,500"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.233", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q3", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "An appropriateness test must be undertaken on an execution-only sale of which type of product?", options: ["Endowment plans used to repay a mortgage.", "OEICs", "Tax-exempt unauthorised unit trust.", "Unit-linked investment bonds."], correctIndex: [2],
    explanation: "The verified answer is C. Tax-exempt unauthorised unit trust.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Tax-exempt unauthorised unit trust.", "This is not the verified answer. The keyed answer is: Tax-exempt unauthorised unit trust.", "Correct. The supplied answer table gives C: Tax-exempt unauthorised unit trust.", "This is not the verified answer. The keyed answer is: Tax-exempt unauthorised unit trust."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.233", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q4", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Select the option that is not one of the principal money laundering offences?", options: ["Acquiring", "Concealing", "Arranging", "Tipping off"], correctIndex: [3],
    explanation: "The verified answer is D. Tipping off",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Tipping off", "This is not the verified answer. The keyed answer is: Tipping off", "This is not the verified answer. The keyed answer is: Tipping off", "Correct. The supplied answer table gives D: Tipping off"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.233", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q5", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "In what circumstances, if any, is an independent financial advisers permitted to use a panel of providers?", options: ["In all circumstances.", "In no circumstances.", "Only if the panel has been approved by the FCA.", "Only if the panel is reviewed regularly."], correctIndex: [3],
    explanation: "The verified answer is D. Only if the panel is reviewed regularly.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Only if the panel is reviewed regularly.", "This is not the verified answer. The keyed answer is: Only if the panel is reviewed regularly.", "This is not the verified answer. The keyed answer is: Only if the panel is reviewed regularly.", "Correct. The supplied answer table gives D: Only if the panel is reviewed regularly."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.233", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q6", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Select the option that is true of an adviser's statement of professional standing (SPS)? It:", options: ["can be validated by the adviser's firm.", "is issued by the FCA.", "is valid for 12 months.", "must be shown to clients on the first contact."], correctIndex: [2],
    explanation: "The verified answer is C. is valid for 12 months.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: is valid for 12 months.", "This is not the verified answer. The keyed answer is: is valid for 12 months.", "Correct. The supplied answer table gives C: is valid for 12 months.", "This is not the verified answer. The keyed answer is: is valid for 12 months."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.234", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q7", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Under anti-money-laundering legislation, records of identification obtained from individuals must be held for a minimum of:", options: ["three years from the beginning of a customer relationship.", "three years from the end of a customer relationship.", "five years from the beginning of a customer relationship.", "five years from the end of a customer relationship."], correctIndex: [3],
    explanation: "The verified answer is D. five years from the end of a customer relationship.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: five years from the end of a customer relationship.", "This is not the verified answer. The keyed answer is: five years from the end of a customer relationship.", "This is not the verified answer. The keyed answer is: five years from the end of a customer relationship.", "Correct. The supplied answer table gives D: five years from the end of a customer relationship."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.234", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q8", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Which party is responsible for verifying that a financial adviser working for a large firm has completed the required number of CPD hours each year?", options: ["An accredited body.", "An authorised independent assessor.", "The adviser's employer.", "The Financial Conduct Authority."], correctIndex: [0],
    explanation: "The verified answer is A. An accredited body.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: An accredited body.", "This is not the verified answer. The keyed answer is: An accredited body.", "This is not the verified answer. The keyed answer is: An accredited body.", "This is not the verified answer. The keyed answer is: An accredited body."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.234", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q9", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Common characteristics of ethical behaviour in a business includes the following, except:", options: ["acting within the rules but not the spirit of the law and regulations.", "service excellence.", "social consciousness.", "transparency."], correctIndex: [0],
    explanation: "The verified answer is A. acting within the rules but not the spirit of the law and regulations.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: acting within the rules but not the spirit of the law and regulations.", "This is not the verified answer. The keyed answer is: acting within the rules but not the spirit of the law and regulations.", "This is not the verified answer. The keyed answer is: acting within the rules but not the spirit of the law and regulations.", "This is not the verified answer. The keyed answer is: acting within the rules but not the spirit of the law and regulations."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.234", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q10", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Which of the FCA's Principles for Businesses covers conflicts of interest?", options: ["Principle 6", "Principle 7", "Principle 8", "Principle 9"], correctIndex: [2],
    explanation: "The verified answer is C. Principle 8",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Principle 8", "This is not the verified answer. The keyed answer is: Principle 8", "Correct. The supplied answer table gives C: Principle 8", "This is not the verified answer. The keyed answer is: Principle 8"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.234", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q11", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Identify the cooling off period for a cash ISA?", options: ["7 days", "14 days", "28 days", "30 days"], correctIndex: [1],
    explanation: "The verified answer is B. 14 days",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: 14 days", "Correct. The supplied answer table gives B: 14 days", "This is not the verified answer. The keyed answer is: 14 days", "This is not the verified answer. The keyed answer is: 14 days"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.234", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q12", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Under FCA rules, which customer category are afforded the highest level of protection?", options: ["Eligible counterparty.", "Professional client.", "Private client", "Retail client."], correctIndex: [3],
    explanation: "The verified answer is D. Retail client.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Retail client.", "This is not the verified answer. The keyed answer is: Retail client.", "This is not the verified answer. The keyed answer is: Retail client.", "Correct. The supplied answer table gives D: Retail client."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.235", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q13", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "The requirement for authorised firms to explicitly treat customers fairly is embedded within the:", options: ["Competition and Markets Authority's rules.", "FCA's intensive supervision initiative.", "FCA's Market Conduct sourcebook.", "FCA's Principles for Businesses."], correctIndex: [3],
    explanation: "The verified answer is D. FCA's Principles for Businesses.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: FCA's Principles for Businesses.", "This is not the verified answer. The keyed answer is: FCA's Principles for Businesses.", "This is not the verified answer. The keyed answer is: FCA's Principles for Businesses.", "Correct. The supplied answer table gives D: FCA's Principles for Businesses."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.235", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q14", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "A mortgage adviser is required to pass an appropriate:", options: ["Level 3 qualification within 36 months of taking up the role.", "Level 3 qualification within 48 months of taking up the role.", "Level 4 qualification within 36 months of taking up the role.", "Level 4 qualification within 48 months of taking up the role."], correctIndex: [1],
    explanation: "The verified answer is B. Level 3 qualification within 48 months of taking up the role.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Level 3 qualification within 48 months of taking up the role.", "Correct. The supplied answer table gives B: Level 3 qualification within 48 months of taking up the role.", "This is not the verified answer. The keyed answer is: Level 3 qualification within 48 months of taking up the role.", "This is not the verified answer. The keyed answer is: Level 3 qualification within 48 months of taking up the role."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.235", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q15", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Robert received investment advice seven years ago and realised three years ago that he might have been badly advised. Within what maximum further period must he submit a complaint to the firm, should he wish to do so?", options: ["He is unable to complain as he is already out of time.", "One year", "Two years", "Three years"], correctIndex: [0],
    explanation: "The verified answer is A. He is unable to complain as he is already out of time.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: He is unable to complain as he is already out of time.", "This is not the verified answer. The keyed answer is: He is unable to complain as he is already out of time.", "This is not the verified answer. The keyed answer is: He is unable to complain as he is already out of time.", "This is not the verified answer. The keyed answer is: He is unable to complain as he is already out of time."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.235", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q16", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Where an authorised firm provides a recommendation to a customer, the FCA requires that the recommendation must be:", options: ["balanced.", "fair.", "relevant", "suitable"], correctIndex: [3],
    explanation: "The verified answer is D. suitable",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: suitable", "This is not the verified answer. The keyed answer is: suitable", "This is not the verified answer. The keyed answer is: suitable", "Correct. The supplied answer table gives D: suitable"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.235", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q17", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Identify the maximum claim amount for long-term care insurance that a married couple could successfully make, under the FSCS?", options: ["£85,000", "£100,000", "£175,000", "Unlimited"], correctIndex: [3],
    explanation: "The verified answer is D. Unlimited",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Unlimited", "This is not the verified answer. The keyed answer is: Unlimited", "This is not the verified answer. The keyed answer is: Unlimited", "Correct. The supplied answer table gives D: Unlimited"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.235", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q18", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "For what minimum period must an authorised firm keep records of complaint made about an income protection insurance policy?", options: ["Three years", "five years", "six years", "seven years"], correctIndex: [0],
    explanation: "The verified answer is A. Three years",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Three years", "This is not the verified answer. The keyed answer is: Three years", "This is not the verified answer. The keyed answer is: Three years", "This is not the verified answer. The keyed answer is: Three years"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.236", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q19", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Select the item that individual conduct rules apply only to senior managers?", options: ["Act with due skill, care and diligence.", "Act with integrity.", "Be open and cooperative with the FCA, the PRA and other regulators.", "Disclose any information about which the FCA or PRA would reasonably expect notice."], correctIndex: [3],
    explanation: "The verified answer is D. Disclose any information about which the FCA or PRA would reasonably expect notice.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Disclose any information about which the FCA or PRA would reasonably expect notice.", "This is not the verified answer. The keyed answer is: Disclose any information about which the FCA or PRA would reasonably expect notice.", "This is not the verified answer. The keyed answer is: Disclose any information about which the FCA or PRA would reasonably expect notice.", "Correct. The supplied answer table gives D: Disclose any information about which the FCA or PRA would reasonably expect notice."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.236", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q20", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Where an authorised firm offers independent financial advice, it is not an FCA requirement that the advice is:", options: ["comprehensive", "fair", "restricted", "unbiased"], correctIndex: [2],
    explanation: "The verified answer is C. restricted",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: restricted", "This is not the verified answer. The keyed answer is: restricted", "Correct. The supplied answer table gives C: restricted", "This is not the verified answer. The keyed answer is: restricted"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.236", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q21", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Select the option that is an important part of the listening process during a client interview?", options: ["Acknowledging.", "Agreeing.", "Questioning.", "Speaking."], correctIndex: [0],
    explanation: "The verified answer is A. Acknowledging.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Acknowledging.", "This is not the verified answer. The keyed answer is: Acknowledging.", "This is not the verified answer. The keyed answer is: Acknowledging.", "This is not the verified answer. The keyed answer is: Acknowledging."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.236", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q22", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Select the option that would be regarded as being a closed question?", options: ["How would you feel if your investments were to fall?", "What are the most important things you would like me to address?", "What would that mean to you?", "When were you born?"], correctIndex: [3],
    explanation: "The verified answer is D. When were you born?",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: When were you born?", "This is not the verified answer. The keyed answer is: When were you born?", "This is not the verified answer. The keyed answer is: When were you born?", "Correct. The supplied answer table gives D: When were you born?"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.236", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q23", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Phil has recently purchased a series of financial products. Which of the following products will be within the cancellation period should Phil decide to cancel the product 28 days after purchase?", options: ["£50,000 investment into an OEIC.", "", "", ""], correctIndex: [0],
    explanation: "The verified answer is A. £50,000 investment into an OEIC.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: £50,000 investment into an OEIC.", "This is not the verified answer. The keyed answer is: £50,000 investment into an OEIC.", "This is not the verified answer. The keyed answer is: £50,000 investment into an OEIC.", "This is not the verified answer. The keyed answer is: £50,000 investment into an OEIC."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.236", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q24", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Financial advisers must obtain a Statement of Professional Standing from an accredited body:", options: ["annually", "every three years", "every five years", "when they first achieve competent status only"], correctIndex: [0],
    explanation: "The verified answer is A. annually",
    incorrectExplanations: ["Correct. The supplied answer table gives A: annually", "This is not the verified answer. The keyed answer is: annually", "This is not the verified answer. The keyed answer is: annually", "This is not the verified answer. The keyed answer is: annually"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.237", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q25", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Which type of ethical theory looks at the nature of moral judgements and does not consider whether anything is actually right or wrong?", options: ["applied ethics", "Deontological ethics", "Meta-ethics", "Natural ethics Davina is a member of the compliance team at Excelsior Finance, a firm offering independent financial advice and whole of market mortgage advice. Six months ago the firm launched a limited range of its own packaged investment products. A recent supervisory visit from the FCA revealed a number of issues that raised concerns and the directors of the firm have asked Davina to investigate and to check any other potential compliance issues not mentioned by the FCA. The particular issues are: • financial promotions for some of the firm’s own investment products • the firm has 3 employees whose role is to make cold calls to prospective investors but the visit identified one of the team made a few calls that breached FCA rules • FCA rules require firms to produce their own initial disclosure documentation. The marketing team have just updated the firm’s investment related documentation and Davina has spotted a problem that should be addressed before it is used. • Davina has discovered that some of the firm’s advisers arrange wills and trusts services for their clients as a representative of Gateway Wills and Trusts, a firm specialising in that area. She needs to check Excelsior’s position in relation to those services. Excelsior Finance have shown an interest in offering robo advice as part of their investment services and Davina has been asked to produce an assessment of how it could work for them."], correctIndex: [2],
    explanation: "The verified answer is C. Meta-ethics",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Meta-ethics", "This is not the verified answer. The keyed answer is: Meta-ethics", "Correct. The supplied answer table gives C: Meta-ethics", "This is not the verified answer. The keyed answer is: Meta-ethics"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.237", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q26", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Identify the most likely problem identified with Excelsior Finance’s financial promotions?", options: ["they warn that past performance is not necessarily a reliable indicator of future results", "they use unsolicited mailshots to prospective clients", "the use of past performance data in the promotions", "they do not use comparisons with other companies products"], correctIndex: [2],
    explanation: "The verified answer is C. the use of past performance data in the promotions",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: the use of past performance data in the promotions", "This is not the verified answer. The keyed answer is: the use of past performance data in the promotions", "Correct. The supplied answer table gives C: the use of past performance data in the promotions", "This is not the verified answer. The keyed answer is: the use of past performance data in the promotions"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.238", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q27", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "The action from the cold call team member will have caused which breach of FCA rules? The calls related to:", options: ["life assurance", "unit trusts", "open ended investment companies", "mortgages"], correctIndex: [3],
    explanation: "The verified answer is D. mortgages",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: mortgages", "This is not the verified answer. The keyed answer is: mortgages", "This is not the verified answer. The keyed answer is: mortgages", "Correct. The supplied answer table gives D: mortgages"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.238", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q28", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "What is most likely to be the problem Davina has identified with the firm’s initial disclosure documentation?", options: ["the document is published on the firm’s website", "there is no information about the Financial Services Compensation Scheme", "it includes information about how the firm evaluates investment performance", "there is no information about the Financial Ombudsman Service"], correctIndex: [1],
    explanation: "The verified answer is B. there is no information about the Financial Services Compensation Scheme",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: there is no information about the Financial Services Compensation Scheme", "Correct. The supplied answer table gives B: there is no information about the Financial Services Compensation Scheme", "This is not the verified answer. The keyed answer is: there is no information about the Financial Services Compensation Scheme", "This is not the verified answer. The keyed answer is: there is no information about the Financial Services Compensation Scheme"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.238", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q29", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "In relation to the wills and trusts arranged by their advisers, which of the following is true?", options: ["Excelsior Finance would be solely responsible for the adviser’s conduct", "Neither Excelsior Finance nor Gateway Wills and Trusts would be responsible for the adviser’s conduct", "Gateway Wills and Trusts would be solely responsible for the adviser’s conduct", "Excelsior and Gateway would be jointly responsible for the adviser’s conduct"], correctIndex: [2],
    explanation: "The verified answer is C. Gateway Wills and Trusts would be solely responsible for the adviser’s conduct",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Gateway Wills and Trusts would be solely responsible for the adviser’s conduct", "This is not the verified answer. The keyed answer is: Gateway Wills and Trusts would be solely responsible for the adviser’s conduct", "Correct. The supplied answer table gives C: Gateway Wills and Trusts would be solely responsible for the adviser’s conduct", "This is not the verified answer. The keyed answer is: Gateway Wills and Trusts would be solely responsible for the adviser’s conduct"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.238", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q30", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "A colleague has suggested that Davina is wrong on one element of the assessment of robo-advice. Davina is wrong in stating that:", options: ["the advice does not have to meet all the regulatory standards of normal advice", "although technology based, the process can involve personal interaction with the adviser", "hybrid advice can be delivered online, over the phone or in person", "robo-advice could be used for other client needs."], correctIndex: [0],
    explanation: "The verified answer is A. the advice does not have to meet all the regulatory standards of normal advice",
    incorrectExplanations: ["Correct. The supplied answer table gives A: the advice does not have to meet all the regulatory standards of normal advice", "This is not the verified answer. The keyed answer is: the advice does not have to meet all the regulatory standards of normal advice", "This is not the verified answer. The keyed answer is: the advice does not have to meet all the regulatory standards of normal advice", "This is not the verified answer. The keyed answer is: the advice does not have to meet all the regulatory standards of normal advice"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.238", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q31", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Callum informs Martin that his mother gave him an additional £100,000 two years before she died. Which of the following statements is true?", options: ["Martin should inform Callum that he should declare the gift for inheritance tax purposes.", "Martin should notify his money-laundering reporting officer and ask for advice.", "Martin should tell Callum that this will not affect the estate, as the gift was made two years ago.", "No additional inheritance tax will be charged."], correctIndex: [0],
    explanation: "The verified answer is A. Martin should inform Callum that he should declare the gift for inheritance tax purposes.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Martin should inform Callum that he should declare the gift for inheritance tax purposes.", "This is not the verified answer. The keyed answer is: Martin should inform Callum that he should declare the gift for inheritance tax purposes.", "This is not the verified answer. The keyed answer is: Martin should inform Callum that he should declare the gift for inheritance tax purposes.", "This is not the verified answer. The keyed answer is: Martin should inform Callum that he should declare the gift for inheritance tax purposes."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.239", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q32", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "In respect of appropriate ethical standards, how should Martin proceed with advising Callum and Karen?", options: ["Advise Callum only, as he needs investment advice.", "Advise both clients and maintain a neutral position.", "Advise both clients, providing copies of all documentation to each.", "Recommend that all advice be given only when both clients are present."], correctIndex: [1],
    explanation: "The verified answer is B. Advise both clients and maintain a neutral position.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Advise both clients and maintain a neutral position.", "Correct. The supplied answer table gives B: Advise both clients and maintain a neutral position.", "This is not the verified answer. The keyed answer is: Advise both clients and maintain a neutral position.", "This is not the verified answer. The keyed answer is: Advise both clients and maintain a neutral position."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.239", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q4", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "An electoral roll entry.", options: ["1 and 2 only.", "1, 2 and 3 only.", "1, 2 and 4 only.", "2, 3 and 4 only."], correctIndex: [2],
    explanation: "The verified answer is C. 1, 2 and 4 only.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: 1, 2 and 4 only.", "This is not the verified answer. The keyed answer is: 1, 2 and 4 only.", "Correct. The supplied answer table gives C: 1, 2 and 4 only.", "This is not the verified answer. The keyed answer is: 1, 2 and 4 only."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.240", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q4", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "be submitted to a recognised accredited body only.", options: ["1 and 3", "1 and 4", "2 and 4", "2 and 3"], correctIndex: [2],
    explanation: "The verified answer is C. 2 and 4",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: 2 and 4", "This is not the verified answer. The keyed answer is: 2 and 4", "Correct. The supplied answer table gives C: 2 and 4", "This is not the verified answer. The keyed answer is: 2 and 4"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.240", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q35", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Martin is subject to the FCA's Certification Regime only. As a result, Martin has to abide with the following conduct rules, except:", options: ["act with integrity.", "act with due skill, care and diligence.", "pay due regard to the interests of customers and treat them fairly.", "take reasonable steps to ensure that the business of the firm for which you are responsible is controlled effectively. Forward Financial Planning has been in business for 20 years but has recently been receiving an increasing number of complaints, a matter of great concern to Oliver, the individual within the firm assigned to handle them. The complaints are about a number of matters ranging from advisers not returning phone calls and not turning up to appointments, to unexplained charges and suggestions of unsuitable recommendations involving significant sums of money. The three complaints that arrived this month were from: Alan, a cautious investor and a non-taxpayer, who invested half of his £1m inheritance in an enterprise investment scheme (EIS) 18 months ago on the advice of the firm's most senior adviser, Mario. The investment has fallen significantly in value, and Alan is furious as he was apparently led to believe his capital would be safe. Felicity, who has just discovered that the ten-year fixed rate mortgage arranged by Forward Financial Planning eight years ago still carries early repayment charges, which she claims were not disclosed at the point of sale or at any time subsequent. Johnson's Bakery Limited, for which Forward Financial Planning recommended and put in place a group personal pension scheme for its 40 employees a number of years ago. They are complaining about the high ongoing fees charged by the firm and the lack of service provided for those fees."], correctIndex: [3],
    explanation: "The verified answer is D. take reasonable steps to ensure that the business of the firm for which you are responsible is controlled effectively. Forward Financial Planning has been in business for 20 years but has recently been receiving an increasing number of complaints, a matter of great concern to Oliver, the individual within the firm assigned to handle them. The complaints are about a number of matters ranging from advisers not returning phone calls and not turning up to appointments, to unexplained charges and suggestions of unsuitable recommendations involving significant sums of money. The three complaints that arrived this month were from: Alan, a cautious investor and a non-taxpayer, who invested half of his £1m inheritance in an enterprise investment scheme (EIS) 18 months ago on the advice of the firm's most senior adviser, Mario. The investment has fallen significantly in value, and Alan is furious as he was apparently led to believe his capital would be safe. Felicity, who has just discovered that the ten-year fixed rate mortgage arranged by Forward Financial Planning eight years ago still carries early repayment charges, which she claims were not disclosed at the point of sale or at any time subsequent. Johnson's Bakery Limited, for which Forward Financial Planning recommended and put in place a group personal pension scheme for its 40 employees a number of years ago. They are complaining about the high ongoing fees charged by the firm and the lack of service provided for those fees.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: take reasonable steps to ensure that the business of the firm for which you are responsible is controlled effectively. Forward Financial Planning has been in business for 20 years but has recently been receiving an increasing number of complaints, a matter of great concern to Oliver, the individual within the firm assigned to handle them. The complaints are about a number of matters ranging from advisers not returning phone calls and not turning up to appointments, to unexplained charges and suggestions of unsuitable recommendations involving significant sums of money. The three complaints that arrived this month were from: Alan, a cautious investor and a non-taxpayer, who invested half of his £1m inheritance in an enterprise investment scheme (EIS) 18 months ago on the advice of the firm's most senior adviser, Mario. The investment has fallen significantly in value, and Alan is furious as he was apparently led to believe his capital would be safe. Felicity, who has just discovered that the ten-year fixed rate mortgage arranged by Forward Financial Planning eight years ago still carries early repayment charges, which she claims were not disclosed at the point of sale or at any time subsequent. Johnson's Bakery Limited, for which Forward Financial Planning recommended and put in place a group personal pension scheme for its 40 employees a number of years ago. They are complaining about the high ongoing fees charged by the firm and the lack of service provided for those fees.", "This is not the verified answer. The keyed answer is: take reasonable steps to ensure that the business of the firm for which you are responsible is controlled effectively. Forward Financial Planning has been in business for 20 years but has recently been receiving an increasing number of complaints, a matter of great concern to Oliver, the individual within the firm assigned to handle them. The complaints are about a number of matters ranging from advisers not returning phone calls and not turning up to appointments, to unexplained charges and suggestions of unsuitable recommendations involving significant sums of money. The three complaints that arrived this month were from: Alan, a cautious investor and a non-taxpayer, who invested half of his £1m inheritance in an enterprise investment scheme (EIS) 18 months ago on the advice of the firm's most senior adviser, Mario. The investment has fallen significantly in value, and Alan is furious as he was apparently led to believe his capital would be safe. Felicity, who has just discovered that the ten-year fixed rate mortgage arranged by Forward Financial Planning eight years ago still carries early repayment charges, which she claims were not disclosed at the point of sale or at any time subsequent. Johnson's Bakery Limited, for which Forward Financial Planning recommended and put in place a group personal pension scheme for its 40 employees a number of years ago. They are complaining about the high ongoing fees charged by the firm and the lack of service provided for those fees.", "This is not the verified answer. The keyed answer is: take reasonable steps to ensure that the business of the firm for which you are responsible is controlled effectively. Forward Financial Planning has been in business for 20 years but has recently been receiving an increasing number of complaints, a matter of great concern to Oliver, the individual within the firm assigned to handle them. The complaints are about a number of matters ranging from advisers not returning phone calls and not turning up to appointments, to unexplained charges and suggestions of unsuitable recommendations involving significant sums of money. The three complaints that arrived this month were from: Alan, a cautious investor and a non-taxpayer, who invested half of his £1m inheritance in an enterprise investment scheme (EIS) 18 months ago on the advice of the firm's most senior adviser, Mario. The investment has fallen significantly in value, and Alan is furious as he was apparently led to believe his capital would be safe. Felicity, who has just discovered that the ten-year fixed rate mortgage arranged by Forward Financial Planning eight years ago still carries early repayment charges, which she claims were not disclosed at the point of sale or at any time subsequent. Johnson's Bakery Limited, for which Forward Financial Planning recommended and put in place a group personal pension scheme for its 40 employees a number of years ago. They are complaining about the high ongoing fees charged by the firm and the lack of service provided for those fees.", "Correct. The supplied answer table gives D: take reasonable steps to ensure that the business of the firm for which you are responsible is controlled effectively. Forward Financial Planning has been in business for 20 years but has recently been receiving an increasing number of complaints, a matter of great concern to Oliver, the individual within the firm assigned to handle them. The complaints are about a number of matters ranging from advisers not returning phone calls and not turning up to appointments, to unexplained charges and suggestions of unsuitable recommendations involving significant sums of money. The three complaints that arrived this month were from: Alan, a cautious investor and a non-taxpayer, who invested half of his £1m inheritance in an enterprise investment scheme (EIS) 18 months ago on the advice of the firm's most senior adviser, Mario. The investment has fallen significantly in value, and Alan is furious as he was apparently led to believe his capital would be safe. Felicity, who has just discovered that the ten-year fixed rate mortgage arranged by Forward Financial Planning eight years ago still carries early repayment charges, which she claims were not disclosed at the point of sale or at any time subsequent. Johnson's Bakery Limited, for which Forward Financial Planning recommended and put in place a group personal pension scheme for its 40 employees a number of years ago. They are complaining about the high ongoing fees charged by the firm and the lack of service provided for those fees."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.240", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q36", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "In order to ensure he follows the correct complaints procedure, Oliver should:", options: ["acknowledge the complaints within five days of receipt, and resolve them within 21 days.", "make offers to settle the complaints before referring to the Ombudsman.", "provide a final response letter within eight weeks of receipt or explain the delay.", "refer the complaints to the Ombudsman if they can't be resolved within three days of receipt."], correctIndex: [2],
    explanation: "The verified answer is C. provide a final response letter within eight weeks of receipt or explain the delay.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: provide a final response letter within eight weeks of receipt or explain the delay.", "This is not the verified answer. The keyed answer is: provide a final response letter within eight weeks of receipt or explain the delay.", "Correct. The supplied answer table gives C: provide a final response letter within eight weeks of receipt or explain the delay.", "This is not the verified answer. The keyed answer is: provide a final response letter within eight weeks of receipt or explain the delay."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.241", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q37", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Alan's complaint is acknowledged by Oliver and passed to Mario for comment, who does not respond to his many emails, phone calls or messages. Increasingly frustrated, Alan decides to take his complaint to the Financial Ombudsman Service (FOS). Assuming the FOS decide in Alan's favour, the range of actions available to the FOS regarding compensation include all of these, except to:", options: ["compensate for distress or inconvenience.", "compensate for financial loss.", "reimburse for costs and interest.", "reimburse for lost growth on funds invested."], correctIndex: [3],
    explanation: "The verified answer is D. reimburse for lost growth on funds invested.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: reimburse for lost growth on funds invested.", "This is not the verified answer. The keyed answer is: reimburse for lost growth on funds invested.", "This is not the verified answer. The keyed answer is: reimburse for lost growth on funds invested.", "Correct. The supplied answer table gives D: reimburse for lost growth on funds invested."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.241", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q38", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Oliver is wondering about the validity of Felicity's complaint, given that the advice was provided more than six years ago. He decides to consult his colleagues, but unfortunately, they all tell him something different. Which of these replies true?", options: ["As Felicity has raised the complaint directly with the adviser firm, there is no time limit on complaints.", "As the advice was given eight years ago, Felicity has left it two years too late to make her complaint.", "As Felicity has raised the complaint within three years of becoming aware there was cause for complaint, it is valid.", "As the complaint is about a mortgage, the time limit for making a complaint is three years from completion."], correctIndex: [2],
    explanation: "The verified answer is C. As Felicity has raised the complaint within three years of becoming aware there was cause for complaint, it is valid.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: As Felicity has raised the complaint within three years of becoming aware there was cause for complaint, it is valid.", "This is not the verified answer. The keyed answer is: As Felicity has raised the complaint within three years of becoming aware there was cause for complaint, it is valid.", "Correct. The supplied answer table gives C: As Felicity has raised the complaint within three years of becoming aware there was cause for complaint, it is valid.", "This is not the verified answer. The keyed answer is: As Felicity has raised the complaint within three years of becoming aware there was cause for complaint, it is valid."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.242", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q39", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Johnson's Bakery received a reply from Oliver, breaking down and attempting to justify the charges made by Forward Financial Planning for their ongoing advice service, which Johnson's Bakery Ltd feel is virtually non-existent. What will prevent Johnson's Bakery taking their complaint to the Financial Ombudsman Service (FOS)?", options: ["If its annual turnover is more than £6.5 million.", "If its net asset value is more than £5 million.", "The fact that it has more than ten employees.", "The fact that its complaint is related to pensions."], correctIndex: [0],
    explanation: "The verified answer is A. If its annual turnover is more than £6.5 million.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: If its annual turnover is more than £6.5 million.", "This is not the verified answer. The keyed answer is: If its annual turnover is more than £6.5 million.", "This is not the verified answer. The keyed answer is: If its annual turnover is more than £6.5 million.", "This is not the verified answer. The keyed answer is: If its annual turnover is more than £6.5 million."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.242", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-a-q40", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-a",
    text: "Records relating to the three complaints received by Forward Financial Planning this month should be retained for a minimum of how long?", options: ["at least one year", "At least three years", "at least six years", "indefinitely"], correctIndex: [1],
    explanation: "The verified answer is B. At least three years",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: At least three years", "Correct. The supplied answer table gives B: At least three years", "This is not the verified answer. The keyed answer is: At least three years", "This is not the verified answer. The keyed answer is: At least three years"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.242", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q1", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Prime responsibility for setting an ethical culture in a firm lies with:", options: ["departmental management.", "outside specialists.", "senior management.", "the FCA"], correctIndex: [2],
    explanation: "The verified answer is C. senior management.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: senior management.", "This is not the verified answer. The keyed answer is: senior management.", "Correct. The supplied answer table gives C: senior management.", "This is not the verified answer. The keyed answer is: senior management."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.243", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q2", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Select the option that would be least likely to cause concern about a financial services firm's ethical standards?", options: ["Focus on competitive pricing.", "Rewards to senior management, not justified by the firm's performance.", "The quality of products and the impact of charges.", "Working with other firms to influence the market."], correctIndex: [0],
    explanation: "The verified answer is A. Focus on competitive pricing.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Focus on competitive pricing.", "This is not the verified answer. The keyed answer is: Focus on competitive pricing.", "This is not the verified answer. The keyed answer is: Focus on competitive pricing.", "This is not the verified answer. The keyed answer is: Focus on competitive pricing."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.243", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q3", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Which section of the FCA Handbook covers the client money rules?", options: ["Client Assets Sourcebook.", "Dispute Resolution.", "High Level Standards.", "Prudential Standards"], correctIndex: [0],
    explanation: "The verified answer is A. Client Assets Sourcebook.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Client Assets Sourcebook.", "This is not the verified answer. The keyed answer is: Client Assets Sourcebook.", "This is not the verified answer. The keyed answer is: Client Assets Sourcebook.", "This is not the verified answer. The keyed answer is: Client Assets Sourcebook."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.243", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q4", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "The fair treatment of customers is an integral part of the FCA's:", options: ["General Provisions.", "Principles for Businesses.", "Prudential Sourcebook.", "Training and Competence Sourcebook."], correctIndex: [1],
    explanation: "The verified answer is B. Principles for Businesses.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Principles for Businesses.", "Correct. The supplied answer table gives B: Principles for Businesses.", "This is not the verified answer. The keyed answer is: Principles for Businesses.", "This is not the verified answer. The keyed answer is: Principles for Businesses."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.243", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q5", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "How much, if anything, does the Financial Ombudsman Service charge consumers for investigating their claim?", options: ["Nil", "£10", "£50", "£100"], correctIndex: [0],
    explanation: "The verified answer is A. Nil",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Nil", "This is not the verified answer. The keyed answer is: Nil", "This is not the verified answer. The keyed answer is: Nil", "This is not the verified answer. The keyed answer is: Nil"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.243", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q6", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Which of the FCA's Principles for Businesses covers the consumer duty?", options: ["Principle 7.", "Principle 8", "Principle 9", "Principle 12"], correctIndex: [3],
    explanation: "The verified answer is D. Principle 12",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Principle 12", "This is not the verified answer. The keyed answer is: Principle 12", "This is not the verified answer. The keyed answer is: Principle 12", "Correct. The supplied answer table gives D: Principle 12"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.243", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q7", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "The FCA's regulatory regime is primarily based on:", options: ["inspection, regulation and reporting.", "mandatory reporting principles and regulations.", "the Principles for Businesses.", "the fair treatment of customers."], correctIndex: [2],
    explanation: "The verified answer is C. the Principles for Businesses.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: the Principles for Businesses.", "This is not the verified answer. The keyed answer is: the Principles for Businesses.", "Correct. The supplied answer table gives C: the Principles for Businesses.", "This is not the verified answer. The keyed answer is: the Principles for Businesses."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.244", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q8", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Select the option that will not normally be classed as being a stakeholder in an authorised firm?", options: ["shareholder.", "", "", "An employee."], correctIndex: [0],
    explanation: "The verified answer is A. shareholder.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: shareholder.", "This is not the verified answer. The keyed answer is: shareholder.", "This is not the verified answer. The keyed answer is: shareholder.", "This is not the verified answer. The keyed answer is: shareholder."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.244", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q9", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Identify the latest point in the sales process that a key features document for a personal pension should be given to a client?", options: ["At the outset of the meeting.", "Before a recommendation is made.", "Before the sale is concluded.", "When the cancellation notice is sent."], correctIndex: [2],
    explanation: "The verified answer is C. Before the sale is concluded.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Before the sale is concluded.", "This is not the verified answer. The keyed answer is: Before the sale is concluded.", "Correct. The supplied answer table gives C: Before the sale is concluded.", "This is not the verified answer. The keyed answer is: Before the sale is concluded."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.244", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q10", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "According to the FCA rules, when making a product recommendation, which of the following new product sales requires a suitability report?", options: ["An investment of £1,000 into a unit trust.", "An investment of £2,000 into a cash ISA.", "Arranging a £100,000 repayment mortgage.", "Arranging a £200,000 interest-only mortgage."], correctIndex: [0],
    explanation: "The verified answer is A. An investment of £1,000 into a unit trust.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: An investment of £1,000 into a unit trust.", "This is not the verified answer. The keyed answer is: An investment of £1,000 into a unit trust.", "This is not the verified answer. The keyed answer is: An investment of £1,000 into a unit trust.", "This is not the verified answer. The keyed answer is: An investment of £1,000 into a unit trust."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.244", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q11", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Consequential ethics asserts that an action is right if it:", options: ["follows a firm's corporate social responsibility policy.", "follows a moral rule or principle.", "represents what a virtuous person would do in a similar situation.", "results in the best outcome."], correctIndex: [3],
    explanation: "The verified answer is D. results in the best outcome.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: results in the best outcome.", "This is not the verified answer. The keyed answer is: results in the best outcome.", "This is not the verified answer. The keyed answer is: results in the best outcome.", "Correct. The supplied answer table gives D: results in the best outcome."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.244", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q12", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Where identification has not previously been obtained, a bank must carry out an identity check on a customer if a transaction exceeds:", options: ["€2,000", "€5,000", "€10,000", "€15,000"], correctIndex: [3],
    explanation: "The verified answer is D. €15,000",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: €15,000", "This is not the verified answer. The keyed answer is: €15,000", "This is not the verified answer. The keyed answer is: €15,000", "Correct. The supplied answer table gives D: €15,000"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.244", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q13", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Which type of ethical theory is the main focus of business ethics?", options: ["Applied ethics", "meta-ethics", "Natural ethics", "Normative ethics"], correctIndex: [0],
    explanation: "The verified answer is A. Applied ethics",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Applied ethics", "This is not the verified answer. The keyed answer is: Applied ethics", "This is not the verified answer. The keyed answer is: Applied ethics", "This is not the verified answer. The keyed answer is: Applied ethics"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.245", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q14", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Identify the maximum claim amount for investment business that an individual could successfully make, under the FSCS?", options: ["£50,000", "£85,000", "£100,000", "£170,000"], correctIndex: [1],
    explanation: "The verified answer is B. £85,000",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: £85,000", "Correct. The supplied answer table gives B: £85,000", "This is not the verified answer. The keyed answer is: £85,000", "This is not the verified answer. The keyed answer is: £85,000"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.245", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q15", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Which FCA customer category would typically apply to an investment firm for the straightforward execution of transactions?", options: ["Eligible counterparty.", "Private client.", "Professional client.", "Retail client"], correctIndex: [0],
    explanation: "The verified answer is A. Eligible counterparty.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Eligible counterparty.", "This is not the verified answer. The keyed answer is: Eligible counterparty.", "This is not the verified answer. The keyed answer is: Eligible counterparty.", "This is not the verified answer. The keyed answer is: Eligible counterparty."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.245", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q16", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "A client complained to the FOS about an authorised firm and the FOS found in the client's favour. The ruling is binding on:", options: ["both the firm and the client.", "neither the firm nor the client.", "the client only", "the firm only"], correctIndex: [3],
    explanation: "The verified answer is D. the firm only",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: the firm only", "This is not the verified answer. The keyed answer is: the firm only", "This is not the verified answer. The keyed answer is: the firm only", "Correct. The supplied answer table gives D: the firm only"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.245", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q17", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Which type of advice provides personal recommendations relating to a specific need, designated investment or certain asset, at the request of the client?", options: ["All types of streamlined advice.", "Focused advice.", "Guidance.", "Restricted advice."], correctIndex: [1],
    explanation: "The verified answer is B. Focused advice.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Focused advice.", "Correct. The supplied answer table gives B: Focused advice.", "This is not the verified answer. The keyed answer is: Focused advice.", "This is not the verified answer. The keyed answer is: Focused advice."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.245", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q18", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Harvey received investment advice ten years ago and realised five years ago that he might have been badly advised. Within what maximum further period must he submit a complaint to the firm, should he wish to do so?", options: ["He is unable to complain as he is already out of time.", "One year.", "Two years", "Three years"], correctIndex: [0],
    explanation: "The verified answer is A. He is unable to complain as he is already out of time.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: He is unable to complain as he is already out of time.", "This is not the verified answer. The keyed answer is: He is unable to complain as he is already out of time.", "This is not the verified answer. The keyed answer is: He is unable to complain as he is already out of time.", "This is not the verified answer. The keyed answer is: He is unable to complain as he is already out of time."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.245", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q19", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "A question which asks, \"what would happen if...\" is which type of question?", options: ["probing question.", "", "An open question.", "Factfinding."], correctIndex: [2],
    explanation: "The verified answer is C. An open question.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: An open question.", "This is not the verified answer. The keyed answer is: An open question.", "Correct. The supplied answer table gives C: An open question.", "This is not the verified answer. The keyed answer is: An open question."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.246", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q20", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "In what circumstances, if any, is an independent financial advisers permitted to use a panel of providers?", options: ["In all circumstances.", "In no circumstances", "Only if the panel has been approved by the FCA.", "Only if the panel is sufficiently broad in composition."], correctIndex: [3],
    explanation: "The verified answer is D. Only if the panel is sufficiently broad in composition.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Only if the panel is sufficiently broad in composition.", "This is not the verified answer. The keyed answer is: Only if the panel is sufficiently broad in composition.", "This is not the verified answer. The keyed answer is: Only if the panel is sufficiently broad in composition.", "Correct. The supplied answer table gives D: Only if the panel is sufficiently broad in composition."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.246", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q21", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Christian, Katherine and Emma are partners in their business. Greg, Donna and Andy own their business through a limited liability partnership. Which of the following is true?", options: ["partnership must have at least three partners.", "Christian, Katherine and Emma's partnership is a legal entity in its own right.", "Greg, Donna and Andy will be able to keep simpler accounts.", "Only Christian, Katherine and Emma are liable personally for their business's debts."], correctIndex: [3],
    explanation: "The verified answer is D. Only Christian, Katherine and Emma are liable personally for their business's debts.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Only Christian, Katherine and Emma are liable personally for their business's debts.", "This is not the verified answer. The keyed answer is: Only Christian, Katherine and Emma are liable personally for their business's debts.", "This is not the verified answer. The keyed answer is: Only Christian, Katherine and Emma are liable personally for their business's debts.", "Correct. The supplied answer table gives D: Only Christian, Katherine and Emma are liable personally for their business's debts."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.246", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q22", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "For what minimum period, if any, must an authorised firm retain sales records, including suitability for life policies and investment-based policies it has provided?", options: ["Three years.", "Five years.", "Seven years.", "Indefinitely"], correctIndex: [1],
    explanation: "The verified answer is B. Five years.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Five years.", "Correct. The supplied answer table gives B: Five years.", "This is not the verified answer. The keyed answer is: Five years.", "This is not the verified answer. The keyed answer is: Five years."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.246", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q23", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Harry's role falls under the Certification Regime. This would mean:", options: ["he could have oversight of the firm's compliance function.", "he must be approved by the FCA.", "his fitness for the role must be assessed bi-annually.", "his role would be described as a material risk taker."], correctIndex: [3],
    explanation: "The verified answer is D. his role would be described as a material risk taker.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: his role would be described as a material risk taker.", "This is not the verified answer. The keyed answer is: his role would be described as a material risk taker.", "This is not the verified answer. The keyed answer is: his role would be described as a material risk taker.", "Correct. The supplied answer table gives D: his role would be described as a material risk taker."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.246", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q24", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "For what minimum period must an authorised firm keep records of complaint made about a stand-alone critical illness policy?", options: ["Three years", "Five years", "Six years", "Seven years"], correctIndex: [0],
    explanation: "The verified answer is A. Three years",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Three years", "This is not the verified answer. The keyed answer is: Three years", "This is not the verified answer. The keyed answer is: Three years", "This is not the verified answer. The keyed answer is: Three years"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.246", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q25", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Identify the cooling off period for a stocks and shares ISA?", options: ["7 days", "14 days", "28 days", "30 days Daniel is an adviser offering restricted advice and works for a high-street bank. He can advise on a limited range of products, including life assurance, health insurance, collective investments and stakeholder pensions. Daniel is paid a basic salary and normally also receives a quarterly bonus. The bonus is based on volume of sales and product mix. Daniel may not quite make this quarter's target, although he is quite close. In order to count towards the target, any new business will have to be 'on risk' within the next ten days. Today, Daniel is meeting Ruth and her civil partner, Sara, for a review meeting. Ruth and Sara are secondary school teachers. Ruth has a son, aged eight. Daniel is aware that when Ruth and Sara purchased their home two years ago, Ruth's contribution to the deposit was far larger than Sara's. As a result, the legal advice was for the ownership of the home to be on a tenants-in-common basis. They made wills at that time, but they did not change the wills at the time of their civil partnership ceremony six months later."], correctIndex: [1],
    explanation: "The verified answer is B. 14 days",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: 14 days", "Correct. The supplied answer table gives B: 14 days", "This is not the verified answer. The keyed answer is: 14 days", "This is not the verified answer. The keyed answer is: 14 days"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.247", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q26", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Daniel advises Ruth to take out income protection insurance as her teacher's sick pay lasts only one year. There are two levels of premium, depending on whether stress is included in the cover. However, Daniel knows that if stress is covered, he will not get the application through underwriting in time to achieve his target. How should he act?", options: ["Explain the levels of cover but encourage Ruth to sign up for the lower level, as getting the insurance quickly will be in her interests too.", "Explain the two levels of cover and the associated underwriting issues.", "Include the stress cover as this will result in a higher bonus.", "Just discuss the lower level of cover. Getting the policy on risk is the first priority and the policy can be reviewed later."], correctIndex: [1],
    explanation: "The verified answer is B. Explain the two levels of cover and the associated underwriting issues.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Explain the two levels of cover and the associated underwriting issues.", "Correct. The supplied answer table gives B: Explain the two levels of cover and the associated underwriting issues.", "This is not the verified answer. The keyed answer is: Explain the two levels of cover and the associated underwriting issues.", "This is not the verified answer. The keyed answer is: Explain the two levels of cover and the associated underwriting issues."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.247", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q27", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "What should Daniel do regarding the couple's wills? He should:", options: ["ask for a copy of the wills so that he can confirm whether they were made correctly.", "confirm that, as civil partners, the assets of each will pass to the survivor.", "make no comment, as it is outside his advice range.", "suggest that they consider legal advice regarding the suitability of their existing wills."], correctIndex: [3],
    explanation: "The verified answer is D. suggest that they consider legal advice regarding the suitability of their existing wills.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: suggest that they consider legal advice regarding the suitability of their existing wills.", "This is not the verified answer. The keyed answer is: suggest that they consider legal advice regarding the suitability of their existing wills.", "This is not the verified answer. The keyed answer is: suggest that they consider legal advice regarding the suitability of their existing wills.", "Correct. The supplied answer table gives D: suggest that they consider legal advice regarding the suitability of their existing wills."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.247", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q28", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Daniel is concerned that one of his colleagues, Keith, is having financial problems which are affecting the advice he provides to clients. What is likely to be the most appropriate action for Daniel to take in the first instance?", options: ["Do nothing, as it is not his concern.", "Express his concerns to Keith and suggest that Keith should talk to their direct manager about his problems.", "Report his concerns to the firm's compliance officer.", "Report his concerns to their direct manager."], correctIndex: [1],
    explanation: "The verified answer is B. Express his concerns to Keith and suggest that Keith should talk to their direct manager about his problems.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Express his concerns to Keith and suggest that Keith should talk to their direct manager about his problems.", "Correct. The supplied answer table gives B: Express his concerns to Keith and suggest that Keith should talk to their direct manager about his problems.", "This is not the verified answer. The keyed answer is: Express his concerns to Keith and suggest that Keith should talk to their direct manager about his problems.", "This is not the verified answer. The keyed answer is: Express his concerns to Keith and suggest that Keith should talk to their direct manager about his problems."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.248", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q4", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "A statement of professional standing every 2 years.", options: ["1 and 3", "1 and 4", "2 and 3", "2 and 4"], correctIndex: [2],
    explanation: "The verified answer is C. 2 and 3",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: 2 and 3", "This is not the verified answer. The keyed answer is: 2 and 3", "Correct. The supplied answer table gives C: 2 and 3", "This is not the verified answer. The keyed answer is: 2 and 3"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.248", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q30", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "In providing restricted advice, Daniel is required under FCA rules to:", options: ["ensure he assesses products from the whole of the market place.", "ensure he assesses products from a sufficient range of relevant products available in the market.", "provide advice based on the products from one company or a limited number of companies only.", "to provide product and generic information only. Siobhan is an experienced independent financial adviser (IFA), advising high-net-worth clients on a range of areas such as investments, pensions and inheritance tax planning. Today, she is meeting Joan and her husband, Alistair, for the first time. Alistair retired last year. The sale of the engineering firm, of which he and Joan were owner directors, has been completed and this has left them with a substantial amount to invest. Alistair and Joan have two married daughters and four grandchildren."], correctIndex: [2],
    explanation: "The verified answer is C. provide advice based on the products from one company or a limited number of companies only.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: provide advice based on the products from one company or a limited number of companies only.", "This is not the verified answer. The keyed answer is: provide advice based on the products from one company or a limited number of companies only.", "Correct. The supplied answer table gives C: provide advice based on the products from one company or a limited number of companies only.", "This is not the verified answer. The keyed answer is: provide advice based on the products from one company or a limited number of companies only."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.248", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q31", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Siobhan discusses the possibility of investing some of the proceeds into Alistair's and Joan's personal pensions. What is the maximum age a person can contribute to a personal pension?", options: ["Below 65", "Below 67", "Below 70", "Below 75"], correctIndex: [3],
    explanation: "The verified answer is D. Below 75",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Below 75", "This is not the verified answer. The keyed answer is: Below 75", "This is not the verified answer. The keyed answer is: Below 75", "Correct. The supplied answer table gives D: Below 75"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.249", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q32", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Select the option that is true regarding Siobhan's remuneration for any advice given? She can:", options: ["only receive commission.", "decide whether to operate solely by commission or offer a fee basis.", "only receive remuneration by fees.", "receive commission on some products but must offer a fee structure in other areas."], correctIndex: [3],
    explanation: "The verified answer is D. receive commission on some products but must offer a fee structure in other areas.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: receive commission on some products but must offer a fee structure in other areas.", "This is not the verified answer. The keyed answer is: receive commission on some products but must offer a fee structure in other areas.", "This is not the verified answer. The keyed answer is: receive commission on some products but must offer a fee structure in other areas.", "Correct. The supplied answer table gives D: receive commission on some products but must offer a fee structure in other areas."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.249", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q33", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "As an experienced and competent adviser, Siobhan is required to:", options: ["complete 21 hours of structured CPD every year.", "obtain an annual statement of professional standing from the FCA.", "provide evidence of her compliance with the regulator's code of ethics.", "re-take professional qualifications every five years."], correctIndex: [0],
    explanation: "The verified answer is A. complete 21 hours of structured CPD every year.",
    incorrectExplanations: ["Correct. The supplied answer table gives A: complete 21 hours of structured CPD every year.", "This is not the verified answer. The keyed answer is: complete 21 hours of structured CPD every year.", "This is not the verified answer. The keyed answer is: complete 21 hours of structured CPD every year.", "This is not the verified answer. The keyed answer is: complete 21 hours of structured CPD every year."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.249", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q34", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Select the option that statements is true?", options: ["suitability report for an interest in possession trust arrangement must always explain why a bare trust was not recommended.", "The cancellation period for a life assurance investment bond, as part of a trust arrangement, is 30 days", "The main difference between interest in possession trusts and bare trusts is the investment vehicle used.", "Transfers into interest in possession trusts are not considered to be chargeable lifetime transfers."], correctIndex: [1],
    explanation: "The verified answer is B. The cancellation period for a life assurance investment bond, as part of a trust arrangement, is 30 days",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: The cancellation period for a life assurance investment bond, as part of a trust arrangement, is 30 days", "Correct. The supplied answer table gives B: The cancellation period for a life assurance investment bond, as part of a trust arrangement, is 30 days", "This is not the verified answer. The keyed answer is: The cancellation period for a life assurance investment bond, as part of a trust arrangement, is 30 days", "This is not the verified answer. The keyed answer is: The cancellation period for a life assurance investment bond, as part of a trust arrangement, is 30 days"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.249", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q35", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Joan and Alistair would like their investments to be held within ethical funds only. Which of the following firms are least likely to feature within these types of funds? Firms that:", options: ["pay employees a fair wage.", "provide secure employment for workers.", "resort to greenwashing.", "take steps to address environmental issues. Mandy, who has been an investment adviser for many years, has been chosen as the ideal person for trainee adviser Abdul to shadow and observe while he completes his training, takes his exams and achieves competent status. Mandy has been helping Abdul with his studies and today he is observing Mandy's three new client interviews. Mandy's first client is Sara, a recently divorced mother of two who has been awarded pension benefits and other investments as part of the divorce settlement. Sara needs retirement planning and investment advice, and also needs a review of her protection needs. Mandy's second client, Piers, is the executor and sole beneficiary of his late mother's estate, and he is expecting to inherit over £2m in the next few weeks. He needs investment advice and is concerned about inheritance tax on his own estate. Mandy's last client, Graham, is an experienced investor who has already warned Mandy that he does not want a full review of his financial circumstances; he simply wants advice on investing another £20,000 into his existing ISAs."], correctIndex: [2],
    explanation: "The verified answer is C. resort to greenwashing.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: resort to greenwashing.", "This is not the verified answer. The keyed answer is: resort to greenwashing.", "Correct. The supplied answer table gives C: resort to greenwashing.", "This is not the verified answer. The keyed answer is: resort to greenwashing."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.250", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q4", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "can offer independent advice in some areas, and restricted advice in others. Which of these statements by Sara's uncle are true?", options: ["1,3 and 4", "2 and 3", "2,3 and 4", "3 and 4"], correctIndex: [3],
    explanation: "The verified answer is D. 3 and 4",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: 3 and 4", "This is not the verified answer. The keyed answer is: 3 and 4", "This is not the verified answer. The keyed answer is: 3 and 4", "Correct. The supplied answer table gives D: 3 and 4"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.250", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q37", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "When Sara's interview is over, Abdul leads her through reception, where Mandy's next client, Piers, is waiting, and it transpires that Sara and Piers know each other through their work. After Sara leaves, Abdul explains the connection between the two clients to Mandy, and she, Abdul and Piers continue to talk about Sara as a mutual acquaintance. Regarding these discussions, Mandy and Abdul should be mindful of their duties to Sara in respect of which FCA Principles?", options: ["Integrity (1) and Conflicts of interest (8).", "Skill, care and diligence (2) and Clients' assets (10).", "Market conduct (5) and Consumer duty (12).", "Customers' interests (6) and Relationships of trust (9)."], correctIndex: [0],
    explanation: "The verified answer is A. Integrity (1) and Conflicts of interest (8).",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Integrity (1) and Conflicts of interest (8).", "This is not the verified answer. The keyed answer is: Integrity (1) and Conflicts of interest (8).", "This is not the verified answer. The keyed answer is: Integrity (1) and Conflicts of interest (8).", "This is not the verified answer. The keyed answer is: Integrity (1) and Conflicts of interest (8)."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.251", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q38", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Mandy outlines to Graham the benefits of a full financial review, but he maintains that he just wants advice about investing into ISAs. If Mandy proceeds and just arranges the ISA investments for Graham, what type of advice will he have received?", options: ["Basic advice", "Focused advice", "Guidance", "Simplified advice"], correctIndex: [1],
    explanation: "The verified answer is B. Focused advice",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Focused advice", "Correct. The supplied answer table gives B: Focused advice", "This is not the verified answer. The keyed answer is: Focused advice", "This is not the verified answer. The keyed answer is: Focused advice"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.251", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q39", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Abdul has been studying client categorisation and the duty of care owed by advisers to different types of clients, so after Mandy has completed all three interviews, Abdul asks her how she will categorise Sara, Piers and Graham in this regard. What should be Mandy's reply?", options: ["All three are retail clients, although Graham can elect to be a professional client.", "All three are retail clients, although Sara and Piers may be classed as potentially vulnerable retail clients.", "Sara and Piers are retail clients and Graham is a professional client.", "Sara is a vulnerable retail client and Piers as well as Graham are professional clients."], correctIndex: [1],
    explanation: "The verified answer is B. All three are retail clients, although Sara and Piers may be classed as potentially vulnerable retail clients.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: All three are retail clients, although Sara and Piers may be classed as potentially vulnerable retail clients.", "Correct. The supplied answer table gives B: All three are retail clients, although Sara and Piers may be classed as potentially vulnerable retail clients.", "This is not the verified answer. The keyed answer is: All three are retail clients, although Sara and Piers may be classed as potentially vulnerable retail clients.", "This is not the verified answer. The keyed answer is: All three are retail clients, although Sara and Piers may be classed as potentially vulnerable retail clients."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.251", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-b-q40", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-b",
    text: "Should Graham not agree with Mandy's recommendation for his ISA investment, and ask her to execute investment into different funds of his choosing, Mandy should:", options: ["explain she cannot do as he requests.", "refer him to another adviser for a second opinion.", "treat him as an execution-only client.", "treat him as an insistent client"], correctIndex: [3],
    explanation: "The verified answer is D. treat him as an insistent client",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: treat him as an insistent client", "This is not the verified answer. The keyed answer is: treat him as an insistent client", "This is not the verified answer. The keyed answer is: treat him as an insistent client", "Correct. The supplied answer table gives D: treat him as an insistent client"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.251", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q1", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Abi must carry out an appropriateness test on a client’s transaction. This is because:", options: ["Abi is not yet fully competent to give advice on investments", "Abi is uncertain that her advice is correct", "The transaction is for an insistent client", "The transaction is for derivatives on an execution only basis"], correctIndex: [3],
    explanation: "The verified answer is D. The transaction is for derivatives on an execution only basis",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: The transaction is for derivatives on an execution only basis", "This is not the verified answer. The keyed answer is: The transaction is for derivatives on an execution only basis", "This is not the verified answer. The keyed answer is: The transaction is for derivatives on an execution only basis", "Correct. The supplied answer table gives D: The transaction is for derivatives on an execution only basis"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.252", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q2", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Select the option that is an important part of the listening process during a client interview?", options: ["acknowledging", "agreeing", "questioning", "speaking"], correctIndex: [0],
    explanation: "The verified answer is A. acknowledging",
    incorrectExplanations: ["Correct. The supplied answer table gives A: acknowledging", "This is not the verified answer. The keyed answer is: acknowledging", "This is not the verified answer. The keyed answer is: acknowledging", "This is not the verified answer. The keyed answer is: acknowledging"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.252", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q3", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "According to Albert Mehrabian’s research what percentage of the communication of feelings and attitudes is conveyed by the actual words said?", options: ["7%", "38%", "55%", "80%"], correctIndex: [0],
    explanation: "The verified answer is A. 7%",
    incorrectExplanations: ["Correct. The supplied answer table gives A: 7%", "This is not the verified answer. The keyed answer is: 7%", "This is not the verified answer. The keyed answer is: 7%", "This is not the verified answer. The keyed answer is: 7%"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.252", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q4", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "A client is becoming frustrated because his adviser is asking for information he has already given during the meeting. The most likely reason for this is that the adviser is", options: ["asking mainly closed questions", "asking mainly open questions", "not listening to the client", "summarizing too often"], correctIndex: [2],
    explanation: "The verified answer is C. not listening to the client",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: not listening to the client", "This is not the verified answer. The keyed answer is: not listening to the client", "Correct. The supplied answer table gives C: not listening to the client", "This is not the verified answer. The keyed answer is: not listening to the client"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.252", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q5", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Sunita has been asked by a client to give advice on several products and investment needs. While she is experienced and competent on some subjects, what action should she take in relation to the other areas for which she feels she is not competent?", options: ["cease dealing with the client immediately", "refer the client to a suitably qualified colleague for those areas", "give the advice but with a disclaimer for those areas", "persuade the client that these areas are not important to the ongoing advice process"], correctIndex: [1],
    explanation: "The verified answer is B. refer the client to a suitably qualified colleague for those areas",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: refer the client to a suitably qualified colleague for those areas", "Correct. The supplied answer table gives B: refer the client to a suitably qualified colleague for those areas", "This is not the verified answer. The keyed answer is: refer the client to a suitably qualified colleague for those areas", "This is not the verified answer. The keyed answer is: refer the client to a suitably qualified colleague for those areas"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.252", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q6", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "In relation to identifying potentially vulnerable clients, which of the following is NOT specified by the FCA as a driver of vulnerability?", options: ["capability", "health", "lifestyle", "resilience"], correctIndex: [2],
    explanation: "The verified answer is C. lifestyle",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: lifestyle", "This is not the verified answer. The keyed answer is: lifestyle", "Correct. The supplied answer table gives C: lifestyle", "This is not the verified answer. The keyed answer is: lifestyle"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.253", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q7", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Select the option that forms of continuing professional development is NOT considered to be structured learning?", options: ["attending conferences", "attending training courses", "completing appropriate e-learning", "researching products for clients"], correctIndex: [3],
    explanation: "The verified answer is D. researching products for clients",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: researching products for clients", "This is not the verified answer. The keyed answer is: researching products for clients", "This is not the verified answer. The keyed answer is: researching products for clients", "Correct. The supplied answer table gives D: researching products for clients"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.253", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q8", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "The Financial Services Ombudsman has recommended compensation to a customer in relation to a personal pension case but the recommended amount exceeds the maximum amount set out in the rules. What is the position?", options: ["Either party can refer the case to the Pensions Ombudsman for a second ruling.", "the award is binding in full on the firm and the customer", "the award cannot exceed the limit in any circumstances", "the firm can refuse to pay the full amount but the customer can take the matter to court"], correctIndex: [3],
    explanation: "The verified answer is D. the firm can refuse to pay the full amount but the customer can take the matter to court",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: the firm can refuse to pay the full amount but the customer can take the matter to court", "This is not the verified answer. The keyed answer is: the firm can refuse to pay the full amount but the customer can take the matter to court", "This is not the verified answer. The keyed answer is: the firm can refuse to pay the full amount but the customer can take the matter to court", "Correct. The supplied answer table gives D: the firm can refuse to pay the full amount but the customer can take the matter to court"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.253", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q9", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "A judgement made by the Financial Ombudsman Service is binding on:", options: ["the consumer only", "the firm only", "the firm and the consumer", "neither the firm nor the consumer"], correctIndex: [1],
    explanation: "The verified answer is B. the firm only",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: the firm only", "Correct. The supplied answer table gives B: the firm only", "This is not the verified answer. The keyed answer is: the firm only", "This is not the verified answer. The keyed answer is: the firm only"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.253", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q10", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Select the option that is classified as a special category data under the data protection regulations?", options: ["date of birth", "marital status", "political persuasion", "salary"], correctIndex: [2],
    explanation: "The verified answer is C. political persuasion",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: political persuasion", "This is not the verified answer. The keyed answer is: political persuasion", "Correct. The supplied answer table gives C: political persuasion", "This is not the verified answer. The keyed answer is: political persuasion"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.253", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q11", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Where an insurance company defaulted and was unable to settle a claim. The FSCS would pay 90% of a claim for:", options: ["employer liability insurance", "payment protection insurance", "third party motor insurance", "travel insurance"], correctIndex: [3],
    explanation: "The verified answer is D. travel insurance",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: travel insurance", "This is not the verified answer. The keyed answer is: travel insurance", "This is not the verified answer. The keyed answer is: travel insurance", "Correct. The supplied answer table gives D: travel insurance"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.253", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q12", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "An authorised firm has received a complaint from a client that cannot be resolved within three days. The firm must issue an acknowledgement:", options: ["promptly", "within two working days", "within three working days", "within five working days"], correctIndex: [0],
    explanation: "The verified answer is A. promptly",
    incorrectExplanations: ["Correct. The supplied answer table gives A: promptly", "This is not the verified answer. The keyed answer is: promptly", "This is not the verified answer. The keyed answer is: promptly", "This is not the verified answer. The keyed answer is: promptly"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.254", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q13", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Allan has received advice about a personal pension 7 years ago. Information came to light 2 years ago that suggested he might have been badly advised and he now wishes to complain. Within what maximum further period must he submit a complaint to the firm?", options: ["he is unable to complain as he is already out of time", "one year", "two years", "three years"], correctIndex: [1],
    explanation: "The verified answer is B. one year",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: one year", "Correct. The supplied answer table gives B: one year", "This is not the verified answer. The keyed answer is: one year", "This is not the verified answer. The keyed answer is: one year"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.254", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q14", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Which category of client receives the lowest level of customer protection?", options: ["eligible counterparty", "professional client", "retail client", "professional counterparty"], correctIndex: [0],
    explanation: "The verified answer is A. eligible counterparty",
    incorrectExplanations: ["Correct. The supplied answer table gives A: eligible counterparty", "This is not the verified answer. The keyed answer is: eligible counterparty", "This is not the verified answer. The keyed answer is: eligible counterparty", "This is not the verified answer. The keyed answer is: eligible counterparty"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.254", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q15", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Select the option that statements is TRUE with regard to execution only business?", options: ["firm offering execution only services can protect itself completely in the event of an FCA investigation by including a general disclaimer in its terms and conditions", "", "the adviser may provide information and advice to the client but cannot give a recommendation.", "the adviser’s duty of care to explain fully the nature of the product or investment and the risk involved does not apply."], correctIndex: [3],
    explanation: "The verified answer is D. the adviser’s duty of care to explain fully the nature of the product or investment and the risk involved does not apply.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: the adviser’s duty of care to explain fully the nature of the product or investment and the risk involved does not apply.", "This is not the verified answer. The keyed answer is: the adviser’s duty of care to explain fully the nature of the product or investment and the risk involved does not apply.", "This is not the verified answer. The keyed answer is: the adviser’s duty of care to explain fully the nature of the product or investment and the risk involved does not apply.", "Correct. The supplied answer table gives D: the adviser’s duty of care to explain fully the nature of the product or investment and the risk involved does not apply."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.254", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q16", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Which FCA customer category would usually apply to a collective investment fund that seeks the straightforward execution of transactions?", options: ["eligible counterparty", "professional client", "retail client", "private client"], correctIndex: [0],
    explanation: "The verified answer is A. eligible counterparty",
    incorrectExplanations: ["Correct. The supplied answer table gives A: eligible counterparty", "This is not the verified answer. The keyed answer is: eligible counterparty", "This is not the verified answer. The keyed answer is: eligible counterparty", "This is not the verified answer. The keyed answer is: eligible counterparty"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.254", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q17", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "When making a recommendation to a customer, an authorised firm must ensure that the recommendation is:", options: ["affordable only", "both suitable and affordable", "suitable and competitively priced", "suitable only"], correctIndex: [1],
    explanation: "The verified answer is B. both suitable and affordable",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: both suitable and affordable", "Correct. The supplied answer table gives B: both suitable and affordable", "This is not the verified answer. The keyed answer is: both suitable and affordable", "This is not the verified answer. The keyed answer is: both suitable and affordable"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.255", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q18", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Where an authorised firm offers independent financial advice it is NOT an FCA requirement that the advice is:", options: ["comprehensive", "fair", "free from all charges", "unbiased"], correctIndex: [2],
    explanation: "The verified answer is C. free from all charges",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: free from all charges", "This is not the verified answer. The keyed answer is: free from all charges", "Correct. The supplied answer table gives C: free from all charges", "This is not the verified answer. The keyed answer is: free from all charges"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.255", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q19", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Identify the position if after carrying out a full fact find and needs analysis, it appears that none of the providers on the IFA’s panel offers a suitable product for the client?", options: ["no recommendation can be made", "the adviser must be referred to an adviser who can find a suitable product", "the client must choose an alternative product on an execution only basis", "the IFA can use products from other providers if it is in the best interests of the client"], correctIndex: [3],
    explanation: "The verified answer is D. the IFA can use products from other providers if it is in the best interests of the client",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: the IFA can use products from other providers if it is in the best interests of the client", "This is not the verified answer. The keyed answer is: the IFA can use products from other providers if it is in the best interests of the client", "This is not the verified answer. The keyed answer is: the IFA can use products from other providers if it is in the best interests of the client", "Correct. The supplied answer table gives D: the IFA can use products from other providers if it is in the best interests of the client"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.255", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q20", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Select the option that is true of an adviser’s statement of professional standing (SPS) ?", options: ["It can be validated by the firm", "It is issued by the FCA", "It is valid for 12 months", "It must be shown to the clients on the first contact"], correctIndex: [2],
    explanation: "The verified answer is C. It is valid for 12 months",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: It is valid for 12 months", "This is not the verified answer. The keyed answer is: It is valid for 12 months", "Correct. The supplied answer table gives C: It is valid for 12 months", "This is not the verified answer. The keyed answer is: It is valid for 12 months"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.255", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q21", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "The FCA’s regulatory sandbox enables firms to:", options: ["collaborate on technology with other firms", "discuss regulatory issues with FCA advisers without prejudice", "help the FCA to establish new rules", "test new services and products without regulatory risks"], correctIndex: [3],
    explanation: "The verified answer is D. test new services and products without regulatory risks",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: test new services and products without regulatory risks", "This is not the verified answer. The keyed answer is: test new services and products without regulatory risks", "This is not the verified answer. The keyed answer is: test new services and products without regulatory risks", "Correct. The supplied answer table gives D: test new services and products without regulatory risks"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.255", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q22", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "In relation to business ethics:", options: ["acting within regulations ensures ethical behaviour", "ethical failure is always the result of malevolent acts by a firm", "ethical standards are set out in the detailed FCA rules", "high ethical standards can be compatible with profit"], correctIndex: [3],
    explanation: "The verified answer is D. high ethical standards can be compatible with profit",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: high ethical standards can be compatible with profit", "This is not the verified answer. The keyed answer is: high ethical standards can be compatible with profit", "This is not the verified answer. The keyed answer is: high ethical standards can be compatible with profit", "Correct. The supplied answer table gives D: high ethical standards can be compatible with profit"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.255", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q23", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Select the option that is FALSE in relation to whistleblowing?", options: ["it’s a facility operated by the FCA", "it relates to information about wrongdoing", "the whistleblower must provide evidence to prove wrongdoing", "whistleblowers will remain anonymous"], correctIndex: [2],
    explanation: "The verified answer is C. the whistleblower must provide evidence to prove wrongdoing",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: the whistleblower must provide evidence to prove wrongdoing", "This is not the verified answer. The keyed answer is: the whistleblower must provide evidence to prove wrongdoing", "Correct. The supplied answer table gives C: the whistleblower must provide evidence to prove wrongdoing", "This is not the verified answer. The keyed answer is: the whistleblower must provide evidence to prove wrongdoing"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.256", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q24", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Good communication skills include all of the following skills except:", options: ["demonstrating sound technical knowledge", "explaining complex information in a way that the customer can understand", "listening to what the customer is saying", "writing reports that are full of technical phrases"], correctIndex: [3],
    explanation: "The verified answer is D. writing reports that are full of technical phrases",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: writing reports that are full of technical phrases", "This is not the verified answer. The keyed answer is: writing reports that are full of technical phrases", "This is not the verified answer. The keyed answer is: writing reports that are full of technical phrases", "Correct. The supplied answer table gives D: writing reports that are full of technical phrases"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.256", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q25", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Davina joined the Uptown Building Society as a trainee mortgage adviser on 1 May 2025. What are the requirements for her to achieve an appropriate qualification?", options: ["She must attain a Level 3 qualification by 30 April 2028", "She must attain a Level 4 qualification by 30 April 2028", "She must attain a Level 3 qualification by 30 April 2029", "She must attain a Level 4 qualification by 30 April 2028 Mira is a financial adviser and works for a major financial services organisation. She is authorised to sell savings and investment products from the whole of the market. Her first appointment today is with Lucy, who has been left £400,000 following the death of an elderly aunt. The total value of her aunt's estate is in excess of £1m. This will be the first time that Mira has met Lucy, but in a phone conversation, Lucy told Mira that she might need access to some of the money in five years' time to contribute to her son's course fees, if he goes to university. Mira is under some pressure at work because she is currently bottom of her region's sales performance league table. Her boss has said if her sales results do not improve, she may be placed on a performance"], correctIndex: [2],
    explanation: "The verified answer is C. She must attain a Level 3 qualification by 30 April 2029",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: She must attain a Level 3 qualification by 30 April 2029", "This is not the verified answer. The keyed answer is: She must attain a Level 3 qualification by 30 April 2029", "Correct. The supplied answer table gives C: She must attain a Level 3 qualification by 30 April 2029", "This is not the verified answer. The keyed answer is: She must attain a Level 3 qualification by 30 April 2029"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.256", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q5", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "The Financial Services (Distance Marketing) Regulations 2004.", options: ["1, 2 and 3 only.", "1, 2 and 4 only.", "1, 3 and 4 only.", "1, 4 and 5 only."], correctIndex: [2],
    explanation: "The verified answer is C. 1, 3 and 4 only.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: 1, 3 and 4 only.", "This is not the verified answer. The keyed answer is: 1, 3 and 4 only.", "Correct. The supplied answer table gives C: 1, 3 and 4 only.", "This is not the verified answer. The keyed answer is: 1, 3 and 4 only."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.257", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q27", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Select the option that should be Mira's primary objective for the meeting? To:", options: ["increase her employer's profits.", "increase Lucy's capital.", "maximise her fee income.", "understand Lucy's needs."], correctIndex: [3],
    explanation: "The verified answer is D. understand Lucy's needs.",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: understand Lucy's needs.", "This is not the verified answer. The keyed answer is: understand Lucy's needs.", "This is not the verified answer. The keyed answer is: understand Lucy's needs.", "Correct. The supplied answer table gives D: understand Lucy's needs."], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.257", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q28", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Before Mira starts to complete the factfind, Lucy states that she has seen an investment product that offers a guaranteed return and pays some monthly income but would tie up her money for 10 years. She asks Mira whether it is suitable for her. What should Mira do?", options: ["Suggest that Lucy should complete the application now if she is happy with the investment", "Explain that she cannot make a recommendation until she has fully analysed Lucy’s situation", "state that the product is likely to be suitable for her", "suggest Lucy should proceed on an execution only basis"], correctIndex: [1],
    explanation: "The verified answer is B. Explain that she cannot make a recommendation until she has fully analysed Lucy’s situation",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: Explain that she cannot make a recommendation until she has fully analysed Lucy’s situation", "Correct. The supplied answer table gives B: Explain that she cannot make a recommendation until she has fully analysed Lucy’s situation", "This is not the verified answer. The keyed answer is: Explain that she cannot make a recommendation until she has fully analysed Lucy’s situation", "This is not the verified answer. The keyed answer is: Explain that she cannot make a recommendation until she has fully analysed Lucy’s situation"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.257", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q29", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "As part of the advice process, Mira must assess the extent to which a loss on the investment would affect Lucy’s financial situation. This is referred to as:", options: ["attitude to risk", "capacity for loss", "risk tolerance", "risk category"], correctIndex: [1],
    explanation: "The verified answer is B. capacity for loss",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: capacity for loss", "Correct. The supplied answer table gives B: capacity for loss", "This is not the verified answer. The keyed answer is: capacity for loss", "This is not the verified answer. The keyed answer is: capacity for loss"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.257", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q30", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "If Lucy goes ahead with any recommendations Mira makes, which of the following would not require a suitability report?", options: ["cash ISA", "unit trust", "investment trust", "personal pension Bryony is an adviser with Carlton Finance a firm of independent financial advisers. Bryony is able to advise on packaged investments, personal pensions, protection and mortgages. The firm has a pension transfer specialist, Annette who deals with more complex cases. Bryony has two appointments today with. Betty who was recently widowed at the age of 62. Betty has asked for advice on investing £80,000 from an ISA that was left to her by her late husband. She understands that the bequest will increase her own ISA allowance for the current year. Betty has a personal pension that will provide an income of £5,000 per year if she takes benefits now and has started to receive a reasonable widow’s pension from her husband’s occupational pension scheme. However, she feels she will need additional income until she qualifies for the state pension in 5 years time. Andrew a single man in his early 40s. Andrew was clear that he wanted advice only in relation to an investment vehicle to provide the funds to repay his interest only mortgage in 18 years time. In conversation he did mention that he would also like advice on transferring his defined benefit occupational pension scheme to a more flexible arrangement."], correctIndex: [0],
    explanation: "The verified answer is A. cash ISA",
    incorrectExplanations: ["Correct. The supplied answer table gives A: cash ISA", "This is not the verified answer. The keyed answer is: cash ISA", "This is not the verified answer. The keyed answer is: cash ISA", "This is not the verified answer. The keyed answer is: cash ISA"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.257", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q31", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Which FCA driver of vulnerability is most likely to result in Bryony treating Betty as a vulnerable customer? Betty’s", options: ["life events due to the bereavement", "capability", "health", "resilience"], correctIndex: [0],
    explanation: "The verified answer is A. life events due to the bereavement",
    incorrectExplanations: ["Correct. The supplied answer table gives A: life events due to the bereavement", "This is not the verified answer. The keyed answer is: life events due to the bereavement", "This is not the verified answer. The keyed answer is: life events due to the bereavement", "This is not the verified answer. The keyed answer is: life events due to the bereavement"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.258", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q32", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "The FCA expects firms to put in place structures and processes to ensure clients such as Betty have access to appropriate services and are treated fairly. What is NOT one of the specific requirements?", options: ["Tell Betty about the help and support options available to her", "Provide straightforward options for a designated person to act on Betty’s behalf if required", "design specific products for clients like Betty", "set up in house teams with third parties to provide specialist support for vulnerable clients"], correctIndex: [2],
    explanation: "The verified answer is C. design specific products for clients like Betty",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: design specific products for clients like Betty", "This is not the verified answer. The keyed answer is: design specific products for clients like Betty", "Correct. The supplied answer table gives C: design specific products for clients like Betty", "This is not the verified answer. The keyed answer is: design specific products for clients like Betty"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.258", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q33", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Bryony was moved by Betty’s story which is similar to her own mother’s situation. She felt it would be helpful to discuss Betty’s case with her mother. Which FCA Principle of Business is Bryony in danger of breaching?", options: ["Principle 1 – Integrity", "Principle 2 – skill, care and diligence", "Principle 8 – conflicts of interest", "Principle 12 – the consumer duty"], correctIndex: [0],
    explanation: "The verified answer is A. Principle 1 – Integrity",
    incorrectExplanations: ["Correct. The supplied answer table gives A: Principle 1 – Integrity", "This is not the verified answer. The keyed answer is: Principle 1 – Integrity", "This is not the verified answer. The keyed answer is: Principle 1 – Integrity", "This is not the verified answer. The keyed answer is: Principle 1 – Integrity"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.258", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q34", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Regarding Andrew’s interest in the mortgage repayment vehicle, Bryony would be providing:", options: ["advice to an insistent client", "focused advice", "simplified advice", "regulated advice"], correctIndex: [1],
    explanation: "The verified answer is B. focused advice",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: focused advice", "Correct. The supplied answer table gives B: focused advice", "This is not the verified answer. The keyed answer is: focused advice", "This is not the verified answer. The keyed answer is: focused advice"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.259", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q35", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Regarding Andrew’s occupational pension, an appropriate course of action would be for Bryony to:", options: ["seek more information and make a suitable recommendation", "explain that neither she nor the firm can provide advice", "explain that she will need to refer Andrew to Annette", "suggest that Andrew makes the transfer on an execution only basis Kate a building society mortgage adviser, has just completed an interview with James, a new client who wishes to borrow £200,000 to buy a property for £250,000. James has a balance of £18,000 in his bank account, £10,000 of which will go towards the deposit. James states that the balance of the deposit is coming from cash he keeps at home for emergencies."], correctIndex: [2],
    explanation: "The verified answer is C. explain that she will need to refer Andrew to Annette",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: explain that she will need to refer Andrew to Annette", "This is not the verified answer. The keyed answer is: explain that she will need to refer Andrew to Annette", "Correct. The supplied answer table gives C: explain that she will need to refer Andrew to Annette", "This is not the verified answer. The keyed answer is: explain that she will need to refer Andrew to Annette"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.259", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q36", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Under money laundering regulations, it is imperative that Kate verifies James’s identification because:", options: ["he has more than £15,000 in his bank account", "his employer pays him in cash", "the deposit will be over €15,000", "the purpose of the meeting is to borrow money"], correctIndex: [2],
    explanation: "The verified answer is C. the deposit will be over €15,000",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: the deposit will be over €15,000", "This is not the verified answer. The keyed answer is: the deposit will be over €15,000", "Correct. The supplied answer table gives C: the deposit will be over €15,000", "This is not the verified answer. The keyed answer is: the deposit will be over €15,000"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.259", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q37", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Kate could verify James’s address with:", options: ["a letter of declaration by James’s employer", "James’s most recent bank statement", "James’s passport", "James’s recent payslip"], correctIndex: [1],
    explanation: "The verified answer is B. James’s most recent bank statement",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: James’s most recent bank statement", "Correct. The supplied answer table gives B: James’s most recent bank statement", "This is not the verified answer. The keyed answer is: James’s most recent bank statement", "This is not the verified answer. The keyed answer is: James’s most recent bank statement"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.259", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q38", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "If James turns out to be using the mortgage application to launder money, either on his own or with others, he could face imprisonment for up to:", options: ["5 years", "7 years", "10 years", "14 years"], correctIndex: [3],
    explanation: "The verified answer is D. 14 years",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: 14 years", "This is not the verified answer. The keyed answer is: 14 years", "This is not the verified answer. The keyed answer is: 14 years", "Correct. The supplied answer table gives D: 14 years"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.259", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q39", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "Kate discusses James’s mortgage application with her manager, and she tells them that despite James’s apparent efforts to endear himself to her and to make his case appear genuine, she suspects that he could be attempting to launder money and thinks he should be reported. If Kate mentions this conversation to James, she could be accused of:", options: ["acquiring criminal property", "conspiracy to commit fraud", "financing organized crime", "tipping off"], correctIndex: [3],
    explanation: "The verified answer is D. tipping off",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: tipping off", "This is not the verified answer. The keyed answer is: tipping off", "This is not the verified answer. The keyed answer is: tipping off", "Correct. The supplied answer table gives D: tipping off"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.260", origin: 'original', dateSensitive: true
  },
  {
    id: "c1-u2-specimen-c-q40", module: 'cemap1', unitKey: "unit2", topicKey: "c1-u2-specimen-c",
    text: "If Kate suspects James of being involved in money laundering, she should report suspicions to the:", options: ["firm’s compliance officer", "firm’s Money Laundering Reporting Officer", "Joint Money Laundering Steering Group", "National Crime Agency"], correctIndex: [1],
    explanation: "The verified answer is B. firm’s Money Laundering Reporting Officer",
    incorrectExplanations: ["This is not the verified answer. The keyed answer is: firm’s Money Laundering Reporting Officer", "Correct. The supplied answer table gives B: firm’s Money Laundering Reporting Officer", "This is not the verified answer. The keyed answer is: firm’s Money Laundering Reporting Officer", "This is not the verified answer. The keyed answer is: firm’s Money Laundering Reporting Officer"], difficulty: 'intermediate',
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.260", origin: 'original', dateSensitive: true
  },
]

export const cemap1RemainingSpecimenMocks: MockExamMeta[] = [
  {
    id: "c1-u1-specimen-b", module: 'cemap1', unitKey: "unit1", title: "Unit 1 Specimen Paper B (Supplied, adapted)",
    origin: 'original', timeMinutes: 60, passMark: 28, questionIds: ["c1-u1-specimen-b-q1", "c1-u1-specimen-b-q2", "c1-u1-specimen-b-q3", "c1-u1-specimen-b-q4", "c1-u1-specimen-b-q5", "c1-u1-specimen-b-q6", "c1-u1-specimen-b-q7", "c1-u1-specimen-b-q8", "c1-u1-specimen-b-q9", "c1-u1-specimen-b-q10", "c1-u1-specimen-b-q11", "c1-u1-specimen-b-q12", "c1-u1-specimen-b-q13", "c1-u1-specimen-b-q14", "c1-u1-specimen-b-q15", "c1-u1-specimen-b-q16", "c1-u1-specimen-b-q17", "c1-u1-specimen-b-q18", "c1-u1-specimen-b-q19", "c1-u1-specimen-b-q20", "c1-u1-specimen-b-q21", "c1-u1-specimen-b-q22", "c1-u1-specimen-b-q23", "c1-u1-specimen-b-q24", "c1-u1-specimen-b-q25", "c1-u1-specimen-b-q26", "c1-u1-specimen-b-q27", "c1-u1-specimen-b-q28", "c1-u1-specimen-b-q29", "c1-u1-specimen-b-q30", "c1-u1-specimen-b-q31", "c1-u1-specimen-b-q32", "c1-u1-specimen-b-q33", "c1-u1-specimen-b-q34", "c1-u1-specimen-b-q35", "c1-u1-specimen-b-q36", "c1-u1-specimen-b-q37", "c1-u1-specimen-b-q38", "c1-u1-specimen-b-q39", "c1-u1-specimen-b-q40"],
    source: "CeMAP 1, Unit 1 Specimen Paper B, p.217-224; verified against the supplied answer table."
  },
  {
    id: "c1-u1-specimen-c", module: 'cemap1', unitKey: "unit1", title: "Unit 1 Specimen Paper C (Supplied, adapted)",
    origin: 'original', timeMinutes: 60, passMark: 28, questionIds: ["c1-u1-specimen-c-q1", "c1-u1-specimen-c-q2", "c1-u1-specimen-c-q3", "c1-u1-specimen-c-q4", "c1-u1-specimen-c-q5", "c1-u1-specimen-c-q6", "c1-u1-specimen-c-q7", "c1-u1-specimen-c-q8", "c1-u1-specimen-c-q9", "c1-u1-specimen-c-q10", "c1-u1-specimen-c-q11", "c1-u1-specimen-c-q12", "c1-u1-specimen-c-q13", "c1-u1-specimen-c-q14", "c1-u1-specimen-c-q15", "c1-u1-specimen-c-q16", "c1-u1-specimen-c-q17", "c1-u1-specimen-c-q18", "c1-u1-specimen-c-q19", "c1-u1-specimen-c-q20", "c1-u1-specimen-c-q21", "c1-u1-specimen-c-q22", "c1-u1-specimen-c-q23", "c1-u1-specimen-c-q24", "c1-u1-specimen-c-q4", "c1-u1-specimen-c-q26", "c1-u1-specimen-c-q27", "c1-u1-specimen-c-q28", "c1-u1-specimen-c-q29", "c1-u1-specimen-c-q30", "c1-u1-specimen-c-q31", "c1-u1-specimen-c-q32", "c1-u1-specimen-c-q33", "c1-u1-specimen-c-q34", "c1-u1-specimen-c-q35", "c1-u1-specimen-c-q36", "c1-u1-specimen-c-q37", "c1-u1-specimen-c-q38", "c1-u1-specimen-c-q39", "c1-u1-specimen-c-q40"],
    source: "CeMAP 1, Unit 1 Specimen Paper C, p.225-232; verified against the supplied answer table."
  },
  {
    id: "c1-u2-specimen-a", module: 'cemap1', unitKey: "unit2", title: "Unit 2 Specimen Paper A (Supplied, adapted)",
    origin: 'original', timeMinutes: 60, passMark: 28, questionIds: ["c1-u2-specimen-a-q1", "c1-u2-specimen-a-q2", "c1-u2-specimen-a-q3", "c1-u2-specimen-a-q4", "c1-u2-specimen-a-q5", "c1-u2-specimen-a-q6", "c1-u2-specimen-a-q7", "c1-u2-specimen-a-q8", "c1-u2-specimen-a-q9", "c1-u2-specimen-a-q10", "c1-u2-specimen-a-q11", "c1-u2-specimen-a-q12", "c1-u2-specimen-a-q13", "c1-u2-specimen-a-q14", "c1-u2-specimen-a-q15", "c1-u2-specimen-a-q16", "c1-u2-specimen-a-q17", "c1-u2-specimen-a-q18", "c1-u2-specimen-a-q19", "c1-u2-specimen-a-q20", "c1-u2-specimen-a-q21", "c1-u2-specimen-a-q22", "c1-u2-specimen-a-q23", "c1-u2-specimen-a-q24", "c1-u2-specimen-a-q25", "c1-u2-specimen-a-q26", "c1-u2-specimen-a-q27", "c1-u2-specimen-a-q28", "c1-u2-specimen-a-q29", "c1-u2-specimen-a-q30", "c1-u2-specimen-a-q31", "c1-u2-specimen-a-q32", "c1-u2-specimen-a-q4", "c1-u2-specimen-a-q4", "c1-u2-specimen-a-q35", "c1-u2-specimen-a-q36", "c1-u2-specimen-a-q37", "c1-u2-specimen-a-q38", "c1-u2-specimen-a-q39", "c1-u2-specimen-a-q40"],
    source: "CeMAP 1, Unit 2 Specimen Paper A, p.233-242; verified against the supplied answer table."
  },
  {
    id: "c1-u2-specimen-b", module: 'cemap1', unitKey: "unit2", title: "Unit 2 Specimen Paper B (Supplied, adapted)",
    origin: 'original', timeMinutes: 60, passMark: 28, questionIds: ["c1-u2-specimen-b-q1", "c1-u2-specimen-b-q2", "c1-u2-specimen-b-q3", "c1-u2-specimen-b-q4", "c1-u2-specimen-b-q5", "c1-u2-specimen-b-q6", "c1-u2-specimen-b-q7", "c1-u2-specimen-b-q8", "c1-u2-specimen-b-q9", "c1-u2-specimen-b-q10", "c1-u2-specimen-b-q11", "c1-u2-specimen-b-q12", "c1-u2-specimen-b-q13", "c1-u2-specimen-b-q14", "c1-u2-specimen-b-q15", "c1-u2-specimen-b-q16", "c1-u2-specimen-b-q17", "c1-u2-specimen-b-q18", "c1-u2-specimen-b-q19", "c1-u2-specimen-b-q20", "c1-u2-specimen-b-q21", "c1-u2-specimen-b-q22", "c1-u2-specimen-b-q23", "c1-u2-specimen-b-q24", "c1-u2-specimen-b-q25", "c1-u2-specimen-b-q26", "c1-u2-specimen-b-q27", "c1-u2-specimen-b-q28", "c1-u2-specimen-b-q4", "c1-u2-specimen-b-q30", "c1-u2-specimen-b-q31", "c1-u2-specimen-b-q32", "c1-u2-specimen-b-q33", "c1-u2-specimen-b-q34", "c1-u2-specimen-b-q35", "c1-u2-specimen-b-q4", "c1-u2-specimen-b-q37", "c1-u2-specimen-b-q38", "c1-u2-specimen-b-q39", "c1-u2-specimen-b-q40"],
    source: "CeMAP 1, Unit 2 Specimen Paper B, p.243-251; verified against the supplied answer table."
  },
  {
    id: "c1-u2-specimen-c", module: 'cemap1', unitKey: "unit2", title: "Unit 2 Specimen Paper C (Supplied, adapted)",
    origin: 'original', timeMinutes: 60, passMark: 28, questionIds: ["c1-u2-specimen-c-q1", "c1-u2-specimen-c-q2", "c1-u2-specimen-c-q3", "c1-u2-specimen-c-q4", "c1-u2-specimen-c-q5", "c1-u2-specimen-c-q6", "c1-u2-specimen-c-q7", "c1-u2-specimen-c-q8", "c1-u2-specimen-c-q9", "c1-u2-specimen-c-q10", "c1-u2-specimen-c-q11", "c1-u2-specimen-c-q12", "c1-u2-specimen-c-q13", "c1-u2-specimen-c-q14", "c1-u2-specimen-c-q15", "c1-u2-specimen-c-q16", "c1-u2-specimen-c-q17", "c1-u2-specimen-c-q18", "c1-u2-specimen-c-q19", "c1-u2-specimen-c-q20", "c1-u2-specimen-c-q21", "c1-u2-specimen-c-q22", "c1-u2-specimen-c-q23", "c1-u2-specimen-c-q24", "c1-u2-specimen-c-q25", "c1-u2-specimen-c-q5", "c1-u2-specimen-c-q27", "c1-u2-specimen-c-q28", "c1-u2-specimen-c-q29", "c1-u2-specimen-c-q30", "c1-u2-specimen-c-q31", "c1-u2-specimen-c-q32", "c1-u2-specimen-c-q33", "c1-u2-specimen-c-q34", "c1-u2-specimen-c-q35", "c1-u2-specimen-c-q36", "c1-u2-specimen-c-q37", "c1-u2-specimen-c-q38", "c1-u2-specimen-c-q39", "c1-u2-specimen-c-q40"],
    source: "CeMAP 1, Unit 2 Specimen Paper C, p.252-260; verified against the supplied answer table."
  },
]
