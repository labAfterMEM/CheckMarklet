import { FooterStyle } from "./footer.styled";
import { MarginSystem } from "../marginSystem/marginSystem";

export function GlobalFooter() {
  const infoFlag = window.location.pathname.match(/\/information/);
  return (
    <FooterStyle>
      <>
      {!infoFlag && (()=>{
        return (
          <>
            <MarginSystem size={10} />
          </>
        )
      })()}
      <p>Copyright &copy; {new Date().getFullYear()} , </p>
      </>
    </FooterStyle>
  )
}