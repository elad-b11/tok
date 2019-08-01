import React, { Component } from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      direction: "rtl",
      textAlign: "-webkit-right"
    },
    media: {
      height: 140
    },
    content: {
        
    }
};

const LayerCard = (props)=> {

    const onClick =()=> {
        props.onClick(props.layer);
    };

    return(
        <Card className={props.classes.card}
              onClick={onClick}>
            <CardActionArea>
                <CardMedia
                    className={props.classes.media}
                    image={props.layer.logo}
                    title={props.layer.name}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={props.classes.content}>
                        {props.layer.name}
                    </Typography>
                    <Typography component="ul" className={props.classes.content}>
                        <Typography component="li">תאריך יצירה: {props.layer.creationTime}</Typography> 
                        <Typography component="li">תיאור: {props.layer.description}</Typography>  
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

LayerCard.propTypes = {
    classes: propTypes.object.isRequired,
    layer: propTypes.object.isRequired,
    onClick: propTypes.func.isRequired
};


export default withStyles(styles)(LayerCard);