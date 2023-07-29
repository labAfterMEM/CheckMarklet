import {useState,useEffect} from 'react';

export const useFormDataOnLocalStorage = (uniqueKey?:string) => {
  // config
  const PARENT_KEY = 'test';
  const UNIQUE_KEY = uniqueKey ?? 'unique';
  const resultKey  = `${PARENT_KEY}_${UNIQUE_KEY}`;
  const getLocalStorage = ():Object => JSON.parse(localStorage.getItem(resultKey) ?? "{}");
  const settingLocalStorage = (json:any) =>{
    // console.log('update local storage',json);
    if(json.beforeResult) json.beforeResult = null;
    localStorage.setItem(resultKey,JSON.stringify(json));
  }

  // state
  const [data,setData] = useState<Object>({...{},...Object.assign(getLocalStorage())});
  useEffect(()=>{// update data , update storage data
    settingLocalStorage(data);
  },[data,uniqueKey]);
  return {data,setData};
}