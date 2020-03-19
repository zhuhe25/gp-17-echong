import styled from "styled-components";

export const HomeContainer = styled.div`
    position:relative;
    background:#fcfcfc;
    height:100%;
`

export const BannerMenu = styled.div`
    display:flex;
    position:absolute;
    top:5rem;
    z-index:10;
    img{
        width:1.5rem;
        height:2.3rem;
    }
`

export const HomeListMenu = styled.div`
 margin-top:1.6rem;
 height:.9rem;
 overflow:hidden;
    ul{
        display:flex;
        flex-wrap:nowrap;
        align-items:center;
        width:max-content;
    }
    .like{
        font-size:.4rem;
        font-weight:900;
        padding:0 .1rem;
    }
    li{
        padding:0 .4rem;
        flex-shrink:0;
        font-size:.26rem;
    }
    .active{
        color:#04BE02;
    }
`