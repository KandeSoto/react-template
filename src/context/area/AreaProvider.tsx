import { ReactNode, useCallback, useEffect, useState } from 'react';
import { AreaModel } from '@src/types';
import { useArea } from '@src/hooks/useAreaApi';
import { AreaContext } from './AreaContext';

 export const AreaProvider = ({ children }: { children: ReactNode }) => {
  const [areaList, setAreaList] = useState<AreaModel[]>([]);
  const [area, setArea] = useState<AreaModel | null>(null);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const { getAllAreas, addArea, updateArea, deleteArea, enableArea } = useArea();

  useEffect(() => {
    const fetchAreas = async () => {
      const data = await getAllAreas(error => {
        console.error('Error fetching areas:', error);
      });

      if (data) setAreaList(data);
    };

    fetchAreas();
  }, [getAllAreas]);

  const selectArea = useCallback((idArea: number) => {
    const areaSelected = areaList?.find(item => item.idArea === idArea);
    setArea(areaSelected || null);

    return area;

  }, [areaList, area]);

  const setModalOnEdit = useCallback((isEditModal: boolean) => {
    setIsUpdating(isEditModal);

  }, []);

  const onAddArea = useCallback(() => (newArea: AreaModel) => {
    const existingArea = areaList.find(
      area => area.idArea === newArea.idArea
    );

    let newRows;
    if (existingArea) {
      if (existingArea.description === newArea.description) {
        newRows = areaList?.map(area =>
          area.idArea === newArea.idArea
            ? { ...area, ...newArea }
            : area
        );
      } else {
        newRows = areaList?.map(area =>
            area.idArea === newArea.idArea
              ? { ...area, ...newArea }
              : area
          )
          .sort((a, b) => {
            const nameComparison = a.description.toLowerCase().localeCompare(b.description.toLowerCase());

            return nameComparison === 0 ? a.idArea - b.idArea : nameComparison;
          });
      }
    } else {
      newRows = [...areaList, newArea].sort((a, b) => {
        const nameComparison = a.description.toLowerCase().localeCompare(b.description.toLowerCase());

        return nameComparison === 0 ? a.idArea - b.idArea : nameComparison;
      });
    }

    setAreaList(newRows);
  }, [areaList]);

  const submitArea = useCallback(async (data: AreaModel, isUpdating: boolean): Promise<AreaModel> => {
    const area: AreaModel = { ...data };
    const newArea = isUpdating ? await updateArea(area) : await addArea(area);

    const addAreaFn = onAddArea();
    if (newArea) {
      addAreaFn(newArea);
    } else {
      console.error('No se pudo guardar el área.');
    }

    return newArea;

  }, [addArea, onAddArea, updateArea]);

  const removeArea = useCallback(async (idArea: number): Promise<number> => {
    const result = await deleteArea(idArea);

    if (result === 1) {      
      setAreaList(areaList.filter(area => area.idArea !== idArea));
    }else {
      console.error('Error al eliminar el área.');
    }

    return result;
  }
  , [deleteArea, areaList]); 

  const activeArea = useCallback(async (data: AreaModel): Promise<number> => {    
    const result = await enableArea(data);

    if (result === 1) {      
      setAreaList(prev =>
        prev.map(area =>
          area.idArea === data.idArea ? { ...area, active: !area.active } : area
        )
      );
    
    }else {
      console.error('Error al actualizar su estatus del área.');
    }

    return result;
  }
  , [enableArea]); 

  const values = {
    //properties
    areaList,
    area,
    isUpdating,

    //functions    
    selectArea,
    setModalOnEdit,
    submitArea,
    removeArea,
    activeArea
  }

  return (
    <AreaContext.Provider value={values}>
      {children}
    </AreaContext.Provider>
  );

};
