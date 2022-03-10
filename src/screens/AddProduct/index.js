// import {
//   ScrollView,
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';
// import React from 'react';

// import styles from '../../styles/AddProduct';

// const AddProduct = () => {
//   return (
//     <ScrollView>
//       <View style={styles.titleWrapper}>
//         <Image source={require('../../assets/back.png')} />
//         <Text>Add new item</Text>
//         <TouchableOpacity>
//           <Text>Cancel</Text>
//         </TouchableOpacity>
//       </View>
//       <TextInput
//         style={styles.inputProduct}
//         placeholder="Type product name min. 30 characters"
//       />
//       <TextInput style={styles.inputPrice} placeholder="Type product price" />
//       <Text>Description</Text>
//       <TextInput
//         style={styles.inputDescribe}
//         placeholder="Describe your product min. 150 characters"
//       />
//       <Text>Location</Text>
//       <TouchableOpacity style={styles.login}>
//         <Text style={styles.textLogin}>Save Product</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default AddProduct;

import React, {useState} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

// Import Image Picker
import ImagePicker from 'react-native-image-picker';

const AddProduct = () => {
  const [filePath, setFilePath] = useState({});

  const chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setFilePath(source);
      }
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.titleText}>
        Example of Image Picker in React Native
      </Text>
      <View style={styles.container}>
        {/*<Image 
          source={{ uri: filePath.path}} 
          style={{width: 100, height: 100}} />*/}
        <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
          style={styles.imageStyle}
        />
        <Image source={{uri: filePath.uri}} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{filePath.uri}</Text>
        {/*
          <Button
            title="Choose File"
            onPress={chooseFile} />
        */}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={chooseFile}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
