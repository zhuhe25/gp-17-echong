import React, { Component,Fragment} from 'react'
import TabBar from "@common/tabBar"
import {LayoutContainer} from "./styled"
export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                <LayoutContainer>
                    {this.props.children}
                </LayoutContainer>
                <TabBar/>
            </Fragment>
        )
    }
}
