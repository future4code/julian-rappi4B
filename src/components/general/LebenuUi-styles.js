import styled from 'styled-components';

//styled lui components

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  margin: 8px 16px;
  &:hover{
    box-shadow: 0 0 0 0.1rem rgba(0,123,255,.5)
  };
`;
export const InputLabel = styled.label`
  width: 78px;
  height: 18px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`;
export const InputArea = styled.input`
  width: 264px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  border: none;
  background: none;
  
  &:focus{
    outline: none;
  };
  &::placeholder{
    color: #d0d0d0
    opacity: 0.2
  };
`;
export const ButtonWrapper = styled.button`
  width: 328px;
  height: 42px;
  border: none;
  border-radius: 2px;
  background-color: #e86e5a;
  text-transform: uppercase;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
  margin: 0px 16px;
  padding: 0;
  &:active{
    font-size: small;
    box-shadow: 0 0 0 0.1rem rgba(0,123,255,.5)
  };
  &:focus{
    outline: none;
  }
`;
export const Text = styled.span`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
  margin: 12px 0px;
  
`;
export const HiText = styled.p`
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
  text-transform: uppercase;
`;
export const NavBarWrapper = styled.nav`
  //border: 1px solid black;
  position: fixed;
  top: 93.5%;
  max-width: 360px;
  max-height: 49px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const NavBarButton = styled.button`
  width: 120px;
  height: 49px;
  font-size: large;
  background: none;
  border: none;
  &:focus, &:active, &:hover{
    color: #e86e5a;
    font-size: x-large;
    outline: none;
  };
`;
