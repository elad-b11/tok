import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import propTypes from 'prop-types';

const CommandButton = (props) => {
    return (
        <IconButton {...props}>
            {props.children}
        </IconButton>
    );
};

CommandButton.propTypes = {
    
};

export default CommandButton;