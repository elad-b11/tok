import React, {Component} from 'react';
import {EditingState} from '@devexpress/dx-react-grid';
import {Grid, Table, TableHeaderRow, TableEditRow, TableEditColumn} from '@devexpress/dx-react-grid-material-ui';
import Paper from '@material-ui/core/Paper';
import ListProvider from './columnTypeProviders/listProvider.jsx';
import CheckProvider from './columnTypeProviders/checkProvider.jsx';
import config from '../../../configs/config.js';
import TableCommands from './TableCommands.jsx';
import propTypes from 'prop-types';

const avialibleDataTypes = config.avialibleDataTypes;

class FieldsTab extends Component {

    constructor(props) {
        super(props);
        const columns = [
            {title: 'ערך דיפולטי', name: 'defualtValue'},
            {title: 'סוג', name: 'type', options: avialibleDataTypes, initialValue: avialibleDataTypes[0]},
            {title: 'תיאור', name: 'description'},
            {title: 'שם', name: 'displayName'},
            {title: 'לא עריך', name: 'isNotEditable', type:'boolean'},
            {title: 'חובה', name: 'isRequired', type:'boolean'}
        ];
        
        this.state = {
            columns,
            rows:[]
        };

        this.onCommitChanges = this.onCommitChanges.bind(this);
    }
    
    componentWillMount() {
        let layerFields = this.props.layer.fields;
        let rows = Object.keys(layerFields).map((fieldKey) => {
            let layerField = layerFields[fieldKey];
            layerField.type = layerField.inputType.type;
            layerField.isRequired = layerField.isRequired.toString();
            layerField.isNotEditable = layerField.isNotEditable.toString();

            return layerField;
        });

        this.setState({rows});
    }

    onCommitChanges({added, changed, deleted}) {
        let changedRows;
        const rows = this.state.rows;

        if(added) {
            let startingKey = rows.length > 0 ? rows[rows.length -1].key + 1: 0;

            changedRows = [...rows, ...added.map((row, index) => {
                row.key = startingKey + index;

                return row;
            })];
        }

        if(changed) {
            changedRows = rows.map((row)=> changed[row.key] ? {...row, ...changed[row.key]}: row);
        }

        if(deleted) {
            const deletedSet = new Set(deleted);
            changedRows = rows.filter(row => !deletedSet.has(row.key));
        }

        this.setState({rows: changedRows});
    }
    
    render() {
        
        return (
            <Paper>
                <Grid
                    rows={this.state.rows}
                    columns={this.state.columns}
                    getRowId={(row) => row.key}>
                    <ListProvider for={['type']}/>
                    <CheckProvider for={['isNotEditable', 'isRequired']}/>
                    <EditingState onCommitChanges={this.onCommitChanges}/>
                    <Table/>
                    <TableHeaderRow/>
                    <TableEditRow/>
                    <TableEditColumn 
                        showAddCommand 
                        showDeleteCommand 
                        showEditCommand 
                        commandComponent={TableCommands}/>
                </Grid>
            </Paper>
        );
    }
}

FieldsTab.propTypes = {
    layer: propTypes.object.isRequired
};

export default FieldsTab;