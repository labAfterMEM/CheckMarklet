import { MouseEventHandler } from "react";
import { ButtonWrapper , PopupCircle } from "./button.styled"

type button = {
  text:string,
  kind:'primary' | 'secondary' | 'popupCircle' | 'default',
  onEvent:MouseEventHandler<HTMLButtonElement>,
}
export function Button(props:button) {
  return (
    <>
      {
        (()=>{
          switch(props.kind){
            case "primary":
              return (
                <ButtonWrapper>
                </ButtonWrapper>
              )
            case "secondary":
              return (
                <ButtonWrapper>
                {/* <SemanticButton type="button" basic onClick={props.onEvent}>{props.text}{props.iconName && <Icon name={props.iconName} />}</SemanticButton> */}
                </ButtonWrapper>
              )
            case "popupCircle":
              return (
                <PopupCircle type="button" onClick={props.onEvent}>?</PopupCircle>
              )
            case "default":
              return (
                <ButtonWrapper>
                </ButtonWrapper>
              )
          }
        })()
      }
    </>
  )
}