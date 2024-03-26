import './navbar-style.css';

const NavBar = () =>{
    return(
        <div className='nav-bar'>
            <div className="wsname">WebUIExpert</div>
            <div className="bar-options">
                <a href='#'>HOME</a>
                <a href='#'>PORTFOLIO</a>
                <a href='#'>ABOUT</a>
                <a href='#'>BLOG</a>
                <a href='#'>CONTACT</a>
                <a href='#' className='login-btn'>LOGIN</a>
            </div>
        </div>
    );
}

export default NavBar;