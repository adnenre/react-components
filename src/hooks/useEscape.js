import { useEffect } from 'react';

const useEscape = (ref, callback) => {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        callback();
      }
    }

    if (ref.current) {
      // Add the event listener to the specified ref's current property
      document.addEventListener('keydown', handleEscape);
    }

    // Remove the event listener when the component using this hook unmounts
    return () => {
      if (ref.current) {
        document.removeEventListener('keydown', handleEscape);
      }
    };
  }, [callback, ref]);
};

export default useEscape;
