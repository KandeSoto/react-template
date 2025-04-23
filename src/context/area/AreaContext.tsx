import { createContext } from 'react';
import { AreaContextType } from './type';
import { AreaModel } from '@src/types';

const defaultProvider: AreaContextType = {
  areaList: [],
  area: null, // este sí puede seguir en null si representa "nada seleccionado"
  isUpdating: false,

  // funciones vacías que no hacen nada (no-op)
  submitArea: async () => {
    console.warn('submitArea aún no implementado');
    return {} as AreaModel;
  },
  selectArea: () => {
    console.warn('selectArea aún no implementado');
    return null;
  },
  setModalOnEdit: () => {
    console.warn('onOpenAddOrEditModal aún no implementado');
  },
  removeArea: async () => {
    console.warn('removeArea aún no implementado');
    return 0 as number;
  },
  activeArea: async () => {
    console.warn('activeArea aún no implementado');
    return 0 as number;
  },
};

export const AreaContext = createContext<AreaContextType>(defaultProvider);