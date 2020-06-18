import styled from 'styled-components';

export const HomePageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`

export const ViewCardsContainer = styled.div`
     width: 80%;
     max-height: 60%;
     overflow: auto;
     border: 1px solid #b8b8b8;
`

export const CategoriesList = styled.div`
     display: flex;
     flex-direction: row;
     //overflow-x: scroll;
`

export const ScrollItem = styled.p`
     flex-wrap: wrap;
     padding-right: 5vw;
     font-size: 16px;
     letter-spacing: -0.39px;
     
     :hover{
         color: #e86e5a;
     }
`

export const InputContainer = styled.div`
     padding: 5vw;
`

export const InputSearch = styled.input`
     padding: 3vw;
     border: solid 1px #b8b8b8
`