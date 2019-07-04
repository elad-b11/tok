import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, {Component} from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

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
                <div className={props.classes.logo} style={{backgroundImage:`url(${props.layer.logo}`}}/>
                <DialogTitle>
                    {props.layer.name}
                </DialogTitle>
                <DialogContent>
                    <h3>To be continued</h3>
                </DialogContent>
                <DialogActions>
                    <Button>עדכן</Button>
                    <Button onClick={props.onClose}>בטל</Button>
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