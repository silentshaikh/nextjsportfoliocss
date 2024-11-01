import { ProtfolioContext } from '@/Context/Context'
import { useContext } from 'react'

function usePortfolioHook() {
  let portfContext = useContext(ProtfolioContext);
  if(!portfContext){
    throw new Error("usePortfolioHook must be used within a ProtFolioContext.Provider");
  };
  return portfContext;
}

export default usePortfolioHook;