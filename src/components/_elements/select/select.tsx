import { useState , useEffect } from "react";
import { Button } from "../button/button";
import { PopupContents, PopupHeading, PopupInit, PopupItem, PopupWrapper, SelectWrapper } from "./select.styled";
import './popup.logic.scss'

type select = {
  name:string,
  id:string,
  options:any[],
  onChangeEv:Function,
  defaultValue:string | number | any,
  hoverContent?:{
    heading:string,
    list:{
      text:string,
      point:number
    }[]
  }
}
export function LocalSelect(props:select) {
  const checkTwoValue = ():boolean => {
    // if(props.id.match(/competencies/g) || props.id.match(/performance/g)){
    if(props.id.match(/competencies/g) || props.id.match(/skill/g))return true;
    return false;
  };
  const [value,setValue] = useState<string | number>(checkTwoValue() ? props.defaultValue.before : props.defaultValue);
  // console.log(props.defaultValue,props.id,value,value2,checkTwoValue());

  useEffect(()=>{
    setValue(checkTwoValue() ? props.defaultValue.before : props.defaultValue);
  },[props.defaultValue]);


  return (
    <>
    <SelectWrapper>
      <label htmlFor={props.id}>{props.name}</label>
    {props.hoverContent && (()=>{
      return (
        <>
        <PopupInit className="popup-handler">
          <Button kind="popupCircle" text="?" onEvent={()=>{}} />
          <PopupWrapper className="popup-content">
            <PopupHeading>{props.hoverContent.heading}</PopupHeading>
            <PopupContents>
              {props.hoverContent.list.map((obj , i)=>{
                return <PopupItem key={i}><span className="mark">{obj.point} </span><span className="popup-text">{obj.text}</span></PopupItem>
              })}
            </PopupContents>
          </PopupWrapper>
        </PopupInit>
        </>
      )
    })()}
    </SelectWrapper>
    <div>
    {props.options.map((v,i)=>{
      return <option key={i} defaultChecked={i === 0 ? true : false} value={v.value}>{v.text}</option>
    })}
    </div>
    </>
  )
}