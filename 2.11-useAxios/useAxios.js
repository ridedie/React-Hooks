import defaultAxios from "axios";
import {useState, useEffect } from "react";

//axios는 디폴트 URL을 설정하거나  자동으로 헤도를 설정
//axiox는 instance를 만드는걸 허용, conriguration을 할 수 있다. 헤더 사용
const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  if(!opts.url) {
    return;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  }
  useEffect(() => {
    axiosInstance(opts).then(data => {
      setState({
        ...state,
        loading: false,
        data
      });
    }).catch(error => {
      setState({...state, loading:false, error});
    });
  }, [trigger]); //trigger가 바뀌면 useEffect가 다시 실행된다. refetch를 갖게된다.
  return {...state, refetch};
};

export default useAxios;