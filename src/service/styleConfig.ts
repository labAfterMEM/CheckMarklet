export const colors = {
  main:'#D7003A',
  border:'rgba(34,36,38,.15)'
}

const screenOver = (px:number) => {
  return `@media (min-width: ${px}px)`;
}
const screenUnder = (px:number) => {
  return `@media (max-width: ${px}px)`;
}
const screenBetween = (px:number,px2:number) => {
  return `@media (min-width: ${px}px) and (max-width: ${px2}px)`;
}

export const devices = {
  spMini:screenUnder(360),
  sp:screenUnder(640),
  tablet:(screenBetween(640,960)),
  pc:screenOver(641),
  pcWrap:screenOver(961)
}
export const mixins = {
  screenOver,
  screenUnder,
  screenBetween
}