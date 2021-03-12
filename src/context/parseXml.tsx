import { createContext, useContext } from 'react';
import { useFetch } from "src/hooks/useFetch";

const AppContext = createContext({});

export function AppWrapper({ children } : any) {
  const { parsedXml, state, _fetchData } = useFetch();

  const data = {
      parsedXml,
      state,
      _fetchData
  }

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}