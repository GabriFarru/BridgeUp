export const competitions = [
  {
    id: "1",
    name: "HSG × ETH FinTech Challenge 2025",
    sponsor: "Helvetica Ventures",
    status: "Completed",
    teams: 6,
    winner: "Team Aurex"
  },
  {
    id: "2",
    name: "Cross-Campus Sustainability Sprint 2025",
    sponsor: "Nordvik Impact Partners",
    status: "Completed",
    teams: 4,
    winner: "Team Verdant"
  },
  {
    id: "3",
    name: "HSG × ETH Venture Design Challenge 2025",
    sponsor: "Helvetica Ventures",
    status: "Active",
    teams: 0,
    deadline: "April 25, 2025"
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
