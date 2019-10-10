import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SaveIcon from "@material-ui/icons/Save";

class CreateMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <SpeedDial
        className="MenuButton"
        id="CreateMenu"
        ariaLabel="CreateMenu"
        open={this.state.isOpen}
        icon={<SpeedDialIcon />}
      ></SpeedDial>
    );
  }
}

/*const mapStateToProps = state => {
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
*/
export default CreateMenu;
