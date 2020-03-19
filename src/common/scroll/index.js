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
            scrollX:true,
            probeType:1,
            click:true,
            tap:true
        })
    }
    handleScroll(callback){
        this.scroll.on("scroll",({x,y})=>{
           if(y<-183){
                callback(true);
           }else{
               //透明度0
               callback(false);
           }
        })
    }
}

export default BScrollCom