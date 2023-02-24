import {StyleSheet} from 'react-native';
import Constants from '../../Constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Constants.colors.grey,
    borderRadius: 8,
    alignItems: 'center',
    padding: 5,
  },
  icon: {height: 20, width: 20, tintColor: Constants.colors.primary1},
  inputText: {
    flex: 1,
    color: Constants.colors.black,
  },
});

export default styles;
