import styled from "styled-components";

export const ClassifyContainer = styled.div`
    .classify_header{
        width:100%;
        height:.8rem;
        background:#fff;
        display:flex;
        justify-content:center;
        align-items:center;
        position:relative;
        border-bottom:.01rem solid #ccc;
        .classify_header-menu{
            display:flex;
            div{
                padding:0 .3rem;
                font-size:.28rem;
            }
        }
        .search{
            position:absolute;
            right:.4rem;
            i{
                font-size:.4rem;
            }
        }
    }
    .classify_container{
        display:flex;
        .classify_container-menu{
            width:1.5rem;
            flex-shrink:0;
            background:#f3f4f5;
            div{
                width:1.4rem;
                height:1rem;
                background:#fff;
                border-bottom:0.01rem solid #ccc;
                text-align:center;
                line-height:1rem;
                font-size:.24rem;
            }
            .active{
                background: #f3f4f5;
                color: #41C856;
                
            }
        }
    }
`