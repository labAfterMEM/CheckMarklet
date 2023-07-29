import { devices } from "~/service/styleConfig";
import styled from "styled-components";

export const HomeWrap = styled.div`
  max-width: 1280px;
  width: 90%;
  margin:auto;
`;
export const BigButtonStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin:auto;
  max-width: 300px;
  max-height: 300px;
  width: 95%;
  height: 95%;
  padding: 24px;
  background-color: #fff;
  border: 2px solid #db2828;
  border-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 15px;
  color: #555555;
  text-align: center;
  &:hover,&:focus{
    opacity: 0.8;
  }
  i {
    margin:0 auto 16px;
    font-size: 100px;
    ${devices.sp}{
      font-size: 10vw;
    }
  }
`;

export const BigButtonHeading = styled.p`
  font-size: 32px;
  margin-bottom: 0.25em;
`;

export const BigButtonText = styled.p`
  font-size: 16px;
`;