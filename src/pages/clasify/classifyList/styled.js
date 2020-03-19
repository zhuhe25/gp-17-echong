import styled from "styled-components"

export const ListContainer = styled.div`
    flex:1;
    display:flex;
    flex-wrap:wrap;
    align-content: flex-start;
    img{
        width:1.73rem;
        height:1.73rem;
    }
    &>div{
        text-align:center;
        width:1.73rem;
        padding:.2rem;
    }
`