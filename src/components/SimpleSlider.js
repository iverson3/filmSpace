/**
 * Created by stefan.wang on 8/4/2016.
 */
import React from 'react'
import Slider from 'react-slick'

export default class SimpleSlider extends React.Component {
    render(){
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        };

        let picList = this.props.picList.map(function (res, index) {
            return (
                <div className="slider-img" key={index}><img src={res.picUrl} alt={res.title}/></div>
            );
        }.bind(this));

        return (
            <Slider {...settings}>
                {picList}
            </Slider>
        );
    }
}