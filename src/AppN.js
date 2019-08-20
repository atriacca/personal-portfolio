import React, { Component } from 'react'
import Profile from './Profile'
import Interests from './Interests'
import Intro from './Intro'
import Resume from './Resume'
import Navbar from './Navbar'
import Projects from './Projects'
import Contact from './Contact'
import './style.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            navToggle: false
        }
    }

    navToggler = () => {
        this.setState(prevState => ({
            navToggle: !prevState.navToggle
        }))
    }

    hamToggler = x => {
        x.className.toggle("change")
    }

    render() {
        return (
            <div className="page app-container">
                <div 
                    onClick={this.navToggler}
                    className={`overlay overlay-${this.state.navToggle ? "open" : "closed"}`}>
                </div>
                {/* <div class="ham app-container" onClick={this.hamToggler}>
                    <div class="ham-top"></div>
                    <div class="ham-mid"></div>
                    <div class="ham-bot"></div>
                </div> */}
                <button onClick={this.navToggler}>|||</button>
                <Navbar navToggler={this.navToggler} navToggle={this.state.navToggle}/>
                <Intro />
                <div className='separator'></div>
                <Profile />
                <div id="projects-header" className='separator'></div>
                <Projects />
                <div className='separator'></div>
                <Resume />
                <div className='separator'></div>
                <Interests />
                <div id="contact-header" className='separator'></div>
                <Contact />
                <div className='separator'></div>
            </div>
        )
    }
}

export default App