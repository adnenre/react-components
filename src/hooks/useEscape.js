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
      document.removeEventListener('keydown', handleEscape);
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [callback, ref.current]);
};

export default useEscape;
