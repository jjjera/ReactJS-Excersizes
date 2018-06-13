import React, { Component } from 'react';
import one from './one.png';


let styles = {color : "red"}

export default class Test extends Component {
  
    render(){
        return (
            <div classname="tesImg">
            <img src={one} id="firstImage" title="Hurrrrrayyy!" />
            <div className="firstClass">
            <h1 className="heading" style={styles}>ReactJS</h1>
            <p id="paraGraph">My first program in react!!</p>
            </div>
            </div>
           
        );
    }
}
