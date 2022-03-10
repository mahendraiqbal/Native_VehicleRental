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

import {getVehicleById} from '../../modules/vehicles';

const defaultCar = require('../../assets/defaultVehicle.jpg');

const DetailVehicle = ({navigation, route}) => {
  const [counter, setCounter] = useState(1);
  const [vehicle, setVehicle] = useState([]);
  const [images, setImages] = useState(
    require('../../assets/defaultVehicle.jpg'),
  );
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

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
  console.log('route', route.params.id);
  const getDetail = () => {
    const id = route.params.id;

    getVehicleById(id)
      .then(res => {
        console.log('result vehicle', res.data.result);
        console.log(res.data.result[0].images);
        const image = JSON.parse(res.data.result[0].images);
        setImages(image);
        setVehicle(res.data.result[0]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <ScrollView>
      <ImageBackground source={defaultCar} style={styles.jumbotron}>
        <Image source={require('../../assets/back.png')} />
        <Text>4.5</Text>
        <Image />
      </ImageBackground>
      <View style={styles.title}>
        <Text style={styles.name}>{vehicle.name}</Text>
        <Image source={require('../../assets/chat.png')} style={styles.chat} />
      </View>
      <Text style={styles.price}>{vehicle.price}</Text>
      <Text style={styles.max}>Max for {vehicle.capacity} Person</Text>
      <Text style={styles.pay}>No Prepayment</Text>
      <Text style={styles.stat}>Available</Text>
      <View style={styles.title}>
        <Image source={require('../../assets/run.png')} />
        <Text style={styles.map}>{vehicle.city}</Text>
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
          <Text style={styles.counter}>{subCounter}</Text>
          <Text style={styles.textCounter}>{counter}</Text>
          <Text style={styles.counter}>{addCounter}</Text>
        </View>
      </View>
      <View style={styles.titleDate}>
        <Text style={styles.date}>Select Date</Text>
      </View>
      <View style={styles.days}>
        <Picker
          style={styles.dropdownMenu}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

        <View style={styles.datePicker}>
          <View>
            <TouchableOpacity onPress={showDatePicker}>
              {/* // title="Show date picker! */}
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
              onChange={onChange}
            />
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.login}>
        <Text
          style={styles.textLogin}
          onPress={() => {
            navigation.navigate('Payment');
          }}>
          Reservation
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailVehicle;
