import React, {Component} from "react"
import Chooser from "./Chooser"

export default class Option extends Component{
    constructor(){
        super()

        this.state = {
            untrackedPlayers: []
        } 
    }

    componentDidMount(){}

    render(){
        return(
            <div>
                Option.js
                <Chooser trackPlayer={this.props.trackPlayer} />
            </div>
        )
    }
}