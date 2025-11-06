import NameContext from './context/NameContext'
import { useState } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'
import './App.css'
const events = [
    { id: "tech_conference", displayName: "Tech Conference" },
    { id: "ai_summit", displayName: "AI Summit" },
    { id: "startup_expo", displayName: "Startup Expo" },
    { id: "web_dev_meetup", displayName: "Web Dev Meetup" },
    { id: "cloud_innovation_day", displayName: "Cloud Innovation Day" },
    { id: "cybersecurity_forum", displayName: "Cybersecurity Forum" },
    { id: "data_science_workshop", displayName: "Data Science Workshop" }
];

const App = ()=>{
    const [name,setName] = useState("")
    const [event,setEvent] = useState(events[0].displayName)
    const ifName = ()=> {
        return name.trim().length > 0
    }
return(
        <NameContext.Provider value={{name,ifName,setName,event,setEvent}}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact  path="/register" render={(props) => <Register {...props} allEvents={events}/>}/>
                <Route path="/not-found" component={NotFound}/>
                <Route  component={NotFound}/>
            </Switch>
        </NameContext.Provider>
    )
}

export default App;