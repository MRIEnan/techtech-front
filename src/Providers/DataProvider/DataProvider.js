import { createContext } from "react";
import useData from "../../pages/hooks/useData";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const myData = useData();
  return (
    <DataContext.Provider value={{ ...myData }}>
      {children}
    </DataContext.Provider>
  );
};
