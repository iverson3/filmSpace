/**
 * Created by stefan.wang on 8/4/2016.
 */
import React from 'react'

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        setInterval(autoCut, 1000);
    }
    autoCut() {
        this.setState({

        });
    }
    render() {
        return (
            <div className="carousel">
                <ReactCSSTransitionGroup transitionName={this.props.transitionName} >
                    <img src={this.props.imageSrc} key={this.props.imageSrc} />
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
