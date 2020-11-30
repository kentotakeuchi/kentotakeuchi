/**
 * 
 */
export interface ProjectProps {
  title: {
    en: String;
    ja: String;
  };
  date: Date;
  tags: string[];
  client: {
      en: String;
      ja: String;
    }
  tools: string[];
  url: string,
  videoUrl: string,
  description: {
    en: String;
    ja: String;
  };
  images: string[],
  slug: {
    current: string;
  };
}