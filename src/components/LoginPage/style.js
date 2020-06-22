import styled from 'styled-components'

export const ContainerLogin = styled.div`
    /* height: 560px;
    width: 360px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center; */
`
export const InputLogin = styled.input`
    /* width: 328px;
    height: 46px;
    border-radius: 4px;
    border: solid 1px #b8b8b8;
    margin: 10px; */
`
export const InputButton = styled.button`
    width: 90px;
    height: 20px;
    border-radius: 2px;
    background-color: transparent;
    border: solid 1px transparent;
`;
export const RememberMarkOption = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin: 12px 0px;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const RememberMarkSelect = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;
export const RememberMark = styled.span`
    height: 16px;
    width: 16px;
    background-color: white;
    background-size: 1px;
    border: 1.5px solid #000;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    &:hover:after{
        content: ${props=> props.rememberLogin === true ? '""' :''};
        position: ${props=> props.rememberLogin === true && 'absolute'};
        display: ${props=> props.rememberLogin === true && 'block'};
        top: ${props=> props.rememberLogin === true && '4px'};
        left: ${props=> props.rememberLogin === true && '2.6px'};
        width: ${props=> props.rememberLogin === true && '10px'};
        height: ${props=> props.rememberLogin === true && '10px'};
        background: ${props=> props.rememberLogin === true && 'black'};
        border-radius: ${props=> props.rememberLogin === true &&'2px'};
    };
`;