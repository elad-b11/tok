import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import propTypes from "prop-types";

import FallingLeaves from "../FallingLeaves/FallingLeaves.jsx";
import Layers from "../LayerCarousel/Layers.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import layerActions from "../../actions/layersActions.js";
import "./Home.css";
import { Grid, Button } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.layerActions.getLayersTree();
  }

  render() {
    return (
      <StylesProvider injectFirst>
        <Grid container direction="column" className="home-grid" spacing={2}>
          {/* <FallingLeaves/> */}
          <Grid item xs={12}>
            <Layers />
          </Grid>
          <Grid item xs={12}>
            <SearchBar placeholder="שם שכבה" />
          </Grid>
          <Grid item>
            <Button>
              <Link to="/createLayer">create layer</Link>
            </Button>
          </Grid>
        </Grid>
      </StylesProvider>
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
