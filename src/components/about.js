import './about.css'
const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-me">
          <p className="about-text">My name is Mantas</p>
          <p className="about-text-line-2">Junior Software Engineer</p>
          <div className="about-me-2">
            <div id="about">
              <h2>About Me</h2>
              <p>
                Hello! I'm Mantas, a junior software developer with a passion
                for turning lines of code into innovative solutions. Technology
                has always fascinated me, and I'm excited to embark on a journey
                where I can blend creativity with technical expertise.
              </p>
            </div>
            <div className="skills-exp">
              <div id="skills">
                <h2>Skills</h2>
                <ul className="skills-ul">
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Test-Driven Development</li>
                  <li>Debugging</li>
                  <li>REST APIs</li>
                  <li>Prisma ORM</li>
                  <li>Express.js</li>
                  <li>PostgreSQL</li>
                  <li>HTML</li>
                  <li>Cascading Style Sheets (CSS)</li>
                  <li>MongoDB</li>
                </ul>
              </div>

              <div id="experience">
                <h2>Experience</h2>
                <p>Software Developer at RaSaMaNoLeCa (Student team)</p>
                <p>September 2023 - Present</p>
                <ul>
                  <li>
                    Leading the product development efforts for an eCommerce
                    project within an Agile-Scrum framework.
                  </li>
                  <li>
                    Defining clear product backlogs, user stories, and
                    priorities.
                  </li>
                  <li>
                    Creating high fidelity Figma designs and collaborating with
                    developers for feature delivery.
                  </li>
                  <li>
                    Implementing responsive and user-friendly frontend features
                    using HTML, CSS, and React.
                  </li>
                  <li>
                    Developing secure backend components using Node.js, Express,
                    and MongoDB for efficient data management.
                  </li>
                  <li>
                    Participating in sprint planning, daily stand-ups, and
                    retrospectives to drive the project forward.
                  </li>
                </ul>
              </div>
              <div id="experience">
                <h2>Education</h2>
                <p>Full-Stack Development at Boolean UK</p>
                <p>January 2023 - September 2023</p>
                <ul>
                  <li>
                    Acquired the skills to translate user requirements into
                    high-quality software solutions.
                  </li>
                  <li>
                    Collaborated with fellow students during a 4-week team
                    development project, enhancing proficiency in Kanban and
                    Agile methodologies.
                  </li>
                  <li>
                    Engaged in regular stand-up meetings and retrospectives to
                    optimize project workflows and team coordination.
                  </li>
                  <li>
                    Demonstrated proficiency in industry best practices related
                    to branching, handling merge conflicts, and managing pull
                    requests during team projects.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default About
