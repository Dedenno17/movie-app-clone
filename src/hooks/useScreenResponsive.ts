import { useEffect, useCallback, useRef } from 'react';
import { useAppDispatch } from '../store/hooks';
import { appScreenWidthActions } from '../slices/appScreenWidth';
import { appScrollYActions } from '../slices/appScrollY';

export const useScreenResponsive = (event: string) => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const appResponsiveHandler = useCallback(
    function (this: WindowProxy) {
      if (event === 'scroll') {
        dispatch(appScrollYActions.setScrollY(this.scrollY));
        return;
      }

      dispatch(
        appScreenWidthActions.setScreenWidth(layoutRef.current?.offsetWidth)
      );
    },
    [dispatch, event]
  );

  useEffect(() => {
    window.addEventListener(event, appResponsiveHandler);

    return () => {
      window.removeEventListener(event, appResponsiveHandler, true);
    };
  }, [appResponsiveHandler, event]);

  useEffect(() => {
    if (event === 'scroll') {
      dispatch(appScrollYActions.setScrollY(window.scrollY));
      return;
    }

    dispatch(
      appScreenWidthActions.setScreenWidth(layoutRef.current?.offsetWidth)
    );
  }, [dispatch, event]);

  return {
    elementRef: event === 'resize' ? layoutRef : undefined,
  };
};
