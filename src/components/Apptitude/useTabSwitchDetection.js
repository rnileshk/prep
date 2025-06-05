import { useEffect } from 'react';

const useTabSwitchDetection = (onAlert) => {
  useEffect(() => {
    const handleBlur = () => onAlert('🚫 Tab switched or browser blurred');
    window.addEventListener('blur', handleBlur);
    return () => window.removeEventListener('blur', handleBlur);
  }, [onAlert]);
};

export default useTabSwitchDetection;
