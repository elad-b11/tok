import Coverflow from 'react-coverflow';
import React, {Component} from 'react';
import LayerCard from '../LayerCard/LayerCard.jsx';
import UpdateModel from '../UpdateModel/UpdateModel.jsx';

class Layers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen:false,
            currLayer: null
        };

        this.onLayerClicked = this.onLayerClicked.bind(this);
        this.onCloseModel = this.onCloseModel.bind(this);
    }

    onLayerClicked(layer) {
        this.setState({isOpen:true, currLayer:layer});
    }

    onCloseModel() {
        this.setState({isOpen:false, currLayer:null});
    }

    render() {
        const settings = {
            width: 960,
            height: 480,
            displayQuantityOfSide:2,
            infiniteScroll:true,
            enableHeading: false
        };

        const layers = [
            {
                _id: "aaa",
                name:"שכבה יפה",
                description: "Bla bla bla",
                creationTime: new Date().toDateString(),
                logo: require("../../assets/tree.png")
            },
            {
                _id: "bbb",
                name:"וואו",
                description: "Bla bla bla",
                creationTime: new Date().toDateString(),
                logo: require("../../assets/tree.png")
            },
            {
                _id: "ccc",
                name:"איזה יופי",
                description: "Bla bla bla",
                creationTime: new Date().toDateString(),
                logo: require("../../assets/tree.png")
            },
            {
                _id: "ddd",
                name:"Layer",
                description: "Bla bla bla",
                creationTime: new Date().toDateString(),
                logo: require("../../assets/tree.png")
            },
            {
                _id: "eee",
                name:"שכבה מקורית",
                description: "Bla bla bla",
                creationTime: new Date().toDateString(),
                logo: require("../../assets/tree.png")
            }
        ];

        return (
            <div>
                <Coverflow className="layersContainer" {...settings}>
                    {layers.map((layer)=>{return <LayerCard key={layer._id} layer={layer} onClick={this.onLayerClicked}/>;})}
                </Coverflow>
                {
                    this.state.isOpen?
                        <UpdateModel isOpen={this.state.isOpen} layer={this.state.currLayer} onClose={this.onCloseModel}/>:
                        <span/>
                }
            </div>
            
        );
    }

}

export default Layers;