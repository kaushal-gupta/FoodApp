import {StyleSheet} from 'react-native';
import Constants from '../../Constants';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Constants.colors.primary1,
    padding: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 8,
  },
  text: {
    color: Constants.colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
