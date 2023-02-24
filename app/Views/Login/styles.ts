import {StyleSheet, Dimensions} from 'react-native';
import Constants from '../../Constants';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.colors.white,
    padding: 10,
  },
  logo: {
    alignSelf: 'center',
    height: height * 0.1,
    width: width * 0.5,
    marginVertical: 10,
  },
  headText: {
    color: Constants.colors.black,
    textAlign: 'center',
    fontSize: 22,
  },
  submitContainer: {
    alignItems: 'center',
  },
});

export default styles;
