import styled from "styled-components";
export const GoodsListContainer = styled.div`
    width:100%;
    padding:.1rem .2rem;
    display:flex;
    justify-content:space-between;
    background:#fcfcfc;
    flex-wrap:wrap;
    &>div{
        width:3.45rem;
        background:#fff;
        font-size:.24rem;
        padding:.2rem;
        margin-bottom:.2rem;
    }
    .goods_des{
        width:100%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .goods_img,.goods_img>img{
        width:3.25rem;
        height:3.25rem;
    }
    .goods_tags{
        border:0.01rem solid #ccc;
        display:flex;
        font-size:.22rem;
        margin-top:.1rem;
    }
    .goods_price{
        color:#ff5757;
        font-weight:900;
        font-size:.28rem;
        margin-top:.1rem;
    }
`