
import Header from './header'
import './main.css'
import Image1 from '../assets/laptop.png'
const Main = () => {
  return (
    <>
      <Header />
      <div className="main-svg">
        <div className='main-image'>
        <div className="lines_container">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
        </div>
          <img src={Image1} alt='something'/>
        <div class="moving-text-container">
          <div class="moving-text">
            <span className='text1'>HELLO WORLD</span>
            <span className='text2'>HELLO WORLD</span>
            <span className='text3'>HELLO WORLD</span>
            <span className='text4'>HELLO WORLD</span>
            <span className='text1'>HELLO WORLD</span>
            <span className='text2'>HELLO WORLD</span>
            <span className='text3'>HELLO WORLD</span>
            <span className='text4'>HELLO WORLD</span>
            <span className='text1'>HELLO WORLD</span>
            <span className='text2'>HELLO WORLD</span>
            <span className='text3'>HELLO WORLD</span>
            <span className='text4'>HELLO WORLD</span>
          </div>
        </div>
        </div>
      </div>
      
    </>
  )
}
export default Main
