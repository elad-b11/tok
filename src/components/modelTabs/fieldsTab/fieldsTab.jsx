import React, {Component, forwardRef} from 'react';
import {EditingState} from '@devexpress/dx-react-grid';
import {Grid, Table, TableHeaderRow, TableEditRow, TableEditColumn} from '@devexpress/dx-react-grid-material-ui';
import Paper from '@material-ui/core/Paper';
import ListProvider from './columnTypeProviders/listProvider.jsx';

const cellStyle = {
    direction: 'rtl',
    textAlign: 'right'
};

const columns = [
    {title: 'ערך דיפולטי', name: 'defualtValue'},
    {title: 'סוג', name: 'type', lookup:{"text":"טקסט", "number":"מספר"}, filtering: true},
    {title: 'תיאור', name: 'description'},
    {title: 'שם', name: 'name', sorting: true},
    {title: 'לא עריך', name: 'nonEditable', type:'boolean'},
    {title: 'חובה', name: 'required', type:'boolean'}
];
const rows = [{key:1, name:"abc", required:true, nonEditable: false, description: "asd", type:"text"}];

const avialibleDataTypes = [
    {name: 'טקסט', value:'text'},
    {name: 'מספר', value:'number'},
    {name: 'תאריך ושעה', value:'dateTime'},
    {name: 'גיאוגרפיה', value:'geography'},
    {name: 'בחירה מתוך רשימה', value:'itemFromList'},
    {name: 'בחירה מתוך עץ', value:'itemFromTree'},
    {name: 'קובץ', value:'file'},
    {name: 'רשימת טקסטים', value:'textList'},
    {name: 'רשימת קבצים', value:'fileList'},
    {name: 'תאריך עם אזור זמן', value:'timeZone'},
    {name: 'קישור', value:'link'}
];

class FieldsTab extends Component {

    constructor(props) {
        super(props);

        this.state = {
            columns,
            rows
        };

        this.onCommitChanges = this.onCommitChanges.bind(this);
    }

    onCommitChanges({added, changed, deleted}) {
        let changedRows;

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
                    rows={rows}
                    columns={columns}
                    getRowId={(row) => row.id}>
                    <ListProvider for={['type']} itemList={avialibleDataTypes}/>
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