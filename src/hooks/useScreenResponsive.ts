import { useEffect, useCallback, useRef } from 'react';
import { useAppDispatch } from '../store/hooks';
import { appScreenWidthActions } from '../slices/appScreenWidth';

export const useScreenResponsive = () => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const screenWidthHandler = useCallback(() => {
    dispatch(
      appScreenWidthActions.setScreenWidth(layoutRef.current?.offsetWidth)
    );
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('resize', screenWidthHandler);

    return () => {
      window.removeEventListener('resize', screenWidthHandler, true);
    };
  }, [screenWidthHandler]);

  useEffect(() => {
    dispatch(
      appScreenWidthActions.setScreenWidth(layoutRef.current?.offsetWidth)
    );
  }, [dispatch]);
  return {
    elementRef: layoutRef,
  };
};
