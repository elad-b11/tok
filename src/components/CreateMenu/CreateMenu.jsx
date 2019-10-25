import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import CreateIcon from "@material-ui/icons/Create";
import PersonIcon from "@material-ui/icons/Person";
import style from "./CreateMenuStyle";

const actions = [
  { icon: <CreateIcon />, name: "createLayer", tooltip: "צור שכבה" },
  {
    icon: <PersonIcon />,
    name: "createPersonalLayer",
    tooltip: "צור שכבה אישית"
  }
];

const useStyles = makeStyles(theme => style);

const CreateMenu = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SpeedDial
      classes={{ root: classes.root, fab: classes.fab }}
      ariaLabel="CreateMenu"
      open={isOpen}
      icon={<SpeedDialIcon />}
      onOpen={handleOpen}
      onClose={handleClose}
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.tooltip}
          tooltipPlacement="left"
          TooltipClasses={{ tooltip: classes.label }}
          onClick={handleClose}
        />
      ))}
    </SpeedDial>
  );
};

export default CreateMenu;
