import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import CreateIcon from "@material-ui/icons/Create";
import PersonIcon from "@material-ui/icons/Person";
import "./CreateMenu.scss";

const actions = [
  { icon: <CreateIcon />, name: "createLayer", tooltip: "צור שכבה" },
  {
    icon: <PersonIcon />,
    name: "createPersonalLayer",
    tooltip: "צור שכבה אישית"
  }
];

class CreateMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ isOpen: true });
  }
  handleClose() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <SpeedDial
        className="menu-button"
        id="create-menu"
        ariaLabel="CreateMenu"
        open={this.state.isOpen}
        icon={<SpeedDialIcon />}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.tooltip}
            tooltipPlacement="left"
            TooltipClasses={{ tooltip: "MuiTooltip-tooltip" }}
            onClick={this.handleClose}
          />
        ))}
      </SpeedDial>
    );
  }
}

export default CreateMenu;
