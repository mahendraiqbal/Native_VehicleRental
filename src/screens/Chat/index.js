import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../styles/Chat';

const Chat = () => {
  return (
    <ScrollView>
      <View style={styles.title}>
        <Image source={require('../../assets/back.png')} />
        <Text>Chat</Text>
      </View>
      <View style={styles.search}>
        <Image source={require('../../assets/search.png')} />
        <Text>Search Chat</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.chat}>
          <View>
            <Text>Vespa Rental Jogja</Text>
            <Text>Hey, there are 3 vespa left</Text>
          </View>
          <View>
            <Text>Just now</Text>
            <Text>1</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.chat}>
          <View>
            <Text>Vespa Rental Jogja</Text>
            <Text>Hey, there are 3 vespa left</Text>
          </View>
          <View>
            <Text>Just now</Text>
            <Text>1</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text>You have no conversation left</Text>
    </ScrollView>
  );
};

export default Chat;
