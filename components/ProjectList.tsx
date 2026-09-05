import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  description: string;
  href: string;
  tags: string[];
};

const defaultProjects: Project[] = [
  {
    title: "Portfolio Foundation",
    description:
      "A Next.js app structure with reusable components, shared layout, and Tailwind CSS styling.",
    href: "/",
    tags: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Hello API Route",
    description:
      "A simple route handler that returns JSON from the app router API folder.",
    href: "/api/hello",
    tags: ["API", "Route Handler"],
  },
  {
    title: "About Page",
    description:
      "A dedicated route for introducing the developer and the purpose of the portfolio.",
    href: "/about",
    tags: ["Routing", "Content"],
  },
];

type ProjectListProps = {
  projects?: Project[];
};

export default function ProjectList({ projects = defaultProjects }: ProjectListProps) {
  return (
    <section className="grid gap-5 md:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}
