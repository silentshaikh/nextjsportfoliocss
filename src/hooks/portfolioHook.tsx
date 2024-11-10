import { ProtfolioContext } from '@/Context/Context'
import { useContext } from 'react'

function usePortfolioHook() {
  const portfContext = useContext(ProtfolioContext);
  if(!portfContext){
    throw new Error("usePortfolioHook must be used within a ProtFolioContext.Provider");
  };
  return portfContext;
}

export default usePortfolioHook;