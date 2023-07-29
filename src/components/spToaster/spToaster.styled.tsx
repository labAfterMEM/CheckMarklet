import { devices } from "~/service/styleConfig";
import styled from "styled-components";


export const Toaster = styled.div`
  ${devices.sp}{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 222;

    width: 100vw;
    height: 40px;
    border-radius: 24px 24px 0 0;
    background-color: #ddd;
    box-shadow: 3px 3px 3px -10px rgba(0,0,0,.3);
    transition: height .3s ease-out;
    &.-active{
      height: 80%;
    }
  }
`;
export const ToasterButton = styled.button`
  ${devices.sp}{
      position: absolute;
      top: 0px;
      right: 50%;
      height: 40px;
      width: 100%;
      font-size: 14px;
      font-weight: bold;
      line-height: 15px;
      padding: 4px 8px;
      transform: translateX(50%);
      border-radius: 24px;
  }
  ${devices.pc}{
    display: none;
    visibility: hidden;
  }
`;

export const ToasterContentWrap = styled.div`
  ${devices.sp}{
    padding: 24px;
  }
`;

