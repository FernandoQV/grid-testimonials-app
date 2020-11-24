import styled from 'styled-components'
import {palette} from '../../helpers/getPalette'


export const Title=styled.h1`
font-size:1.5rem;
font-weight:600;
color:${props=>props.dark?palette.darkblackish:palette.gray};
`;
export const SubTitle=styled.span`
font-size:1rem;
font-weight:500;
color:${props=>props.dark?palette.darkblackish:palette.gray};
opacity: 50%;
`;

export const Paragraph=styled.p`
margin:1rem 0;
font-size:1rem;
font-weight:600;
color:${props=>props.dark?palette.grayishblue:palette.darkblackish};
`;
export const Paragraph2=styled(Paragraph)`
font-size:.8rem;
font-weight:500;
opacity: 70%;
`;

export const Image=styled.img`
max-width:100%;
border-radius:50%;
margin-right:.5rem;
`;

