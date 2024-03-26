import './homepage-style.css';
import img from './img1.png';

const HomePage = () =>{
    return(
        <div className="home-page">
            <div className="content">
                <div className="heading">Provides you best UI service</div>
                <p> Mobile App Design and Development Studio. You can have us.</p>
                <a href = '#'>Wave Me!</a>
            </div>
            <div className="image">
                <img src={img} className='img'/>
            </div>
        </div>
    );
}

export default HomePage;