import styled from 'styled-components'
export const WpName=styled.div`
display:flex;
align-items:center;
`;
export const WpCard=styled.div`
display:flex;
flex-direction:column;
padding:2rem;
border-radius:15px;
background-color:${props=>props.Bg||'auto'};
@media screen and (min-width:1050px){
    grid-area:${props=>props.grid};
}
`;

