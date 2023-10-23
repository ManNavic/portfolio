import './header.css'
import Sun from '../assets/sun'
import LogoSvg from '../assets/logosvg'
import React, { useState } from 'react'
import Moon from '../assets/moon'
import light from '../assets/bg-grain.jpg'
import dark from '../assets/darkGrid.jpg'
import { useEffect } from 'react'
import cursor from '../assets/cursor-svgrepo-com.svg'
import cursorDark from '../assets/cursor.svg'
import Menu from '../assets/menu'
import Close from '../assets/close'
const Header = () => {
  // Retrieve the dark mode state from localStorage or default to false
  const savedIsDarkMode = JSON.parse(localStorage.getItem('isDarkMode'))
  const [isDarkMode, setIsDarkMode] = useState(savedIsDarkMode || false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle dark mode
  const toggleMode = () => {
    const newIsDarkMode = !isDarkMode
    setIsDarkMode(newIsDarkMode)

    // Save the updated dark mode state to localStorage
    localStorage.setItem('isDarkMode', JSON.stringify(newIsDarkMode))
  }

  // Use the useEffect hook to set the initial background and logo colors based on the saved state
  useEffect(() => {
    if (isDarkMode) {

      const close = document.querySelectorAll('.close');
      close.forEach(path => {
        const fill = path.querySelectorAll('path');
        console.log(fill)
        fill.forEach(line => {
          line.setAttribute('fill', isDarkMode ? '#ffb39b' :'black' );
        });
      });

      const github = document.querySelector('#github');
      const g = github.querySelectorAll('g'); 
      g.forEach(lines => {
        lines.setAttribute('fill', '#ffb39b'); 
      });
 
      const linkedin = document.querySelector('#linkedin');
      linkedin.setAttribute('fill', '#ffb39b'); 
      
    
      const background = document.querySelector('#root')
      background.style.cursor = `url('${cursorDark}'),auto`;
      background.style.backgroundImage = `url('${dark}')`

      const menuBackground = document.querySelector('.menu-container')
      menuBackground.style.backgroundImage = `url('${dark}')`

      document.documentElement.style.setProperty('--main-color', '#ffb39b')
      
      const logos = document.querySelectorAll('.logo');
      logos.forEach(logo => {
        logo.style.fill = isDarkMode ? '#ffb39b' : 'black';
      });
      
      const laptop = document.querySelector('.moving-text-container')
      laptop.style.backgroundColor = 'black'

      const menu = document.querySelector('#menu');
      const lines = menu.querySelectorAll('path'); 
      lines.forEach(line => {
        line.setAttribute('stroke', '#ffb39b'); 
      });

    } else {
      document.documentElement.style.setProperty('--main-color', 'black')

      const close = document.querySelectorAll('.close');
      close.forEach(path => {
        const fill = path.querySelectorAll('path');
        fill.forEach(line => {
          line.setAttribute('fill', !isDarkMode ? 'black'  :'#ffb39b');
        });
      });

      const github = document.querySelector('#github');
      const g = github.querySelectorAll('g'); 
      g.forEach(lines => {
        lines.setAttribute('fill', 'black'); 
      });

      const linkedin = document.querySelector('#linkedin');
      linkedin.setAttribute('fill', 'black');

      const background = document.querySelector('#root')
      background.style.backgroundImage = `url('${light}')`
      background.style.cursor = `url('${cursor}'),auto`;

      const menuBackground = document.querySelector('.menu-container')
      menuBackground.style.backgroundImage = `url('${light}')`

      const laptop = document.querySelector('.moving-text-container')
      laptop.style.backgroundColor = 'white'

      const logos = document.querySelectorAll('.logo');
      logos.forEach(logo => {
        logo.style.fill = !isDarkMode ? 'black' : '#ffb39b';
      });

      const menu = document.querySelector('#menu');
      const lines = menu.querySelectorAll('path'); 
      lines.forEach(line => {
        line.setAttribute('stroke', 'black'); 
      });
    }
  }, [isDarkMode])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <LogoSvg />
      </div>
      <div className="button-container">
        <div onClick={() => {
            const contactUsSection = document.getElementById('about')
            contactUsSection.scrollIntoView({ behavior: 'smooth' })
         
          }}
        >
          About Me
        </div>
        <div onClick={() => {
            const contactUsSection = document.getElementById('projects')
            contactUsSection.scrollIntoView({ behavior: 'smooth' })
         
          }}>My projects</div>
        <div onClick={() => {
            const contactUsSection = document.getElementById('contact')
            contactUsSection.scrollIntoView({ behavior: 'smooth' })
         
          }}>Contact Me</div>
      </div>

      <div className="mode-toggle">
        <div className="mode" onClick={toggleMode}>
          {isDarkMode ? <Moon /> : <Sun />}<span  className='mode-text'>Mode</span>
        </div>
      </div>
      <div className='menu-bttn' onClick={toggleMenu}>
  <Menu />
</div>
<div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
<div className='menu-logo'>
  <LogoSvg width={'380px'} height={'150px'}/>
</div>
  <div className='menu-items'  onClick={() => {
            const contactUsSection = document.getElementById('about')
            contactUsSection.scrollIntoView({ behavior: 'smooth' })
  
          }}>About Me</div>
  <div className='menu-items'  onClick={() => {
            const contactUsSection = document.getElementById('projects')
            contactUsSection.scrollIntoView({ behavior: 'smooth' })
         
          }}>My projects</div>
  <div className='menu-items' onClick={() => {
            const contactUsSection = document.getElementById('contact')
            contactUsSection.scrollIntoView({ behavior: 'smooth' })
         
          }}>Contact Me</div>
  <div onClick={toggleMenu} className='x'><Close/></div>
</div>

    </div>
  )
}
export default Header
