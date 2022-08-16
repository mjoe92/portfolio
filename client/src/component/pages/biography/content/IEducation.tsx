import AbstractIHistory from "./AIHistory";
import { Field } from "./EField";

export default interface IEducation extends AbstractIHistory {
  institution: string;
}

export const educationContent: IEducation[] = [
  {
    id: "codecool2",
    title: ["Java Enterprise Backend Developer"],
    institution: "Codecool",
    timeStart: new Date(2021, 5),
    timeEnd: new Date(2021, 8),
    description: (
      <>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </>
    ),
    field: Field.P,
  },
  {
    id: "codecool1",
    title: ["Java Backend Developer"],
    institution: "Codecool",
    timeStart: new Date(2020, 0),
    timeEnd: new Date(2021, 2),
    description: (
      <>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?"
      </>
    ),
    field: Field.P,
  },
  {
    id: "obudai",
    title: ["Mechatronics MSc"],
    institution: "Óbudai University",
    timeStart: new Date(2016, 8),
    timeEnd: new Date(2019, 0),
    description: (
      <>
        "But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system."
      </>
    ),
    field: Field.E,
  },
  {
    id: "nct2",
    title: ["NCT Four- and Five-axis Programming Technology"],
    institution: "NCT Academy",
    timeStart: new Date(2015, 10),
    timeEnd: new Date(2016, 7),
    description: (
      <>
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga."
      </>
    ),
    field: Field.M,
  },
  {
    id: "nct1",
    title: ["CAD/CAM, CNC Programming Technology"],
    institution: "NCT Academy",
    timeStart: new Date(2015, 2),
    timeEnd: new Date(2015, 10),
    description: (
      <>
        "On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment, so blinded by desire, that they cannot foresee the pain and
        trouble that are bound to ensue."
      </>
    ),
    field: Field.M,
  },
  {
    id: "bme",
    title: ["Mechanical Engineering BSc"],
    institution: "Budapest University of Technology and Economics",
    timeStart: new Date(2011, 8),
    timeEnd: new Date(2016, 5),
    description: (
      <>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      </>
    ),
    field: Field.E,
  },
];
