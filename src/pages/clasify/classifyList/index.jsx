import React, { Component } from 'react'
import { ListContainer } from "./styled"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../connect"
@connect(mapStateToProps, mapDispatchToProps)
class ClassifyList extends Component {
    render() {
        let { list } = this.props;
        return (
            <ListContainer>
                {
                    list.map((item) => (
                        <div key={item.id_param}>
                            <img src={item.photo} />
                            <div>{item.name}</div>
                        </div>
                    ))
                }



            </ListContainer>
        )
    }
}
export default ClassifyList;