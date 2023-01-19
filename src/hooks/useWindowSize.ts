import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', resizeListener);

    return () => window.removeEventListener('resize', resizeListener);
  });

  return windowWidth;
};

export default useWindowSize;
