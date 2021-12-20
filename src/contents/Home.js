import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/Chandan_img.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Chandan Bansal','I am a Web Developer']} speed={50} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    