import { useCallback } from 'react';
import { doGet, doPost, doPut, doDelete } from '@src/apis/baseAPI';
import { AreaModel, ErrCallbackType, APIResponseMessage } from '@src/types';
import catalogs from '@src/configs/catalogs';

export const useArea = () => {
  const getAllAreas = useCallback(
    async (errorCallback?: ErrCallbackType): Promise<AreaModel[] | undefined> => {
      try {
        const response = await doGet<APIResponseMessage<AreaModel[]>>(catalogs.getAllAreasEndPoint);

        const data: AreaModel[] = response.data;

        return data;
      } catch (error) {
        if (errorCallback) errorCallback({ Error: error as string });
        return undefined;
      }
    },
    []
  );

  const addArea = useCallback(
    async (area: AreaModel, errorCallback?: ErrCallbackType): Promise<AreaModel> => {
      try {
        const response = await doPost<APIResponseMessage<AreaModel>>(
          catalogs.addAreasEndPoint,
          area
        );

        const data: AreaModel = response.data;

        return data;
      } catch (error) {
        if (errorCallback) errorCallback({ Error: error as string });
        throw new Error('Error al agregar el área');
      }
    },
    []
  );

  const updateArea = useCallback(
    async (area: AreaModel, errorCallback?: ErrCallbackType): Promise<AreaModel> => {
      try {
        const response = await doPut<APIResponseMessage<AreaModel>>(
          catalogs.updateAreasEndPoint,
          area
        );

        const data: AreaModel = response.data;

        return data;
      } catch (error) {
        if (errorCallback) errorCallback({ Error: error as string });
        throw new Error('Error al actualizar el área');
      }
    },
    []
  );

  const deleteArea = useCallback(
    async (idArea: number, errorCallback?: ErrCallbackType): Promise<number> => {
      try {
        const response = await doDelete<APIResponseMessage<number>>(catalogs.deleteAreasEndPoint, {
          idArea,
        });

        const result: number = response.data;

        return result;
      } catch (error) {
        if (errorCallback) errorCallback({ Error: error as string });
        throw new Error('Error al borrar el área');
      }
    },
    []
  );

  const enableArea = useCallback(
    async (area: AreaModel, errorCallback?: ErrCallbackType): Promise<number> => {
      try {
        const response = await doPost<APIResponseMessage<number>>(
          catalogs.enableAreasEndPoint,
          area
        );

        const result: number = response.data;

        return result;
      } catch (error) {
        if (errorCallback) errorCallback({ Error: error as string });
        throw new Error('Error al actualizar el estatus del área');
      }
    },
    []
  );

  return {
    getAllAreas,
    addArea,
    updateArea,
    deleteArea,
    enableArea,
  };
};
