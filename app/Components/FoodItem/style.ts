import {StyleSheet, Dimensions} from 'react-native';
import Constants from '../../Constants';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    height: height * 0.15,
    width: width * 0.3,
  },
  labelText: {
    color: Constants.colors.primary2,
  },
});

export default styles;
