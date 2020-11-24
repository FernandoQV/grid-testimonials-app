import styled from 'styled-components'

export const WpGrid=styled.div`
display:grid;
grid-template-columns:1fr;
gap:2rem; 
padding:1rem;
background-color:#14f3ce;
 
@media screen and (min-width:1050px){
    height:100vh; 
    padding:2rem;                  
    grid-template-areas:'grid1 grid1 grid2 grid5'
                        'grid3 grid4 grid4 grid5';
    grid-template-columns:300px 1fr 1fr 1fr;
}
`;