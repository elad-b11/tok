import React,{Component} from 'react';
import './Home.css';
import FallingLeaves from './FallingLeaves/FallingLeaves.jsx';
//import Layers from './LayerCarousel/LayerCarousel.jsx';

class Home extends Component {
    render() {
        return (
            <div className="Home-Page">
                <FallingLeaves/>
                <img className="Tree-Icon" src={require('../assets/tree.png')} />
                
            </div>
        );
    }
}

export default Home;