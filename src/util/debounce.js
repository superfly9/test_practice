export const debounce = (callback, time = 800)=>{
    let timer = null;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(()=>callback(...args),time)
    }
};
