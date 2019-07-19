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
import FieldsTab from '../modelTabs/fieldsTab/fieldsTab.jsx';

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
        verticalAlign: "middle"
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

const UpdateModal = (props) => {

    return (
        <Dialog open={props.isOpen}
                onClose={props.onClose}
                aria-labelledby="form-dialog-title"
                className={props.classes.dialog}
                fullWidth
                maxWidth="lg"
                TransitionComponent={Transition}>
                <DialogTitle className={props.classes.title}>
                    <div className={props.classes.title}>
                        <div className={props.classes.title}>{props.layer.name}</div>
                        <Avater className={props.classes.title} 
                                alt={props.layer.name} 
                                src={props.layer.logo} 
                                style={{width:"100px", height:"100px"}} />
                    </div>
                    <Button className={props.classes.exitButton} onClick={props.onClose}><MarksTheSpot/></Button>
                </DialogTitle>
                <Divider/>
                <DialogContent>
                    <FieldsTab/>
                </DialogContent>
                <Divider/>
                <DialogActions>
                    <Button>עדכן</Button>
                </DialogActions>
        </Dialog>
    );
};

UpdateModal.propTypes = {
    layer: propTypes.object.isRequired,
    isOpen: propTypes.bool.isRequired,
    onClose: propTypes.func.isRequired,
    classes: propTypes.object.isRequired
};

export default withStyles(styles)(UpdateModal);