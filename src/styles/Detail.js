import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  jumbotron: {
    width: 390,
    height: 200,
    flexDirection: 'row',
  },
  arrow: {
    width: 20,
    height: 20,
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
    marginTop: '3%',
    marginLeft: '5%',
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
});
export default styles;
