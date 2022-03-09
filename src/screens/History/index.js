import {View, Text, ScrollView, CheckBox, StyleSheet} from 'react-native';
import React, {useState} from 'react';

// import styles from '../../styles/History';

const History = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Text>Is CheckBox selected: {isSelected ? '👍' : '👎'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default History;
