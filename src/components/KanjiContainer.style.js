import styled from "styled-components";

const KanjiContainer = styled.section`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    grid-gap: 2rem;
    justify-content: center;
`

export default KanjiContainer;