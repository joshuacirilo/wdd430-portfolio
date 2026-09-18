"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/lib/projects-db";
import ProjectList from "@/components/ProjectList";

interface ProjectResultsProps {
  endpoint: string;
}

export default function ProjectResults({ endpoint }: ProjectResultsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadProjects() {
      try {
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error("Unable to load projects");
        }

        const data: Project[] = await response.json();

        if (!cancelled) {
          setProjects(data);
        }
      } catch {
        if (!cancelled) {
          setError("Unable to load projects. Please try again later.");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadProjects();

    return () => {
      cancelled = true;
    };
  }, [endpoint]);

  if (isLoading) {
    return <p role="status">Loading projects...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  if (projects.length === 0) {
    return <p>No projects found.</p>;
  }

  return <ProjectList projects={projects} />;
}
