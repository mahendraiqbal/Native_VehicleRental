/* eslint-disable react-hooks/exhaustive-deps */
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../styles/Category';

import {getVehicleType} from '../../modules/vehicles';

const Category = ({navigation, route}) => {
  // console.log(route.params.type);
  const [vehicle, setVehicle] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  // console.log('vehicle', vehicle);

  const getVehicle = () => {
    const type = route.params.type;
    setIsLoading(true);

    getVehicleType(type, currentPage)
      .then(res => {
        console.log('cek vehicle', res.data.result.data);
        // console.log('cek meta', res.data.result.meta.next);
        // console.log('cekcek', res.data.result.data);
        setIsSuccess(true);
        setVehicle([...vehicle, ...res.data.result.data]);
        setIsNext(true);
        setIsLoading(false);
        if (res.data.result.meta.next === null) {
          setIsNext(false);
          setIsLoading(false);
        }
      })
      .catch(err => console.log(err));
  };

  const load = () => {
    return isNext ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="ffcd61" />
      </View>
    ) : (
      <Text style={styles.end}>No More Vehicle</Text>
    );
  };

  useEffect(() => {
    getVehicle();
  }, [currentPage]);

  return (
    <>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BotTab');
          }}>
          <View style={styles.wrapper}>
            <Image
              source={require('../../assets/back.png')}
              style={styles.back}
            />
            <Text style={styles.title}>Vehicle Type</Text>
          </View>
        </TouchableOpacity>
        {vehicle.length > 0 && isSuccess ? (
          <FlatList
            data={vehicle}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={load}
            ListEmptyComponent={() => {
              <View style={styles.empty}>
                <Text>No Data at the moment</Text>
                <Button onPress={() => getVehicle()} title="Refresh" />
              </View>;
            }}
            onEndReached={() => {
              isNext && setCurrentPage(currentPage + 1);
            }}
            onEndReachedThreshold={0.2}
            keyExtractor={vehicles => vehicles.id.key}
            // onEndReached={fetchMore}
            renderItem={({item: vehicles}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    const param = {
                      id: vehicles.id,
                    };
                    navigation.navigate('Detail', param);
                  }}>
                  <View style={styles.infoVehicle}>
                    <Image
                      source={{
                        uri: `${process.env.API_REACT_NATIVE}images/vehicle/${
                          JSON.parse(vehicles.images)[0]
                        }`,
                      }}
                      style={styles.image}
                    />
                    <View style={styles.detailVehicle}>
                      <Text style={styles.name}>{vehicles.name}</Text>
                      <Text style={styles.max}>
                        Max for {vehicles.capacity} person
                      </Text>
                      <Text style={styles.map}>2.1 km from your location</Text>
                      <Text style={styles.stat}>Available</Text>
                      <Text style={styles.price}>Rp. {vehicles.price}/day</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <View style={styles.loadWrapper}>
            <Image
              source={require('../../assets/cars.gif')}
              style={styles.loading}
            />
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default Category;
