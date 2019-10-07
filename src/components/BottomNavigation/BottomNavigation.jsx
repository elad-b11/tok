import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BottomNavigation } from '@material-ui/core';
import { Link } from "react-router-dom";
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RestoreIcon from '@material-ui/icons/Restore';

import './BottomNavigation.scss';

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {value: '/'};
    }

    render() {
        return (
        <BottomNavigation
            className="footer"
            value={this.state.value}
            onChange={(event, newValue) => {
                this.setState({value: newValue});
            }}
            showLabels >
            <BottomNavigationAction 
                component={Link} 
                label="Home" 
                icon={<HomeIcon />} 
                to="/" />
            <BottomNavigationAction 
                component={Link} 
                label="Add Layer" 
                icon={<AddCircleOutlineIcon />} 
                to="/createLayer" />
        </BottomNavigation >);
    }
}

Footer.propTypes = {
    isUpdateState: PropTypes.bool.isRequired
};

export default Footer;