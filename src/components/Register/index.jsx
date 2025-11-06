import NameContext from '../../context/NameContext'
import './index.css'
import {useContext,useState} from 'react'
import {useHistory} from 'react-router-dom'
import registerImg from '../assets/images/register.webp'
const Register = (props)=>{
    const {allEvents} = props;
    const history = useHistory();
    const [err,setError] = useState("")
    const {name, setName,setEvent} = useContext(NameContext)
    const handleChangeEvent = (e)=>{
        setEvent(e.target.value)
    }
    const handleName= (e)=>{
        setName(e.target.value)
    }
    const handleSubmit = (e)=>{
    e.preventDefault()
        if(name.length===0){
            setError("*Please provide the user name")
            return
        }
        setError('')
        history.push("/")
    }

    return(
        <div>
            <form className='register-container' onSubmit={handleSubmit}>
            <img src={registerImg} alt="register form"/>

            <label htmlFor="username" className='user-label'>
              Your name
            </label>
           <input id='username'  type="text" onChange={handleName} value={name}/>
                <p style={{ color: "red" }}>{err} </p>
                <select id="allEvents" onChange={handleChangeEvent}>

                    {
                        allEvents.map((item)=>{
                            return(
                                <option key={item.id} value={item.displayName}>{item.displayName}</option>
                            )
                        })
                    }

                </select>
                <button type="submit">Submit</button>


            </form>
        </div>
    )
}
export  default  Register