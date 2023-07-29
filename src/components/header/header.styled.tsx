import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0px;
  box-shadow:  0px 3px 3px rgba(0,0,0,.15);
  text-align: center;
`
export const HeaderMainText = styled.h1`
  font-weight: bold;
  font-size: 44px;
  color: #222;
  font-family: 'BIZ UDPGothic', sans-serif;
  &:hover,&:focus{
    opacity: 0.8;
  }
`;
export const HeaderMainSub = styled.span`
  font-size: 16px;
  font-family: 'DotGothic16', sans-serif;
`;
