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
            <div >
                <p>{this.props.data.name}</p>
                <p>{this.props.data.maxRank}</p>
                <p>{this.props.data.maxMMR}</p>
                <p>{this.props.data.matches}</p>
                <p>{this.props.data.wins}</p>
                <p>{this.props.data.losses}</p>
                <p>{this.props.data.abandons}</p>
                <p>{this.props.data.winPercent}</p>
            </div>
        )
    }
}