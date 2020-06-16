import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

type StateFetchDataType<D> = {
  data: D | null;
  fetching: boolean;
};

type ReturnFetchSubmitType = { fetch: (data: any) => void };

export const useFetchSubmit = <D>(
  action: any,
  methodAuth?:string
): ReturnFetchSubmitType  => {

  const [doFetch, setDoFetch] = useState<StateFetchDataType<D>>({ 
    data: null, 
    fetching: false 
  });
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (doFetch.fetching) {
      if (doFetch.data !==null) {
        const actionsArguments: any[] = [doFetch.data];
        
        if (methodAuth) actionsArguments.push(methodAuth);

        dispatch(action(...actionsArguments));
      } else {
        dispatch(action());
      }
      
      setDoFetch((prevState) => ({
        ...prevState,
        fetching: false
      }));
    }
  }, [doFetch, dispatch, methodAuth, action]);

  function fetch(data?: D): void {
    setDoFetch((prevState) => ({
      ...prevState,
      data: data ? data : null,
      fetching: true
    }));
  }

  return {
    fetch
  };
};