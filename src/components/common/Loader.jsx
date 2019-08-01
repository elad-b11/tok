import React, {Component} from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const gifLoader = require('../../assets/treeLoader.gif');

const styles = {
    img: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "40%"    
    }
};

const Loader = (props) => {
    return (
        <img className={props.classes.img} src={gifLoader} />
    );
};

Loader.propTypes = {
    classes: propTypes.object.isRequired
};

export default withStyles(styles)(Loader);