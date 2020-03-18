import styled from "styled-components";

export const HeaderContainer = styled.div`
    padding-top:.5rem;
    height:2.08rem;
    background:${props=>props.bgColor?props.bgColor:`rgba(255,255,255,1)`};
    .header_div-top{
        display:flex;
        justify-content:center;
        align-items:center;
        position:relative;
        &>div:nth-child(2){
            position:absolute;
            right:.2rem;
            i{
                font-size:.5rem;
            }
        }
        &>div:nth-child(1){
            display:flex;
            justify-content:center;
            align-items:center;
            margin-right:.3rem;
            .search_div{
                width:6.1rem;
                height:.5rem;
                background:#f7f7f7;
                display:flex;
                align-items:center;
                border-radius:.3rem;
            }
            i{
                padding:0 .1rem;
            }
        }
    }
    .header_div-bottom{
        width:100%;
        height:.88rem;
        overflow:hidden;
        ul{
            width:max-content;
            height:100%;
            display:flex;
            flex-wrap:nowrap;
            align-items:center;
            
        }
        li{
            padding:0 .2rem;
            flex-shrink:0;
        }
    }
`