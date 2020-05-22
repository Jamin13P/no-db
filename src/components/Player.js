import React, {Component} from "react"

export default class Player extends Component{
    constructor(){
        super()

        this.state = {
            editor: false,
            nameInput: "",
            maxRankInput: "",
            maxMMRInput: "",
            matchesInput: "",
            winsInput: "",
            lossesInput: "",
            abandonsInput: "",
            winPercentInput: ""
        }
    }

    toggleEdit(){}

    handleChange(e){}

    render(){
        return(
            <div>Player.js</div>
        )
    }
}