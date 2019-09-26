import React, {Component} from 'react';
import {EditingState} from '@devexpress/dx-react-grid';
import {Grid, Table, TableHeaderRow, TableEditRow, TableEditColumn} from '@devexpress/dx-react-grid-material-ui';
import Paper from '@material-ui/core/Paper';
import ListProvider from './columnTypeProviders/listProvider.jsx';
import config from '../../../configs/config.js';
import TableCommands from './TableCommands.jsx';

const avialibleDataTypes = config.avialibleDataTypes;

class FieldsTab extends Component {

    constructor(props) {
        super(props);
        const rows = [{key:1, name:"abc", required:"true", nonEditable: "false", description: "asd", type:"text"}];
        const columns = [
            {title: 'ערך דיפולטי', name: 'defualtValue'},
            {title: 'סוג', name: 'type', options: avialibleDataTypes},
            {title: 'תיאור', name: 'description'},
            {title: 'שם', name: 'name'},
            {title: 'לא עריך', name: 'nonEditable', type:'boolean'},
            {title: 'חובה', name: 'required', type:'boolean'}
        ]
        this.state = {
            columns,
            rows
        };

        this.onCommitChanges = this.onCommitChanges.bind(this);
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
            changedRows = rows.map((row)=> changed[row.id] ? {...row, ...changed[row.id]}: row);
        }

        if(deleted) {
            const deletedSet = new Set(deleted);
            changedRows = rows.filter(row => !deletedSet.has(row.id));
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
                    <EditingState onCommitChanges={this.onCommitChanges}/>
                    <Table/>
                    <TableHeaderRow/>
                    <TableEditRow/>
                    <TableEditColumn showAddCommand showDeleteCommand showEditCommand />
                </Grid>
            </Paper>
        );
    }
}

export default FieldsTab;