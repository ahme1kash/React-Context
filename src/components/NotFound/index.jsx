import './index.css'
import {Link} from 'react-router-dom'
import notFoundImg from '../assets/images/notfound.jpg'
const NotFound = ()=>{
    return(
    <div className='not-found-container' style={{display:"flex",justifyContent:"center",alignItems:"center" ,flexDirection:"column"}}>
      <img src={notFoundImg} alt="not-found" width="800" height="550"/>
        <h1>Sorry we do not find the page you are looking for !</h1>
        <Link to="/">
        <button>Back To Home</button>
        </Link>

    </div>
    )
}
export  default  NotFound