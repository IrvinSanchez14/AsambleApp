import {StyleSheet} from 'react-native';

export const styleEncuesta = StyleSheet.create({
  baseQuestion: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  styleIcon: {
    fontSize: 24,
    color: '#fbe000',
  },
  textQuestion: {
    flex: 1,
    paddingLeft: 5,
  },
  containerRadio: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    padding: 10,
  },
  boxElemnts: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textAddComment: {
    flex: 1,
    alignItems: 'center',
  },
});
