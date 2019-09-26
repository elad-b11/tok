import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import AddIcon from '@material-ui/icons/Add';
import CommandButton from '../../common/CommandButton.jsx';

const CommandComponents = {
    add: <AddIcon/>,
    edit: <EditIcon/>,
    delete: <DeleteIcon/>,
    cancel: <CancelIcon/>,
    commit: <SaveIcon/>
};

const TableComands = ({id, onExecute}) => {
    const iconButton = CommandComponents[id];

    return (
        <CommandButton onClick={onExecute}>
            {iconButton}
        </CommandButton>
    );
};

export default TableComands;