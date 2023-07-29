import styled from "styled-components";
export const ButtonWrapper = styled.div`
  text-align: center;
`;
export const PopupCircle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: black;
  color: #fff;
  font-size: 12px;
  line-height: 1;
  border-radius: 50%;
  &:hover,&:focus{
    opacity: 0.8;
  }
`;