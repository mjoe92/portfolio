export default interface IProfile {
  name: string;
  description: JSX.Element;
}

const calculateAge = (): number => {
  const timeDiff = Math.abs(Date.now() - new Date(1992, 1, 18).getTime());
  return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
};

export const profileContent: IProfile = {
  name: "Profile",
  description: (
    <>
      {/* <p>
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
        {/* TO MAIN: you may wonder why all of these details here, but do not worry;
      </p> */}
      <p>
        My name is&nbsp;<b>Jozsef</b>&nbsp;David&nbsp;<b>Csurgai</b>&nbsp;(
        {calculateAge()}) and I'm a&nbsp;
        <span id="certification" className="highlight-point">
          certified
        </span>
        &nbsp;
        <span id="softwareEngineer" className="highlight-point">
          Software Engineer
        </span>
        , graduated&nbsp;
        <span id="mechanicalEngineer" className="highlight-point">
          Mechanical Engineer
        </span>
        . I'm open-minded, understanding and always willing to&nbsp;
        <span id="help-others" className="highlight-point">
          help
        </span>
        . As others have said before, I have a versatile personality and I am obsessed with finishing anything what I
        have started.
      </p>
      <p>
        I spent more than 5 years in the&nbsp;
        <span id="engineering-field" className="highlight-point">
          engineering field
        </span>
        , mostly as a <b>Mechanical Designer</b>. I was working mainly with CAD systems, calculating measurements,
        designing mechanical parts for the structures of machines, and testing by static and dynamic overloads with
        Finite element methods (FEM). Whenever I've got the opportunity to speed up certain administrative processes, I
        created Excel-based macros to improve the documentations.
      </p>
      <p>
        After a turning point I changed my goals, I took the courage to start my new career on IT. From 2020 'till now I
        work mainly as a&nbsp;
        <span id="fullStackEngineer" className="highlight-point">
          <b>Full-Stack Engineer</b>
        </span>
        , consisting the knowledge of both Backend and Frontend sides for inner software programs
        and also web applications.
      </p>
    </>
  ),
};
