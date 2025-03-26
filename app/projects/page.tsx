import ProjectCard from "../components/ProjectCard";

// Example project data - you can replace this with your actual projects
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, Stripe for payments, and a headless CMS for product management.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    imageUrl: "/projects/ecommerce-placeholder.jpg", // Replace with actual image
    projectUrl: "https://example.com/project1",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Personal Finance Dashboard",
    description: "A dashboard for tracking personal finances, with visualizations and budgeting tools. Built with React and Chart.js.",
    tags: ["React", "TypeScript", "Chart.js", "Firebase"],
    imageUrl: "/projects/finance-placeholder.jpg", // Replace with actual image
    projectUrl: "https://example.com/project2",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A minimalist task management application with drag-and-drop functionality and real-time updates.",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    imageUrl: "/projects/task-placeholder.jpg", // Replace with actual image
    projectUrl: "https://example.com/project3",
    githubUrl: "https://github.com/yourusername/project3",
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "A modern weather application with location detection, daily and hourly forecasts, and interactive maps.",
    tags: ["JavaScript", "OpenWeather API", "Mapbox"],
    imageUrl: "/projects/weather-placeholder.jpg", // Replace with actual image
    projectUrl: "https://example.com/project4",
    githubUrl: "https://github.com/yourusername/project4",
  },
];

export const metadata = {
  title: "Projects | Pouria Ghasemi",
  description: "View my portfolio of web development and design projects",
};

export default function ProjectsPage() {
  return (
    <div className="container-wide py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <div className="border border-black/10 rounded-lg p-6 bg-white shadow-sm max-w-2xl mx-auto">
          <p className="text-black/70">
            A collection of my work in web development, design, and more. Each project represents a unique challenge and solution.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Want to work together?</h2>
        <div className="border border-black/10 rounded-lg p-6 bg-white shadow-sm max-w-2xl mx-auto mb-6">
          <p className="text-black/70 mb-6">
            I'm always interested in hearing about new projects and opportunities. If you'd like to collaborate or have a project in mind, let's get in touch!
          </p>
          <a
            href="mailto:pouria.ghasemi@example.com"
            className="inline-block px-6 py-3 bg-black text-white rounded-md"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}