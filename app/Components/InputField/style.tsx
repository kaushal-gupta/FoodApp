import {StyleSheet} from 'react-native';
import Constants from '../../Constants';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  labelText: {
    fontSize: 18,
    color: Constants.colors.primary2,
    paddingVertical: 5,
  },
  inputText: {
    borderRadius: 12,
    borderColor: Constants.colors.grey,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default styles;
