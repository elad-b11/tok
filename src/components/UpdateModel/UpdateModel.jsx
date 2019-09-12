import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, {Component} from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Avater from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import MarksTheSpot from '@material-ui/icons/Clear';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FieldsTab from '../modelTabs/fieldsTab/fieldsTab.jsx';
import layersActions from '../../actions/layersActions.js';
import Loader from '../common/Loader.jsx';

const styles = {
    dialog: {
        textAlign: "right"
    },
    container: {
        
    },
    logo: {
        background: '#eee center center',
        height: '200px',
        backgroundSize: 'cover'
    },
    title: {
        display: "inline-block",
        verticalAlign: "middle",
        padding: 0
    },
    exitButton: {
        position: 'absolute',
        top: '0',
        left: '0' 
    }
};

const Transition = React.forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props}/>;
});

class UpdateModal extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;

        return (
            <Dialog open={props.isOpen}
                    onClose={props.onClose}
                    aria-labelledby="form-dialog-title"
                    className={props.classes.dialog}
                    fullWidth
                    maxWidth="lg">
                    <DialogTitle className={props.classes.title}>
                        <div className={props.classes.title}>
                            <div className={props.classes.title}>{props.miniLayer.name}</div>
                            <Avater className={props.classes.title} 
                                    alt={props.miniLayer.name} 
                                    src={props.miniLayer.logo} 
                                    style={{width:"100px", height:"100px"}} />
                        </div>
                        <Button className={props.classes.exitButton} onClick={props.onClose}><MarksTheSpot/></Button>
                    </DialogTitle>
                    <Divider/>
                    <DialogContent style={{padding: 0}}>
                        {props.isLoading?<Loader/>:<FieldsTab layer={props.layer}/>}
                    </DialogContent>
                    <Divider/>
                    <DialogActions>
                        <Button>עדכן</Button>
                    </DialogActions>
            </Dialog>
        );
    }
}

UpdateModal.propTypes = {
    layer: propTypes.object,
    isOpen: propTypes.bool.isRequired,
    onClose: propTypes.func.isRequired,
    classes: propTypes.object.isRequired,
    miniLayer: propTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        layer: state.layers.currLayer,
        isLoading: state.layers.isLoading
    };
};

const mapDipatchToProps = (dispatch) => {
    return {
        layerActions: bindActionCreators(layersActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDipatchToProps)(withStyles(styles)(UpdateModal));