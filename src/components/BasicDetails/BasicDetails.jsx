import React, { Component } from "react";
import { Avatar, Grid, Input } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";

import EditableField from '../EditableField/EditableField.jsx';
import "./BasicDetails.scss";

class BasicDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layerName: '',
      layerDescription: ''
    };
  }

  handleChange = (name) => {
    return (e) => this.setState({ [name]: e.target.value });
  }

  render = () => {
    return (
        <Grid container direction="row" spacing={2} alignItems="center" className="grid">
          <Grid item>
            <Avatar className="avatar">
              <Input type="file" />
            </Avatar>
          </Grid>
          <Grid item xs container direction="column">
            <Grid item>
              <EditableField
                value={this.state.layerName}
                onChange={this.handleChange('layerName')}
                placeholder="שם השכבה" />
            </Grid>
            <Grid item>
              <EditableField
                value={this.state.layerDescription}
                onChange={this.handleChange('layerDescription')}
                placeholder="תיאור השכבה" />
            </Grid>
          </Grid>
          <Grid item>
            <div>Created at Sep. 12</div>
            <div>Created by Ofir</div>
          </Grid>
        </Grid>
      );
  }
}

export default BasicDetails;