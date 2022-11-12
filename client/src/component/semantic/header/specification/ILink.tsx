export default interface IMainPage {
  id: string;
  title: string;
  expo: string;
  disabled?: boolean;
  pages: IPage[];
}

export interface IPage {
  disabled?: boolean;
  name: string;
  link: string;
}

export const linkContent: IMainPage[] = [
  {
    id: "projects",
    title: "Projects",
    expo: "All-in-one",
    disabled: true,
    pages: [
      {
        name: "PCD",
        link: "pcd",
      },
      {
        name: "Web pages",
        link: "webPages",
      },
      {
        name: "Mini apps",
        link: "miniApps",
      },
    ],
  },
  {
    id: "blog",
    title: "Blog",
    expo: "News",
    disabled: true,
    pages: [
      {
        name: "Travel",
        link: "travel",
      },
      {
        name: "Photograph",
        link: "photograph",
      },
      {
        name: "PE Training",
        link: "training",
      },
    ],
  },
  {
    id: "others",
    title: "Others",
    expo: "Business",
    disabled: true,
    pages: [
      {
        name: "Real estate-letting",
        link: "renting",
      },
      {
        name: "!!!IDE KERÜLJÖN A WEBLAPKÉSZítés",
        link: "asdfkléá",
      },
    ],
  },
  {
    id: "aboutMe",
    title: "About me",
    expo: "Biography",
    pages: [
      {
        name: "Engineering",
        link: "engineering",
        disabled: true,
      },
      {
        name: "Programming",
        link: "programming",
        disabled: true,
      },
      {
        name: "Photographing",
        link: "photographing",
        disabled: true,
      },
    ],
  },
];
