import './navbar-style.css';

const NavBar = () =>{
    const handleClick = (e) => {
        const listVisible = document.getElementById('list').style;
        if(listVisible.visibility=='hidden'){
            listVisible.visibility='visible';
        }else{
            listVisible.visibility='hidden';
        }
    }
    return(
        <nav className='nav-bar'>
            <h1 className="heading">WebUIExpert</h1>
            <ul className="list" id='list'>
                <li><a href='#'>HOME</a></li>
                <li><a href='#'>PORTFOLIO</a></li>
                <li><a href='#'>ABOUT</a></li>
                <li><a href='#'>BLOG</a></li>
                <li><a href='#'>CONTACT</a></li>
                <li><button className='login-btn'>LOGIN</button></li>
            </ul>
            <div className='menu-icon show' onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
    </nav>
    );
}

export default NavBar;