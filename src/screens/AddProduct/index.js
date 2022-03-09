import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';

import styles from '../../styles/AddProduct';

const AddProduct = () => {
  return (
    <ScrollView>
      <View style={styles.titleWrapper}>
        <Image source={require('../../assets/back.png')} />
        <Text>Add new item</Text>
        <TouchableOpacity>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.inputProduct}
        placeholder="Type product name min. 30 characters"
      />
      <TextInput style={styles.inputPrice} placeholder="Type product price" />
      <Text>Description</Text>
      <TextInput
        style={styles.inputDescribe}
        placeholder="Describe your product min. 150 characters"
      />
      <Text>Location</Text>
      <TouchableOpacity style={styles.login}>
        <Text style={styles.textLogin}>Save Product</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddProduct;
