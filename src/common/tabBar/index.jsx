import React, { Component } from 'react'
import { TabBarContainer } from "./styled"
import { NavLink } from "react-router-dom";
class TabBar extends Component {
    constructor() {
        super();
        this.state = {
            tabs: [
                {
                    text: "精选",
                    icon: "\ue60d",
                    path: "/home"
                },
                {
                    text: "分类",
                    icon: "\ue63f",
                    path: "/classify"
                },
                {
                    text: "小萌书",
                    icon: "\ue644",
                    path: "/books"
                },
                {
                    text: "购物车",
                    icon: "\ue65c",
                    path: "/cart"
                }, {
                    text: "我的",
                    icon: "\ue639",
                    path: "/mine"
                }
            ]
        }
    }
    render() {
        return (
            <TabBarContainer>
                <ul>
                    {
                        this.state.tabs.map((item) => (
                            <li key={item.path}>
                                <NavLink to={item.path}>
                                    <i className="iconfont">{item.icon}</i>
                                    <span>{item.text}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </TabBarContainer>
        )
    }
}

export default TabBar