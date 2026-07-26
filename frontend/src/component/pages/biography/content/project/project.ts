export interface Project {
  id: string;
  title: string;
  description: string;
  snapshotUrl: string | null;
  tags: string[];
  link: string | null;
}