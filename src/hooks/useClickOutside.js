import { useEffect } from 'react';

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClick = (e) => {
      const element = ref.current;
      if (!element || element.contains(e.target)) {
        return;
      }
      callback(e);
    };
    // Attach the event listener on component mount
    document.addEventListener(`mousedown`, handleClick);
    document.addEventListener(`touchstart`, handleClick);

    // Clean up the event listener on component unmount
    return () => {
      document.addEventListener(`mousedown`, handleClick);
      document.addEventListener(`touchstart`, handleClick);
    };
  }, [ref, callback]);
};

export default useClickOutside;
