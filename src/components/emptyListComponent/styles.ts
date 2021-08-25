import {StyleSheet} from 'react-native';

import {hp} from '../../helpers/constants';
import {colors, fontSize} from '../../helpers/utils';

const style = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    marginTop: hp(35),
  },
  titleText: {
    color: colors.text,
    fontSize: fontSize(18),
  },
});

export default style;
