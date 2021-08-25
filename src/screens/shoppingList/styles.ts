import {StyleSheet} from 'react-native';

import {hp} from '../../helpers/constants';
import {colors, fontSize} from '../../helpers/utils';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loadingText: {
    color: colors.primary,
    fontSize: fontSize(20),
    marginTop: hp(1.5),
  },
});

export default style;
