import React, {Component} from 'react';
import MaterialTable from 'material-table';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import SaveAlt from '@material-ui/icons/SaveAlt';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Add from '@material-ui/icons/Add';
import Check from '@material-ui/icons/Check';
import FilterList from '@material-ui/icons/FilterList';
import Remove from '@material-ui/icons/Remove';
import {SvgIconProps} from '@material-ui/core/SvgIcon';


const columns = [
    {title: 'חובה', field: 'required', type:'boolean'},
    {title: 'לא עריך', field: 'nonEditable', type:'boolean'},
    {title: 'שם', field: 'name'},
    {title: 'תיאור', field: 'description'},
    {title: 'סוג', field: 'type', lookup:{"text":"טקסט", "number":"מספר"}},
    {title: 'ערך דיפולטי', field: 'defualtValue'}
];
const data = [{name:"abc", required:true, nonEditable: false, description: "asd", type:"text"}];

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
            dataToDelete.slice(dataToDelete.indexOf(oldData), 1);
            this.setState({data: dataToDelete});
            resolve();
        });
    }

    render() {
        React.createElement(SvgIconProps,)
        return (<MaterialTable 
                    columns={this.state.columns}
                    data={this.state.data}
                    editable={{
                        onRowAdd: this.onRowAdd,
                        onRowUpdate: this.onRowUpdate,
                        onRowDelete: this.onRowDelete
                    }}
                    icons={{
                        Check: <Check/>
                    }}

                />);
    }
}


// icons={{
//     Check: () => <Check/>,
//     Export: () => <SaveAlt/>,
//     Filter: () => <FilterList />,
//     FirstPage: () => <FirstPage/>,
//     LastPage: () =>  <LastPage/>,
//     NextPage: () => <ChevronRight/>,
//     PreviousPage: () => <ChevronLeft/>,
//     Search: ()=> <Search/>,
//     ThirdStateCheck: () => <Remove/>,
//     ViewColumn: () => <ViewColumn/>,
//     DetailPanel:() => <ChevronRight/>
//}}

export default FieldsTab;