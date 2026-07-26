export interface Project {
  id: string;
  description: string;
  snapshotUrl?: string | null;
  tags: string[];
  link?: string | null;
}