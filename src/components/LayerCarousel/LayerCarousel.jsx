import React, {Component} from 'react';
import Slider from 'react-slick';
//import './Layer.scss';

class MyCarousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        const settings = {
           slidesToShow:3,
           dots: true,
           centerMode: true,
           focusOnSelect: true,
           swipeToSlide:true
        };

        const presontorSettings = {
            slidesToShow:1,
            swipeToSlide:false,
            focusOnSelect:true,
            arrows:false,
            draggable: false
        };

        const layers = (
            <span>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
                <div><h3>6</h3></div>
                <div><h3>7</h3></div>
            </span>
        );

        
        return (
            <div className="layersContainer">
                <Slider asNavFor={this.state.nav2}
                        ref={slider => this.slider1 = slider}
                        {...presontorSettings}>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                        <div><h3>5</h3></div>
                        <div><h3>6</h3></div>
                        <div><h3>7</h3></div>
                </Slider>
                <Slider asNavFor={this.state.nav1}
                        ref={slider => this.slider2 = slider}
                        {...settings}>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                        <div><h3>5</h3></div>
                        <div><h3>6</h3></div>
                        <div><h3>7</h3></div>
                </Slider>
            </div>
            
        );
    }
    
}

export default MyCarousel;