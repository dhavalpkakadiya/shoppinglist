import {StyleSheet} from 'react-native';

import {hp, statusBarHeight, wp} from '../../helpers/constants';
import {colors, fontSize} from '../../helpers/utils';

const style = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    marginTop: statusBarHeight,
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headingText: {
    color: colors.titleText,
    fontSize: fontSize(22),
  },
  countText: {
    color: colors.titleText,
    fontSize: fontSize(16),
    position: 'absolute',
    right: wp(2),
  },
});

export default style;
