import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  imageWrapper: {
    borderRadius: 30,
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  titleNd: {
    fontSize: 14,
  },
  titleRd: {
    fontSize: 14,
    color: '#087E0D',
  },
  Checkbox: {
    width: 40,
    height: 40,
  },
  topBar: {
    flexDirection: 'row',
    marginBottom: '5%',
  },
  topDelete: {
    marginLeft: 'auto',
    marginRight: '10%',
    // width: 30,
    // height: 30,
    resizeMode: 'cover',
    marginTop: '3%',
  },
  weekAgo: {
    marginTop: '3%',
    marginLeft: 'auto',
  },
  infoHistory: {
    flexDirection: 'row',
  },
  infoVehicle: {
    marginLeft: '2%',
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  checkButton: {
    // marginLeft: '5%',
    marginBottom: 'auto',
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titleCek: {
    marginTop: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 26,

    fontWeight: '800',
  },
});
export default styles;
