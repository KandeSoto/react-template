import { createContext } from 'react';
import { LoadingContextType } from './type';

export const LoadingContext = createContext<LoadingContextType>({
  loadingCount: 0,
  showLoading: () => {},
  hideLoading: () => {},
});
