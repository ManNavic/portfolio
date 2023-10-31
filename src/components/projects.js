import './projects.css'
import spotifyImage from '../assets/spotify.png'
import twitterImage from '../assets/twitter.png'
import breweryImage from '../assets/brewery.png'
import grocersImage from '../assets/grocers.png'
import bloomoodImage from '../assets/bloomood.png'
import cateringImage from '../assets/project.png'

const Projects = () => {
  return (
    <div id="projects">
      <div className="projects-text">
        <h2>My Recent Work</h2>
        <p>Here are a few past software developer projects I've worked on.</p>
      </div>
      <div className="projects">
        <div class="project">
          <h2>Spotify Clone</h2>
          <div class="image-container">
            <img class="front-image" src={spotifyImage} alt="spotify" />
            <div class="back">
              <p>
                Replicated Spotify with HTML and CSS, focusing on responsiveness
                and hover effects for a live demo. Check it out on{' '}
                <a
                  href="https://spotify-clone-amber-six.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vercel
                </a>
                !
              </p>
            </div>
          </div>
          <a
            href="https://github.com/ManNavic/html-spotify-challenge"
            target="_blank"
            rel="noreferrer"
          >
            Link to GitHub repository
          </a>
        </div>
        <div class="project">
          <h2>Twitter Clone</h2>
          <div class="image-container">
            <img class="front-image" src={twitterImage} alt="Twitter Clone" />
            <div class="back">
              <p>
                Created a detailed Twitter clone using HTML and CSS, featuring
                responsive design and a live demo on
                <a
                  href="https://twitter-clone-96xtyzyzc-mannavic.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vercel
                </a>
                !
              </p>
            </div>
          </div>
          <a
            href="https://github.com/ManNavic/html-twitter-challenge"
            target="_blank"
            rel="noreferrer"
          >
            Link to GitHub repository
          </a>
        </div>{' '}
        <div class="project">
          <h2>Brewery Tours</h2>
          <div class="image-container">
            <img class="front-image" src={breweryImage} alt="Brewery Tours" />
            <div class="back">
              <p>
                Built a dynamic eCommerce/booking site using JavaScript, HTML,
                and CSS. Includes search, filters, and server data retrieval
                with json-server. Live demo on
                <a
                  href="https://js-dom-brewery-tours-challenge-five.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vercel
                </a>
                !
              </p>
            </div>
          </div>
          <a href="https://github.com/ManNavic/js-dom-brewery-tours-challenge">
            Link to GitHub repository
          </a>
        </div>{' '}
        <div class="project">
          <h2>Green Grocers</h2>
          <div class="image-container">
            <img class="front-image" src={grocersImage} alt="Green Grocers" />
            <div class="back">
              <p>
                In this project, I explored a common scenario in eCommerce,
                adding and removing items from the cart, and calculating the
                total. I used JavaScript, HTML, and CSS to build the project.
                Live demo on
                <a
                  href="https://js-dom-greengrocers.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vercel
                </a>
                !
              </p>
            </div>
          </div>
          <a href="https://js-dom-greengrocers.vercel.app/">
            Link to GitHub repository
          </a>
        </div>{' '}
        <div class="project">
          <h2>Bloomood</h2>
          <div class="image-container">
            <img class="front-image" src={bloomoodImage} alt="Bloomood" />
            <div class="back">
              <p>
                Bloomood is a basic plant shop website that allows users to
                register, log in, and add items to their shopping cart for
                purchase. This project was developed to provide users with a
                seamless and intuitive shopping experience for all their plant
                needs.
              </p>
            </div>
          </div>
          <a href="https://github.com/ManNavic/BloomooD-frontEnd">
            Link to GitHub repository
          </a>
        </div>{' '}
        <div class="project">
          <h2>Rimos Produktai</h2>
          <div class="image-container">
            <img
              class="front-image"
              src={cateringImage}
              alt="Rimos Produktai"
            />
            <div class="back">
              <p>
                The Catering Project - is the user interface for our catering
                web application, where users can explore our menu and request
                quotes for weddings and events. Live demo on
                <a href="https://rimos-produktai.vercel.app/" target="_blank" rel="noreferrer">
                  Vercel
                </a>
                !
              </p>
            </div>
          </div>
          <a href="https://github.com/ManNavic/FrontEnd-project">
            Link to GitHub repository
          </a>
        </div>
      </div>
    </div>
  )
}
export default Projects
