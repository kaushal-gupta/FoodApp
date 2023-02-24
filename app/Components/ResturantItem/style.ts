import {StyleSheet, Dimensions} from 'react-native';
import Constants from '../../Constants';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    // elevation: 1,
    borderColor: 'lightgrey',
    borderWidth: 1,
    // shadowColor: 'grey',
    flex: 1,
    marginVertical: 10,
  },
  imageContainer: {
    height: height * 0.2,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 12,
  },
  imageStyle: {
    height: height * 0.2,
    width: width,
    borderRadius: 12,
  },
  nameText: {
    fontWeight: '600',
    color: Constants.colors.white,
    fontSize: 22,
  },
  bottomContainer: {
    padding: 10,
  },
});
export default styles;
