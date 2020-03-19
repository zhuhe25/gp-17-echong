import React, { Component } from 'react'
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./connect"
import {ClassifyContainer} from "./styled"
import ClassifyList from "./classifyList"
@connect(mapStateToProps,mapDispatchToProps)
class Classify extends Component {
    constructor(){
        super();
        this.state = {
            activeIndex:88888
        }
    }
    render() {
        let {categorys} = this.props;
        let {activeIndex} = this.state;
        return (
            <ClassifyContainer>
                <div className="classify_header">
                    <div className="classify_header-menu">
                        <div>分类</div>
                        <div>品牌</div>
                    </div>
                    <div className="search">
                        <i className="iconfont">&#xe60b;</i>
                    </div>
                </div>
                <div className="classify_container">
                    <div className="classify_container-menu">
                        {
                            categorys.map((item)=>(
                                <div key={item.cateid}
                                className={activeIndex===item.cateid?'active':''}
                                onClick={this.handleToggle.bind(this,item.cateid)}
                                >{item.name}</div>
                            ))
                        }
                        
                    </div>
                    <ClassifyList/>
                </div>
               
            </ClassifyContainer>
        )
    }
    handleToggle(id){
       this.setState({
            activeIndex:id
       })
       this.props.handleClassifyList(id)
    }
    componentDidMount(){
        this.props.handleClassifyMenu();
        this.props.handleClassifyList(this.state.activeIndex)
    }
}
export default Classify