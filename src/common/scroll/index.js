import React, { Component } from 'react'
import {BSContainer} from "./styled"
import BScroll from "better-scroll";
class BScrollCom extends Component {
    render() {
        return (
            <BSContainer ref="wrapper">
                {this.props.children}
            </BSContainer>
        )
    }
    componentDidMount(){
        this.scroll = new BScroll(this.refs.wrapper,{
            scrollX:true
        })
    }
}

export default BScrollCom