export const competitions = [
  {
    id: "1",
    name: "HSG × ETH FinTech Challenge 2025",
    sponsor: "Helvetica Ventures",
    status: "Completed",
    teams: 6,
    winner: "Team Aurex",
    brief: [
      "Helvetica Ventures challenged teams to design a data-driven credit risk assessment framework for underserved SMEs across Switzerland and the broader DACH region. Traditional scoring models rely heavily on historical financial statements, leaving fast-growing startups and sole proprietorships without reliable access to growth capital.",
      "Teams were tasked with leveraging alternative data sources — including transaction metadata, supply chain signals, and digital platform activity — to build a more inclusive and accurate creditworthiness model. Deliverables included a technical architecture, a go-to-market strategy, and a regulatory compliance framework aligned with Swiss FINMA guidelines.",
      "The winning team, Team Aurex, proposed a modular API-first scoring engine that integrates directly into the loan origination systems of cantonal banks, reducing manual underwriting time by an estimated 60% while expanding SME lending eligibility by 35%."
    ]
  },
  {
    id: "2",
    name: "Cross-Campus Sustainability Sprint 2025",
    sponsor: "Nordvik Impact Partners",
    status: "Completed",
    teams: 4,
    winner: "Team Verdant",
    brief: [
      "Nordvik Impact Partners invited teams to develop a Scope 3 emissions monitoring and reporting solution for mid-market Swiss industrial companies. With the Swiss Climate Act and incoming EU CSRD requirements tightening disclosure obligations, many firms lack the technical infrastructure to measure indirect supply chain emissions at the granularity now required by regulators and institutional investors.",
      "Teams combined environmental engineering expertise from ETH with strategy and finance knowledge from HSG to design a scalable SaaS platform — covering data ingestion from logistics and procurement partners, automated categorisation under GHG Protocol standards, and an investor-grade sustainability dashboard with audit trail functionality.",
      "Team Verdant's solution introduced a supplier self-reporting portal with pre-filled emission factors sourced from the ecoinvent database, reducing manual data collection effort by over 70% and enabling quarterly CSRD-compliant reporting at a fraction of the cost of existing enterprise tools."
    ]
  },
  {
    id: "3",
    name: "HSG × ETH Venture Design Challenge 2025",
    sponsor: "Helvetica Ventures",
    status: "Active",
    teams: 0,
    deadline: "April 25, 2025",
    brief: [
      "Helvetica Ventures has presented teams with an open brief to design and validate a go-to-market strategy for a B2B deep-tech venture operating at the intersection of AI and clinical diagnostics. The challenge asks teams to identify a beachhead market within the EU medical device landscape, size the commercial opportunity, and design a credible regulatory pathway under MDR 2017/745.",
      "Teams must synthesise technical product understanding from ETH engineers with commercial rigour from HSG strategists. The final deliverable is an investor-ready market entry deck covering competitive positioning, a distribution model, a 36-month revenue plan, and a risk register — to be presented directly to the Helvetica Ventures investment committee.",
      "This is a live brief: Helvetica Ventures is actively evaluating the proposed strategies and may engage the highest-ranked team for a paid consulting mandate following the competition."
    ]
  }
];

export const students = [
  { id: "1", name: "Marc Hoffmann", university: "HSG", programme: "MBF", skills: ["Finance", "Strategy", "Valuation"] },
  { id: "2", name: "Sophie Brenner", university: "HSG", programme: "Strategy & Int'l Management", skills: ["Strategy", "Consulting", "Innovation"] },
  { id: "3", name: "Anna Steiner", university: "HSG", programme: "Accounting & Finance", skills: ["Accounting", "Finance", "Excel"] },
  { id: "4", name: "Felix Gruber", university: "HSG", programme: "Business Innovation", skills: ["Innovation", "Entrepreneurship", "Design Thinking"] },
  { id: "5", name: "Thomas Wenger", university: "HSG", programme: "Finance", skills: ["Finance", "Risk", "Derivatives"] },
  { id: "6", name: "Laura Meier", university: "HSG", programme: "Marketing Management", skills: ["Marketing", "Branding", "Analytics"] },
  { id: "7", name: "Luca Ferretti", university: "ETH", programme: "MSc Computer Science", skills: ["ML", "Python", "Systems"] },
  { id: "8", name: "Jana Kovač", university: "ETH", programme: "MSc Data Science", skills: ["Data Science", "Statistics", "Python"] },
  { id: "9", name: "Mia Tanaka", university: "ETH", programme: "MSc Environmental Engineering", skills: ["Sustainability", "Modelling", "GIS"] },
  { id: "10", name: "Remy Dubois", university: "ETH", programme: "MSc Mechanical Engineering", skills: ["Engineering", "CAD", "Robotics"] },
  { id: "11", name: "Niklas Berg", university: "ETH", programme: "MSc Robotics", skills: ["Robotics", "ROS", "Control Systems"] },
  { id: "12", name: "Elena Vasquez", university: "ETH", programme: "MSc Computational Biology", skills: ["Bioinformatics", "Python", "ML"] }
];

export const teams = [
  { id: "aurex", name: "Team Aurex", competitionId: "1", members: ["1","2","7","8"], result: "Winner" },
  { id: "verdant", name: "Team Verdant", competitionId: "2", members: ["3","4","9","10"], result: "Winner" }
];
