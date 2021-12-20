import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Computer Science and Engineering" where="IIIT Una" from="August 2019" to="Present"/>
            <Widecard title="PCM" where="Royal Convent School" from="2017" to="2019"/>
            </div>
            )
        }
    }
    
export default Education
    