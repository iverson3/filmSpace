/**
 * Created by stefan.wang on 7/29/2016.
 */
import React from 'react'
import Online from './Online'
import Coming from './Coming'

export default class FilmList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            type: props.type
        };
        this.tabCut = this.tabCut.bind(this);
    }
    tabCut(type){
        console.log(type)
        this.setState({
            type: type
        })
    }
    render() {
        let list = "";
        let lTabClass = "", rTabClass = "";
        if (this.state.type === 'online') {
            lTabClass = "filmlist-div-tab-now";
            list = <Online />;
        } else {
            rTabClass = "filmlist-div-tab-now";
            list = <Coming />;
        }

        return (
            <div className="filmlist-div">
                <div className="filmlist-div-tab">
                    <div className={"filmlist-div-tab-l " + lTabClass} type="online" onClick={() => this.tabCut('online')}><p>正在热映</p></div>
                    <div className={"filmlist-div-tab-r " + rTabClass} type="coming" onClick={() => this.tabCut('coming')}><p>即将上映</p></div>
                </div>
                <div>
                    {list}
                </div>
            </div>
        );
    }
}