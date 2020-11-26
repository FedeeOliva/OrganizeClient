import {useState, useRef, useEffect} from 'react';

const useInfiniteScroll = (options = {} , visor) => {

 const [isNearScreen, setNearScreen] = useState(false);
  	//const [entries, setEntries] = useState([]); 	  
 useEffect(()=>{
  if(!visor.current || !options.root) return;

  const onChange = (entries, observer) => {
    const el = entries[0]
    if (el.isIntersecting) setNearScreen(true)
      else setNearScreen(false);
  }

  const observer = new IntersectionObserver(onChange, options);

  observer.observe(visor.current); 

},[options.root, visor]); 

 return [isNearScreen];
}

export default useInfiniteScroll;