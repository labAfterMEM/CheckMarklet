import { MarginSystemBase } from "./marginSystem.styled";


type marginSystemType = {
  size : 'large' | 'middle' | 'small' | number;
}
export function MarginSystem(props:marginSystemType) {
  const height:number = 
    props.size === 'large' ? 80 
    : props.size === 'middle' ? 40 
    : props.size === 'small' ? 20 
    : props.size;
  
  return (
    <MarginSystemBase height={height} />
  )
}