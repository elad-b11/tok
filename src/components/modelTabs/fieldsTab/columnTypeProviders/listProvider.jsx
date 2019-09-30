import React from 'react';
import propTypes from 'prop-types';
import {DataTypeProvider} from '@devexpress/dx-react-grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

const listTypeEditor = (props) => {
    let {value, onValueChange, column} = props;
    let itemList = column.options || [];

    return (
        <Select 
            value={value}
            
            input={<Input/>}
            onChange={event => onValueChange(event.target.value)}
            style={{width:'100%'}}>
            {
                itemList.map((dataType, index) => 
                    <MenuItem key={index} value={dataType.value}>{dataType.name}</MenuItem>
                )
            }
        </Select>
    );
};

const listTypeFormatter = (props) => {
    let {value, column} = props;
    let itemList = column.options || [];
    let type =  itemList.find((elem) => elem.value===value);
    let displayName = type.name || value;

    return (<span>{displayName}</span>);
};

const ListProvider = (props) => {
    return <DataTypeProvider 
                editorComponent={listTypeEditor} 
                formatterComponent={listTypeFormatter}
                {...props}/>;
};

listTypeEditor.propTypes = {
    value: propTypes.string,
    onValueChange: propTypes.func.isRequired,
    column:propTypes.object.isRequired
};

listTypeFormatter.propTypes = {
    value: propTypes.string,
    column:propTypes.object.isRequired
};

export default ListProvider;