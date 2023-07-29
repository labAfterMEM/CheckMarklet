import { ReactNode , useEffect , createContext, useState } from "react";
import { useGetJSON } from "~/hooks/useGetJSON";

type itemContextValue = {
  namedJSON: {},
};
export const ItemContext = createContext<itemContextValue>({
  namedJSON: {},
});
export function ContextWrapper({children}:{children:ReactNode}) {
  const {data:namedJSON,status:namedStatus} = useGetJSON('**JSON name**');
  const [completed,setCompleted] = useState<boolean>(false);
  const contextDebug = () => {
    if(namedStatus === 'COMPLETE'
    && !completed
    ){
      setCompleted(true);
    }
  }
  useEffect(()=>contextDebug(),[namedStatus])

  return (
    <>
    <ItemContext.Provider value={{namedJSON}}>
    {children}
    </ItemContext.Provider>
    </>
  )
}