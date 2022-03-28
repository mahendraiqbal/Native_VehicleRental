import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../styles/Detail';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useSelector} from 'react-redux';

import {getVehicleById, editVehicle} from '../../modules/vehicles';
import {TextInput} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';

const defaultCar = require('../../assets/defaultVehicle.jpg');
const deleteIcon = require('../../assets/delete.png');

const DetailVehicle = ({navigation, route}) => {
  const roles = useSelector(state => state.auth.userData.roles_id);
  const token = useSelector(state => state.auth.userData.token);
  // console.log('roles', roles);
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState();
  const [vehicles, setVehicles] = useState([]);
  const [images, setImages] = useState(
    require('../../assets/defaultVehicles.png'),
  );
  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState();
  const [nextCounter, setNextCounter] = useState({counter});

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [chosenDate, setChosenDate] = useState(null);

  const [stock, setStock] = useState(null);
  const [status, setStatus] = useState(null);
  const [name, onChangeName] = useState(null);

  const handleImage = () => {
    launchImageLibrary({noData: true}, response => {
      if (response.didCancel) {
        return;
      }
      if (response) {
        setImages(response.assets[0]);
      }
    });
  };

  const submitUpdate = () => {
    let id = route.params.id;
    // let data = [];
    // if (images)
    RNFetchBlob.fetch(
      'PATCH',
      `${process.env.API_REACT_NATIVE}vehicles/${id}`,
      {
        'x-access-token': token,
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      [
        // {
        //   name: 'images',
        //   type: images.type,
        //   filename: images.fileName,
        //   data: RNFetchBlob.wrap(images.uri),
        // },
        {name: 'name', data: name},
        {name: 'qty', data: nextCounter},
        {name: 'price', data: price},
      ],
    )
      .then(res => {
        console.log('res', res);
        console.log('response', res.json());
      })
      .catch(err => console.log('err', err));
  };

  const handlePicker = date => {
    setChosenDate(new Date(date).toISOString().slice(0, 10));
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode('date');
  };

  const addCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };
  const subCounter = () => {
    const newCounter = counter - 1 < 0 ? 0 : counter - 1;
    setCounter(newCounter);
  };
  // console.log('route', route.params.id);
  const getDetail = () => {
    const id = route.params.id;

    getVehicleById(id)
      .then(res => {
        // console.log('result vehicle', res.data.result);
        // console.log(res.data.result[0].images);
        const image = JSON.parse(res.data.result[0].images);
        // console.log('image', image[0]);
        setImages(image);
        setVehicles(res.data.result[0]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);

  // console.log(process.env.API_REACT_NATIVE);
  // useEffect(() => {
  //   const id = route.params.id;
  //   getVehicleById(id)
  //     .then(res => {
  //       setVehicles(res.data.result[0]);
  //       console.log(res.data.result);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: `${process.env.API_REACT_NATIVE}images/vehicle/${images[0]}`,
        }}
        style={styles.jumbotron}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BotTab');
          }}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <Image />
      </ImageBackground>
      <View style={styles.title}>
        {roles === 3 ? (
          <TextInput
            style={styles.inputPrice}
            placeholder={`${vehicles.name}`}
            onChangeText={onChangeName}
          />
        ) : (
          <Text style={styles.name}>{vehicles.name}</Text>
        )}
        {roles === 3 ? (
          <TouchableOpacity style={styles.chat}>
            <Image source={deleteIcon} style={styles.chat} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.chat}
            onPress={() => {
              navigation.navigate('Chat');
            }}>
            <Image
              source={require('../../assets/chat.png')}
              style={styles.chat}
            />
          </TouchableOpacity>
        )}
      </View>
      {roles === 3 ? (
        <TextInput
          style={styles.inputPrice}
          placeholder={`${vehicles.price}`}
          // onChangeText={onChangeName}
        />
      ) : (
        <Text style={styles.price}>{vehicles.price}</Text>
      )}
      <Text style={styles.max}>Max for {vehicles.capacity} Person</Text>
      <Text style={styles.pay}>No Prepayment</Text>
      <Text style={styles.stat}>Available</Text>
      <View style={styles.title}>
        <Image source={require('../../assets/run.png')} />
        <Text style={styles.map}>{vehicles.city}</Text>
      </View>
      <View style={styles.title}>
        <Image source={require('../../assets/map.png')} />
        <Text style={styles.map}>3.2 miles from your location</Text>
      </View>
      <View style={styles.counterWrapper}>
        <View>
          {roles === 3 ? (
            <Text style={styles.selectBike}>Update Stock :</Text>
          ) : (
            <Text style={styles.selectBike}>Select Bikes :</Text>
          )}
        </View>
        <View style={styles.btnCounterWrapper}>
          <TouchableOpacity onPress={subCounter}>
            <Text style={styles.counter}>-</Text>
          </TouchableOpacity>
          <Text style={styles.textCounter}>{counter}</Text>
          <TouchableOpacity onPress={addCounter}>
            <Text style={styles.counter}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.days}>
        <View style={styles.datePicker}>
          <View>
            <TouchableOpacity onPress={showDatePicker}>
              <Text style={styles.datePickerBtn}>date</Text>
            </TouchableOpacity>
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={handlePicker}
            />
          )}
        </View>
        <Picker
          style={styles.dropdownMenu}
          selectedValue={selectedDay}
          onValueChange={(itemValue, itemIndex) => setSelectedDay(itemValue)}>
          <Picker.Item label="day 1" value="1" />
          <Picker.Item label="day 2" value="2" />
          <Picker.Item label="day 3" value="3" />
          <Picker.Item label="day 4" value="4" />
          <Picker.Item label="day 5" value="5" />
          <Picker.Item label="day 6" value="6" />
          <Picker.Item label="day 7" value="7" />
        </Picker>
      </View>
      {roles === 3 ? (
        <TouchableOpacity style={styles.login} onPress={submitUpdate}>
          <Text style={styles.textLogin}>Update Item</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.login}>
          <Text
            style={styles.textLogin}
            onPress={() => {
              const param = {
                ...route.params,
                id: vehicles.id,
                date: date,
                counter: counter,
                selectedDay: selectedDay,
                image: images[0],
              };
              navigation.navigate('Payment', param);
            }}>
            Reservation
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default DetailVehicle;
