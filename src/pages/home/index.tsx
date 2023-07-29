import { Link } from "react-router-dom";
import { HomeWrap , BigButtonStyle, BigButtonHeading, BigButtonText } from "./home.styled";

export function Home() {

  return (
    <HomeWrap className="home">
            <Link  to={'/hoge'}>
              <BigButtonStyle>
                <BigButtonHeading>name</BigButtonHeading>
                <BigButtonText>texttext</BigButtonText>
              </BigButtonStyle>
            </Link>
    </HomeWrap>
  )
}