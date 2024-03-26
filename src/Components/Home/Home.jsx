import NavBar from './NavBar/NavBar';
import HomePage from './HomePage/HomePage';
import './home-style.css';

const Home = () => {
    return(
        <div className="home-div">
            <NavBar/>
            <HomePage/>
        </div>

    );
}

export default Home;