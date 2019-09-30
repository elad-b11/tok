import React from 'react';
import propTypes from 'prop-types';
import {DataTypeProvider} from '@devexpress/dx-react-grid';
import Checkbox from '@material-ui/core/Checkbox';

const strToBool = {
    "true": true,
    "false": false
}

const checkTypeEditor = (props) => {
    let {value, onValueChange, column} = props;
    let boolValue = strToBool["true"];

    return (
        <Checkbox checked={boolValue} onChange={(event)=> onValueChange(event.target.checked.toString())}/>
    );
};

const checkTypeFormatter = (props) => {
    let {value, column} = props;
    let boolValue = value === "true"? true:false;

    return (
        <Checkbox disabled  checked={boolValue}/>
    );
}

const CheckProvider = (props) => {
    return <DataTypeProvider 
                editorComponent={checkTypeEditor} 
                formatterComponent={checkTypeFormatter}
                {...props}/>;
};

checkTypeEditor.propTypes = {
    value: propTypes.string,
    onValueChange: propTypes.func.isRequired,
    column:propTypes.object.isRequired
};

checkTypeFormatter.propTypes = {
    value: propTypes.string,
    column:propTypes.object.isRequired
};

export default CheckProvider;