import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../styles/Filter';

const Filter = () => {
  return (
    <ScrollView>
      <View style={styles.titleWrapper}>
        <Image source={require('../../assets/back.png')} style={styles.icon} />
        <Text style={styles.title}>Add new item</Text>
        <TouchableOpacity style={styles.cancel}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Filter;
