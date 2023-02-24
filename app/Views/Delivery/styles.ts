import {StyleSheet} from 'react-native';
import Constants from '../../Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 5,
    backgroundColor: 'white',
  },
  imageStyle: {},
  headText: {
    marginVertical: 10,
    color: Constants.colors.grey,
    fontSize: 18,
    textAlign: 'center',
  },
  searchContainer: {
    marginBottom: 10,
  },
});

export default styles;
