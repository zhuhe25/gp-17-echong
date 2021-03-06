import styled from "styled-components";

export const TabBarContainer = styled.div`
    width:100%;
    height:1rem;
    position:fixed;
    left:0;
    bottom:0;
    background:#fff;
    ul{
        width:100%;
        height:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    li,a{
        width:100%;
        height:100%;
    }
    a{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        color:#333;
        i{
            font-size:.36rem;
        }
        span{
            font-size:.28rem;
        }
    }
    .active{
        color:#c33;
    }
`