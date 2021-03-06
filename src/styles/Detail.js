import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  jumbotron: {
    width: width,
    height: 200,
    flexDirection: 'row',
  },
  title: {
    flexDirection: 'row',
    marginTop: '2%',
    marginLeft: '5%',
  },
  name: {
    fontSize: 30,
  },
  chat: {
    marginLeft: 'auto',
    marginRight: '5%',
    width: 30,
    height: 30,
    resizeMode: 'cover',
    marginTop: '3%',
  },
  price: {
    marginLeft: '5%',
    fontSize: 25,
  },
  max: {
    marginLeft: '5%',
    marginTop: '4%',
    fontSize: 16,
  },
  pay: {
    marginLeft: '5%',
    marginTop: '2%',
    fontSize: 16,
  },
  stat: {
    marginLeft: '5%',
    marginTop: '2%',
    color: 'green',
    fontSize: 16,
  },
  selectBike: {
    // marginTop: '3%',
    // marginLeft: '5%',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '15%',
  },
  map: {
    marginLeft: '5%',
    fontSize: 14,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  login: {
    marginTop: '5%',
    color: '#FFF',
    backgroundColor: '#ffcd61',
    height: 40,
    borderRadius: 10,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5%',
  },
  textLogin: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 'auto',
    marginTop: 'auto',
    fontWeight: '900',
  },
  date: {
    // marginLeft: '5%',
    // marginTop: '5%',
    backgroundColor: '#d5d5d5',
  },
  titleDate: {
    flexDirection: 'row',
    marginTop: '2%',
    marginLeft: '5%',
    // height: 60,
  },
  counter: {
    fontSize: 17,
    fontWeight: '900',
    margin: 10,
    backgroundColor: '#FFCD61',
    borderRadius: 12,
    width: 25,
    height: 25,
    paddingLeft: 8,
  },
  textCounter: {
    fontSize: 17,
    fontWeight: '900',
    margin: 10,
  },
  counterWrapper: {
    flexDirection: 'row',
  },
  btnCounterWrapper: {
    marginLeft: '20%',
    flex: 1,
    textAlign: 'right',
    flexDirection: 'row',
  },
  days: {
    width: 30,
    padding: 10,
    // justifyContent: 'flex-end',
    flexDirection: 'row',
    // marginLeft: '40%',
  },
  menuTitle: {
    fontSize: 17,
    fontWeight: '900',
    margin: 10,
    paddingLeft: '6%',
  },
  // counter: {
  //   fontSize: 17,
  //   fontWeight: '900',
  //   margin: 10,
  //   backgroundColor: '#FFCD61',
  //   borderRadius: 12,
  //   width: 25,
  //   height: 25,
  //   paddingLeft: 8,
  // },
  counterText: {
    fontSize: 17,
    fontWeight: '900',
    margin: 10,
  },
  // counterWrapper: {
  //   flexDirection: 'row',
  // },
  // btnCounterWrapper: {
  //   marginLeft: '27%',
  //   flex: 1,
  //   textAlign: 'right',
  //   flexDirection: 'row',
  // },
  dropdownMenu: {
    width: 150,
    marginLeft: 20,
  },
  datePicker: {
    width: 150,
    marginLeft: 45,
    marginTop: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  datePickerBtn: {
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: 'white',
    color: 'black',
    padding: 5,
  },
});
export default styles;
