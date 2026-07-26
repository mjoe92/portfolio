export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  open_graph_image_url?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  snapshotUrl?: string;
  tags?: string[];
  link?: string;
}

export function mapRepoToProject(repo: GithubRepo): Project {
  return {
    id: repo.name,
    title: repo.name
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' '),
    description: repo.description ?? 'No description provided.',
    snapshotUrl: undefined,
    tags: [
      ...(repo.topics ?? []),
      ...(repo.language ? [repo.language] : [])
    ],
    link: repo.html_url
  };
}
