import { createContext } from "react";
import useData from "../../hooks/useData";
import useNavigationData from "@/hooks/useNavigationData";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const myData = useData();
  const navigationData = useNavigationData();
  return (
    <DataContext.Provider value={{ ...myData, ...navigationData }}>
      {children}
    </DataContext.Provider>
  );
};
