import React, { Component } from 'react';


//define clock component
class Clock extends React.Component {
    // constructor function is called when a class is instantiated
    //React expects a props argument
    constructor (props){ 
        // super refers to the same function as it is defined on the parent class you are inheriting from
        // when we call super we will have to pass the same props we got in the constructor into the super to make sure all the same logic happens in the parent constructor that it expects
        super (props);
        this.state = {time: new Date()}; // we use the constructor to set the initial state of the clock
    }
    componentDidMount()
    {
        setInterval(() =>{
            this.setState ({time:new Date()})
        }, 1000)
    }

    render (){
        return (
            <div>
                <h1>The time is : {this.state.time.toLocaleTimeString ()}</h1>
            </div>
        )
    }
}
export default Clock;
