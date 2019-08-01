import React, {Component, forwardRef} from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const cellStyle = {
    direction: 'rtl',
    textAlign: 'right'
};

const columns = [
    {title: 'ערך דיפולטי', field: 'defualtValue'},
    {title: 'סוג', field: 'type', lookup:{"text":"טקסט", "number":"מספר"}, filtering: true},
    {title: 'תיאור', field: 'description'},
    {title: 'שם', field: 'name', sorting: true},
    {title: 'לא עריך', field: 'nonEditable', type:'boolean'},
    {title: 'חובה', field: 'required', type:'boolean'}
];
const data = [{name:"abc", required:true, nonEditable: false, description: "asd", type:"text"}];

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};


class FieldsTab extends Component {

    constructor(props) {
        super(props);

        this.state = {
            columns,
            data
        };

        this.onRowAdd = this.onRowAdd.bind(this);
        this.onRowDelete = this.onRowDelete.bind(this);
        this.onRowUpdate = this.onRowUpdate.bind(this);
    }

    onRowAdd(newData) {
        return new Promise((resolve, reject) => {
            const dataToAdd = [...this.state.data];
            dataToAdd.push(newData);
            this.setState({data: dataToAdd});
            resolve();
        });
    }

    onRowUpdate(newData, oldData) {
        return new Promise((resolve, reject) => {
            const dataToUpdate = [...this.state.data];
            dataToUpdate[data.indexOf(oldData)] = newData;
            this.setState({data: dataToUpdate});
            resolve();
        });
    }

    onRowDelete(oldData) {
        return new Promise((resolve, reject) => {
            const dataToDelete = [...this.state.data];
            dataToDelete.splice(dataToDelete.indexOf(oldData), 1);
            this.setState({data: dataToDelete});
            resolve();
        });
    }

    render() {
        
        return (<MaterialTable
                    title="" 
                    style={{}}
                    columns={this.state.columns}
                    data={this.state.data}
                    editable={{
                        onRowAdd: this.onRowAdd,
                        onRowUpdate: this.onRowUpdate,
                        onRowDelete: this.onRowDelete
                    }}
                    icons={tableIcons}
                    options={{
                        pageSize:100,
                        pageSizeOptions:[],
                        showTitle: false,
                        toolbarButtonAlignment: 'right',
                        searchFieldAlignment: 'right',
                        addRowPosition: 'first',
                        detailPanelColumnAlignment: 'left',
                        actionsColumnIndex: columns.length,
                        selection: false,
                        paging: false,
                        cellStyle
                    }}
                    localization={{
                        body: {
                            addTooltip: "הוסף",
                            deleteTooltip: "מחק",
                            editTooltip: "ערוך",
                            filterRow: {
                                filterTooltip: "פלטר"
                            },
                            editRow: {
                                deleteText: "בטוח שאתה רוצה למחוק שורה זו ?",
                                cancelTooltip: "בטל",
                                saveTooltip: "שמור"
                            },
                            emptyDataSourceMessage: "אין מידע להציג"
                        },
                        pagination: {
                            labelDisplayedRows: "{from}-{to} מתוך {count}",
                            firstTooltip: "עמוד ראשון",
                            lastTooltip: "עמוד אחרון",
                            nextTooltip: "עמוד הבא",
                            previousTooltip: "עמוד קודם"
                        },
                        toolbar: {
                            searchTooltip: "חפש",
                            searchPlaceholder: "חפש"
                        },
                        header: {
                            actions: "פעולות"
                        }
                    }}
                    components={{
                        
                    }}
                />);
    }
}

export default FieldsTab;