import Carousel from 'react-native-snap-carousel';
import React, {Component} from 'react';

class MyCarousel extends Component {

    constructor(props) {
        super(props);


        this.renderItem = this.renderItem.bind(this);
    }

    renderItem({item, index}) {
        return (
            <div>
                <h1>{item.title}</h1>
                <h3>{item.desc}</h3>
            </div>
        );
    }

    render() {
        return (<Carousel   
                    data={[{title:"bla", desc:"bla bla"}]}
                    renderItem={this.renderItem}
                    itemWidth={50}
                    sliderWidth={150}
                    loop={true}
                    autoplay={true}/>);
    }
    
}

export default MyCarousel;