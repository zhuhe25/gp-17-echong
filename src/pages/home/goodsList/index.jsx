import React, { Component } from 'react'
import { GoodsListContainer } from "./styled"
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from "../connect"
@connect(mapStateToProps, mapDispatchToProps)
class GoodsList extends Component {
    render() {
        let list = this.props.goodsList.list || [];
        console.log(list)
        return (
            <GoodsListContainer>
                {
                    list.map((item) => (
                        <div key={item.gid}>
                            <div className="goods_img">
                                <img src={item.img.img_url} alt="" />
                            </div>
                            <div className="goods_des">{item.title}</div>
                            <div className="goods_tags">
                                {
                                    item.goods_properties.map((tag,index)=>(
                                        <div key={index}>{tag}</div>
                                    ))
                                }
                            </div>
                            <div className="goods_price">{item.normal_price.price}</div>
                        </div>
                    ))
                }

            </GoodsListContainer>
        )
    }
}
export default GoodsList;