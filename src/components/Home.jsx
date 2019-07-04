import React,{Component} from 'react';
import './Home.css';
import FallingLeaves from './FallingLeaves/FallingLeaves.jsx';
import Layers from './LayerCarousel/Layers.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';

class Home extends Component {
    render() {
        return (
            <div className="Home-Page">
                <FallingLeaves/>
                <Layers/>
                <SearchBar placeholder="שם שכבה"/>
            </div>
        );
    }
}

export default Home;