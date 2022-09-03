export default interface IProfile {
  name: string;
  description: JSX.Element;
}

export const profileContent: IProfile = {
  name: "Profile",
  description: (
    <>
      <p>
        Currently I'm searching opportunities in webdesigning and application
        developing. I'm originally a mechanical engineer, working as an
        experienced construction engineer for over 5 years and also taking side
        projects in VBA programming for automatize monotonous, lumberjack
        processes as a hobby. Now, I'm looking forward to gain more experience
        in webdeveloping for my karrier. I learned Java developing at Codecool
        to a junior level with basics of HTML / CSS and JS languages. My main
        task is to become a fullstack developer. Achiving both frontend and
        backend with the most necessary up-to-date frameworks and APIs in order
        to be always successful at my job. Some of my programming skills with
        examples:
        <p>
          <a href="https://www.codewars.com/users/mjoe92">CODEWARS</a>
        </p>
        <p>
          <a href="https://github.com/mjoe92?tab=repositories">GITHUB</a>
        </p>
      </p>
      <p>
        TO MAIN: you may wonder why all of these details here, but do not worry;
      </p>
      <p>Specializing in Fullstack developing</p>
    </>
  ),
};
