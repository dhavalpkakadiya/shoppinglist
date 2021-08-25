import {RFValue} from 'react-native-responsive-fontsize';

export const colors = {
  background: '#FFF',
  primary: '#000',
  secondary: '#0091EA',
  titleText: '#333',
  text: '#666',
  statusBar: 'transparent',
  border: '#eee',
};

export const fontFamily = {
  bold: '',
  medium: '',
  regular: '',
};

export const fontSize = (val: number) => RFValue(val, 812);
