import React, { Component } from 'react'
import { HeaderContainer } from "./styled"
import BScrollCom from "@common/scroll"
class Header extends Component {
    render() {
        return (
            <HeaderContainer>
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
                            <li>进口狗粮</li>
                            <li>进口狗粮</li>
                            <li>进口狗粮</li>
                            <li>进口狗粮</li>
                            <li>进口狗粮</li>
                            <li>进口狗粮</li>
                            <li>进口狗粮</li>
                        </ul>
                    </BScrollCom>
                </div>
            </HeaderContainer>
        )
    }
}
export default Header