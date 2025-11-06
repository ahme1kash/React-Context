import NameContext from "../../context/NameContext/index.jsx";
import {useContext} from 'react';
import './index.css'
import {Link} from 'react-router-dom'
import homeImg from '../assets/images/home.png'
const Home = () => {
    const {name,ifName,event} = useContext(NameContext)
    console.log("Home page",name,event)
    return (

        <div className="home-container">
            <h1>Home Page</h1>
            {
                ifName()?(<p>

                    Hello {name}, Welcome to {event}
                </p>):(<p>
                Welcome to meetup
                </p>
                )
                }

            <img src={homeImg} width="400" height="300" alt="home"/>
            <Link to="/register">
                <button type="button" id="register">
                    Register
                </button>

            </Link>
        </div>
    );
};

export default Home;