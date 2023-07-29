// import { HugeStyle } from "./template.styled"

import { ReactNode, useState } from "react";
import { Toaster, ToasterButton, ToasterContentWrap } from "./spToaster.styled";

export function SpToaster({children}:{children:ReactNode}) {
  const [open,setOpen] = useState<boolean>(false);
  const buttonText = open ? '結果を閉じる' : '結果を確認する'
  return (
    <>
    <Toaster className={open ? '-active' : ''}>
      <ToasterButton type="button" onClick={()=>{setOpen(!open)}} aria-label={buttonText}>{buttonText}</ToasterButton>
      <ToasterContentWrap>
      {children}
      </ToasterContentWrap>
    </Toaster>
    </>
  )
}