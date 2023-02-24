import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import {SearchComponent, FoodItem, ResturantItem} from '../../Components/index';
import Constants from '../../Constants';
import styles from './styles';
interface InputProps {
  navigation: any;
}
const DeliveryScreen = (props: InputProps) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Constants.colors.white}
        animated
        barStyle={'dark-content'}
      />
      <View style={styles.searchContainer}>
        <SearchComponent />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <View>
              <Text style={styles.headText}>What's on Your Mind?</Text>
              <FlatList
                horizontal
                keyExtractor={(item, index) => 'key' + index}
                showsHorizontalScrollIndicator={false}
                data={Constants.data.whatsInYourMindData}
                extraData={Constants.data.whatsInYourMindData}
                renderItem={({item, index}) => {
                  return (
                    <View key={item.id}>
                      <FoodItem item={item} index={index} />
                    </View>
                  );
                }}
              />

              <Text style={styles.headText}>Resturants Near You</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => 'Key' + index}
        data={Constants.data.resturantData}
        extraData={Constants.data.resturantData}
        renderItem={({item, index}) => {
          return (
            <View>
              <ResturantItem item={item} index={index}></ResturantItem>
            </View>
          );
        }}
      />
    </View>
  );
};

export default DeliveryScreen;
