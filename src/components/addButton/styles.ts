import {StyleSheet} from 'react-native';

import {hp, wp} from '../../helpers/constants';
import {colors, fontSize} from '../../helpers/utils';

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: hp(5),
    right: wp(6),
    height: wp(15),
    width: wp(15),
    borderRadius: wp(15),
  },
  addText: {
    color: colors.background,
    fontSize: fontSize(30),
  },
});

export default style;
