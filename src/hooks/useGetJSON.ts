import {useState,useEffect} from 'react';
type HookStatusType = 'LOADING' | 'FAILED' | 'COMPLETE' | undefined;

export const useGetJSON = (url:string) => {
  const [data,setData] = useState<any>(Object.assign([]));
  const [status, setStatus] = useState<HookStatusType>(undefined);
  const [error, setError] = useState<Error | null | unknown>(null);

  const loadApi = async (flag:boolean) => {
    if (!flag) {
      setStatus('LOADING');

      try {
        const responseURL = url;

        const response = await fetch (
          responseURL,
          {
            method: 'GET',
          }
        );
        if (response.ok) {
          setData(await response.json());
          setStatus('COMPLETE');
          return true;
        } else {
          throw new Error('Request failed!');
        }
      } catch (error) {
        console.error('ERROR: in fetching useGetOption -> ' + error);
        setStatus('FAILED');
        setError(error);
      }
    }
  };


  useEffect(() =>{
    let isCleaned = false;
    const cleanup = () => {isCleaned = true;};
    loadApi(isCleaned);
    return cleanup;
  },[])
  return {data, status, error};
}