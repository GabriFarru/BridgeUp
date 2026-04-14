export const competitions = [
  {
    id: "1",
    name: "HSG × ETH FinTech Challenge 2025",
    sponsor: "Helvetica Ventures",
    status: "Completed",
    teams: 6,
    winner: "Team Aurex",
    duration: "24 hours",
    brief: [
      "Helvetica Ventures brought teams in as junior consultants to advise a Swiss private bank (CHF 8bn AUM) that was consistently losing high-net-worth clients under 40 to digital-first competitors. Teams received a client brief including current onboarding process maps, drop-off data at each stage, an NPS breakdown by client segment, and a competitive benchmarking report covering four European challengers.",
      "Each team had 24 hours to diagnose the root causes of attrition, redesign the onboarding journey end-to-end, define the technical requirements for implementation — with ETH students leading the systems architecture component — and present a phased rollout plan with a 24-month ROI projection to a senior Helvetica Ventures partner panel.",
      "Team Aurex's solution — a modular onboarding portal with embedded e-KYC, integrated portfolio risk profiling, and a structured relationship manager handoff at a defined client milestone — was selected as the winning approach for combining depth of client experience with a credible and costed path to production."
    ]
  },
  {
    id: "2",
    name: "Cross-Campus Sustainability Sprint 2025",
    sponsor: "Nordvik Impact Partners",
    status: "Completed",
    teams: 4,
    winner: "Team Verdant",
    duration: "8 hours",
    brief: [
      "Nordvik Impact Partners engaged teams as consultants to a Swiss logistics company that had publicly committed to cutting its Scope 1 and 2 emissions by 40% before 2030 but had no credible near-term roadmap to show investors. Teams received a client pack covering the company's fleet composition, annual route structure, fuel cost breakdown, and a benchmarking report against four European logistics peers that had already hit comparable targets.",
      "In eight hours, each team had to identify the highest-impact decarbonisation levers available by 2027, size the cost and emissions saving for each initiative, and sequence them into a phased three-year action plan. ETH students drove the technical analysis of fleet electrification and route optimisation; HSG students anchored the financial modelling, stakeholder communication plan, and board presentation.",
      "Team Verdant's roadmap — anchored on a phased shift to electric last-mile delivery, a renegotiated green energy tariff for the company's main depot, and a driver incentive scheme tied to real-time fuel efficiency data — was assessed as the most implementation-ready submission. Nordvik shared it directly with the client's Chief Operating Officer the following week."
    ]
  },
  {
    id: "3",
    name: "HSG × ETH Venture Design Challenge 2025",
    sponsor: "Kronberg Capital",
    status: "Active",
    teams: 0,
    deadline: "April 25, 2025",
    duration: "2 weeks",
    brief: [
      "Kronberg Capital has engaged teams as junior consultants to design and validate a go-to-market strategy for a B2B deep-tech venture operating at the intersection of AI and clinical diagnostics. The challenge asks teams to identify a beachhead market within the EU medical device landscape, size the commercial opportunity, and define a credible regulatory pathway under MDR 2017/745.",
      "Teams must synthesise technical product understanding from ETH engineers with commercial rigour from HSG strategists. The final deliverable is an investor-ready market entry deck covering competitive positioning, a distribution model, a 36-month revenue plan, and a risk register — to be presented directly to the Kronberg Capital advisory board.",
      "This is a live brief: Kronberg Capital is actively evaluating the proposed strategies and may engage the highest-ranked team for a paid consulting mandate following the competition."
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
