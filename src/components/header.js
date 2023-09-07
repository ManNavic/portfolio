import './header.css'
const Header = () =>{
    return (
        <div className="header-container">
            <div className='button-container'>
                <button onClick={()=>{console.log('hello')}}>About Me</button>
            <button>My projects</button>
            <button>Contact Me</button>
            </div>
            
        </div>
    )
}
export default Header