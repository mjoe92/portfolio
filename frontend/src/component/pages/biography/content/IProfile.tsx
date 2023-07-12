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
        , and a graduated&nbsp;
        <span id="mechanicalEngineer" className="highlight-point">
          Mechanical Engineer
        </span>
        . I'm open-minded, understanding and always willing to&nbsp;
        {/* sharing knowledge, guiding, teaching */}
        <span id="help-others" className="highlight-point">
          help
        </span>
        . Often others are saying that I have a versatile personality and
        obsessed with finishing anything what I have started.
      </p>
      <p>
        I spent more than 5 years in the&nbsp;
        <span id="engineering-field" className="highlight-point">
          engineering field
        </span>
        , mostly as a <b>Mechanical Designer</b>. After a turning point I
        changed my&nbsp;
        <span id="goals" className="highlight-point">
          goals
        </span>
        , I took the courage to start my new career on IT. From 2020 'till now I
        work mainly as a programmer, which is not just my job, but also my hobby.
      </p>
      <p>
        But I do both with passion, as there are endless new challenges to enjoy
        whenever an offer comes in terms. Basically I couldn't let my old
        profession go; I'm a&nbsp;
        <span id="fullstack-developer" className="highlight-point">
          <b>Fullstack Developer</b>
        </span>
        &nbsp;in full-time, but I'm taking&nbsp;
        <span id="term" className="highlight-point">
          long, medium-term engineering
        </span>
        &nbsp;projects as my&nbsp;
        {/* 3D cad projects, linkage designing, website building */}
        <span id="side-job" className="highlight-point">
          side job
        </span>
        &nbsp;as well.
      </p>
      {/* <p>
        Please feel free to contact&nbsp;
        <span id="contact" className="highlight-point">
          me
        </span>
        &nbsp;whenever I can provide service and we can arrange a consultation.
      </p> */}
    </>
  ),
};
