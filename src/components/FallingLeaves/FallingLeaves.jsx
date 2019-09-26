import React, { Component } from 'react';
import './FallingLeaves.css';
class FallingLeaves extends Component {
    render() {
        return(
            <div className="container">
                <div className="Falling-Leaves">
                    {[...Array(20).keys()].map((index)=>{
                        return(
                            <span key={"leaf-"+index}/>
                        );
                        })}
                </div>
            </div>
        );
    }
}

export default FallingLeaves;