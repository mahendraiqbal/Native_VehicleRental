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

import {getVehicleById} from '../../modules/vehicles';

const defaultCar = require('../../assets/defaultVehicle.jpg');

const DetailVehicle = ({navigation, route}) => {
  // const roles = useSelector(state => state.auth.userData.roles_id);
  // console.log('roles', roles);
  const [counter, setCounter] = useState(1);
  const [vehicles, setVehicles] = useState([]);
  // const [images, setImages] = useState(
  //   require('../../assets/defaultVehicle.jpg'),
  // );
  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState();

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [chosenDate, setChosenDate] = useState(null);

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
        console.log('result vehicle', res.data.result);
        // console.log(res.data.result[0].images);
        // const image = JSON.parse(res.data.result[0].images);
        // setImages(image);
        setVehicles(res.data.result[0]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);
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
      <ImageBackground source={defaultCar} style={styles.jumbotron}>
        <Image source={require('../../assets/back.png')} />
        <Text>4.5</Text>
        <Image />
      </ImageBackground>
      <View style={styles.title}>
        <Text style={styles.name}>{vehicles.name}</Text>
        <Image source={require('../../assets/chat.png')} style={styles.chat} />
      </View>
      <Text style={styles.price}>{vehicles.price}</Text>
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
          <Text style={styles.selectBike}>Select Bikes :</Text>
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
            };
            navigation.navigate('Payment', param);
          }}>
          Reservation
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailVehicle;
