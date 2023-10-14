import { useEffect, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
const MemoizedPortal = ({ id, children }) => {
  const el = useMemo(
    () => document.getElementById(id) || document.createElement('div'),
    [id]
  );

  const [dynamic] = useState(!el.parentElement);
  useEffect(() => {
    if (dynamic) {
      el.id = id;
      document.body.appendChild(el);
    }
    return () => {
      if (dynamic && el.parentElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        el.parentElement.removeChild(el);
      }
    };
  }, [id, el, dynamic]);
  return createPortal(children, el);
};
export default MemoizedPortal;
