import {Platform} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const wp = (val: number) => widthPercentageToDP(val);

export const hp = (val: number) => heightPercentageToDP(val);

export const statusBarHeight = getStatusBarHeight();

export const isIos = Platform.OS === 'ios';
