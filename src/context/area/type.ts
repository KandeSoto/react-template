import { AreaModel } from '@src/types';

export type AreaContextType = {
  areaList: AreaModel[];
  area: AreaModel | null;
  isUpdating: boolean;
  submitArea: (data: AreaModel, isUpdating: boolean) => Promise<AreaModel>;
  selectArea: (idArea: number) => AreaModel | null;
  setModalOnEdit: (isEditModal: boolean) => void;
  removeArea: (idArea: number) => Promise<number>;
  activeArea: (data: AreaModel) => Promise<number>;
};
