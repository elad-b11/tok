import React, { Component } from 'react';
import Footer from '../BottomNavigation/BottomNavigation.jsx';
import BasicDetails from '../BasicDetails/BasicDetails.jsx';
import { Container } from '@material-ui/core';
import { StylesProvider } from "@material-ui/styles";

class CreateLayer extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
          <StylesProvider injectFirst>

          <Container>
            <BasicDetails />
            <Footer isUpdateState={false} />
          </Container>
          </StylesProvider>
        );
    }
}

export default CreateLayer;