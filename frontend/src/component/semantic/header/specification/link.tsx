export default interface MainPage {
  id: string;
  title: string;
  expo: string;
  disabled?: boolean;
  pages: PageLink[];
}

export interface PageLink {
  disabled?: boolean;
  name: string;
  link: string;
}

export const linkContent: MainPage[] = [
  {
    id: "home",
    title: "Home",
    expo: "/",
    disabled: false,
    pages: []
  },
  {
    id: "projects",
    title: "Projects",
    expo: "projects",
    disabled: false,
    pages: []
  },
  {
    id: "blog",
    title: "Blog",
    expo: "News",
    disabled: true,
    pages: [
      { name: "Travel", link: "travel" },
      { name: "Photograph", link: "photograph" },
      { name: "PE Training", link: "training" }
    ]
  },
  {
    id: "others",
    title: "Others",
    expo: "Business",
    disabled: true,
    pages: [
      { name: "Real estate-letting", link: "renting" }
    ]
  }
];
