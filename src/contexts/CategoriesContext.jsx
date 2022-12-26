import { useState, createContext, useEffect } from "react";

import { getCategoriesAndDocuments } from "../Utils/firebase/FirebaseUtils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      setCategoriesMap(categoryMap);
    }

    getCategoriesMap();
  }, [])

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}> 
    {children} 
    </CategoriesContext.Provider>
  );
};