const { DataContext } = require("@/Providers/DataProvider/DataProvider");
const { useContext } = require("react");

const useAllData = () => {
  const allData = useContext(DataContext);
  return allData;
};

export default useAllData;
