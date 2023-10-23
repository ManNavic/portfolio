import './projects.css'
import spotifyImage from '../assets/spotify.png';
const Projects = () => {
  return (
      <div id="projects">
        <div className='projects-text'>

      <h2>My Projects
      </h2>
          <p>
            Hello! I'm [Your Name], a junior software developer with a passion
            for turning lines of code into innovative solutions. Technology has
            always fascinated me, and I'm excited to embark on a journey where I
            can blend creativity with technical expertise.
          </p>
        </div>
      <div className="projects">

      <div className="project">
      <h2>Spotify Clone</h2>
        <img src={spotifyImage} alt="spotify" />
        <a href="c">Link</a>
      </div>
      <div className="project">
      <h2>Spotify Clone</h2>
        <img src={spotifyImage} alt="spotify" />
        <a href="c">Link</a>
      </div>
      <div className="project">
      <h2>Spotify Clone</h2>
        <img src={spotifyImage} alt="spotify" />
        <a href="c">Link</a>
      </div>
      <div className="project">
      <h2>Spotify Clone</h2>
        <img src={spotifyImage} alt="spotify" />
        <a href="c">Link</a>
      </div>
       <div className="project">
      <h2>Spotify Clone</h2>
        <img src={spotifyImage} alt="spotify" />
        <a href="c">Link</a>
      </div>
      </div>
    </div>
  )
}
export default Projects
