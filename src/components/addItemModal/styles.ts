import {StyleSheet} from 'react-native';

import {wp} from '../../helpers/constants';
import {colors, fontSize} from '../../helpers/utils';

const style = StyleSheet.create({
  modalContainer: {
    margin: 0,
  },
  mainContainer: {
    backgroundColor: colors.background,
    marginHorizontal: wp(5),
    borderRadius: wp(3),
  },
  titleContainer: {
    padding: wp(4),
    borderBottomWidth: 2,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  titleText: {
    color: colors.titleText,
    fontSize: fontSize(20),
    fontWeight: '600',
  },
  input: {
    paddingHorizontal: wp(4),
    paddingVertical: wp(3),
    borderRadius: wp(2),
    borderWidth: 1,
    borderColor: colors.border,
    margin: wp(5),
  },
  addButton: {
    backgroundColor: colors.secondary,
    padding: wp(3),
    margin: wp(5),
    marginTop: 0,
    alignItems: 'center',
    borderRadius: wp(3),
  },
  addButtonText: {
    color: colors.background,
    fontSize: fontSize(18),
    fontWeight: '700',
  },
});

export default style;
