import projects from "./project-data.json";
import { Project } from "./project";

const wip = "wip";

const naturalCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

export const createProjects = (): Project[] =>
  projects
    .map((data) => ({
      id: data.id,
      description: data.description,
      tags: data.tags ?? [],
      link: data.link,
      snapshotUrl: data.snapshotUrl,
    }))
    .sort((first, next) => {
      const isFirstWip = first.tags.includes(wip);
      const isNextWip = next.tags.includes(wip);

      if (isFirstWip !== isNextWip) {
        return isFirstWip ? 1 : -1;
      }

      return naturalCollator.compare(first.id, next.id);
    });
