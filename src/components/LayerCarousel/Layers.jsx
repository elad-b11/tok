import Coverflow from "react-coverflow";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import propTypes from "prop-types";

import layerActions from "../../actions/layersActions.js";
import LayerCard from "../LayerCard/LayerCard.jsx";
import UpdateModel from "../UpdateModel/UpdateModel.jsx";

const settings = {
  width: 960,
  height: 480,
  displayQuantityOfSide: 2,
  infiniteScroll: true,
  enableHeading: false
};

class Layers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      currLayer: null,
      active: 0
    };

    this.onLayerClicked = this.onLayerClicked.bind(this);
    this.onCloseModel = this.onCloseModel.bind(this);
  }

  onLayerClicked(layer) {
    this.props.layerActions.getLayerById(layer._id);
    this.setState({ isOpen: true, currLayer: layer });
  }

    onCloseModel() {
        this.props.layerActions.cancelLayerOparation();
        this.setState({isOpen:false, currLayer:null});
    }

  render() {
    const layers = this.props.layers;

    return (
      <div>
        <Carousel arrows slidesPerPage={3} infinite centered>
          {layers.map(layer => {
            return (
              <LayerCard
                key={layer._id}
                layer={layer}
                onClick={this.onLayerClicked}
              />
            );
          })}
        </Carousel>
        {this.state.isOpen ? (
          <UpdateModel
            isOpen={this.state.isOpen}
            miniLayer={this.state.currLayer}
            onClose={this.onCloseModel}
          />
        ) : (
          <span />
        )}
      </div>
    );
  }
}

Layers.propTypes = {
  layers: propTypes.array,
  layerActions: propTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    layers: state.layers.list
  };
};

const mapDipatchToProps = dispatch => {
  return {
    layerActions: bindActionCreators(layerActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(Layers);
