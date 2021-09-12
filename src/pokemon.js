import React from "react";

class Pokemon extends React.Component{
    render(){
        return (
            <div className="info">
                <h2>Pokemon Details:</h2>
                <hr/>
                <h3>Pokemon id: {this.props.info.id}</h3>
                <h3>Pokemon name: {this.props.info.name}</h3>
                <h3>Pokemon weight: {this.props.info.weight}hgms</h3>
                <h3>Pokemon height: {this.props.info.height}dm</h3>
            </div>
        )
    }
}
export default Pokemon