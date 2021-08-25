import {StyleSheet} from 'react-native';

import {wp} from '../../helpers/constants';
import {colors, fontSize} from '../../helpers/utils';

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
    marginHorizontal: wp(5),
    marginTop: wp(3.5),
    marginBottom: wp(1),
    borderRadius: wp(2),
    shadowColor: colors.primary,
    shadowOffset: {height: 0, width: 0},
    shadowRadius: 3,
    shadowOpacity: 0.15,
    elevation: 3,
    padding: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: colors.text,
    fontSize: fontSize(18),
    flex: 1,
  },
  deleteIcon: {
    height: wp(5),
    width: wp(5),
    tintColor: colors.secondary,
  },
});

export default style;
