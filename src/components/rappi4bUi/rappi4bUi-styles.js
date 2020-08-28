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
  max-width: 100%;
  height: 100%;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  border: none;
  background: #fff;
  &:focus{
    outline: none;
  };
  &::placeholder{
    color: #000;
    opacity: 0.8
  };
`;
export const ButtonWrapper = styled.button`
  display: sticky;
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
  font-size: ${props=> props.minor ? '14px':'15px'};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  align-self: ${props => props.alignSelfStart && 'flex-start'};
  letter-spacing: -0.6px;
  margin: ${props=> props.minor ? '6px 0px':'12px 4px'};
  color: ${props =>
    props.salmon && "#e86e5a" ||
    props.detail && "#b8b8b8" ||
    props.white && "#ffffff"||
    "var(--black)"
  };
  display: ${props => props.sticky && 'sticky'};
  &:hover {
    color: ${props => props.hover && '#e86e5a'};
  }
`;
export const HiText = styled.p`
  font-size: ${props=> props.largeIcon ? '32px':'16px'};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: ${props =>
    props.salmon && "#e86e5a"||
    props.white && "#ffffff"||
    "var(--black)"
  };
  text-transform: uppercase;
`;
export const NavBarWrapper = styled.nav`
  position: fixed;
  background-color: #ffffff;
  bottom:0px;
  left:0px;
  right:0px;
  //max-width: 360px;
  height: 49px;
  //display: grid;
  //grid-template-columns: 1fr 1fr 1fr;
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  border-top: 0.5px solid #b8b8b8;
`;
export const NavBarButton = styled.button`
  width: 120px;
  height: 49px;
  font-size: large;
  background: none;
  border: none;
  color:${props=> props.pathName &&'#e86e5a'};
  font-size:${props=> props.pathName &&'x-large'};
  &:focus, &:active, &:hover{
    color: #e86e5a;
    font-size: x-large;
    outline: ${props=> props.pathName &&'none'};
  };
`;
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: ${props=> props.row ? 'row':'column'};
  align-items: center;
  height: auto;
`;
export const RestCardWrapper = styled.article`
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  width: 328px;
  min-height: 188px;
  margin: 8px 16px;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const RestImg = styled.img`
  min-width:328px;
  height: 120px;
`;
export const RestDetails = styled.div`
  width: 296px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 16px;
`;
export const ProductCardWrapper = styled.article`
  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display: flex;
  flex-direction: row;
  margin-top:8px;
`;
export const ProductCardImg = styled.img`
  min-width: 97px;
  height: 112px;
  border-radius: 8px 0 0 8px;
`;
export const ProductCardDetails = styled.div`
  width: 231px;
  max-height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ProductCardActionBar = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
`;
export const ProductCardAddButton = styled.button`
  width: 90px;
  height: 31px;
  background: none;
  border: 1px solid ${props=> props.quantity > 0 ? '#e86e5a' : 'black'};
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  font-size: 12px;
  text-transform: lowercase;
  color: ${props=> props.quantity > 0 ? '#e86e5a' : 'black'};
  &:active{
    background: #eeeeee;
    font-size: xx-small;
  };
  &:focus{
    outline: none;
  }
`;
export const ProductCardCounter = styled.div`
  text-align: center;
  width: 33px;
  height: 33px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  color: ${props=> props.quantity === 0 ? '#ffffff':'#e86e5a'};
  border: solid 1px ${props=> props.quantity === 0 ? 'ffffff':'#e86e5a'};
`;
export const PopupSelectShadow = styled.div`
  position: fixed;
  top: 0%;
  right: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const PopupSelectWrapper = styled.article`
  width: 328px;
  height: 216px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const Select = styled.select`
  border: 1px solid black;
  border-radius: 4px;
  width: 296px;
  height: 56px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  background: none;
  border: solid 1px #b8b8b8;
  &:hover{
    box-shadow: 0 0 0 0.1rem rgba(0,123,255,.5)
  };
  &:focus{
    outline: none;
    box-shadow: 0 0 0 0.1rem rgba(0,123,255,.5)
  };
`;
export const Option = styled.option`

`;
export const PopupSelectButton = styled.button`
  align-self: flex-end;
  width: 216px;
  height: 19px;
  margin-right: 16px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: right;
  color: #4a90e2;
  background: none;
  border: none;
  padding: 0px;
  text-transform: uppercase;
  &:active{
    font-size: xx-small;
  };
  &:focus{
    outline: none;
  };
`;
export const OrderListenerCard = styled.article`
  position: fixed;
  left: 0px;
  right: 0px;
  z-index: 1;
  bottom:50px;
  height: 118px;
  background-color: #e86e5a;
  display: ${props=> props.hidde === false ?'flex':'none'};
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #b8b8b8;
  padding-bottom: 10px;
`;
export const ClockView = styled.div`
  width: 80px;
  max-height: 90%;
  color: white;
  display: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ActiveOrderDetails = styled.div`
  height: 100%;
  width:280px;
  display: inherit;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const RadioInputWrapper = styled.article`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const RadioHr = styled.hr`
  width: 100%;
`;
export const RadioOption = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const RadioSelect = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;
export const RadioMark = styled.span`
  height: 24px;
  width: 24px;
  background-color: white;
  background-size: 1px;
  border: 1.5px solid #000;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  &:hover:after{
  content: "";
  position: absolute;
  display: block;
  top: 6px;
	left: 6px;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: black; 
  };
`;
export const OrderHIstoryCardWrapper = styled.article`
  width: 328px;
  height: 102px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 8px 16px;
  padding: 14px;
`;
export const InfosBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const EditIconButton=styled.button`
  font-size: 24px;
  background: none;
  border: none;
  &:focus{
    outline: none;
  };
  &:active{
    font-size: small;
    color: #e86e5a;
  };
`;
export const ProfileBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const AddresBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #eeeeee;
`;
export const LoadingPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background: #e86e5a;
`;
export const LoadingPageLogo = styled.img`

`;