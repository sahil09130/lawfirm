// Practice areas. Each entry gets a page at /practice-areas/[slug] and a card on the home page.
// Text here is general, informative copy written for clients. DRAFT: have the firm's partners review it
// for accuracy and for compliance with the Bar Council of India's rules on advertising before launch.
// Add or remove entries here; routes and the header dropdown update automatically.

import type { PracticeArea } from "./types";

export const practiceAreas: PracticeArea[] = [
  {
    slug: "arbitration",
    name: "Arbitration",
    icon: "scale",
    summary: "Representation in domestic and international arbitration, from drafting clauses to enforcing awards.",
    overview: [
      "Arbitration lets businesses resolve disputes privately, before a tribunal of their choosing, under the Arbitration and Conciliation Act, 1996. We act for claimants and respondents in domestic and international arbitrations, including institutional and ad hoc proceedings.",
      "Our work begins well before a dispute: we help clients draft clear arbitration clauses, and when a dispute arises we advise on strategy, tribunal composition, evidence and the realistic path to an enforceable award.",
    ],
    sections: [
      { heading: "Drafting and advising on arbitration agreements", body: "A well-drafted clause fixes the seat, number of arbitrators, language, governing law and rules. We review and draft clauses in commercial contracts so that they are clear, workable and enforceable." },
      { heading: "Conducting arbitral proceedings", body: "We handle the full process: notice invoking arbitration, appointment of arbitrators, statements of claim and defence, counter-claims, evidence, hearings and written arguments." },
      { heading: "Court support and interim relief", body: "We approach courts for interim protection under Section 9, applications for appointment of arbitrators under Section 11, and extensions of time where required." },
      { heading: "Challenging and enforcing awards", body: "We advise on setting-aside applications under Section 34 and on enforcement of domestic and foreign awards, keeping the strict time limits in view." },
    ],
  },
  {
    slug: "commercial-litigation",
    name: "Commercial Litigation",
    icon: "building",
    summary: "Advocacy in contract, trade and business disputes before courts and tribunals.",
    overview: [
      "Commercial disputes can threaten cash flow, relationships and reputation. We represent businesses, promoters and investors in contractual, trade and partnership disputes before Commercial Courts, High Courts and tribunals.",
      "We combine careful preparation with practical advice: where a negotiated settlement serves the client better than a long trial, we say so, and where firm action is needed, we move quickly.",
    ],
    sections: [
      { heading: "Contract and trade disputes", body: "Breach of contract, non-payment, supply and distribution disagreements, agency and franchise disputes, and claims for damages and specific performance." },
      { heading: "Recovery of money", body: "Legal notices, summary suits and money suits for outstanding dues, along with complaints under Section 138 of the Negotiable Instruments Act in cheque dishonour cases." },
      { heading: "Pre-litigation steps and mediation", body: "We prepare the record, send notices and handle the mandatory pre-institution mediation required in most commercial suits, so that proceedings start on a firm footing." },
      { heading: "Injunctions and urgent relief", body: "Where assets, goodwill or confidential information are at risk, we seek interim injunctions, attachment and other urgent orders." },
    ],
  },
  {
    slug: "competition-law",
    name: "Competition Law",
    icon: "shield",
    summary: "Advice and representation on anti-competitive conduct, mergers and regulatory compliance.",
    overview: [
      "The Competition Act, 2002 affects how businesses price, distribute, partner and grow. We advise companies on compliance and represent them in proceedings before the Competition Commission of India (CCI) and appellate forums.",
      "Whether the issue is a cartel allegation, a dominance complaint or the approval of a transaction, we help clients understand their exposure early and respond with a clear, evidence-based position.",
    ],
    sections: [
      { heading: "Competition compliance", body: "Practical programmes and training for sales, procurement and management teams, and review of distribution, supply and exclusivity arrangements." },
      { heading: "Investigations and proceedings", body: "Responding to information requests and notices, representing clients before the CCI and its investigation wing, and advising on leniency and settlement options." },
      { heading: "Abuse of dominance and restrictive agreements", body: "Advice on pricing, discounts, tie-ins, exclusivity and resale price arrangements, and defence of complaints under Sections 3 and 4 of the Act." },
      { heading: "Merger control", body: "Assessing whether a deal needs CCI approval, preparing filings and managing timelines for acquisitions, mergers and joint ventures." },
    ],
  },
  {
    slug: "corporate-and-insolvency-laws",
    name: "Corporate and Insolvency Laws",
    icon: "building",
    summary: "Counsel for companies, creditors and stakeholders on corporate matters and insolvency proceedings.",
    overview: [
      "We advise companies, promoters, directors, lenders and investors on the legal framework that governs how businesses are run, financed and, when necessary, restructured or wound up.",
      "Our work spans the Companies Act, 2013 and the Insolvency and Bankruptcy Code, 2016, with appearances before the National Company Law Tribunal (NCLT), the National Company Law Appellate Tribunal (NCLAT) and the higher courts.",
    ],
    sections: [
      { heading: "Corporate disputes", body: "Shareholder and boardroom disagreements, oppression and mismanagement petitions, and disputes over directors' duties, share transfers and company governance." },
      { heading: "Insolvency for creditors", body: "Initiating and pursuing proceedings as a financial or operational creditor, participating in the Committee of Creditors, and recovering dues." },
      { heading: "Insolvency for companies and promoters", body: "Responding to demand notices and insolvency petitions, negotiating settlements, and advising on resolution plans and the bar on certain bidders under Section 29A." },
      { heading: "Directors and governance", body: "Advice on directors' responsibilities, compliance obligations and risk, particularly when a company is under financial stress." },
    ],
  },
  {
    slug: "constitutional-law",
    name: "Constitutional Law",
    icon: "document",
    summary: "Representation in constitutional challenges and public-law matters before the High Courts and Supreme Court.",
    overview: [
      "Constitutional law governs the relationship between the individual, businesses and the State. We represent clients who challenge arbitrary government action, or who need to defend the validity of public decisions, before the High Courts and the Supreme Court of India.",
      "These matters often turn on fundamental rights, the limits of executive power and the proper reading of statutes, so careful research and precise drafting are central to our work.",
    ],
    sections: [
      { heading: "Writ petitions", body: "Petitions under Articles 226 and 32 for habeas corpus, mandamus, certiorari, prohibition and quo warranto, including challenges to unfair or unlawful orders of public authorities." },
      { heading: "Fundamental rights", body: "Matters involving equality, freedom of speech and profession, life and personal liberty, and the right to privacy, for individuals and businesses alike." },
      { heading: "Challenges to laws and policies", body: "Questions about whether a statute, rule or notification is within the power of the authority that made it and consistent with the Constitution." },
      { heading: "Public interest litigation and appeals", body: "Assisting petitioners and respondents in public interest matters and in special leave petitions before the Supreme Court under Article 136." },
    ],
  },
  {
    slug: "criminal-law",
    name: "Criminal Law",
    icon: "shield",
    summary: "Defence and advisory support in criminal investigations, trials and appeals.",
    overview: [
      "A criminal case affects liberty, reputation and livelihood. We represent individuals, promoters and companies at every stage, from the first police notice to trial and appeal, under the Bharatiya Nyaya Sanhita, the Bharatiya Nagarik Suraksha Sanhita and related special laws.",
      "We act with discretion and urgency. Early advice on your rights and a measured response to the investigation often shape the outcome of the entire case.",
    ],
    sections: [
      { heading: "Investigation stage", body: "Advising on police notices and questioning, representing clients during investigation, and challenging unlawful arrest or search." },
      { heading: "Bail and anticipatory bail", body: "Applications for regular, anticipatory and default bail before the Magistrate, Sessions Court and High Court." },
      { heading: "Trial and appeal", body: "Defending clients in trials, cross-examining witnesses and presenting evidence, and pursuing appeals and revisions." },
      { heading: "Quashing and white-collar matters", body: "Petitions to quash FIRs and proceedings in appropriate cases, and defence in economic offences, cheating, breach of trust and cheque dishonour matters." },
    ],
  },
  {
    slug: "regulatory-litigation",
    name: "Regulatory Litigation",
    icon: "document",
    summary: "Representation in proceedings before regulators, appellate authorities and tribunals.",
    overview: [
      "Regulators such as SEBI, the RBI, the CCI and sector authorities have wide powers to investigate, penalise and issue directions. We represent regulated entities and individuals in these proceedings and in appeals against the orders that result.",
      "We help clients answer notices, build a documented record and use the right forum, whether a statutory tribunal or a High Court writ petition.",
    ],
    sections: [
      { heading: "Show-cause notices and replies", body: "Analysing the allegations, preparing detailed replies supported by documents, and appearing at personal hearings." },
      { heading: "Appeals before tribunals", body: "Appeals to the Securities Appellate Tribunal, NCLAT, TDSAT, APTEL and other appellate bodies, and onward to the Supreme Court on questions of law." },
      { heading: "Writ remedies", body: "Challenging regulatory action that violates natural justice, exceeds jurisdiction or is arbitrary, by petition under Article 226." },
      { heading: "Settlement and compliance advice", body: "Evaluating settlement and consent routes, and advising on practical compliance steps to reduce the risk of repeat action." },
    ],
  },
  {
    slug: "mediation",
    name: "Mediation",
    icon: "users",
    summary: "Structured, confidential mediation to resolve disputes efficiently without a full trial.",
    overview: [
      "Many disputes are better settled than fought. Mediation gives parties a private, structured way to negotiate with the help of a neutral mediator, at lower cost and in less time than a trial.",
      "We represent clients in mediation and advise on whether it suits their dispute, preparing them to negotiate firmly while keeping the relationship and the commercial goal in view.",
    ],
    sections: [
      { heading: "Advising on mediation strategy", body: "Assessing your interests and alternatives, and deciding when to mediate, whether before or alongside litigation." },
      { heading: "Pre-litigation and court-referred mediation", body: "Handling the mediation required before commercial suits and mediation referred by courts, including under the Mediation Act, 2023." },
      { heading: "Negotiation and representation", body: "Preparing position papers, attending sessions with you and negotiating terms that are practical and enforceable." },
      { heading: "Settlement agreements", body: "Drafting and reviewing settlement terms so that they are clear, complete and capable of enforcement." },
    ],
  },
  {
    slug: "securities-law",
    name: "Securities Law",
    icon: "scale",
    summary: "Advice and disputes involving securities markets, listed companies and market regulators.",
    overview: [
      "The securities market is closely regulated by the Securities and Exchange Board of India (SEBI). We advise listed companies, promoters, directors, investors and intermediaries on compliance and represent them in proceedings before SEBI and the Securities Appellate Tribunal.",
      "Our focus is on helping clients meet their obligations and, when action is taken against them, answering it with a well-prepared and properly documented case.",
    ],
    sections: [
      { heading: "Insider trading and market abuse", body: "Advice on unpublished price sensitive information, trading windows and trading plans, and defence in proceedings under the insider trading and fraud regulations." },
      { heading: "Takeovers and open offers", body: "Guidance on acquisition thresholds, open offer obligations, exemptions and disclosures under the takeover regulations." },
      { heading: "Listed company compliance", body: "Advice on disclosure, governance and related-party obligations under the listing regulations, and responses to stock exchange and SEBI queries." },
      { heading: "Enforcement and appeals", body: "Replying to show-cause notices, representing clients at hearings, and appealing orders before the Securities Appellate Tribunal and the Supreme Court." },
    ],
  },
  {
    slug: "tax",
    name: "Tax",
    icon: "document",
    summary: "Advice and litigation on direct and indirect tax matters, from assessment to appeal.",
    overview: [
      "Tax disputes can involve significant amounts and strict time limits. We advise individuals and businesses on income tax and GST matters and represent them in assessments, appeals and writ proceedings.",
      "We aim to resolve issues at the earliest and least costly stage, while preparing every matter so it can withstand scrutiny on appeal.",
    ],
    sections: [
      { heading: "Notices and assessments", body: "Reviewing notices, preparing replies and appearing before tax authorities in scrutiny, reassessment and recovery proceedings." },
      { heading: "Appeals", body: "Appeals before the Commissioner (Appeals), the Income Tax Appellate Tribunal, the GST Appellate Authority and Tribunal, and the High Courts and Supreme Court on questions of law." },
      { heading: "GST disputes", body: "Show-cause notices, input tax credit disputes, classification and valuation issues, refunds and demand proceedings under the GST laws." },
      { heading: "Advisory and planning", body: "Advice on the tax implications of transactions and structures, and on record-keeping and compliance practices that reduce the risk of disputes." },
    ],
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}
