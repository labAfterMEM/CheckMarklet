import { colors } from "~/service/styleConfig";
import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  padding: 20px 0px;
  border-top:1px solid ${colors.border};
  p{
    text-align: center;
    font-family: 'DotGothic16', sans-serif;
  }
`