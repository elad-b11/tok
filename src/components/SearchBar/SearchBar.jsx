import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    searchBar:{
        backgroundColor: "white",
        direction: "rtl"
    },
    continer: {
        width: "50%",
        padding: "0 25%"
    }
};

const SearchBar = (props) => {
    return(
        <div className={props.classes.continer}>
            <TextField
                className={props.classes.searchBar}
                id="filled-full-width"
                label=""
                placeholder={props.placeholder}
                helperText=""
                fullWidth
                margin="normal"
                variant="filled"
                InputLabelProps={{
                    shrink: true
                }}                
                onChange={props.onSearch}
            />
        </div>
    );
};

SearchBar.propTypes = {
    onSearch: propTypes.func,
    placeholder: propTypes.string,
    classes: propTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);