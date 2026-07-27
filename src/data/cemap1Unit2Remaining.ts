import type { Flashcard, GlossaryTerm, Lesson, Question } from './types'

const source = 'CeMAP 1, Unit 2'

export const cemap1Unit2Lessons: Lesson[] = [
  {
    id: 'c1-u2-t2a', module: 'cemap1', unitKey: 'unit2', topicKey: 't2a',
    title: 'Consumer Rights & Ethical Outcomes',
    intro: 'Consumer protection combines general legal rights, regulatory standards, the Consumer Duty and a firm culture that identifies and controls conduct risk.',
    sections: [
      { heading: 'Consumer rights and dispute resolution', bullets: [
        'Consumer law protects customers when goods or services are misdescribed, substandard or supplied unfairly. Remedies depend on the contract and circumstances.',
        'Alternative dispute resolution offers a route to settle disputes without ordinary court proceedings. Relevant public and consumer bodies can also provide information or bring systemic concerns to attention.',
        'A super-complaint raises a market feature that appears to cause significant harm to consumers rather than resolving one person’s individual complaint.'
      ]},
      { heading: 'Principles for Businesses', bullets: [
        'The high-level principles require integrity; skill, care and diligence; effective management and control; financial prudence; proper market conduct; regard for customers’ interests; clear communications; conflict management; suitable advice where trust is placed; protection of client assets; and open cooperation with regulators.',
        'The Consumer Duty adds a requirement to act to deliver good outcomes for retail customers.',
        'The principles apply at firm level and shape the controls, decisions and behaviour expected throughout the business.'
      ]},
      { heading: 'Consumer Duty outcomes', bullets: [
        'Firms should act in good faith, avoid foreseeable harm and help retail customers pursue their financial objectives.',
        'The four outcome areas are products and services, price and value, consumer understanding, and consumer support.',
        'A product should have an identified target market, provide fair value, be explained in a way customers can understand and be supported throughout its life.'
      ]},
      { heading: 'Culture, conduct risk and market abuse', bullets: [
        'Culture is the pattern of values and behaviours that determines how a firm makes decisions when rules alone do not provide the answer.',
        'Conduct risk is the risk that a firm’s behaviour produces poor customer outcomes or damages market integrity.',
        'Market abuse includes behaviour such as insider dealing and market manipulation. Controls, escalation and ethical leadership help prevent it.'
      ]}
    ],
    workedExample: { title: 'Testing an outcome, not just a disclosure', body: [
      'A firm sends a technically complete but highly complex product notice.',
      'Customers repeatedly misunderstand a material charge and cancel at a loss.',
      'Providing the notice does not by itself demonstrate a good outcome.',
      'The firm should redesign and test the communication, address foreseeable harm and monitor whether understanding improves.'
    ]},
    examTraps: [
      'Clear communication is not the same as simply providing every available document.',
      'Consumer Duty focuses on outcomes throughout the product life, not only the point of sale.',
      'Market manipulation is market abuse; money laundering is a separate financial-crime issue.'
    ],
    remember: [
      'Consumer Duty: good faith, avoid foreseeable harm, support financial objectives.',
      'Four outcomes: products and services; price and value; understanding; support.',
      'Conduct risk links firm behaviour to customer and market outcomes.'
    ],
    knowledgeCheck: [
      { question: 'Which Consumer Duty outcome asks whether customers can understand information and make effective decisions?', options: ['Price and value','Consumer understanding','Consumer support','Products and services'], correctIndex: 1, explanation: 'Consumer understanding concerns communications that equip retail customers to make informed decisions.' },
      { question: 'Which is an example of market abuse?', options: ['A customer complaint','Market manipulation','A suitability report','A fact-find'], correctIndex: 1, explanation: 'Manipulating a market is a form of market abuse and threatens market integrity.' }
    ],
    source: `${source} Topic 2 Part 1, p.163-170`, dateSensitive: true
  },
  {
    id: 'c1-u2-t2b', module: 'cemap1', unitKey: 'unit2', topicKey: 't2b',
    title: 'Money Laundering, Data & Complaints',
    intro: 'This topic links financial-crime controls, customer identification, data protection, complaint handling and the principal compensation and ombudsman routes.',
    sections: [
      { heading: 'Money laundering controls', bullets: [
        'Money laundering disguises criminal property so that it appears legitimate. Offences include concealing or transferring criminal property, becoming involved in an arrangement and acquiring, using or possessing criminal property.',
        'A firm should apply customer due diligence, identify beneficial owners, understand the purpose of the relationship, monitor activity and retain required records.',
        'Suspicion should be escalated through the firm’s reporting process. Tipping off a customer in a way that could prejudice an investigation is an offence.',
        'Identity evidence should be reliable and appropriate to the risk. A firm should not assume that one document or an introduction removes the need for proportionate checks.'
      ]},
      { heading: 'Data protection', bullets: [
        'Personal data relates to an identifiable person. Special-category data receives additional protection because of its sensitivity.',
        'Core principles require lawful, fair and transparent use; specified purposes; data minimisation; accuracy; limited retention; and appropriate security. The controller is accountable for compliance.',
        'Individuals have rights over their data, including access, correction and, where conditions apply, erasure, restriction, objection and portability.',
        'A lawful basis is needed for processing. Consent is only one possible basis and must not be treated as the automatic answer in every case.'
      ]},
      { heading: 'Complaints and ombudsmen', bullets: [
        'A firm should recognise a complaint, investigate it fairly, keep the customer informed and issue the appropriate final response within the applicable timetable.',
        'The Financial Ombudsman Service considers eligible unresolved complaints about regulated financial firms. An accepted decision binds the firm, while the complainant can reject it and retain other legal options.',
        'Pension complaints may involve different routes depending on whether the issue concerns administration, scheme operation or regulated financial advice.'
      ]},
      { heading: 'Compensation arrangements', bullets: [
        'The Financial Services Compensation Scheme is a fund of last resort for eligible claims when an authorised firm cannot meet its liabilities.',
        'Different limits and conditions apply to deposits, investments, insurance and other protected business. Temporary high-balance protection can apply to qualifying deposits for a limited period.',
        'The Pension Protection Fund is distinct from the FSCS and protects eligible members of certain defined-benefit occupational schemes when the employer becomes insolvent and the scheme is underfunded.',
        'Limits and eligibility are date-sensitive and must be checked against the syllabus edition rather than guessed.'
      ]}
    ],
    workedExample: { title: 'Suspicious activity and confidentiality', body: [
      'A customer gives an implausible explanation for repeated large transfers.',
      'The employee records the facts and follows the firm’s internal escalation procedure.',
      'The employee does not warn the customer that a report may be made.',
      'The firm continues only in accordance with its legal and internal obligations.'
    ]},
    examTraps: [
      'Customer due diligence is risk-based; an intermediary’s introduction does not automatically remove it.',
      'Tipping off is not the same as making an internal suspicion report.',
      'FOS resolves eligible disputes; FSCS compensates eligible customers after firm failure.',
      'Compensation limits change. Use verified current syllabus figures only.'
    ],
    remember: [
      'CDD: identify, verify, understand purpose and ownership, monitor, retain records.',
      'Data principles: lawfulness, purpose limitation, minimisation, accuracy, retention and security.',
      'FOS = dispute resolution. FSCS = eligible firm-failure compensation. PPF = eligible DB scheme protection.'
    ],
    knowledgeCheck: [
      { question: 'Which action creates a tipping-off risk?', options: ['Escalating suspicion internally','Warning the customer that a report may trigger an investigation','Checking identity','Monitoring transactions'], correctIndex: 1, explanation: 'Warning the customer could prejudice an investigation and may amount to tipping off.' },
      { question: 'Which body is the fund of last resort for eligible customers of failed authorised financial firms?', options: ['FOS','FSCS','Pensions Ombudsman','Money and Pensions Service'], correctIndex: 1, explanation: 'The FSCS deals with eligible compensation claims when an authorised firm cannot meet its liabilities.' }
    ],
    source: `${source} Topic 2 Part 2, p.171-183`, dateSensitive: true
  },
  {
    id: 'c1-u2-t3', module: 'cemap1', unitKey: 'unit2', topicKey: 't3',
    title: 'Regulatory Advice Framework',
    intro: 'The regulatory framework changes according to the customer, the service being provided, the product and the way a promotion or recommendation is communicated.',
    sections: [
      { heading: 'Customer categories and vulnerability', bullets: [
        'Retail clients receive the highest regulatory protection. Professional clients and eligible counterparties are assumed to have greater expertise and receive different protections.',
        'Vulnerability can arise from health, life events, resilience or capability. It may be temporary, permanent, obvious or hidden.',
        'A firm should design flexible service and support, train staff to recognise needs and avoid practices that exploit or disadvantage vulnerable customers.',
        'A fiduciary relationship involves trust and requires loyalty, care and proper management of conflicts.'
      ]},
      { heading: 'Financial promotions', bullets: [
        'A financial promotion is an invitation or inducement to engage in investment activity.',
        'Promotions must be fair, clear and not misleading. Benefits should not be emphasised without a fair and prominent indication of relevant risks.',
        'Past performance is not necessarily a guide to future performance. Forecasts and comparisons need a reasonable basis and clear assumptions.',
        'Approval and communication rules depend on the firm, product, audience and medium.'
      ]},
      { heading: 'Advice and guidance', bullets: [
        'Regulated advice involves a personal recommendation about a particular investment or course of action.',
        'Generic information or guidance explains options without making a personal recommendation.',
        'Independent advice is based on a sufficiently broad and fair analysis of relevant products. Restricted advice is limited in scope and the restriction must be explained.',
        'Focused advice considers a limited need agreed with the customer. Simplified and automated services still need appropriate controls and must not disguise their scope.'
      ]},
      { heading: 'Charges, cancellation and ongoing service', bullets: [
        'Adviser charges should be disclosed clearly so the customer understands the amount or calculation method and how payment affects their investment.',
        'Cancellation rights and cooling-off periods depend on the product and transaction. The app should not present one period as universal.',
        'Proactive servicing is initiated by the firm, such as a scheduled review. Reactive servicing responds to an event or customer contact, such as missed premiums or a change in circumstances.',
        'The scope and price of ongoing service should match what is actually delivered.'
      ]}
    ],
    workedExample: { title: 'Guidance becoming a recommendation', body: [
      'An adviser explains the general difference between cash and shares: this can remain guidance.',
      'The adviser then tells a particular customer to move their savings into a named equity fund.',
      'The communication has become a personal recommendation.',
      'The firm must apply the rules and suitability process appropriate to regulated advice.'
    ]},
    examTraps: [
      'General information is not automatically regulated advice; a personal recommendation is the key distinction.',
      'Restricted does not mean unqualified or unsuitable. It means the advice range is limited and disclosed.',
      'Past performance must not be presented as a reliable promise of future returns.',
      'Reactive service responds to an event; proactive service is initiated before the customer asks.'
    ],
    remember: [
      'Retail clients receive the highest protection.',
      'Promotion standard: fair, clear and not misleading.',
      'Independent = broad and fair market analysis; restricted = disclosed limitation.',
      'Vulnerability may arise from health, life events, resilience or capability.'
    ],
    knowledgeCheck: [
      { question: 'Which statement is a personal recommendation?', options: ['Shares can fluctuate','Cash usually has lower market risk','This named fund is suitable for you and you should buy it','Here is a list of product categories'], correctIndex: 2, explanation: 'It recommends a specific course of action to a particular customer.' },
      { question: 'A firm calls a customer because three premiums were missed. What type of servicing is this?', options: ['Proactive','Reactive','Independent','Execution-only'], correctIndex: 1, explanation: 'The firm is reacting to an event that has already occurred.' }
    ],
    source: `${source} Topic 3, p.184-196`, dateSensitive: true
  },
  {
    id: 'c1-u2-t4', module: 'cemap1', unitKey: 'unit2', topicKey: 't4',
    title: 'Ethical Principles',
    intro: 'Ethics helps advisers decide what they ought to do, particularly where a technically lawful action could still harm customers, colleagues, markets or public trust.',
    sections: [
      { heading: 'Values, morals and ethics', bullets: [
        'Values are beliefs about what matters. Morals are personal or social judgements about right and wrong. Ethics provides a structured way to examine and justify conduct.',
        'A conflict can arise between personal belief, professional duty, firm incentives and the customer’s interests.',
        'An ethical decision identifies stakeholders, facts, duties, likely consequences, conflicts and alternatives before action is taken.'
      ]},
      { heading: 'Ethical theories', bullets: [
        'Consequentialism judges an action mainly by its outcomes. It asks which option produces the best overall consequences.',
        'Deontological ethics focuses on duties, rules and principles. An action may be wrong even if it appears to create a useful outcome.',
        'Virtue ethics asks what a person of good character would do and develops qualities such as honesty, courage, fairness and prudence.',
        'Applied ethics uses these approaches to analyse practical issues such as sales incentives, confidentiality, sustainability and fair treatment.'
      ]},
      { heading: 'Ethics in firms and professions', bullets: [
        'An ethical culture needs leadership, clear values, fair incentives, safe challenge, proportionate controls and consistent consequences.',
        'Benefits include trust, stronger customer relationships, staff commitment, lower conduct risk and a more sustainable reputation.',
        'Whistleblowing allows serious concerns to be raised through protected channels. It should not be confused with an ordinary personal grievance.',
        'Professionalism combines knowledge, competence, ethical behaviour, accountability and continuing development.'
      ]},
      { heading: 'Competence and CPD', bullets: [
        'Competent Adviser Status is achieved through assessment and supervised practice, not merely by passing an examination.',
        'Until competence is demonstrated, relevant advice may be given only under appropriate supervision.',
        'Firms monitor ongoing competence and advisers maintain knowledge and skills through continuing professional development.',
        'The source distinguishes structured and unstructured development and gives annual expectations that should be treated as syllabus- and role-sensitive.'
      ]}
    ],
    workedExample: { title: 'Incentive versus customer outcome', body: [
      'A sales incentive rewards the product with the highest margin.',
      'A lower-margin product better meets the customer’s needs.',
      'A purely self-interested choice creates a conflict and foreseeable harm.',
      'The adviser should prioritise suitability and the firm should redesign incentives that encourage poor outcomes.'
    ]},
    examTraps: [
      'Law and ethics overlap but are not identical; conduct can be legal yet ethically weak.',
      'Consequentialism focuses on outcomes, deontology on duties, and virtue ethics on character.',
      'Passing an exam alone does not establish Competent Adviser Status.',
      'A trainee may advise under appropriate supervision while competence is being achieved.'
    ],
    remember: [
      'Consequences, duties and character are three different ethical lenses.',
      'Professionalism requires competence and ethical accountability.',
      'Ethical culture is reinforced by leadership, incentives, challenge and consistent behaviour.',
      'Competence must be maintained, not achieved once and forgotten.'
    ],
    knowledgeCheck: [
      { question: 'Which ethical approach focuses most directly on duties and rules?', options: ['Consequentialism','Deontology','Virtue ethics','Behavioural finance'], correctIndex: 1, explanation: 'Deontological ethics judges conduct by duties and principles.' },
      { question: 'May a trainee adviser give relevant advice before achieving competent status?', options: ['Never','Only under appropriate supervision','Only if the customer signs a waiver','Only for high-value investments'], correctIndex: 1, explanation: 'The source permits advice under appropriate supervision while competence is being developed.' }
    ],
    source: `${source} Topic 4, p.197-207`, dateSensitive: true
  }
]

function card(id: string, topicKey: string, category: string, front: string, back: string, pages: string): Flashcard {
  return { id, module: 'cemap1', unitKey: 'unit2', topicKey, category, front, back, source: `${source}, ${pages}` }
}

export const cemap1Unit2Flashcards: Flashcard[] = [
  card('fc-c1-u2-t2a-01','t2a','Regulations','What are the four Consumer Duty outcomes?','Products and services; price and value; consumer understanding; consumer support.','Topic 2 Part 1, p.166'),
  card('fc-c1-u2-t2a-02','t2a','Conduct','What three cross-cutting behaviours support the Consumer Duty?','Act in good faith, avoid foreseeable harm and support retail customers in pursuing their financial objectives.','Topic 2 Part 1, p.166'),
  card('fc-c1-u2-t2a-03','t2a','Definitions','What is conduct risk?','The risk that a firm’s behaviour causes poor customer outcomes or harms market integrity.','Topic 2 Part 1, p.167'),
  card('fc-c1-u2-t2a-04','t2a','Regulations','What standard applies to customer communications?','They should be fair, clear and not misleading and support customer understanding.','Topic 2 Part 1, p.165-166'),
  card('fc-c1-u2-t2a-05','t2a','Definitions','What is a super-complaint?','A complaint by an eligible body that a market feature appears to cause significant harm to consumer interests.','Topic 2 Part 1, p.165'),
  card('fc-c1-u2-t2a-06','t2a','Ethics','Why does corporate culture matter?','It shapes decisions, incentives and behaviour, including how a firm acts when a detailed rule does not dictate the answer.','Topic 2 Part 1, p.166-167'),
  card('fc-c1-u2-t2b-01','t2b','Definitions','What is money laundering?','The process of disguising criminal property or its origins so that it appears legitimate.','Topic 2 Part 2, p.171'),
  card('fc-c1-u2-t2b-02','t2b','Regulations','What is customer due diligence designed to establish?','Identity, beneficial ownership, purpose and intended nature of the relationship, supported by ongoing monitoring.','Topic 2 Part 2, p.171-174'),
  card('fc-c1-u2-t2b-03','t2b','Common exam traps','What is tipping off?','Improperly revealing information that is likely to prejudice a money-laundering investigation.','Topic 2 Part 2, p.171-174'),
  card('fc-c1-u2-t2b-04','t2b','Data','Name the core data-protection principles.','Lawfulness/fairness/transparency, purpose limitation, minimisation, accuracy, storage limitation, security and accountability.','Topic 2 Part 2, p.175'),
  card('fc-c1-u2-t2b-05','t2b','Complaints','How do FOS and FSCS differ?','FOS resolves eligible disputes; FSCS may compensate eligible customers when an authorised firm cannot meet liabilities.','Topic 2 Part 2, p.177-180'),
  card('fc-c1-u2-t2b-06','t2b','Protection','What does the Pension Protection Fund protect?','Eligible members of certain underfunded defined-benefit occupational schemes when the sponsoring employer becomes insolvent.','Topic 2 Part 2, p.180'),
  card('fc-c1-u2-t3-01','t3','Definitions','Which customer category receives the highest regulatory protection?','Retail client.','Topic 3, p.184-185'),
  card('fc-c1-u2-t3-02','t3','Suitability','What four drivers of vulnerability should firms consider?','Health, life events, resilience and capability.','Topic 3, p.185'),
  card('fc-c1-u2-t3-03','t3','Regulations','What is the standard for financial promotions?','Fair, clear and not misleading, with a balanced and prominent treatment of relevant risks.','Topic 3, p.186-188'),
  card('fc-c1-u2-t3-04','t3','Definitions','What turns information into regulated advice?','A personal recommendation to a customer about a particular investment or course of action.','Topic 3, p.187-189'),
  card('fc-c1-u2-t3-05','t3','Advice','How do independent and restricted advice differ?','Independent advice uses a sufficiently broad and fair analysis; restricted advice has a disclosed limitation in range or scope.','Topic 3, p.188-190'),
  card('fc-c1-u2-t3-06','t3','Processes','How do proactive and reactive servicing differ?','Proactive service is initiated by the firm; reactive service responds to a customer contact or event.','Topic 3, p.191-196'),
  card('fc-c1-u2-t4-01','t4','Ethics','What does consequentialism focus on?','The consequences or outcomes of an action.','Topic 4, p.198-200'),
  card('fc-c1-u2-t4-02','t4','Ethics','What does deontological ethics focus on?','Duties, rules and principles.','Topic 4, p.199-200'),
  card('fc-c1-u2-t4-03','t4','Ethics','What does virtue ethics focus on?','Character and what a virtuous person would do.','Topic 4, p.199-200'),
  card('fc-c1-u2-t4-04','t4','Conduct','What is whistleblowing?','Raising serious concerns about wrongdoing through an appropriate protected channel.','Topic 4, p.201'),
  card('fc-c1-u2-t4-05','t4','Definitions','Does passing an examination alone establish Competent Adviser Status?','No. Competence must also be demonstrated and assessed through supervised practice.','Topic 4, p.202-203'),
  card('fc-c1-u2-t4-06','t4','Processes','What is CPD for?','Maintaining and developing the knowledge, skills and professional behaviour needed for the role.','Topic 4, p.203')
]

function glossary(id: string, term: string, definition: string): GlossaryTerm {
  return { id, term, definition, module: ['cemap1'] }
}

export const cemap1Unit2Glossary: GlossaryTerm[] = [
  glossary('gl-c1-u2-super-complaint','Super-complaint','A complaint from an eligible body that a market feature appears significantly to damage consumer interests.'),
  glossary('gl-c1-u2-consumer-duty','Consumer Duty','The FCA framework requiring firms to act to deliver good outcomes for retail customers.'),
  glossary('gl-c1-u2-conduct-risk','Conduct risk','The risk that a firm’s behaviour causes poor customer outcomes or harms market integrity.'),
  glossary('gl-c1-u2-market-abuse','Market abuse','Improper behaviour affecting financial markets, including insider dealing and market manipulation.'),
  glossary('gl-c1-u2-cdd','Customer due diligence','Risk-based steps to identify and verify customers and beneficial owners, understand the relationship and monitor activity.'),
  glossary('gl-c1-u2-tipping-off','Tipping off','Improper disclosure likely to prejudice a money-laundering investigation.'),
  glossary('gl-c1-u2-data-controller','Data controller','The person or organisation that determines why and how personal data is processed.'),
  glossary('gl-c1-u2-fos','Financial Ombudsman Service','The independent service that considers eligible unresolved complaints about regulated financial firms.'),
  glossary('gl-c1-u2-fscs','Financial Services Compensation Scheme','The fund of last resort for eligible customers of authorised firms that cannot meet their liabilities.'),
  glossary('gl-c1-u2-ppf','Pension Protection Fund','The statutory fund protecting eligible members of certain underfunded defined-benefit schemes after employer insolvency.'),
  glossary('gl-c1-u2-retail-client','Retail client','The customer category receiving the highest level of regulatory protection.'),
  glossary('gl-c1-u2-vulnerable-customer','Vulnerable customer','A customer especially susceptible to harm because of personal circumstances such as health, life events, resilience or capability.'),
  glossary('gl-c1-u2-financial-promotion','Financial promotion','An invitation or inducement to engage in investment activity.'),
  glossary('gl-c1-u2-personal-recommendation','Personal recommendation','A recommendation presented as suitable for a person or based on that person’s circumstances.'),
  glossary('gl-c1-u2-independent-advice','Independent advice','Advice based on a sufficiently broad and fair analysis of relevant products.'),
  glossary('gl-c1-u2-restricted-advice','Restricted advice','Advice limited in product range, provider range or scope, with the restriction disclosed.'),
  glossary('gl-c1-u2-consequentialism','Consequentialism','An ethical approach that judges actions mainly by their outcomes.'),
  glossary('gl-c1-u2-deontology','Deontological ethics','An ethical approach based on duties, rules and principles.'),
  glossary('gl-c1-u2-virtue','Virtue ethics','An ethical approach centred on character and the qualities of a good person.'),
  glossary('gl-c1-u2-cas','Competent Adviser Status','A firm’s confirmation that an adviser has demonstrated the competence needed to advise without trainee supervision.'),
  glossary('gl-c1-u2-cpd','Continuing professional development','Ongoing learning used to maintain and improve professional knowledge, skills and behaviour.')
]

function question(
  id: string, topicKey: string, text: string, options: string[], correctIndex: number,
  explanation: string, pages: string, reasons: string[]
): Question {
  return {
    id, module: 'cemap1', unitKey: 'unit2', topicKey, text, options,
    correctIndex: [correctIndex], explanation, incorrectExplanations: reasons,
    difficulty: 'intermediate', source: `${source}, ${pages}`, origin: 'generated',
    dateSensitive: true
  }
}

export const cemap1Unit2Questions: Question[] = [
  question('c1-u2-t2a-qg1','t2a','Which is one of the Consumer Duty outcomes?',['Market timing','Price and value','Tax collection','Capital adequacy'],1,'Price and value is one of the four retail-customer outcomes.','Topic 2 Part 1, p.166',['Market timing is not a Duty outcome.','Correct.','Tax collection is not a Duty outcome.','Capital adequacy is a prudential issue, not one of the four outcomes.']),
  question('c1-u2-t2a-qg2','t2a','A firm knows customers misunderstand a major fee but leaves its documents unchanged. Which Duty concern is most direct?',['Consumer understanding','Client money segregation','Whistleblowing','Professional-client classification'],0,'The firm should support understanding and act to avoid foreseeable harm.','Topic 2 Part 1, p.166',['Correct.','No client-money fact is given.','No wrongdoing report is described.','The scenario concerns retail communication, not classification.']),
  question('c1-u2-t2a-qg3','t2a','Which behaviour is market abuse?',['Market manipulation','Fact-finding','Complaint investigation','CPD'],0,'Market manipulation is a recognised form of market abuse.','Topic 2 Part 1, p.167',['Correct.','Fact-finding supports suitable advice.','Complaint investigation is a customer-remedy process.','CPD maintains competence.']),
  question('c1-u2-t2a-qg4','t2a','What is conduct risk?',['Risk of an IT outage only','Risk that behaviour produces poor customer or market outcomes','Risk that tax rates change','Risk that a property needs repair'],1,'Conduct risk connects firm behaviour with harm to customers or market integrity.','Topic 2 Part 1, p.167',['This is operational risk and too narrow.','Correct.','Tax change is legislative risk.','Property condition is not the definition.']),
  question('c1-u2-t2b-qg1','t2b','What should an employee do with a money-laundering suspicion?',['Warn the customer','Follow the firm’s internal reporting process','Post it publicly','Delete the transaction record'],1,'Suspicion should be escalated through the firm’s designated process without tipping off.','Topic 2 Part 2, p.171-174',['Warning may tip off the customer.','Correct.','Public disclosure is inappropriate.','Records should be retained, not destroyed.']),
  question('c1-u2-t2b-qg2','t2b','Which data principle limits collection to what is relevant and necessary?',['Accuracy','Data minimisation','Portability','Direct marketing'],1,'Data minimisation prevents excessive collection.','Topic 2 Part 2, p.175',['Accuracy concerns correctness.','Correct.','Portability is a data-subject right.','Direct marketing is an activity, not this principle.']),
  question('c1-u2-t2b-qg3','t2b','Which body considers eligible unresolved complaints about regulated financial firms?',['FOS','FSCS','PPF','PRA only'],0,'The Financial Ombudsman Service is the relevant dispute-resolution body.','Topic 2 Part 2, p.177-179',['Correct.','FSCS concerns eligible firm-failure claims.','PPF protects eligible DB pension members.','The PRA is a regulator, not the ombudsman service.']),
  question('c1-u2-t2b-qg4','t2b','How does the FSCS differ from the FOS?',['It prosecutes crime','It compensates eligible customers after firm failure','It approves every adviser','It sets the Bank Rate'],1,'The FSCS is a fund of last resort; the FOS resolves eligible disputes.','Topic 2 Part 2, p.177-180',['Criminal prosecution is not its role.','Correct.','It does not approve every adviser.','The MPC sets Bank Rate.']),
  question('c1-u2-t3-qg1','t3','Which customer category normally receives the greatest regulatory protection?',['Eligible counterparty','Professional client','Retail client','Market maker'],2,'Retail clients receive the highest level of protection.','Topic 3, p.184',['Eligible counterparties receive fewer protections.','Professional clients are assumed to have greater expertise.','Correct.','Market maker is not the answer category here.']),
  question('c1-u2-t3-qg2','t3','What must a financial promotion be?',['Optimistic and brief','Fair, clear and not misleading','Approved by the customer','Free from all risk warnings'],1,'The promotion must present a fair and understandable balance.','Topic 3, p.186-188',['Optimism is not the standard.','Correct.','Customer approval is not the regulatory test.','Relevant risks should be disclosed, not removed.']),
  question('c1-u2-t3-qg3','t3','Which statement is regulated advice?',['Shares can fall in value','Here are three product categories','This named fund is suitable for you and you should buy it','Past performance is historical'],2,'A personal recommendation about a particular investment is regulated advice.','Topic 3, p.187-189',['This is generic information.','A neutral list is guidance.','Correct.','This is a general factual warning.']),
  question('c1-u2-t3-qg4','t3','A firm contacts a customer after a missed premium. What type of service is this?',['Proactive','Reactive','Independent','Discretionary'],1,'The contact responds to an event that has already occurred.','Topic 3, p.191-196',['Proactive service is initiated before an event prompts it.','Correct.','Independent describes advice scope.','Discretionary describes decision-making authority.']),
  question('c1-u2-t4-qg1','t4','Which theory judges conduct mainly by its consequences?',['Deontology','Consequentialism','Virtue ethics','Contract law'],1,'Consequentialism evaluates outcomes.','Topic 4, p.198-200',['Deontology focuses on duties.','Correct.','Virtue ethics focuses on character.','Contract law is not an ethical theory.']),
  question('c1-u2-t4-qg2','t4','Which theory asks what a person of good character would do?',['Virtue ethics','Consequentialism','Deontology','Monetary policy'],0,'Virtue ethics centres on character and virtues.','Topic 4, p.199-200',['Correct.','Consequentialism centres on outcomes.','Deontology centres on duties.','Monetary policy is unrelated.']),
  question('c1-u2-t4-qg3','t4','Does passing the relevant examination alone establish Competent Adviser Status?',['Yes, automatically','No, competence must also be demonstrated and assessed','Only for mortgages','Only if the customer agrees'],1,'CAS requires demonstrated competence, commonly through supervised assessment as well as knowledge.','Topic 4, p.202-203',['An examination alone is insufficient.','Correct.','The principle is not limited this way.','A customer cannot confer adviser competence.']),
  question('c1-u2-t4-qg4','t4','When may a trainee adviser give advice before achieving competent status?',['Under appropriate supervision','Never','Only without keeping records','Only to professional clients'],0,'The source permits advice under appropriate supervision while competence is developed.','Topic 4, p.202-203',['Correct.','The source does not impose an absolute ban.','Record keeping still applies.','Supervision, not customer category, is the key condition.'])
]
