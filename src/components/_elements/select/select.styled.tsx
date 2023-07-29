import { devices } from "~/service/styleConfig"
import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: .2em;

  label{
    font-weight:bold;
  }
  button{
    margin-left: 10px;
  }
`;

export const PopupWrapper = styled.div`
  display: none;
  position: absolute;
  bottom: 30px;
  z-index: 1111;
  width: 300px;
  padding: 12px 20px;
  background-color: #fefefe;
  /* border: rgba(0,0,0,.3) 1px solid; */
  border-radius: 8px;
  box-shadow: 0px 3px 20px rgba(0,0,0,.3);
  &.active{
    display: block;
  }
  &::before{
    content: "";
    position: absolute;
    bottom: -7px;
    left: 12.5px;

    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12.1px 7px 0 7px;
    border-color: #fefefe transparent transparent transparent;
  }
  ${devices.pc}{
    width: 500px;
  }

  ${devices.pc}{
    /* &::before{
      display: none;
    } */
    /* left: -95px; */
    /* right: 75%;
    transform: translateX(50%); */
  }
`

export const PopupInit = styled.div`
  position: relative;
`
export const PopupHeading = styled.p`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.4;
`;

export const PopupContents = styled.ul`
  border-top: rgba(0,0,0,.3) 1px solid;
  margin-top: 10px;
  padding-top: 10px;
`;
export const PopupItem = styled.li`
  display: flex;
  font-size: 12px;
  line-height: 1.2;

  span.mark{
    position: relative;
    top: -0.1em;
    margin-right: 10px;
    font-weight: bold;
  }
  .popup-text{
    flex: 1;
  }
  &:not(:last-of-type){
    margin-bottom: 0.5em;
  }
`
