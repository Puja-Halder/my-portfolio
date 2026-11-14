
const projects = [
  {
    id: "dev-stack-builder",
    title: "Dev Stack Builder",
    category: "Frontend Development",
    description:
      "A responsive web application where users can explore technologies and build their own development stack.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    image: "/images/dev-stack-builder.png",
    liveLink: "https://dev-stack-builder1.vercel.app/",
    githubLink: "https://github.com/Puja-Halder/dev-stack-builder1",
    challenges: [
      "Managing the selected technology stack.",
      "Preventing duplicate technologies from being added.",
      "Building a responsive interface.",
    ],
    futureImprovements: [
      "Add user authentication.",
      "Allow users to save their stacks.",
      "Add more technology categories.",
    ],
  },
  {
    id: "fitlog",
    title: "FitLog",
    category: "Full Stack Development",
    description:
      "A workout library that allows users to explore exercises, view workout details, create personal workout plans, and track completed exercises.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "REST API"],
    image: "/images/fitlog.png",
    liveLink: "https://fitlog-sage-eight.vercel.app/",
    githubLink: "https://github.com/Puja-Halder/fitlog",
    challenges: [
      "Working with external API data.",
      "Managing saved workout plans.",
      "Creating a responsive workout interface.",
    ],
    futureImprovements: [
      "Add user authentication.",
      "Improve workout tracking.",
      "Add more personalized workout features.",
    ],
  },
  {
    id: "bazardor",
    title: "BazarDor",
    category: "Web Application",
    description:
      "A Bangla market price application designed to help users explore daily product prices and compare price changes over time.",
    technologies: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Better Auth",
      "PostgreSQL",
    ],
    image: "/images/bazardor.png",
    liveLink: "",
    githubLink: "https://github.com/Puja-Halder/bazardor",
    challenges: [
      "Organizing product and market price data.",
      "Implementing user authentication.",
      "Designing an accessible Bangla interface.",
    ],
    futureImprovements: [
      "Add more market information.",
      "Improve price comparison features.",
      "Deploy the application.",
    ],
  },
  {
    id: "studiospace",
    title: "StudioSpace",
    category: "Full Stack Development",
    description:
      "A peer-to-peer creative workspace rental platform where people can discover and rent spaces for creative activities.",
    technologies: ["Next.js", "Express.js", "MongoDB", "Better Auth"],
    image: "/images/studiospace.png",
    liveLink: "https://studiospace-client-one-eta.vercel.app/",
    githubLink: "https://github.com/Puja-Halder/studiospace-client",
    serverGithubLink: "https://github.com/Puja-Halder/studiospace-server",
    challenges: [
      "Connecting the frontend with the backend.",
      "Working with database operations.",
      "Implementing authentication.",
    ],
    futureImprovements: [
      "Improve booking management.",
      "Enhance workspace search and filtering.",
      "Add more features for workspace owners and renters.",
    ],
  },
];

export default projects;
