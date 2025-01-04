import { createContext, useState, FC, ReactNode } from 'react';
import { RadioProviderContextProps } from '../interfaces/interfaces';

export const RadioProvider = createContext<RadioProviderContextProps>(
  {
    radioState: 
    {
      volUp: false,
      volDown: false,
      play: false,
      page: false,
      stationSelectUp: false,
      stationSelectDown: false,
    },
    setRadioState: () => {}
  });

interface RadioProviderProps {
  children: ReactNode;
}

export const RadioContextProvider:FC<RadioProviderProps> = ({ children }) => {
  const [radioState, setRadioState] = useState(
    {
      volUp: false,
      volDown: false,
      play: false,
      page: false,
      stationSelectUp: false,
      stationSelectDown: false,
    }
  )

  return (
    <RadioProvider.Provider value={{
       radioState, 
       setRadioState }}
    >
      {children}
    </RadioProvider.Provider>
  )
}