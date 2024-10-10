import { useEffect } from "react";
import { createGrid } from "../store/grid/slice";
import { useAppDispatch } from "../store";

export const useGridResize = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const updateGridSize = () => {
      const availableWidth = window.innerWidth - 20;
      const availableHeight = window.innerHeight - 150;
      const columns = Math.floor(availableWidth / 21);
      const rows = Math.floor(availableHeight / 21);
      dispatch(createGrid({ width: columns, height: rows }));
    };

    updateGridSize();
    window.addEventListener("resize", updateGridSize);

    return () => window.removeEventListener("resize", updateGridSize);
  }, [dispatch]);
};
