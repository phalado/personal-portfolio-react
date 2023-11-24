export default interface ProjectInterface {
  id: number;
  name: string;
  language: string;
  live: string;
  repo: string;
  description: string[];
  image: string;
  iframe?: string
}