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
      "Helvetica Ventures provided teams with a 20-page information memorandum on a portfolio company — a B2B payments startup targeting Swiss and German SMEs — that was preparing for its Series B fundraise. Teams were given 24 hours to act as junior analysts at the investment committee.",
      "Each team was asked to evaluate the startup's competitive positioning in the SME payments landscape, build a simplified 3-year financial model using provided revenue and cost assumptions, identify the top three investment risks with proposed mitigations, and deliver a 10-minute go/no-go recommendation to a panel of Helvetica Ventures partners.",
      "Team Aurex stood out for the clarity of their risk framework and a compelling scenario analysis showing how the startup could reach profitability under three macro conditions. Their presentation was described by the jury as 'investment-ready with no senior editing required.'"
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
      "Nordvik Impact Partners gave teams an 8-hour sprint to evaluate three early-stage social ventures from their live deal pipeline. The three candidates were a solar energy cooperative in rural Graubünden, a digital platform connecting supermarkets with food banks to redirect surplus stock, and an urban vertical farming startup based in Zurich.",
      "Teams received a one-page summary and a basic financial projection for each venture. Using a simplified impact scorecard provided by Nordvik — covering social reach, financial sustainability, scalability, and mission alignment — teams had to recommend which single venture Nordvik should fund and at what terms.",
      "Team Verdant recommended the food bank platform, making a compelling case that it offered the highest measurable social impact per franc invested, a clear path to revenue independence within 18 months, and the strongest alignment with Nordvik's urban poverty reduction mandate. Their recommendation was adopted by Nordvik's investment committee the following week."
    ]
  },
  {
    id: "3",
    name: "HSG × ETH Venture Design Challenge 2025",
    sponsor: "Helvetica Ventures",
    status: "Active",
    teams: 0,
    deadline: "April 25, 2025",
    duration: "2 weeks",
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
