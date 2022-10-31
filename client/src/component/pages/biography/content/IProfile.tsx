export default interface IProfile {
  name: string;
  description: JSX.Element;
}

const calculateAge = (): number => {
  let timeDiff = Math.abs(Date.now() - new Date(1992, 1, 18).getTime());
  return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
};

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
        , and a graduated&nbsp;
        <span id="mechanicalEngineer" className="highlight-point">
          Mechanical Engineer
        </span>
        ...
      </p>
      <p>
        During the COVID, I needed to rethink my real primary&nbsp;
        <span id="goals" className="highlight-point">
          goals
          {/* maintain mind-physics-work balance, consider the job as a hobby,
           */}
        </span>
        . Fortunately both of them I found in my next career path as a
        programmer.
      </p>
    </>
  ),
};
