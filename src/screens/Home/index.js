import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {allVehicle} from '../../modules/vehicles';
import styles from '../../styles/Home';

const Home = ({navigation}) => {
  // const [popular, setPopular] = useState([]);
  const [cars, setCars] = useState([]);
  const [motorbikes, setMotorbikes] = useState([]);
  const [bikes, setBikes] = useState([]);
  const [isWait, setIsWait] = useState(false);

  // console.log('car', vehicles);

  const getVehicleType = () => {
    allVehicle()
      .then(
        axios.spread((...res) => {
          setIsWait(true);
          console.log('cek', res[0].data.result.data);
          // setPopular(res[0].data.result.data);
          setCars(res[0].data.result.data);
          setMotorbikes(res[1].data.result.data);
          setBikes(res[2].data.result.data);
        }),
      )
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getVehicleType();
  }, []);
  return (
    <ScrollView>
      <ImageBackground
        source={require('../../assets/bg-home.png')}
        style={styles.jumbotron}
      />
      <View style={styles.imageWrapper}>
        <Text style={styles.title}>Cars</Text>
        <Text
          style={styles.moreDetail}
          onPress={() => {
            const param = {
              type: 'Cars',
            };
            navigation.navigate('Category', param);
          }}>
          View More >
        </Text>
      </View>
      {cars.length > 0 && isWait ? (
        <FlatList
          data={cars}
          horizontal={true}
          renderItem={({item: vehicles}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  const param = {
                    id: vehicles.id,
                  };
                  navigation.navigate('Detail', param);
                }}>
                <Image
                  source={require('../../assets/defaultVehicle.jpg')}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={vehicles => vehicles.id}
        />
      ) : (
        <Image
          source={require('../../assets/cars.gif')}
          style={styles.loading}
        />
      )}
      <View style={styles.imageWrapper}>
        <Text style={styles.title}>Motorbike</Text>
        <Text
          style={styles.moreDetail}
          onPress={() => {
            const param = {
              type: 'Motorbike',
            };
            navigation.navigate('Category', param);
          }}>
          View More >
        </Text>
      </View>
      {motorbikes.length > 0 && isWait ? (
        <FlatList
          data={motorbikes}
          horizontal={true}
          renderItem={({item: vehicles}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  const param = {
                    id: vehicles.id,
                  };
                  navigation.navigate('Detail', param);
                }}>
                <Image
                  source={require('../../assets/defaultVehicle.jpg')}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={vehicles => vehicles.id}
        />
      ) : (
        <Image
          source={require('../../assets/cars.gif')}
          style={styles.loading}
        />
      )}
      <View style={styles.imageWrapper}>
        <Text style={styles.title}>Bike</Text>
        <Text
          style={styles.moreDetail}
          onPress={() => {
            const param = {
              type: 'Cars',
            };
            navigation.navigate('Category', param);
          }}>
          View More >
        </Text>
      </View>
      {bikes.length > 0 && isWait ? (
        <FlatList
          data={bikes}
          horizontal={true}
          renderItem={({item: vehicles}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  const param = {
                    id: vehicles.id,
                  };
                  navigation.navigate('Detail', param);
                }}>
                <Image
                  source={require('../../assets/defaultVehicle.jpg')}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={vehicles => vehicles.id}
        />
      ) : (
        <Image
          source={require('../../assets/cars.gif')}
          style={styles.loading}
        />
      )}
    </ScrollView>
  );
};

export default Home;
