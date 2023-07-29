import styled from "styled-components";

export const MarginSystemBase = styled.div<{height:number}>`
  width: 100%;
  margin: 0;
  opacity: 0;
  visibility: hidden;
  height:${(props) => `${props.height}`}px;
`;