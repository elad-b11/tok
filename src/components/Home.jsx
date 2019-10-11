import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import propTypes from "prop-types";

import "./Home.css";
import FallingLeaves from "./FallingLeaves/FallingLeaves.jsx";
import Layers from "./LayerCarousel/Layers.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import layerActions from "../actions/layersActions.js";
import { Grid } from "semantic-ui-react";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.layerActions.getLayersTree();
  }

  render() {
    return (
      <div className="home-page">
        <Grid centered stackable textAlign="center">
          {/* <FallingLeaves/> */}
          <Grid.Row>
            <Grid.Column>
              <Layers />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <SearchBar placeholder="שם שכבה" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <CreateMenu />
      </div>
    );
  }
}

Home.propTypes = {
  layerActions: propTypes.object.isRequired
};

const mapStateToProps = props => {
  return {};
};

const mapDipatchToProps = dispatch => {
  return {
    layerActions: bindActionCreators(layerActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(Home);
