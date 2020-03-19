import React, { Component } from 'react'
import { HeaderContainer } from "./styled"
import BScrollCom from "@common/scroll"
import { connect } from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from "../connect"
@connect(mapStateToProps,mapDispatchToProps)
class Header extends Component {
    render() {
        let {menus,bgColor} = this.props;
        console.log(menus)
        return (
            <HeaderContainer bgColor={bgColor}>
                {/* BEM
                    B:block  盒子
                    E:element   元素
                    M:modifier  修饰
                */}
                <div className="header_div-top">
                    <div>
                        <div className="search_div">
                            <i className="iconfont">&#xe60b;</i>
                            <span>周期配送</span>
                        </div>
                    </div>
                    <div>
                        <i className="iconfont">&#xe622;</i>
                    </div>
                </div>
                <div className="header_div-bottom">
                    <BScrollCom>
                        <ul>
                            {
                                menus.map((item)=>(
                                <li key={item.param}>{item.name}</li>
                                ))
                            }
                        </ul>
                    </BScrollCom>
                </div>
            </HeaderContainer>
        )
    }
}
export default Header