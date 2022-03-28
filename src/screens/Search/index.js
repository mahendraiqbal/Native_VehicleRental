import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {searchVehicle, allFullVehicle} from '../../modules/vehicles';

import styles from '../../styles/Search';
import {TextInput} from 'react-native-paper';

const Search = ({navigation}) => {
  const [vehicle, setVehicle] = useState([]);
  const [isWait, setIsWait] = useState(false);
  const [text, setText] = useState('');
  const [stateSearch, seStateSearch] = useState({data: []});
  const defaultVehicle = require('../../assets/defaultVehicles.png');

  const [pic, setPic] = useState(null);

  const {data} = vehicle;
  console.log('vehicle', vehicle);

  const getVehicle = () => {
    let type = '';
    let limit = 10;
    searchVehicle(type, limit)
      .then((res, data) => {
        setIsWait(true);
        // console.log('data', data);
        // console.log('data2', res.data.result.data);
        setVehicle(res.data.result.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getVehicle();
  }, []);

  const searchData = text
    ? vehicle.filter(item => {
        const itemData = item.name;
        const textData = text;
        return itemData.indexOf(textData) > -1;
      })
    : vehicle;

  const itemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
        }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.bg}>
      {isWait === true ? (
        <View>
          <View style={styles.MainContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={text => setText(text)}
              value={text}
              underlineColorAndroid="transparent"
              placeholder="Search Here"
            />
            <View>
              <TouchableOpacity
                style={styles.btnAdd}
                onPress={() => navigation.navigate('Filter')}>
                <Image
                  // source={require('../assets/filter-icon.png')}
                  style={styles.filterIcon}
                />
                <Text style={styles.AddBtn}>Filter</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={searchData}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={itemSeparator}
              renderItem={({item}) => {
                let linkpic = JSON.parse(item.images);
                // console.log('car img fl :', item);
                const picVehicle = {
                  uri: `${process.env.API_REACT_NATIVE}images/vehicle/${linkpic}`,
                };
                console.log('url', picVehicle);
                return (
                  <View>
                    <View style={styles.cardWrapper}>
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            const param = {
                              id: item.id,
                              image: item.images,
                            };
                            navigation.navigate('Detail', param);
                          }}>
                          {linkpic === null ? (
                            <Image
                              source={picVehicle}
                              style={styles.imageWrapper}
                            />
                          ) : (
                            <Image
                              source={require('../../assets/defaultVehicles.png')}
                              style={styles.imageWrapper}
                            />
                          )}
                        </TouchableOpacity>
                      </View>
                      <View style={styles.textInfoWrapper}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.titleNd}>
                          Capacity{' '}
                          {`${item.capacity}` === null
                            ? 'null'
                            : `${item.capacity}`}
                        </Text>
                        <Text style={styles.title}>{item.city}</Text>
                        <Text style={styles.titleRd}>available</Text>
                        <Text style={styles.title}>Price Rp.{item.price}</Text>
                      </View>
                    </View>
                  </View>
                  // <Text style={styles.row}>{item.name}</Text>
                );
              }}
              style={{marginTop: 10}}
            />
          </View>
        </View>
      ) : (
        <Image
          source={require('../../assets/cars.gif')}
          style={styles.loading}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
