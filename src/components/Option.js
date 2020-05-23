import React, {Component} from "react"
import Chooser from "./Chooser"
import axios from "axios"

export default class Option extends Component{
    constructor(){
        super()

        this.state = {
            untrackedPlayers: []
        } 
    }

    componentDidMount(){
        axios.get("/api/untracked-players").then(res =>{
            this.setState({
                untrackedPlayers: res.data
            })
        })
    }

    render(){
        return(
            <div>
                Option.js
                <Chooser trackPlayer={this.props.trackPlayer} />
            </div>
        )
    }
}