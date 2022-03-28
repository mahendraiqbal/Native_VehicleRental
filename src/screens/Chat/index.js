import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../styles/Chat';

const Chat = () => {
  return (
    <ScrollView>
      <View style={styles.title}>
        <Image source={require('../../assets/back.png')} />
        <Text style={styles.titleChat}>Chat</Text>
      </View>
      <View style={styles.search}>
        <Image source={require('../../assets/search.png')} />
        <Text style={styles.searchChat}>Search Chat</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.chat}>
          <View style={styles.infoChat}>
            <Text style={styles.userChat}>Vespa Rental Jogja</Text>
            <Text>Hey, there are 3 vespa left</Text>
          </View>
          <View style={styles.infoNotif}>
            <Text>Just now</Text>
            <Text>1</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.noChat}>You have no conversation left</Text>
    </ScrollView>
  );
};

export default Chat;
