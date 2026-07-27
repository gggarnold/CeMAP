# CeMAP Revision App - Initial Audit Report

Audit date: 27 July 2026  
Repository audited: `gggarnold/CeMAP` at commit `e53bf83`  
Audit scope: full application source plus both supplied PDFs (533 pages total)  
Implementation status: no educational content was imported during this audit.

## Executive summary

The project is a working React/Vite/TypeScript single-page revision app with a coherent mobile-first design and an appropriate content/data separation. It should be continued rather than rebuilt.

Its core learning systems already exist: lessons, quick checks, flashcards with spaced repetition, practice quizzes, timed mocks, calculations, glossary, progress, planning, analytics, settings and offline IndexedDB persistence. The principal problem is content completeness: 23 of 37 curriculum topics are explicitly pending, most supplied mock material is absent, glossary relationships are incomplete, and the question schema is not fully populated to the requested standard.

Current section-level PDF coverage is 56.5% for CeMAP 1 and 12.0% for CeMAP 2-3. Combined coverage is 33.3%.

## Architecture

- React 18 with TypeScript and Vite.
- React Router provides page routing.
- Dexie/IndexedDB stores settings, lesson progress, flashcard SRS state, quiz attempts, mock attempts, study time and planning data.
- Content is separated into `src/data` TypeScript datasets.
- `curriculum.ts` is the canonical topic map and exposes `complete` or `pending` status.
- `lessons.ts`, `flashcards.ts`, `questions.ts`, `specimenPaperA.ts`, `mockExams.ts`, `glossary.ts` and `calculations.ts` hold learning material.
- `allQuestions.ts` merges topic questions and the one imported specimen paper.
- SRS scheduling is implemented in `src/lib/srs.ts`; existing spaced-repetition behaviour should be preserved.
- Progress and quiz helpers are separated under `src/lib`; persistent models are in `src/db/db.ts`.
- Styling is centralised in `src/styles/global.css`; pages largely preserve a consistent card/pill/navigation design language.

## What is already implemented

- Dashboard and progress summary.
- Learn module selector and topic list.
- Lesson reader with completion tracking, worked examples, exam traps, memory points and quick knowledge checks.
- Flashcard filtering and study sessions.
- Spaced repetition and due-card handling.
- Practice quiz creation and runner.
- Timed mock hub, runner, flagging and results review.
- Four interactive calculation tools.
- Searchable glossary.
- Study planner.
- Analytics.
- Theme, text-size and data-management settings.
- Content coverage page.
- Responsive bottom navigation and reusable top bar/progress ring.
- GitHub Pages build/deployment workflow.

## Content already imported

### CeMAP 1

All 12 Unit 1 instructional topics are represented by lessons, flashcards and topic-test questions:

- Financial markets and intermediaries
- Government and economic policy
- Taxation
- State benefits
- Protection
- Savings and investments
- Retirement and borrowing
- Legal principles
- Wills, intestacy and trusts
- Development of UK regulation
- PRA/FCA approach, parts 1 and 2

One complete 40-question Unit 1 Specimen Paper A is imported and identifiable as an original supplied paper.

### CeMAP 2

- Unit 2 Topic 1: mortgage repayment methods

### CeMAP 3

- Protection issues
- Case Study 1 (10 questions)

## Missing modules, units and lessons

No top-level CeMAP module route is absent, but large units have no authored lessons:

- CeMAP 1 Unit 2: all five curriculum topics missing.
- CeMAP 2 Unit 1: all ten grouped curriculum topics missing.
- CeMAP 2 Unit 2: six of seven grouped curriculum topics missing.
- CeMAP 3: six supplied case studies remain missing as mock material.

All 23 pending topics are clickable and open an unfinished “Content not yet authored” page. These are placeholders, not broken links.

The detailed page-by-page list is in `CONTENT_COVERAGE.md`.

## Lessons: quality and schema gaps

The existing lesson shape includes an introduction, generic sections, optional worked example, exam traps, memory points and knowledge checks. It does not explicitly model all requested fields:

- key facts
- definitions
- examples as a required field
- exam tips distinct from exam traps
- common mistakes distinct from traps
- summary

Some of this material is embedded in generic section bullets, but consistency cannot be guaranteed or validated automatically. The schema should be extended carefully or a consistent heading convention should be enforced without changing the existing renderer’s visual design.

## Flashcards

- 88 flashcards exist.
- They cover only the 14 completed topics.
- Spaced repetition is already implemented and should be retained.
- The current category field supports grouping, but coverage is uneven across definitions, regulations, processes, calculations, products, suitability, risks, ethics, conduct, advice, mortgages and protection.
- All 23 pending topics need flashcards.
- Stable IDs are generated from array order (`fc-1`, `fc-2`, etc.). Inserting or reordering cards can change IDs and detach stored SRS history from the intended card. Stable authored IDs are recommended before large-scale expansion.

## Question bank

- 213 topic/case questions plus 40 specimen questions exist (253 total).
- Existing questions include topic, difficulty, module, source and explanations.
- `incorrectExplanations` is optional in the type and is not populated in the audited datasets. Therefore the requested “why each incorrect answer is wrong” requirement is currently unmet for all questions.
- Source fields generally identify a PDF topic but do not consistently include a page reference.
- Topic/case questions are labelled `origin: original`, while the type comment says this means directly taken/adapted from supplied tests. Educational wording must be independently rewritten while preserving examinable meaning and verified answers.
- The schema supports calculation flags and review-required flags.
- All 23 pending curriculum topics lack adequate topic practice.
- Question difficulty appears assigned uniformly or manually rather than calibrated by an auditable rule.
- There is no explicit question-type field for scenario, calculation, definition or regulation; filtering those types cannot be guaranteed.

## Mock exams

Existing:

- CeMAP 1 Unit 1 Specimen Paper A: 40 questions.
- CeMAP 3 Case Study 1: 10 questions.

Missing:

- CeMAP 1 Unit 1 Specimen Papers B and C.
- CeMAP 1 Unit 2 Specimen Papers A, B and C.
- CeMAP 3 Case Studies 2-7.
- No full CeMAP 2 Unit 1 or Unit 2 generated mock assembled from PDF-only questions.

The PDFs do not contain separate CeMAP 2 specimen papers; additional CeMAP 2 mocks would therefore need to be generated only from the instructional/topic-test material, kept identifiable as generated, and validated against the stated exam configuration.

## Glossary

- 28 terms exist.
- The helper only accepts term, definition and module; all relationship fields are effectively absent.
- `relatedLessonIds` exists in the type but is not populated.
- There are no schema fields for related flashcards or related questions.
- Important terminology across all pending topics is absent.
- Search is a simple in-memory filter and is adequate for the present small dataset.

## Calculations

Existing interactive tools:

- Approximate real interest rate.
- Capital repaid in year one using an annual-rest example.
- Procuration fee with a minimum.
- Monthly mortgage cost from a quoted amount per £1,000.

The calculation UI includes formula, variables, worked steps, input controls and common mistakes. However, the schema has no bank of randomised practice problems or stored step-by-step answers.

Calculation coverage still needs a page-by-page extraction pass across the missing topics and mock cases. Expected candidates visible in the supplied material include, where actually supported by a source page/question: tax computations, loan-to-value/deposit, affordability/income figures, interest-only repayment shortfalls, additional borrowing/equity, fees/charges, arrears figures and case-study mortgage/protection calculations. Each must be verified before implementation; this audit does not treat that candidate list as authoritative rules or figures.

## Duplicated and inconsistent content

- No duplicate content IDs were found in the inspected datasets.
- Some concepts intentionally recur across lessons, flashcards and questions; that is cross-format reinforcement, not data duplication.
- `questions.ts` and `specimenPaperA.ts` are merged at runtime, which is maintainable, but generated/source-paper metadata should use one consistent citation structure.
- The PDFs contain internal numbering and labelling errors (for example some CeMAP 2 tests are labelled “Unit 3” or use topic numbers 27/28/29; CeMAP 1’s contents page has incorrect physical page references). These errors must not be copied into app navigation or citations.
- Existing curriculum source ranges were copied from the inaccurate CeMAP 1 contents page. Unit 2 references are therefore wrong.
- The app’s “complete” status is topic-level only; it does not prove glossary, calculations, source pages or relationship coverage.

## Placeholder and unfinished pages

- 23 curriculum topics display “Coming soon”.
- Their lesson routes render “Content not yet authored”.
- The Coverage page openly lists pending topics but measures only topic lesson status.
- There is no catch-all route/404 page; an unknown path can render the shell without useful page content.
- Mock Results displays “Loading…” indefinitely when an attempt ID is invalid or missing because null is used for both loading and not-found state.
- Invalid mock IDs and invalid lesson params have minimal fallback handling.

## TODOs and comments

There are no literal `TODO` or `FIXME` markers in the application source.

There is, however, an explicit “STILL TO BUILD” comment in `mockExams.ts` listing missing mocks. That unfinished work matches the PDF audit, although its wording says “remaining 6” case studies while the source contains seven total and one is imported, so six are indeed missing.

## Navigation and component completeness

No declared route target in the primary navigation is missing. The main route/component map is internally consistent.

Issues:

- Pending topic cards are active buttons and navigate to placeholders; consider disabling them only if that matches existing UX, or keep them active while replacing placeholders incrementally.
- Previous/Next lesson navigation crosses module and unit boundaries because it uses one flattened curriculum list. This is functional but may surprise users.
- There is no wildcard route.
- Mock result invalid-state handling is incomplete.
- The calculation renderer is hardcoded by calculation ID. Every new calculation requires component code, contrary to the goal of fully data-driven content.
- Lesson presentation depends on generic sections, making required lesson-field completeness difficult to test.
- Glossary cards do not expose related lessons, flashcards or questions.
- Question review does not show per-option incorrect explanations.

## Data and performance observations

- Datasets are bundled eagerly into the initial JavaScript bundle; there is no route-level lazy loading.
- `allQuestions` duplicates only the array of references, not the question objects themselves.
- Current in-memory filtering is acceptable at 253 questions/88 flashcards/28 glossary terms, but 100% PDF coverage will materially increase bundle size.
- Flashcard and glossary generated IDs are order-dependent and unsafe for persistent relationships.
- Several components use inline styles; this matches the existing code and should not be broadly rewritten during content completion.
- The app has no test suite and no lint script. Build is the only configured automated quality gate.

## Build and runtime audit

- The repository contains a previously generated `dist` and recent deployment-related commits.
- A build attempt in the original shared checkout was blocked by the local sandbox denying the bundler access to that checkout’s configuration path. This is an environment/access failure, not a TypeScript diagnostic.
- A clean build still needs to be run from the active writable checkout before content work begins.
- Browser route testing should follow a successful local build/server start.

## Branding and copyright audit

- Repository-wide text search found zero occurrences of the prohibited source-provider name in source, assets, metadata or documentation present at commit `e53bf83`.
- No source-provider logo is present in `public`; the existing icon and favicon are generic app assets.
- The PDF files themselves contain provider branding, legal notices, headers and footers. Those are excluded from useful-content coverage and must never be imported.
- Educational content must be rewritten into original revision wording. Source-paper identity can be retained generically (for example “CeMAP 1 Unit 1 Specimen Paper A”) without reproducing provider identity or branded layout.
- References to recognised syllabus/regulatory/exam bodies should only remain where substantively required by the syllabus, not as training-provider promotion.

## Recommended incremental implementation order

1. Establish a clean writable Git checkout; run build and route smoke tests.
2. Correct source-page metadata and add stable content IDs without changing visible design.
3. Complete CeMAP 1 Unit 2 lessons, flashcards, glossary and topic-test questions.
4. Import and independently rewrite the five missing CeMAP 1 specimen papers with verified answers.
5. Complete CeMAP 2 Unit 1, topic group by topic group.
6. Complete the six missing CeMAP 2 Unit 2 topic groups.
7. Import CeMAP 3 Case Studies 2-7.
8. Add verified calculation practice as each related topic is completed.
9. Add question option explanations and glossary relationships.
10. Add generated PDF-only CeMAP 2 mocks, then perform full build, route, data-integrity, branding and coverage QA.

Each topic or paper should be a separate logical commit, with `CONTENT_COVERAGE.md` updated in the same commit.

## Audit conclusion

The app architecture and design are suitable for continuation. No rebuild is warranted. The audit gate is complete, but the completion gate is not: 32 of 48 useful PDF sections remain unavailable as fully usable app content, and several cross-cutting schema/QA requirements remain unmet.
