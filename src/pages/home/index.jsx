import React, { Component,Fragment} from 'react'
import Header from "./header"
import Container from "./container"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./connect"
@connect(mapStateToProps,mapDispatchToProps)
class Home extends Component {
    constructor(){
        super();
        this.state = {
            statusOpacity:"rgba(255,255,255,0)"
        }
    }
    render() {
        let {statusOpacity} = this.state;
        return (
            <Fragment>
                <Header bgColor={statusOpacity}/>
                <Container toggleOpacity={this.handleOpacity.bind(this)}/>
            </Fragment>
        )
    }
    handleOpacity(flag){
        if(flag){
            this.setState({
                statusOpacity:"rgba(255,255,255,1)"
            })
        }else{
            this.setState({
                statusOpacity:"rgba(255,255,255,0)"
            })
        }
    }
    componentDidMount(){
        this.props.handleGetHomeData();
    }
}
export default Home;