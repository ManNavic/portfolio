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
            for turning lines of code into innovative solutions. Technology has
            always fascinated me, and I'm excited to embark on a journey where I
            can blend creativity with technical expertise.
          </p>
        </div>
        <div className='skills-exp'>
        <div id="skills">
          <h2>Skills</h2>
          <ul>
            <li>
              Languages:
              <ul>
                <p>JavaScript</p>
              </ul>
            </li>
            <li>
              Frameworks:
              <ul>
                <p>React.js, Node.js</p>
              </ul>
            </li>
            <li>
              Tools:
              <ul>
                <p>Git, GitHub</p>
              </ul>
            </li>
            <li>
              Development:
              <ul>
                <p>Test-Driven Development, Debugging, REST APIs, Prisma ORM, Express.js, PostgreSQL, HTML, Cascading Style Sheets (CSS)</p>
              </ul>
            </li>
            <li>
              Additional Skills:
              <ul>
                <p>MongoDB, Teamwork</p>
      
              </ul>
            </li>
          </ul>
        </div>

        <div id="experience">
          <h2>Experience</h2>
          <p>
            Completed a full-time, intensive 6-month coding academy specializing
            in full-stack development. During this program, I:
          </p>
          <ul>
            <li>
              Acquired the skills to translate user requirements into
              high-quality software solutions.
            </li>
            <li>
              Collaborated with fellow students during a 4-week team development
              project, enhancing proficiency in Kanban and Agile methodologies.
            </li>
            <li>
              Engaged in regular stand-up meetings and retrospectives to
              optimize project workflows and team coordination.
            </li>
            <li>
              Demonstrated proficiency in industry best practices related to
              branching, handling merge conflicts, and managing pull requests
              during team projects.
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
