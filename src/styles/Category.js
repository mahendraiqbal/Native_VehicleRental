import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: '5%',
    marginLeft: '5%',
  },
  title: {
    fontSize: 23,
    marginLeft: '5%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  infoVehicle: {
    flexDirection: 'row',
    marginTop: '5%',
    marginLeft: '5%',
  },
  detailVehicle: {
    marginLeft: '3%',
  },
  name: {
    fontSize: 12,
  },
  max: {
    fontSize: 12,
  },
  map: {
    fontSize: 12,
  },
  stat: {
    color: 'green',
    fontSize: 12,
  },
  price: {
    marginTop: '4%',
  },
  end: {
    textAlign: 'center',
    fontSize: 16,
    color: '#393939',
    marginVertical: '5%',
  },
  loader: {
    marginVertical: 10,
  },
  empty: {
    textAlign: 'center',
    fontSize: 15,
  },
  loadWrapper: {
    height: height,
    width: width,
    backgroundColor: '#fff',
  },
  loading: {
    width: '100%',
    height: '40%',
    marginTop: '50%',
  },
});
export default styles;
