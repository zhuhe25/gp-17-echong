import React, { Component } from 'react'
import { HomeContainer, BannerMenu, HomeListMenu } from "./styled"
import Swiper from "@components/swiper"
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from "../connect"
import BScrollCom from "@common/scroll"
import GoodsList from "../goodsList"
@connect(mapStateToProps, mapDispatchToProps)
class Container extends Component {
    constructor() {
        super();
        this.state = {
            activeMenu: 0,
            page: 1
        }
    }
    render() {
        let { banner, bannermenus, goodsList } = this.props;
        let menus = this.props.goodsList.header ? this.props.goodsList.header.menus : []
        let { activeMenu, page } = this.state;
        return (

            <HomeContainer>
                <BScrollCom ref="scroll">
                    <div>
                        <Swiper banners={banner} />
                        <BannerMenu>
                            {
                                bannermenus.map((item, index) => {
                                    if (index < 5) {
                                        return (
                                            <div key={item.name}>
                                                <img src={item.img_url} />
                                            </div>
                                        )
                                    }
                                })
                            }

                        </BannerMenu>
                        <HomeListMenu>
                            <BScrollCom>
                                <ul>
                                    <li className="like">猜你喜欢</li>
                                    {

                                        menus.map((item, index) => (
                                            <li
                                                onClick={this.handleHeaderMenuClick.bind(this, item.filters.tag, page, index)}
                                                key={index}
                                                className={index == activeMenu ? 'active' : ''}>{item.name}</li>
                                        ))
                                    }
                                </ul>
                            </BScrollCom>
                        </HomeListMenu>
                        <GoodsList />
                    </div>
                </BScrollCom>
            </HomeContainer>
        )
    }
    //
    handleHeaderMenuClick(tag, page, index) {
        this.props.handleGetListMore(tag, page);
        this.setState({
            activeMenu: index
        })
    }
    componentDidMount() {
        this.refs.scroll.handleScroll(this.props.toggleOpacity)
    }
}
export default Container;