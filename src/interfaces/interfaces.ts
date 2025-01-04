import { Dispatch, SetStateAction } from 'react';

export interface RadioProps {
  volUp: boolean;
  volDown: boolean;
  play: boolean;
  page: boolean;
  stationSelectUp: boolean;
  stationSelectDown: boolean;
}

export interface RadioProviderContextProps {
  radioState: RadioProps;
  setRadioState: Dispatch<SetStateAction<RadioProps>>;
}