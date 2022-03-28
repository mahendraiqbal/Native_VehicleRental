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
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const [cars, setCars] = useState([]);
  const [motorbikes, setMotorbikes] = useState([]);
  const [bikes, setBikes] = useState([]);
  const [isWait, setIsWait] = useState(false);
  const roles = useSelector(state => state.auth.userData.roles_id);
  console.log('cek roles', roles);
  const defaultVehicle = require('../../assets/defaultVehicles.png');

  const getVehicleType = () => {
    allVehicle()
      .then(
        axios.spread((...res) => {
          setIsWait(true);
          // console.log('cek image', res[0].data.result.data[0].images);
          setCars(res[0].data.result.data);
          setMotorbikes(res[1].data.result.data);
          setBikes(res[2].data.result.data);
        }),
      )
      .catch(err => console.log(err));
  };

  // console.log('cek car', cars[0].images);
  // const images = {uri: `${process.env.API_REACT_NATIVE}`}

  useEffect(() => {
    getVehicleType();
  }, []);
  return (
    <ScrollView>
      <ImageBackground
        source={require('../../assets/bg-home.png')}
        style={styles.jumbotron}>
        {roles === 3 ? (
          <TouchableOpacity
            style={styles.addProduct}
            onPress={() => {
              navigation.navigate('AddProduct');
            }}>
            <Text style={styles.textAdd}>Add new item</Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </ImageBackground>
      <View style={styles.imageWrapper}>
        <Text style={styles.title}>Cars</Text>
        <Text
          style={styles.moreDetail}
          onPress={() => {
            const param = {
              type: 'Car',
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
            // console.log('neckdeep', JSON.parse(vehicles.images)[0]);
            return (
              <TouchableOpacity
                onPress={() => {
                  const param = {
                    id: vehicles.id,
                  };
                  navigation.navigate('Detail', param);
                }}>
                <Image
                  source={{
                    uri: `${process.env.API_REACT_NATIVE}images/vehicle/${
                      JSON.parse(vehicles.images)[0]
                    }`,
                  }}
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
                  source={{
                    uri: `${process.env.API_REACT_NATIVE}images/vehicle/${
                      JSON.parse(vehicles.images)[0]
                    }`,
                  }}
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
              type: 'Bicycle',
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
                  source={{
                    uri: `${process.env.API_REACT_NATIVE}images/vehicle/${
                      JSON.parse(vehicles.images)[0]
                    }`,
                  }}
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
