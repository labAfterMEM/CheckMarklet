import { HeaderMainSub, HeaderMainText, HeaderStyle } from "./header.styled"
export function GlobalHeader() {

  return (
    <HeaderStyle>
      <div>
        <a href={'/check-marklet'}>
          <HeaderMainText>top<HeaderMainSub>(ver β)</HeaderMainSub></HeaderMainText>
        </a>
        <p>
          <HeaderMainSub>Powered by name</HeaderMainSub>
        </p>
      </div>
    </HeaderStyle>
  )
}